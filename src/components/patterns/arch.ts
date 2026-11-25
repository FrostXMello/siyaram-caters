export const ARCH_WIDTH = 400;
export const ARCH_HEIGHT = 580;

export const ARCH_VIEWBOX = `0 0 ${ARCH_WIDTH} ${ARCH_HEIGHT}`;

/** Smooth pointed jharokha. Coordinates match ARCH_VIEWBOX. */
export const ARCH_D =
  "M28 560 L28 196 C28 118 72 74 124 108 C152 60 176 34 200 14 C224 34 248 60 276 108 C328 74 372 118 372 196 L372 560 Z";

export const ARCH_CLIP_TRANSFORM = `scale(${1 / ARCH_WIDTH} ${1 / ARCH_HEIGHT})`;
