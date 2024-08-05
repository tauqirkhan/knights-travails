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

import { BuildKnightGraph } from "./buildKnightGraph.js";
import { knightBFS } from "./bfs.js";

function KnightTravails(startMoveGrid, endMoveGrid) {
  const graph = BuildKnightGraph();
  const adjacentList = graph.getAdjacentList();

  const result = knightBFS(startMoveGrid, endMoveGrid, adjacentList);

  return result;
}

let move = KnightTravails([0, 0], [7, 7]);
console.log(move);
