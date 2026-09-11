import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { siteConfig } from "@/config/siteConfig";
import {
  isOutboundAnchor,
  loadGoatCounter,
  trackOutboundClick,
  trackPageview,
} from "@/analytics/goatcounter";

export function GoatCounter() {
  const { pathname, hash } = useLocation();
  const code = siteConfig.goatcounterCode.trim();

  useEffect(() => {
    if (!code || import.meta.env.DEV) return;

    let cancelled = false;

    loadGoatCounter(code).then(() => {
      if (!cancelled) {
        trackPageview(pathname + hash || "/");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [code, pathname, hash]);

  useEffect(() => {
    if (!code || import.meta.env.DEV) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement) || !isOutboundAnchor(anchor)) return;

      const label = anchor.getAttribute("aria-label") || anchor.textContent?.trim() || anchor.href;
      trackOutboundClick(anchor.href, label);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [code]);

  return null;
}
