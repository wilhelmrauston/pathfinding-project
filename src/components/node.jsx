import React from 'react';

import { AiOutlineFlag, AiFillCaretRight } from 'react-icons/ai';

function Node({ isStart, isFinish, isWall, row, col, handleMouseDown, handleMouseEnter, handleMouseUp }) {
  let nodeClass = 'node unvisited';

  if (isStart) {
    nodeClass += ' node-start';
    if (isWall) {
      isWall = false;
    }
  }
  if (isFinish) {
    nodeClass += ' node-end';
    if (isWall) {
      isWall = false;
    }
  }
  if (isWall) nodeClass = ' node-wall wall';

  return (
    <div
      id={`node-${row}-${col}`}
      className={nodeClass}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={handleMouseUp}
      style={{
        position: 'relative',
      }}
    >

      {isStart && (
        <AiFillCaretRight
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl"
        />
      )}

      {isFinish && (
        <AiOutlineFlag
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl"
        />
      )}
    </div>
  );
}

export default Node;
