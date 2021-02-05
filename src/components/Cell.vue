<template>
  <div
    class="cell" 
    :class="cellType"
    :style="style"
    @click="selectPoint"
  >
    <div class="first-line">
      <div>{{f}}</div>
    </div>
    <div class="second-line">
      <div>{{h}}</div>
      <div>{{g}}</div>
    </div>
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
      let value = Math.round(this.node.g)
      return value  >= 100000 ? 'inf' : value
    },
    h () {
      return Math.round(this.node.h)
    },
    f () {
      let value = Math.round(this.node.f)
      return value  >= 100000 ? 'inf' : value
    },
    style () {
      if (this.node.closed && !this.node.isPath && !this.isStart) {
        return {
          background: generateColor('#2fcbac', '#aa53dd', this.g)
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
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid gray;
    font-size: 10px;
  }

  .obstacle {
    background: lightslategray;
  }

  .start {
    background: palegreen;
    color: yelow;
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

  .first-line, .second-line {
    position: relative;
    width: 100%;
    height: 50%;
    padding: 1px;
    box-sizing: border-box;
  }

  .first-line {
    font-size: 12px;
  }

  .second-line {
    font-size: 10px;
    display: flex;
  }

  .first-line > div, .second-line > div {
    position: relative;
    text-align: left;
    line-height: 14px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .second-line > div {
    width: 50%;
    box-sizing: border-box;
  }
</style>
