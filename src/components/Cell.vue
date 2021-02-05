<template>
  <div
    class="cell" 
    :class="cellType"
    :style="style"
    @click="selectPoint"
  >
    <div>
      {{f}}
    </div>
    <div>{{h}},{{g}}</div>
  </div>
</template>

<script>
import { generateColor } from '../util/Color'

export default {
  props: {
    row: {
      type: Number,
      default: -1
    },
    col: {
      type: Number,
      default: -1
    },
    value: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: false
    },
    selecting: {
      type: Boolean,
      default: false
    },
    node: {
      type: Object
    },
    isStart: {
      type: Boolean,
      default: false
    },
    isEnd: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectPoint (e) {
      e.preventDefault()
      e.stopPropagation()
      this.$emit('selectpoint', this.row, this.col)
    }
  },
  computed: {
    cellType () {
      if (this.isStart) {
        return 'start'
      }

      if (this.isEnd) {
        return 'end'
      }

      if (this.node && this.node.isObstacle()) {
        return 'obstacle'
      }

      if (this.node && this.node.isPath) {
        return 'path'
      }

      if (this.node && this.node.open) {
        return 'open'
      }

      if (this.node && this.node.closed) {
        return 'closed'
      }

      return ''
    },
    g () {
      return  this.node.g  >= 100000 ? 'inf' : ~~this.node.g
    },
    h () {
      return ~~this.node.h
    },
    f () {
      let value = this.node.f
      if (value !== ~~value) {
        value = value.toFixed(1)
      }
      return value  >= 100000 ? 'inf' : value
    },
    style () {
      if (this.node.closed && !this.node.isPath && !this.isStart) {
        return {
          background: generateColor('#00fa9a', '#aa53dd', this.g)
        }
      }
      return null
    }
  }
}
</script>

<style scoped>
  .cell {
    position: relative;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid gray;
    font-size: 11px;
  }

  .obstacle {
    background: lightslategray;
  }

  .start {
    background: palegreen;
    color: yelow
  }

  .path {
    background: paleturquoise;
  }

  .end {
    background: palevioletred;
  }

  .open {
    background: #ff00ff80;
  }

  .closed {
    background: #affa00;
  }
</style>
