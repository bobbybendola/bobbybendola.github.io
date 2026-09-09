import { Linkedin, Github, GraduationCap, type LucideProps } from "lucide-react";
import type { LucideIconName } from "@/types/content";
import { DevpostIcon } from "./DevPostIcon"; // Relative import since they are in the same folder

// siteConfig.ts stores icon choices as plain strings (LucideIconName) so
// content stays JSON-serializable / CMS-friendly. This is the one place
// that resolves a string to an actual component. Add new icons to both
// this map and the LucideIconName union in types/content.ts.
const ICONS: Record<LucideIconName, React.ComponentType<LucideProps>> = {
  Linkedin,
  Github,
  GraduationCap,
  DevPost: DevpostIcon,
};

interface IconProps extends LucideProps {
  name: LucideIconName;
}

export function Icon({ name, ...props }: IconProps) {
  const Component = ICONS[name];
  return <Component {...props} />;
}
