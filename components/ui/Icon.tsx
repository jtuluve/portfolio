import { cn } from "@/lib/utils";
import * as React from "react";

type IconProps = {
  src: string;
  className?: string;
  alt?: string;
};

export const Icon = React.forwardRef<HTMLImageElement, IconProps>(
  ({ src, className = "", alt = "" }, ref) => {
    const base =
      "inline-block h-5 w-5 shrink-0 align-middle select-none object-contain " +
      "transition-opacity duration-150 opacity-90 hover:opacity-100";

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={`${cn(base, className)}`}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    );
  }
);

Icon.displayName = "Icon";
