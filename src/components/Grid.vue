<template>
  <div class="grid-wapper">
    <div class="toolbox">
      <button @click="activateSource" class="button" :disabled="selecting">Select Start/End</button>
      <button @click="resetGrid" class="button" >Reset Grid</button>
    </div>
    <div class="grid" @mousedown="activate" @mouseup="deactivate" @mouseleave="deactivate">
      <div v-for="(n, row) in width" :key="row" class="row">
        <cell
          v-for="(n, col) in height" 
          :key="col" class="col" 
          @setgridvalue="setGridValue"
          @selectpoint="selectPoint"
          :row="row"
          :col="col"
          :value="grid[row * width + col]"
          :active="active"
          :selecting="selecting"
        >
        </cell>
      </div>
    </div>
  </div>
</template>

<script>
const N = 20
import Cell from '../components/Cell'

export default {
  componentName: 'Grid',
  data () {
    return {
      grid: new Array(N * N).fill(0),
      width: N,
      height: N,
      active: false,
      srcAndDes: [{x: -1, y: -1}, {x: -1, y: -1}]
    }
  },
  methods: {
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
      const ind = row * this.width + col
      this.grid.splice(ind, 1, val)
    },
    selectPoint (row, col) {
      this.srcAndDes.push({x: row, y: col})
      this.setGridValue(row, col, this.srcAndDes.length)
    },
    activateSource () {
      this.srcAndDes.forEach(({ x, y }) => {
        if (x >= 0 && y >= 0) {
          this.setGridValue(x, y, 0)
        }
      })
      this.srcAndDes.splice(0, 2)
    },
    resetGrid () {
      for (let i = 0; i < N * N; i ++) {
        this.$set(this.grid, i, 0)
      }
      this.active = false
      this.$set(this.srcAndDes, 0, {x: -1, y: -1})
      this.$set(this.srcAndDes, 1, {x: -1, y: -1})
    }
  },
  computed:{
    selecting () {
      return this.srcAndDes.length < 2
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
  border: 1px solid black;
  cursor: pointer;
  user-select: none;
}
.row {
  width: calc(20 * 30 px);
  position: relative;
  display: flex;
  flex-direction: row;
}
.col {
  position: relative;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid gray;
  font-size: 12px;
}
</style>