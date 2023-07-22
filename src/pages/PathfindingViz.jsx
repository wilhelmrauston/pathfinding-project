import { useState, useEffect } from "react";
import Node from '../components/node';
import Dijkstras from "../algorithms/dijkstras";


export default function PathfindingViz() {
    const numRows = 20;
    const numCols = 20;

    const [startNode, setStartNode] = useState(null);
    const [endNode, setEndNode] = useState(null);

    // Initialize grid
    const [grid, setGrid] = useState([]);

    //handle mouse interaction
    const [mouseIsPressed, setMouseIsPressed] = useState(false);

    // Create grid
    useEffect(() => {
        const newGrid = createGrid(numRows, numCols);
        setGrid(newGrid);

        setStartNode(newGrid[0][0]);
        setEndNode(newGrid[19][19]);
    }, []);

    const handleMouseDown = (rowIndex, colIndex) => {
        const newGrid = [...grid];
        newGrid[rowIndex][colIndex].isWall = !newGrid[rowIndex][colIndex].isWall;
        setGrid(newGrid);
        setMouseIsPressed(true);
    };

    const handleMouseEnter = (rowIndex, colIndex) => {
        if (!mouseIsPressed) return;
        const newGrid = [...grid];
        newGrid[rowIndex][colIndex].isWall = !newGrid[rowIndex][colIndex].isWall;
        setGrid(newGrid);
        //console.log(newGrid)
    };

    const handleMouseUp = () => {
        setMouseIsPressed(false);
    };

    const runDijkstra = () => {
        Dijkstras(grid, startNode, endNode);
    };

    return (
        <div>
            <button 
                type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick= {runDijkstra}>
                run Dijkstras
            </button>
            <div className="grid grid-cols-20">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                {row.map((node, nodeIndex) => (
                    <Node key={nodeIndex} {...node} 
                        handleMouseDown={handleMouseDown}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseUp={handleMouseUp} />
                ))}
                </div>
            ))}
            </div>
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
