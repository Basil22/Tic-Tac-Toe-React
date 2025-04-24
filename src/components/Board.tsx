import { Box, Button } from "@mui/material";

interface BoardValue {
  value: string;
  handleSetInput: () => void;
  disabled: boolean;
}

function Board({ value, handleSetInput, disabled }: BoardValue) {
  return (
    <Box>
      <Button
        className="board"
        variant="outlined"
        sx={(theme) => ({
          minWidth: { xs: "27vw", sm: "8vw" }, // Different sizes for small and larger screens
          minHeight: { xs: "27vw", sm: "8vw" },
          fontSize: { xs: "22vw", sm: "6vw" }, // Font size adjusts for small screens
          borderRadius: 0,
          fontFamily: "Helvetica",
          fontWeight: "Bold",
          backgroundColor: disabled
            ? theme.palette.mode === "dark"
              ? "#0d47a1"
              : theme.palette.grey[300]
            : "background.paper",
          "&:disabled": {
            color: theme.palette.text.disabled,
          },
        })}
        onClick={handleSetInput}
        disabled={disabled}
      >
        {value}
      </Button>
    </Box>
  );
}

export default Board;
