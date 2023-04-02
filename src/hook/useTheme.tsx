import React from "react";

export function useTheme() {
  const colors = {
    backgroundColor: "#0077B6",
    cardColor: "#116694",
    fontColor: "#A8DADC",
    linkColor: "#457B9D",
    searchBar: "#116694",
  };

  const fonts = {
    small: 12,
    medium: 16,
    large: 32,
  };

  const weigths = {
    medium: 600,
    bold: 800,
  };

  return {
    fonts,
    colors,
    weigths,
  };
}
