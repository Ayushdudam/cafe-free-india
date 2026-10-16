/**
 * Shared Motion Tokens for Cafe Free India
 * Section 6.5 of Master Prompt
 */

export const duration = {
  micro: 0.25,
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
  cinematic: 1.8,
} as const;

export const ease = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  soft: [0.33, 1, 0.68, 1] as const,
  overshoot: [0.34, 1.56, 0.64, 1] as const,
} as const;

export const stagger = {
  tight: 0.06,
  base: 0.1,
  wide: 0.18,
} as const;

export const distance = {
  small: 12,
  base: 24,
  large: 48,
} as const;
