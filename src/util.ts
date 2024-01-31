import { ThemeType } from "grommet";

export const getNestedColorIfExists = (
  color: string | { dark?: string; light?: string } | undefined,
  isDark: boolean
) => {
  if (!color) {
    return "white";
  }

  if (typeof color === "string") {
    return color;
  }

  return color[isDark ? "dark" : "light"] || "white";
};

export const getColors = (theme: ThemeType, elementType: keyof ThemeType) => {
  // @ts-ignore
  const isDark = theme?.dark;

  // @ts-ignore
  const anchorColor = getNestedColorIfExists(theme[elementType]?.color, isDark);

  const matchedColor = getNestedColorIfExists(
    // @ts-ignore
    theme.global?.colors[anchorColor],
    isDark
  );

  return matchedColor;
};
