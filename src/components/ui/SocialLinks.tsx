import type { SocialLink } from "@/types/content";
import { Icon } from "./Icon";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

// Plain flat black glyphs, no hover color change — matches the source's
// restraint. A subtle opacity fade is the only feedback on hover.
export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.label}
            className="text-text-primary transition-opacity hover:opacity-60"
          >
            <Icon name={link.icon} size={16} strokeWidth={1.75} />
          </a>
        </li>
      ))}
    </ul>
  );
}
