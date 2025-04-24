import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import Board from "./components/Board";
import { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function App() {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { mode, toggleTheme } = useTheme();

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

  const isGameOver =
    calculateWinner(squareValue) !== "null" || !squareValue.includes(null);

  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight={"bold"}
        sx={{ ml: 2, mt: 3, display: "inline-flex" }}
      >
        Tic Tac Toe
      </Typography>
      <Button
        onClick={toggleTheme}
        disableTouchRipple
        sx={{ minWidth: 0, padding: 0, ml: 2, mb: 3 }} // To make button smaller
      >
        {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>

      <Box sx={{ mt: 3, ml: 2 }}>
        {calculateWinner(squareValue) !== "null" ? (
          <Typography variant="h5" color="green">
            Winner: {calculateWinner(squareValue)}
          </Typography>
        ) : !squareValue.includes(null) ? (
          <Typography variant="h5" color="info">
            Draw
          </Typography>
        ) : (
          <Typography variant="h5" sx={{ fontFamily: "Helvetica" }}>
            Next player: {xIsNext ? "X" : "O"}
          </Typography>
        )}
      </Box>

      <Box sx={{ mt: 2, ml: 2 }}>
        <Box display={"inline-flex"}>
          <Board
            value={squareValue[0]}
            handleSetInput={() => handleClick(0)}
            disabled={isGameOver}
          />
          <Board
            value={squareValue[1]}
            handleSetInput={() => handleClick(1)}
            disabled={isGameOver}
          />
          <Board
            value={squareValue[2]}
            handleSetInput={() => handleClick(2)}
            disabled={isGameOver}
          />
        </Box>

        <Box display={"flex"}>
          <Board
            value={squareValue[3]}
            handleSetInput={() => handleClick(3)}
            disabled={isGameOver}
          />
          <Board
            value={squareValue[4]}
            handleSetInput={() => handleClick(4)}
            disabled={isGameOver}
          />
          <Board
            value={squareValue[5]}
            handleSetInput={() => handleClick(5)}
            disabled={isGameOver}
          />
        </Box>

        <Box display={"flex"}>
          <Board
            value={squareValue[6]}
            handleSetInput={() => handleClick(6)}
            disabled={isGameOver}
          />
          <Board
            value={squareValue[7]}
            handleSetInput={() => handleClick(7)}
            disabled={isGameOver}
          />
          <Board
            value={squareValue[8]}
            handleSetInput={() => handleClick(8)}
            disabled={isGameOver}
          />
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
