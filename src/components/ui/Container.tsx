import type { PropsWithChildren } from "react";

interface ContainerProps {
  className?: string;
}

/** Consistent max-width + horizontal padding wrapper used by every section. */
export function Container({ children, className = "" }: PropsWithChildren<ContainerProps>) {
  return <div className={`mx-auto w-full max-w-content px-6 md:px-10 ${className}`}>{children}</div>;
}
