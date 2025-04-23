import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleSetInput = (input: string) => {
    if (input === "X") {
      setInput("O");
    } else {
      setInput("X");
    }
  };

  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight={"bold"}
        fontFamily={"Bebas Neue"}
        sx={{ ml: 2, mt: 3 }}
      >
        Tic Tac Toe
      </Typography>

      <Box sx={{ mt: 5, ml: 2 }}>
        <Button
          className="board"
          variant="outlined"
          sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
          onClick={() => handleSetInput(input)}
        >
          {input}
        </Button>
        <Button
          className="board"
          variant="outlined"
          sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
          onClick={() => handleSetInput(input)}
        >
          {input}
        </Button>
        <Button
          className="board"
          variant="outlined"
          sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
          onClick={() => handleSetInput(input)}
        >
          {input}
        </Button>

        <Box>
          <Button
            className="board"
            variant="outlined"
            sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
            onClick={() => handleSetInput(input)}
          >
            {input}
          </Button>
          <Button
            className="board"
            variant="outlined"
            sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
            onClick={() => handleSetInput(input)}
          >
            {input}
          </Button>
          <Button
            className="board"
            variant="outlined"
            sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
            onClick={() => handleSetInput(input)}
          >
            {input}
          </Button>
        </Box>

        <Box>
          <Button
            className="board"
            variant="outlined"
            sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
            onClick={() => handleSetInput(input)}
          >
            {input}
          </Button>
          <Button
            className="board"
            variant="outlined"
            sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
            onClick={() => handleSetInput(input)}
          >
            {input}
          </Button>
          <Button
            className="board"
            variant="outlined"
            sx={{ minWidth: 3, padding: 3, borderRadius: 0 }}
            onClick={() => handleSetInput(input)}
          >
            {input}
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="error"
            sx={{ mt: 5 }}
            onClick={() => setInput("")}
          >
            Clear All
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
