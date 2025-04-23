import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squareValue: Array<null | string>) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squareValue[a] &&
        squareValue[a] === squareValue[b] &&
        squareValue[a] === squareValue[c]
      ) {
        return squareValue[a];
      }
    }
    return "null";
  };

  const handleClick = (i: number) => {
    if (squareValue[i] || calculateWinner(squareValue) !== "null") {
      return;
    }

    const nextCell = squareValue.slice();
    if (xIsNext) {
      nextCell[i] = "X";
    } else {
      nextCell[i] = "O";
    }

    setSquareValue(nextCell);
    setXIsNext(!xIsNext);
  };

  const handleClearAll = () => {
    setSquareValue(Array(9).fill(null));
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
        <Typography variant="body1">
          {calculateWinner(squareValue) !== "null"
            ? `Winner: ${calculateWinner(squareValue)}`
            : !squareValue.includes(null)
            ? "Draw"
            : `Next player: ${xIsNext ? "X" : "O"}`}
        </Typography>
      </Box>

      <Box sx={{ mt: 2, ml: 2 }}>
        <Box display={"inline-flex"}>
          <Board value={squareValue[0]} handleSetInput={() => handleClick(0)} />
          <Board value={squareValue[1]} handleSetInput={() => handleClick(1)} />
          <Board value={squareValue[2]} handleSetInput={() => handleClick(2)} />
        </Box>

        <Box display={"flex"}>
          <Board value={squareValue[3]} handleSetInput={() => handleClick(3)} />
          <Board value={squareValue[4]} handleSetInput={() => handleClick(4)} />
          <Board value={squareValue[5]} handleSetInput={() => handleClick(5)} />
        </Box>

        <Box display={"flex"}>
          <Board value={squareValue[6]} handleSetInput={() => handleClick(6)} />
          <Board value={squareValue[7]} handleSetInput={() => handleClick(7)} />
          <Board value={squareValue[8]} handleSetInput={() => handleClick(8)} />
        </Box>

        <Box>
          <Button
            variant="contained"
            color="error"
            sx={{ mt: 5 }}
            onClick={handleClearAll}
          >
            Clear All
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
