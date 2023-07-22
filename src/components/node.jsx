function Node({ isStart, isEnd, isWall, row, col }) {
  // Determine the class for the node
  let nodeClass = 'w-8 h-8 border border-emerald-500 bg-gray-200'; // By default, node is a square of width and height 8 and has a gray background
  
  if (isStart) nodeClass = 'w-8 h-8 border border-emerald-500 bg-green-500/20'; // Start node is green
  if (isEnd) nodeClass = 'w-8 h-8 border border-emerald-500 bg-red-500/20'; // End node is red
  if (isWall) nodeClass = 'w-8 h-8 border border-emerald-500 bg-black'; // Wall node is black

  return (
    <div className={nodeClass}>
      {/* render node content here */}
    </div>
  );
}

export default Node;