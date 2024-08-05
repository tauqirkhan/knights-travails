/* 
  Iterate over num row and each column
  Add vertex of each [row, column] array on graph
  Iterate over direction to create vertex directional outDegree edges
  Check if newRow and newColumn is the graph, if it is
  create and add newVertex, also create it's inDegree to vertex
*/

function BuildKnightGraph(graph) {
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
      const vertex = [row, column];
      graph.addVertex(vertex);

      for (let [dx, dy] of direction) {
        const newRow = row + dx;
        const newColumn = column + dy;

        if (newColumn >= 0 && newColumn < 8 && newRow >= 0 && newRow < 8) {
          const newVertex = [newRow, newColumn];
          graph.addVertex(newVertex);
          graph.addDirEdge(vertex, newVertex);
        }
      }
    }
  }

  const getAdjacentList = () => graph.getAdjacentList();

  return { getAdjacentList };
}

export { BuildKnightGraph };
