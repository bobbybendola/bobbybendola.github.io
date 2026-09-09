import type { NavItem, SocialLink } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

interface FooterProps {
  items: NavItem[];
  social: SocialLink[];
  copyrightLine: string;
}

export function Footer({ items, social, copyrightLine }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-3 py-8 text-center">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-text-primary">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                <a href={item.href} className="transition-opacity hover:opacity-60">
                  {item.label}
                </a>
                {index < items.length - 1 && <span className="text-text-secondary" aria-hidden="true">|</span>}
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-text-secondary">{copyrightLine}</p>

        <SocialLinks links={social} className="mt-1" />
      </Container>
    </footer>
  );
}
