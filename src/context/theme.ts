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
});
