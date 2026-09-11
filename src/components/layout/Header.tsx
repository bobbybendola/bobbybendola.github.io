import { Link, useLocation } from "react-router-dom";

import { siteConfig } from "@/config/siteConfig";
import { Container } from "@/components/ui/Container";

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg">
      <Container className="flex justify-end py-4">
        <nav className="flex flex-wrap justify-end gap-x-6 gap-y-2">
          {siteConfig.nav.map((item) => {
            const active = item.href === "/projects" && pathname === "/projects";

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm tracking-wide transition-opacity hover:opacity-60 ${
                  active ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
