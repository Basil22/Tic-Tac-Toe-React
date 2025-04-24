export const getDesignTokens = (mode: string) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // light mode colors
          background: {
            default: "#f5f5f5",
          },
        }
      : {
          // dark mode colors
          background: {
            default: "#121212",
          },
        }),
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h3: {
      fontFamily: `'Bebas Neue'`,
    },
  },
});
