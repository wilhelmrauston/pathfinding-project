function Node({ isStart, isEnd, isWall, row, col, handleMouseDown, handleMouseEnter, handleMouseUp}) {
  let nodeClass = 'node w-8 h-8 border border-emerald-500 bg-gray-200';

  if (isStart) nodeClass = 'node node-start w-8 h-8 border border-emerald-500 bg-green-500/20';
  if (isEnd) nodeClass = 'node node-end w-8 h-8 border border-emerald-500 bg-red-500/20';
  if (isWall) nodeClass = 'node node-wall w-8 h-8 border border-emerald-500 bg-black';

  return (
    <div id={`node-${row}-${col}`} className={nodeClass} 
        onMouseDown={() => handleMouseDown(row, col)}
        onMouseEnter={() => handleMouseEnter(row, col)}
        onMouseUp={handleMouseUp}>
    </div>
  );
}

export default Node;