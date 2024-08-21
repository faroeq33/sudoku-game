// src/App.js
import { useState } from "react";
import { BoardType } from "./types/types";
// import Board from "./components/board";
import Cell from "./components/cell";

const initialBoard: BoardType = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const App = () => {
  const [board, setBoard] = useState(initialBoard);

  const onCellChange = (row: number, col: number, value: number) => {
    const newBoard = [...board];
    newBoard[row][col] = value || 0;
    setBoard(newBoard);
  };

  return (
    <div className="text-center app">
      <h1>Sudoku Game</h1>
      <div
        className="grid board "
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 40px)",
          gap: "2px",
        }}
      >
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row contents">
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                value={`${cell}`}
                onChange={(e) =>
                  onCellChange(rowIndex, colIndex, parseInt(e.target.value))
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
