export default function Dijkstras (grid, startNode, endNode) {
    const visitedNodesIO = [];
    console.log(grid)
    const unvisitedNodes = [];
    startNode.distance = 0;
    console.log(startNode)

};

// Let’s be a even a little more descriptive and lay it out step-by-step.

// 1. Set all the node’s distances to infinity and add them to an unexplored set

// 2. Set the starting node’s distance to 0

// 3. Repeat the following:

// A) Look for the node with the lowest distance, let this be the current node

// B) Remove it from the unexplored set

// C) For each of the nodes adjacent to this node…

//     If it is not walkable, ignore it. Otherwise do the following.
//     Calculate a potential new distance based on the current node’s distance plus the distance to the adjacent node you are at.
//     If the potential distance is less than the adjacent node’s current distance, then set the adjacent node’s distance to the potential new distance and set the adjacent node’s parent to the current node

// D) Stop when you:

//     Remove the end node from the unexplored set, in which case the path has been found, or
//     Fail to find the end node, and the unexplored set is empty. In this case, there is no path.