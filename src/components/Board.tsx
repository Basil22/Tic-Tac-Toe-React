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
        sx={{
          minWidth: 8,
          padding: 8,
          borderRadius: 0,
          fontSize: 80,
          fontFamily: "Helvetica",
          fontWeight: "Bold",
          backgroundColor: disabled ? "grey.300" : "background.paper",
          "&:disabled": {
            color: "text.disabled",
          },
        }}
        onClick={handleSetInput}
        disabled={disabled}
      >
        {value}
      </Button>
    </Box>
  );
}

export default Board;
