(function(t){function e(e){for(var n,a,c=e[0],o=e[1],l=e[2],h=0,d=[];h<c.length;h++)a=c[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-astar/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"09ae":function(t,e,i){},2427:function(t,e,i){"use strict";i("e2ca")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=i("5c96"),r=i.n(s),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("MainPage")],1)},c=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"title"},[t._v(" A-Star Pathfinding Algorithm by Vue.js ")]),i("div",{staticClass:"content"},[i("grid"),t._m(0)],1)])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"instruction"},[i("div",{staticClass:"item"},[i("p",[t._v("Data in each cell: ")]),i("div",{staticClass:"indicator"},[i("div",{staticClass:"first-line"},[i("div",[t._v("f")])]),i("div",{staticClass:"second-line"},[i("div",[t._v("h")]),i("div",[t._v("g")])])]),i("p",[t._v("g: distance from source")]),i("p",[t._v("h: heuristic distance to goal")]),i("p",[t._v("f = g + h")])]),i("br"),i("div",{staticClass:"item"},[i("div",{staticClass:"legend"},[i("div",{staticClass:"start"}),t._v(" Start ")]),i("div",{staticClass:"legend"},[i("div",{staticClass:"end"}),t._v(" End ")]),i("div",{staticClass:"legend"},[i("div",{staticClass:"obstacle"}),t._v(" Obstacle ")]),i("div",{staticClass:"legend"},[i("div",{staticClass:"open"}),t._v(" Open ")]),i("div",{staticClass:"legend"},[i("div",{staticClass:"path"}),t._v(" Path ")])]),i("br"),i("div",{staticClass:"item"},[i("p",[t._v("Click Select Start/End to set start and end position")]),i("p",[t._v("Click Search to execute A-Star alghorithm")]),i("p",[t._v("Click Reset to clean the grid")]),i("p",[t._v("Hold left mouse button and move cursor in grid to set obstacles")])])])}],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid-wapper"},[i("div",{staticClass:"toolbox"},[i("el-button",{staticClass:"button",attrs:{disabled:t.selecting||t.searching},on:{click:t.activateSource}},[t._v("Select Start/End")]),i("el-button",{staticClass:"button",attrs:{disabled:!t.isReady||t.searching},on:{click:t.astarSearch}},[t._v("Search")]),i("el-switch",{staticClass:"switch",attrs:{"active-text":"Enable Diagonal"},model:{value:t.diagonal,callback:function(e){t.diagonal=e},expression:"diagonal"}}),i("el-button",{staticClass:"button",attrs:{disabled:t.searching},on:{click:t.resetGrid}},[t._v("Reset Grid")])],1),i("div",{ref:"grid",staticClass:"grid",on:{mousedown:t.activate,mouseup:t.deactivate,mouseleave:t.deactivate,"!mousemove":function(e){return t.onMouseMove(e)}}},t._l(t.width,(function(e,n){return i("div",{key:n,staticClass:"row"},t._l(t.height,(function(e,s){return i("cell",{key:s,attrs:{row:n,col:s,value:t.grid.getNode(n,s).weight,node:t.grid.getNode(n,s),active:t.active,selecting:t.selecting,isStart:t.grid.getNode(n,s)===t.srcAndDes[0],isEnd:t.grid.getNode(n,s)===t.srcAndDes[1]},on:{setgridvalue:t.setGridValue,selectpoint:t.selectPoint}})})),1)})),0)])},h=[],d=(i("cb29"),i("4160"),i("d81d"),i("a434"),i("ac1f"),i("841c"),i("159b"),i("96cf"),i("1da1")),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cell",class:t.cellType,style:t.style,on:{click:t.selectPoint}},[i("div",{staticClass:"first-line"},[i("div",[t._v(t._s(t.f))])]),i("div",{staticClass:"second-line"},[i("div",[t._v(t._s(t.h))]),i("div",[t._v(t._s(t.g))])])])},g=[],v=(i("a9e3"),function(t){var e="0123456789abcdef";return t=parseInt(t),0===t||isNaN(t)?"00":(t=~~Math.min(Math.max(0,t),255),e.charAt((t-t%16)/16)+e.charAt(t%16))}),p=function(t){return"#"+v(t[0])+v(t[1])+v(t[2])},b=function(t){t="#"===t.charAt(0)?t.substring(1):t;var e=[];return e[0]=parseInt(t.substring(0,2),16),e[1]=parseInt(t.substring(2,4),16),e[2]=parseInt(t.substring(4,6),16),e},y=function(t,e,i){var n=b(t),s=b(e),r=i/50;if(r>1&&!0&~~r){var a=n;n=s,s=a,r-=1}var c=[0,0,0];return c[0]=n[0]*(1-r)+r*s[0],c[1]=n[1]*(1-r)+r*s[1],c[2]=n[2]*(1-r)+r*s[2],p(c)},m={props:{row:{type:Number,default:-1},col:{type:Number,default:-1},value:{type:Number,default:0},active:{type:Boolean,default:!1},selecting:{type:Boolean,default:!1},node:{type:Object},isStart:{type:Boolean,default:!1},isEnd:{type:Boolean,default:!1}},methods:{selectPoint:function(t){t.preventDefault(),t.stopPropagation(),this.$emit("selectpoint",this.row,this.col)}},computed:{cellType:function(){return this.isStart?"start":this.isEnd?"end":this.node&&this.node.isObstacle()?"obstacle":this.node&&this.node.isPath?"path":this.node&&this.node.open?"open":this.node&&this.node.closed?"closed":""},g:function(){var t=Math.round(this.node.g);return t>=1e5?"inf":t},h:function(){return Math.round(this.node.h)},f:function(){var t=Math.round(this.node.f);return t>=1e5?"inf":t},style:function(){return!this.node.closed||this.node.isPath||this.isStart?null:{background:y("#2fcbac","#aa53dd",this.g)}}}},w=m,k=(i("2427"),i("2877")),_=Object(k["a"])(w,f,g,!1,null,"25e91483",null),x=_.exports,C=(i("a15b"),i("d4ec")),O=i("bee2"),j=function(){function t(e,i,n){Object(C["a"])(this,t),this.x=e,this.y=i,this.weight=n,this.g=1e5,this.h=0,this.f=this.g+this.h,this.open=!1,this.closed=!1,this.visited=!1,this.parent=null,this.isPath=!1}return Object(O["a"])(t,[{key:"toString",value:function(){return"["+this.x+" "+this.y+"]"}},{key:"isObstacle",value:function(){return this.weight<0}},{key:"reset",value:function(){this.weight=1,this.g=1e5,this.h=0,this.f=this.g+this.h,this.open=!1,this.closed=!1,this.visited=!1,this.parent=null,this.isPath=!1}},{key:"partialReset",value:function(){var t=this.weight;this.reset(),this.weight=t}},{key:"getCost",value:function(t){return t&&this.x!==t.x&&this.y!==t.y?1.414*this.weight:this.weight}}]),t}(),P=j,S=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(C["a"])(this,t),this.nodes=[],this.diagonal=!!i.diagonal,this.grid=[];for(var n=0;n<e.length;n++){this.grid[n]=[];for(var s=0,r=e[n];s<r.length;s++){var a=new P(n,s,r[s]);this.grid[n][s]=a,this.nodes.push(a)}}this.init()}return Object(O["a"])(t,[{key:"init",value:function(){for(var t=0;t<this.nodes.length;t++)this.nodes[t].reset()}},{key:"reset",value:function(){for(var t=0;t<this.grid.length;t++)for(var e=0;e<this.grid.length;e++)this.getNode(t,e).reset()}},{key:"partialReset",value:function(){for(var t=0;t<this.grid.length;t++)for(var e=0;e<this.grid.length;e++)this.getNode(t,e).partialReset()}},{key:"getNeighbors",value:function(t){var e=this.grid,i=[],n=t.x,s=t.y;return this.grid[n-1]&&this.grid[n-1][s]&&i.push(e[n-1][s]),this.grid[n+1]&&this.grid[n+1][s]&&i.push(e[n+1][s]),this.grid[n]&&this.grid[n][s-1]&&i.push(this.grid[n][s-1]),this.grid[n]&&this.grid[n][s+1]&&i.push(this.grid[n][s+1]),this.diagonal&&(this.grid[n-1]&&this.grid[n-1][s-1]&&i.push(this.grid[n-1][s-1]),this.grid[n+1]&&this.grid[n+1][s-1]&&i.push(this.grid[n+1][s-1]),this.grid[n-1]&&this.grid[n-1][s+1]&&i.push(this.grid[n-1][s+1]),this.grid[n+1]&&this.grid[n+1][s+1]&&i.push(this.grid[n+1][s+1])),i}},{key:"getNode",value:function(t,e){return this.grid[t][e]}},{key:"toString",value:function(){for(var t=[],e=this.grid,i=0;i<e.length;i++){for(var n=[],s=e[i],r=0;r<s.length;r++)n.push(s[r].weight);t.push(n.join(" "))}return t.join("\n")}}]),t}(),A=S,D=function(){function t(e){Object(C["a"])(this,t),this.cmp=e,this.list=[]}return Object(O["a"])(t,[{key:"offer",value:function(t){this.list.push(t),this.bubbleUp(this.list.length-1)}},{key:"poll",value:function(){var t=this.list[0],e=this.list.pop();return this.list.length>0&&(this.list[0]=e,this.percolateDown(0)),t}},{key:"peek",value:function(){return this.list.length>0?this.list[0]:null}},{key:"bubbleUp",value:function(t){var e=this.list[t];while(t>0){var i=t-1>>1,n=this.list[i];if(!(this.cmp(e,n)<0))break;this.list[t]=n,t=i}this.list[t]=e}},{key:"percolateDown",value:function(t){var e=this.list[t];while(2*t+1<this.list.length){var i=2*t+1,n=i+1,s=n>=this.list.length||this.cmp(this.list[i],this.list[n])<=0?i:n;if(!(this.cmp(e,this.list[s])>0))break;this.list[t]=this.list[s],t=s}this.list[t]=e}},{key:"decreaseKey",value:function(t){var e=this.getIndexOfElement(t);void 0!==e&&this.bubbleUp(e)}},{key:"getIndexOfElement",value:function(t){var e;for(e=0;e<this.size();e++)if(this.list[e]===t)return e}},{key:"size",value:function(){return this.list.length}},{key:"toString",value:function(){return this.list.join(", ")}}]),t}(),N=D,M=(i("d3b7"),function(t){return new Promise((function(e){return setTimeout(e,t)}))}),E=5,R=function(){function t(){Object(C["a"])(this,t)}return Object(O["a"])(t,null,[{key:"search",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e,i,n){var s,r,a,c,o,l,u,h,d,f=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=f.length>3&&void 0!==f[3]?f[3]:{},r=s.heuristic||this.manhattan,a=new N((function(t,e){return t.f!==e.f?t.f-e.f:t.g-e.g})),i.g=0,i.h=r(i,n),i.f=i.g+i.h,a.offer(i);case 7:if(!(a.size()>0)){t.next=35;break}if(c=a.poll(),c!==n){t.next=11;break}return t.abrupt("return",this.getPath(n));case 11:c.open=!1,c.closed=!0,o=e.getNeighbors(c),l=0;case 15:if(!(l<o.length)){t.next=33;break}if(u=o[l],!u.closed&&!u.isObstacle()){t.next=19;break}return t.abrupt("continue",30);case 19:if(h=c.g+u.getCost(c),d=u.visited,d&&!(h<u.g)){t.next=30;break}return u.visited=!0,u.g=h,u.parent=c,u.h=r(u,n),u.f=u.g+u.h,t.next=29,M(E);case 29:d?a.decreaseKey(u):(a.offer(u),u.open=!0);case 30:l++,t.next=15;break;case 33:t.next=7;break;case 35:return t.abrupt("return",[]);case 36:case"end":return t.stop()}}),t,this)})));function e(e,i,n){return t.apply(this,arguments)}return e}()},{key:"manhattan",value:function(t,e){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)}},{key:"getPath",value:function(t){var e=t,i=[];while(e)e.isPath=!0,i.unshift(e),e=e.parent;return i}}]),t}(),G=R,$=18,I=32,T={componentName:"Grid",data:function(){return{grid:this.initGraph(),width:$,height:$,active:!1,srcAndDes:[null,null],diagonal:!1,searching:!1}},methods:{initGraph:function(){var t=new Array($).fill(0).map((function(){return new Array($).fill(1)})),e=new A(t,{diagonal:this.diagonal});return window.graph=e,e},activate:function(){this.selecting||(this.active=!0)},deactivate:function(){this.active=!1},setGridValue:function(t,e,i){var n=this.grid.getNode(t,e);n.weight=i},selectPoint:function(t,e){var i=this.grid.getNode(t,e);this.selecting?(i.reset(),this.srcAndDes.push(i)):(i.partialReset(),i.weight*=-1)},activateSource:function(){this.srcAndDes.splice(0,2)},resetGrid:function(){this.grid=this.initGraph(),this.active=!1,this.$set(this.srcAndDes,0,null),this.$set(this.srcAndDes,1,null)},astarSearch:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isReady){e.next=10;break}return i=t.grid.getNode(t.srcAndDes[0].x,t.srcAndDes[0].y),n=t.grid.getNode(t.srcAndDes[1].x,t.srcAndDes[1].y),t.grid.partialReset(),t.searching=!0,e.next=7,G.search(t.grid,i,n);case 7:s=e.sent,s.forEach((function(t){t.isPath=!0})),t.searching=!1;case 10:case"end":return e.stop()}}),e)})))()},onMouseMove:function(t){if(t.preventDefault(),t.stopPropagation(),this.active){var e=this.$refs.grid.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top,s=~~(n/I),r=~~(i/I),a=this.grid.getNode(s,r);a&&a.weight>0&&(a.reset(),a.weight*=-1)}}},computed:{selecting:function(){return this.srcAndDes.length<2},isReady:function(){return 2===this.srcAndDes.length&&this.srcAndDes[1]}},watch:{diagonal:function(t){this.grid&&(this.grid.diagonal=t)}},components:{Cell:x}},B=T,z=(i("d5a9"),Object(k["a"])(B,u,h,!1,null,"2bc38727",null)),U=z.exports,V={components:{Grid:U}},J=V,K=(i("7c6c"),Object(k["a"])(J,o,l,!1,null,"bf53a53c",null)),H=K.exports,X={name:"App",components:{MainPage:H}},Y=X,q=(i("034f"),Object(k["a"])(Y,a,c,!1,null,null,null)),F=q.exports;n["default"].use(r.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(F)}}).$mount("#app")},7774:function(t,e,i){},"7c6c":function(t,e,i){"use strict";i("7774")},"85ec":function(t,e,i){},d5a9:function(t,e,i){"use strict";i("09ae")},e2ca:function(t,e,i){}});
//# sourceMappingURL=app.4d8e8f04.js.map