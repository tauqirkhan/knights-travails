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

import { Graph } from "./graph.js";

function KnightTravails(startMoveGrid, endMoveGrid) {
  const graph = Graph();
  const adjacentList = graph.getAdjacentList();

  function buildKnightGraph() {
    const direction = [
      [2, 1],
      [1, 2],
      [-2, -1],
      [-1, -2],
      [2, -1],
      [1, -2],
      [-2, 1],
      [-1, 2],
    ];

    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        const vertex = `[${row}, ${column}]`;
        graph.addVertex(vertex);

        for (let [dx, dy] of direction) {
          const newRow = row + dx;
          const newColumn = column + dy;

          if (newRow >= 0 && newRow <= 7 && newColumn >= 0 && newColumn <= 7) {
            const newVertex = `[${newRow}, ${newColumn}]`;
            graph.addVertex(newVertex);
            graph.addEdge(vertex, newVertex);
          }
        }
      }
    }
  }

  buildKnightGraph();
  console.log(adjacentList);
}

KnightTravails([3, 3]);
