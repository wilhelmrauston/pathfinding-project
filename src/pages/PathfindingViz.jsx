import { useState, useEffect } from "react";
import Node from '../components/node';
import Dijkstras from "../algorithms/dijkstras";

export default function PathfindingViz() {
    const numRows = 20;
    const numCols = 20;

    const [grid, setGrid] = useState([]);
    const [mouseIsPressed, setMouseIsPressed] = useState(false);

    useEffect(() => {
        const newGrid = createGrid(numRows, numCols);
        setGrid(newGrid);
    }, []);

    const handleMouseDown = (rowIndex, colIndex) => {
        const newGrid = getNewGridWithWallToggled(grid, rowIndex, colIndex);
        setGrid(newGrid);
        setMouseIsPressed(true);
    };

    const handleMouseEnter = (rowIndex, colIndex) => {
        if (!mouseIsPressed) return;
        const newGrid = getNewGridWithWallToggled(grid, rowIndex, colIndex);
        setGrid(newGrid);
    };

    const handleMouseUp = () => {
        setMouseIsPressed(false);
    };

    const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).classList.add('bg-blue-200');
            }, 10 * i);
        }
    };

    const animateShortestPath = (nodesInShortestPathOrder) => {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).classList.add('bg-yellow-300');
            }, 50 * i);
        }
    };

    const visualizeDijkstra = () => {
        const startNode = grid[0][0];
        const finishNode = grid[19][19];
        const visitedNodesInOrder = Dijkstras(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    };

    const runDijkstra = () => {
        visualizeDijkstra();
    };

    return (
        <div>
            <button 
                type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={runDijkstra}
            >
                Run Dijkstras
            </button>
            <div className="grid grid-cols-20">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                {row.map((node, nodeIndex) => (
                    <Node 
                        key={nodeIndex} 
                        {...node} 
                        handleMouseDown={handleMouseDown}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseUp={handleMouseUp} 
                    />
                ))}
                </div>
            ))}
            </div>
        </div>
    );
}

function createGrid(numRows, numCols) {
  let grid = [];
  for (let row = 0; row < numRows; row++) {
    let currentRow = [];
    for (let col = 0; col < numCols; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
}

function createNode(col, row) {
  return {
    col,
    row,
    isStart: row === 0 && col === 0,
    isFinish: row === 19 && col === 19,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
}

function getNewGridWithWallToggled(grid, row, col) {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
}

function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}
