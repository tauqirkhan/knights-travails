/* RULES:
        Grid 8 * 8
        Can move 2 steps forward and one step to the side
        Can move 1 step foward and two steps to the side
        Can move 2 steps backward and one step to the side
        Can move 1 step backward and two steps to the side

    Task:
        The shortest possible way to get from one square 
        to another by outputting all squares the knight 
        will stop on along the way
*/

// function buildKnightGraph() {
//   const direction = [
//     [2, 1],
//     [1, 2],
//     [-2, -1],
//     [-1, -2],
//     [2, -1],
//     [1, -2],
//     [-2, 1],
//     [-1, 2],
//   ];

//   for (let row = 0; row < 8; row++) {
//     for (let column = 0; column < 8; column++) {
//       const vertex = [row, column];
//       graph.addVertex(vertex);

//       for (let [dx, dy] of direction) {
//         const newRow = row + dx;
//         const newColumn = column + dy;

//         if (newColumn >= 0 && newColumn < 8 && newRow >= 0 && newRow < 8) {
//           const newVertex = [newRow, newColumn];
//           graph.addVertex(newVertex);
//           graph.addDirEdge(vertex, newVertex);
//         }
//       }
//     }
//   }
// }

import { Graph } from "./graph.js";
import { BuildKnightGraph } from "./buildKnightGraph.js";
import { knightBFS } from "./bfs.js";

function KnightTravails(startMoveGrid, endMoveGrid) {
  const graph = Graph();
  const knightGraph = BuildKnightGraph(graph);
  const adjacentList = knightGraph.getAdjacentList();

  const path = knightBFS(startMoveGrid, endMoveGrid, adjacentList);
  if (path) {
    console.log(`Path from ${startMoveGrid} to ${endMoveGrid}:`);
    console.log(`Made in ${path.length - 1} moves, Here's your path:`);
    path.forEach((path) => {
      console.log(path);
    });
  } else {
    console.log(`No path found from ${startMoveGrid} to ${endMoveGrid}`);
  }
  return path;
}

export { KnightTravails };
