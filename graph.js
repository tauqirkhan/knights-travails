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
  function addDirEdge(source, destination) {
    if (adjacentList[source] && adjacentList[destination]) {
      adjacentList[source].push(destination);
    }
  }

  return { getAdjacentList, addVertex, addDirEdge };
}

export { Graph };
