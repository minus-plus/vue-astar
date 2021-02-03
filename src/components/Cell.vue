<template>
  <div
    class="cell" 
    :class="cellType"
    @mouseenter="setValue"
    @click="selectPoint"
  >
    <div>
      {{row}},{{col}}
    </div>
    <div>{{value}}</div>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    setValue () {
      if (this.value === 0 && this.active) {
        this.$emit('setgridvalue', this.row, this.col, -1)
      }
    },
    selectPoint () {
      if (this.selecting) {
        this.$emit('selectpoint', this.row, this.col)
      }
    }
  },
  computed: {
    cellType () {
      return ['obstacle', '', 'start', 'end'][this.value + 1]
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
    font-size: 12px;
  }

  .obstacle {
    background: palegoldenrod;
  }

  .start {
    background: palegreen;
  }

  .end {
    background: palevioletred;
  }

</style>
