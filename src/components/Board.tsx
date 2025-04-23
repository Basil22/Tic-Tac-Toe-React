import { Box, Button } from "@mui/material";

interface BoardValue {
  value: string;
  handleSetInput: () => void;
}

function Board({ value, handleSetInput }: BoardValue) {
  return (
    <Box>
      <Button
        className="board"
        variant="outlined"
        sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
        onClick={handleSetInput}
      >
        {value}
      </Button>
    </Box>
  );
}

export default Board;
