/*
    Check if start is same as target
    Create queue initialized with [start, start] one start to keep track of current position and other for keeping path align
    Created visited array to add visited position 
    Dequeue first queue and create const [current, path] using array deconstruction
    Iterate over each outDegree of current vertex in graph as neighbour
    Check if neighbour is in the visited array
    If not included in the visited array, push neighbour into queue as queue.push([neighbour], [...path, neightbout]) 
    this will change current and keep track of each current path
    If neighbour === target return [...path, neighbour]
*/
import { arraysEqual } from "./utils.js";

function knightBFS(start, target, adjacentList) {
  if (arraysEqual(start, target)) return [start];

  //First 'start' to current vertex and using [start] on second 'start' to add to next path using spread operator
  const queue = [[start, [start]]];
  const visited = [];
  visited.push(start);

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    console.log("current add", current);
    console.log("path add", path);
    for (const neighbour of adjacentList[current]) {
      if (!visited.includes(neighbour)) {
        if (arraysEqual(neighbour, target)) return [...path, neighbour];

        visited.push(neighbour);
        queue.push([neighbour, [...path, neighbour]]);
      }
    }
  }

  return null;
}

export { knightBFS };
