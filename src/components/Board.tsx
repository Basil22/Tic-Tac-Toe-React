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
          minWidth: 3,
          padding: 3,
          borderRadius: 0,
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
