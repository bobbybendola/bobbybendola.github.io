export type GoatCounterVars = {
  path?: string;
  title?: string;
  event?: boolean;
};

declare global {
  interface Window {
    goatcounter?: {
      count?: (vars?: GoatCounterVars) => void;
      no_onload?: boolean;
      no_events?: boolean;
    };
  }
}

function endpoint(code: string) {
  return `https://${code}.goatcounter.com/count`;
}

export function loadGoatCounter(code: string): Promise<void> {
  if (!code) return Promise.resolve();

  window.goatcounter = {
    ...window.goatcounter,
    no_onload: true,
    no_events: true,
  };

  if (window.goatcounter.count) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-goatcounter]");
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.dataset.goatcounter = endpoint(code);
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

export function trackPageview(path: string) {
  window.goatcounter?.count?.({ path });
}

export function trackOutboundClick(href: string, label: string) {
  window.goatcounter?.count?.({
    path: href,
    title: label,
    event: true,
  });
}

export function isOutboundAnchor(anchor: HTMLAnchorElement) {
  const raw = anchor.getAttribute("href");
  if (!raw) return false;
  if (raw.startsWith("mailto:") || raw.startsWith("tel:")) return true;

  try {
    return new URL(anchor.href).origin !== window.location.origin;
  } catch {
    return false;
  }
}
