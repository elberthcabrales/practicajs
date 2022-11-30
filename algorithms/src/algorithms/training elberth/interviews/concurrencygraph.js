/**
 * Tinder
 * Problem Statement
 * Given some exchange rates, write a function that takes in 3 arguments current currency,
 * target currency, and value, and return the new value in the target currency.
 * The converted value should be trimmed to 2 decimal places, and rounded up.
 * If a conversion cannot be made return 0.
 *
 * Below is a sample set of data you can load into a data structure of your choice to then run against the tests. For example:
 *
 * solution("USD", "AUD", 100) => 129
 * solution("YEN", "CAD", 523) => 6.06
 * solution("YEN", "LLL", 1) => 0
 *   USD  => AUD: 1.29
 *   USD  => GBP: .72
 *   USD  => EUR: .83
 *   AUD  => USD: .77
 *   YEN  => USD: .0093
 *   CAD  => GBP: .58
 *   GBP  => CAD: 1.73
 * [execution time limit] 4 seconds (js)
 *
 * [input] string curr
 *
 * current currency
 *
 * [input] string target
 *
 * target currency
 *
 * [input] float value
 *
 * [output] float
 *
 */
const CURRENCIES = {
  usd: 'USD',
  aud: 'AUD',
  yen: 'YEN',
  cad: 'CAD',
  gbp: 'GBP',
  eur: 'EUR',
};
const { usd, aud, yen, cad, gbp, eur } = CURRENCIES;

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.adjacentList = {}; // hash of array of hashes
    this.sizeVertex = 0;
  }

  addVertex(node){
    this.adjacentList[node] = [];
    this.sizeVertex++;
  }

  addEdge(source, node){
    this.adjacentList[source].push(node);
  }

  resolver(start, target, value){
    const visited = new Set([start]);
    const stack = [new Node(start, value)];

    while (start.length > 0){
      const currentNode = stack.pop();
      const nodes = this.adjacentList[currentNode.key];
      if(!nodes) continue;
      for(let node of nodes){
        if(visited.has(node.key)){
          continue;
        }
        node.value = node.value * currentNode.value;
        stack.unshift(node);
        visited.add(node.key);
        if(node.key === target){
          return node.value.toFixed(2);
        }
      }
    }
  }
}
const graph = new Graph();
graph.addVertex(usd);
graph.addVertex(aud);
graph.addVertex(yen);
graph.addVertex(cad);
graph.addVertex(gbp);
graph.addEdge(usd, new Node(eur, 0.83));
graph.addEdge(usd, new Node(aud, 1.29));
graph.addEdge(usd, new Node(gbp, 0.72));
graph.addEdge(aud, new Node(usd, 0.77));
graph.addEdge(yen, new Node(usd, 0.0093));
graph.addEdge(cad, new Node(gbp, 0.54));
graph.addEdge(gbp, new Node(cad, 1.73));

graph.resolver(yen, cad, 523);
