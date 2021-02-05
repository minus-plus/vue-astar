// util/Astar.js
import Heap from './Heap'
import { wait } from './Util'
const WAIT = 5

class Astar {

  static async search(graph, start, end, options = {}) {
    const heuristic = options.heuristic || this.manhattan
    let openList = new Heap((node1, node2) => {
      if (node1.f !== node2.f) {
        return node1.f - node2.f
      }
      return node1.g - node2.g
    })
    // let closeList = {} // a set
    start.g = 0
    start.h = heuristic(start, end)
    start.f = start.g + start.h
    openList.offer(start)

    while (openList.size() > 0) {
      let curr = openList.poll()
      if (curr === end) {
        // success
        return this.getPath(end)
      }
      curr.open = false
      curr.closed = true

      let neighbors = graph.getNeighbors(curr)
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i]
        if (neighbor.closed || (neighbor.isObstacle())) {
          continue
        }

        let newG = curr.g + neighbor.getCost(curr)
        let visited = neighbor.visited
        if (!visited || newG < neighbor.g) {
          neighbor.visited = true
          neighbor.g = newG
          neighbor.parent = curr
          neighbor.h = heuristic(neighbor, end)
          neighbor.f = neighbor.g + neighbor.h
          // if neighbor not in openList, add it
          await wait(WAIT)
          if (!visited) {
            // expand this neighbor
            openList.offer(neighbor)
            neighbor.open = true
          } else {
            // decrease the key of this neighbor
            openList.decreaseKey(neighbor)
          }
        }
      }
      // await wait(WAIT)
    }
    // can not reach the goal
    return []
  }

  static manhattan(p1, p2) {
    return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)
  }

  static getPath(node) {
    let curr = node
    let path = []
    while (curr) {
      curr.isPath = true
      path.unshift(curr)
      curr = curr.parent
    }
    return path
  }
}

export default Astar