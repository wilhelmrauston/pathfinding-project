import { useState, useEffect } from "react";
import Node from '../components/node';


export default function PathfindingViz() {
  const numRows = 20;
  const numCols = 20;

  // Initialize grid
  const [grid, setGrid] = useState([]);

  // Create grid
  useEffect(() => {
    const newGrid = createGrid(numRows, numCols);
    setGrid(newGrid);
  }, []);

  return (
    <div className="justify-center grid grid-cols-20">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((node, nodeIndex) => (
            <Node key={nodeIndex} {...node} />
          ))}
        </div>
      ))}
    </div>
  );
}

// Create an array of arrays to represent the grid
function createGrid(numRows, numCols) {
  let grid = [];
  for (let row = 0; row < numRows; row++) {
    let currentRow = [];
    for (let col = 0; col < numCols; col++) {
      currentRow.push({
        row,
        col,
        isStart: row === 0 && col === 0, // Making the top-left node the start node for example
        isEnd: row === numRows - 1 && col === numCols - 1, // Making the bottom-right node the end node for example
        isWall: false,
      });
    }
    grid.push(currentRow);
  }
  return grid;
}
