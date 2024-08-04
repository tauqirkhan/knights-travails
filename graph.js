function Graph() {
  const adjacentList = {};

  function getAdjacentList() {
    return adjacentList;
  }

  function addVertex(vertex) {
    if (!adjacentList[vertex]) {
      adjacentList[vertex] = [];
    }
  }

  //For only directional edge
  function addEdge(source, destination) {
    if (adjacentList[source] && adjacentList[destination]) {
      adjacentList[source].push(destination);
    }
  }

  return { getAdjacentList, addVertex, addEdge };
}

export { Graph };
