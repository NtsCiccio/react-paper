type ClassNames = {
  [key: string]: boolean | undefined;
};

/**
 * this method compose className for react components
 *
 * @param conditional conditional classes based on condition
 * @param nominal nominal classes
 * @returns
 */
export default function className(
  conditional: ClassNames = {},
  nominal: string[] = []
): string {
  return [
    ...nominal,
    ...Object.entries(conditional)
      .filter(([k, v]) => Boolean(v))
      .map(([k, v]) => k),
  ].join(" ");
}
