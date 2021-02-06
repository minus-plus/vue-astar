<template>
  <div class="page">
    <div class="title">
       A-Star Pathfinding Algorithm by Vue.js
    </div>
    <div class="content">
      <grid></grid>
      <div class="instruction">
        <div class="item">
          <p>Data in each cell: </p>
          <div class="indicator">
            <div class="first-line">
              <div>f</div>
            </div>
            <div class="second-line">
              <div>h</div>
              <div>g</div>
            </div>
          </div>
          <p>g: distance from source</p>
          <p>h: heuristic distance to goal</p>
          <p>f = g + h</p>
        </div>
        <br />
        <div class="item">
          <div class="legend">
            <div class="start"></div>
            Start
          </div>
          <div class="legend">
            <div class="end"></div>
            End
          </div>
          <div class="legend">
            <div class="obstacle"></div>
            Obstacle
          </div>
          <div class="legend">
            <div class="open"></div>
            Open
          </div>
          <div class="legend">
            <div class="path"></div>
            Path
          </div>
        </div>
        <br />
        <div class="item">
          <p>Click Select Start/End to set start and end position</p>
          <p>Click Search to execute A-Star alghorithm</p>
          <p>Click Reset to clean the grid</p>
          <p>Hold left mouse button and move cursor in grid to set obstacles</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from '../components/Grid'
export default {
  components: {
    Grid
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  width: 810px;
  margin: 0 auto;
}
.title {
  width: 810px;
  margin: 0 auto;
  text-align: left;
  padding: 10px;
}
.instruction {
  width: 200px;
  padding: 50px 10px 0 20px;
}
.item {
  width: 100%;
  text-align: left;
}
.item p {
  font-size: 14px;
}
.indicator {
  width: 48px;
  height: 48px;
  padding: 2px;
  box-sizing: border-box;
  border: 1px solid black;
  font-size: 18px;
}

.first-line, .second-line {
  width: 100%;
  display: flex;
}

.first-line > div, .second-line > div {
  width: 50%;
  line-height: 20px;
  text-align: center;
}

.legend {
  display: flex;
  font-size: 13px;
  line-height: 20px;
  margin-top: 0.2em;
}
.legend > div {
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
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

.obstacle {
  background: lightslategray;
}

.instruction p {
  margin: 0.5em 0;
}
</style>