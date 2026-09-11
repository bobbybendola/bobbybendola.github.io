
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import type { ComponentProps } from "react";

interface FooterProps {
  social: ComponentProps<typeof SocialLinks>["links"];
  copyrightLine: string;
}

export function Footer({ social, copyrightLine }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-8 text-center">
        <SocialLinks links={social} />
        <p className="text-xs text-text-secondary">{copyrightLine}</p>
      </Container>
    </footer>
  );
}
