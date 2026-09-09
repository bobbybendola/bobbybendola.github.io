import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/types/content";
import { Container } from "@/components/ui/Container";

interface NavbarProps {
  brandName: string;
  items: NavItem[];
}

// The source site shows only a brand wordmark and a hamburger icon at
// every breakpoint — there is no persistent desktop nav row and no
// social icons in the header. Resist adding one back in "for
// usability"; the hamburger-only pattern is the actual design.
export function Navbar({ brandName, items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border bg-bg">
      <Container className="flex h-16 items-center justify-between">
        <a href="/" className="text-sm font-bold text-text-primary">
          {brandName}
        </a>

        <button
          type="button"
          className="text-text-primary"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {isOpen && (
        <nav aria-label="Primary" className="border-t border-border">
          <Container className="flex flex-col py-4">
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-text-primary transition-opacity hover:opacity-60"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
