class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node)  {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    //uniderected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }

  dfs(start){
    const visited = new Array(this.numberOfNodes).fill(false);
    visited[start] = true;
    const stack = [start];
    const result = [];

    while (stack.length !== 0){
      const currentNode = stack.pop();

      result.push(currentNode);

      const nodeList = this.adjacentList[currentNode];
      for(let node of nodeList){
        if(visited[node] === false){
          stack.unshift(node);
          visited[node] = true;
        }
      }
    }

    console.log(`dfs ${result}`);
  }

  bfs(start){
    const visited = new Array(this.numberOfNodes).fill(false);
    visited[start] = true;
    const queue = [start];
    const result = [];

    while (queue.length !== 0){
      const currentNode = queue.shift();

      result.push(currentNode);

      const nodeList = this.adjacentList[currentNode];
      for(let node of nodeList){
        if(visited[node] === false){
          queue.unshift(node);
          visited[node] = true;
        }
      }
    }

    console.log(`bfs ${result}`);
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addEdge('0', '1');
myGraph.addEdge('0', '2');
myGraph.addEdge('0', '3');
myGraph.addEdge('1', '2');
myGraph.addEdge('2', '4');

myGraph.dfs('0');
myGraph.bfs('0');
myGraph.showConnections();
