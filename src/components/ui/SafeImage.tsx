"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string;
  /** Local image to show if `src` fails to load. */
  fallbackSrc?: string;
};

/** next/image that swaps to a local fallback when the requested file is missing. */
export function SafeImage({ src, fallbackSrc, alt, ...rest }: SafeImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const useFallback = Boolean(fallbackSrc) && failedSrc === src;

  return (
    <Image
      {...rest}
      alt={alt}
      src={useFallback && fallbackSrc ? fallbackSrc : src}
      onError={() => setFailedSrc(src)}
    />
  );
}
