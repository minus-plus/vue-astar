<template>
  <div class="grid-wapper">
    <div class="toolbox">
      <el-button @click="activateSource" class="button" :disabled="selecting || searching">Select Start/End</el-button> 
      <el-button @click="astarSearch" class="button" :disabled="!isReady || searching">Search</el-button> 
      <el-switch
        v-model="diagonal"
        active-text="Enable Diagonal"
        class="switch"
      >
      </el-switch>
      <el-button @click="resetGrid" class="button" :disabled="searching">Reset Grid</el-button> 
    </div>
    <div
      ref="grid"
      class="grid"
      @mousedown="activate"
      @mouseup="deactivate"
      @mouseleave="deactivate"
      @mousemove.capture="onMouseMove"
    >
      <div v-for="(n, row) in width" :key="row" class="row">
        <cell
          v-for="(n, col) in height" 
          :key="col" 
          @setgridvalue="setGridValue"
          @selectpoint="selectPoint"
          :row="row"
          :col="col"
          :value="grid.getNode(row, col).weight"
          :node="grid.getNode(row, col)"
          :active="active"
          :selecting="selecting"
          :isStart="grid.getNode(row, col) === srcAndDes[0]"
          :isEnd="grid.getNode(row, col) === srcAndDes[1]"
        >
        </cell>
      </div>
    </div>
  </div>
</template>

<script>
const N = 18
const UNIT = 32

import Cell from '../components/Cell'
import Graph from '../util/Graph'
import Astar from '../util/Astar'

export default {
  componentName: 'Grid',
  data () {
    return {
      grid: this.initGraph(),
      width: N,
      height: N,
      active: false,
      srcAndDes: [null, null],
      diagonal: false,
      searching: false
    }
  },
  methods: {
    initGraph () {
      // init graph from this.grid and grid's dimensions N * N
      const matrix = new Array(N).fill(0).map(() => new Array(N).fill(1))
      const graph = new Graph(matrix, { diagonal: this.diagonal })
      window.graph = graph
      return graph
    },
    activate () {
      if (this.selecting) {
        return
      }
      this.active = true
    },
    deactivate () {
      this.active = false
    },
    setGridValue (row, col, val) {
      const node = this.grid.getNode(row, col)
      node.weight = val
    },
    selectPoint (row, col) {
      const node = this.grid.getNode(row, col)
      // selecting of start and end has high priority
      if (this.selecting) {
        node.reset()
        this.srcAndDes.push(node)
      } else {
        node.partialReset()
        node.weight *= -1
      }
    },
    activateSource () {
      this.srcAndDes.splice(0, 2)
    },
    /**
     * reset the grid including start and end point, obstacles
     */
    resetGrid () {
      this.grid = this.initGraph()

      this.active = false
      this.$set(this.srcAndDes, 0, null)
      this.$set(this.srcAndDes, 1, null)
    },
    async astarSearch () {
      // do Astar search, pass node to sell by graph.getNode(r, c)
      if (this.isReady) {
        const start = this.grid.getNode(this.srcAndDes[0].x, this.srcAndDes[0].y)
        const end = this.grid.getNode(this.srcAndDes[1].x, this.srcAndDes[1].y)
        // reset search info in each grid, g, h, f, parent, open and closed ...
        this.grid.partialReset()
        this.searching = true
        const path = await Astar.search(this.grid, start, end)
        // render path
        path.forEach(node => {
          node.isPath = true
        })
        this.searching = false
      }
    },
    onMouseMove (e) {
      e.preventDefault()
      e.stopPropagation()
      if (this.active) {
        const rect = this.$refs.grid.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const row = ~~(y / UNIT)
        const col = ~~(x / UNIT)
        const node = this.grid.getNode(row, col)
        if (node && node.weight > 0) {
          node.reset()
          node.weight *= -1
        }
      }
    },
  },
  computed:{
    selecting () {
      return this.srcAndDes.length < 2
    },
    isReady () {
      return this.srcAndDes.length === 2 && this.srcAndDes[1]
    }
  },
  watch: {
    diagonal (newVal) {
      if (this.grid) {
        this.grid.diagonal = newVal
      }
    }
  },
  components: {
    Cell
  }
}
</script>

<style scoped>
.grid-wapper {
  position: relative;  
}

.toolbox {
  position: relative;
  margin-bottom: 10px;
}

.grid {
  position: relative;
  display: inline-block;
  border: 1px solid gray;
  cursor: default;
  user-select: none;
  box-shadow: 2px 2px 7px rgb(0 0 0 / 30%);
}
.row {
  width: calc(18 * 32px);
  position: relative;
  display: flex;
  flex-direction: row;
}
.col {
  position: relative;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid gray;
  font-size: 12px;
}

.button, .switch {
  padding: 7px 8px;
}
</style>