(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{230:function(t,e,r){(function(e){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},e.p="",e(e.s=3)}([function(t,e,r){"use strict";function n(){return window.google&&window.google.charts?Promise.resolve(window.google.charts):(l||(l=new Promise((function(t){var script=document.createElement("script");script.type="text/javascript",script.onload=function(){return t(window.google.charts)},script.src=c,document.body.appendChild(script)}))),l)}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n().then((function(r){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("Google Charts loader: settings must be an object");var n=t+"_"+JSON.stringify(e,Object.keys(e).sort());if(h.has(n))return h.get(n);var c=new Promise((function(n){r.load(t,e),r.setOnLoadCallback((function(){return n(window.google)}))}));return h.set(n,c),c}))};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="https://www.gstatic.com/charts/loader.js",l=null,h=new Map},function(t,e,r){var n=r(5)(r(4),r(6),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,r){function n(){var d=Date.now()-h;d<e&&d>=0?o=setTimeout(n,e-d):(o=null,r||(f=t.apply(l,c),l=c=null))}var o,c,l,h,f;null==e&&(e=100);var d=function(){l=this,c=arguments,h=Date.now();var d=r&&!o;return o||(o=setTimeout(n,e)),d&&(f=t.apply(l,c),l=c=null),f};return d.clear=function(){o&&(clearTimeout(o),o=null)},d.flush=function(){o&&(f=t.apply(l,c),l=c=null,clearTimeout(o),o=null)},d}},function(t,r,n){"use strict";function o(t){t.component("GChart",h.a)}Object.defineProperty(r,"__esModule",{value:!0}),r.install=o;var c=n(0),l=n(1),h=n.n(l);n.d(r,"loadGoogleCharts",(function(){return c.a})),n.d(r,"GChart",(function(){return h.a}));var f={version:"0.3.2",install:o};r.default=f;var d=null;"undefined"!=typeof window?d=window.Vue:void 0!==e&&(d=e.Vue),d&&d.use(f)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(2),c=r.n(o),l=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],r=!0,n=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);r=!0);}catch(t){n=!0,o=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw o}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=null;e.default={name:"GChart",props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},data:function(){return{chartObject:null}},watch:{data:{deep:!0,handler:function(){this.drawChart()}},options:{deep:!0,handler:function(){this.drawChart()}},type:function(t){this.createChartObject(),this.drawChart()}},mounted:function(){var t=this;r.i(n.a)(this.version,this.settings).then((function(e){f=e;var r=t.createChartObject();t.$emit("ready",r,e),t.drawChart()})),this.resizeDebounce>0&&window.addEventListener("resize",c()(this.drawChart,this.resizeDebounce))},beforeDestroy:function(){this.chartObject&&this.chartObject.clearChart()},methods:{drawChart:function(){if(f&&this.chartObject){var data=this.getValidChartData();data&&this.chartObject.draw(data,this.options)}},getValidChartData:function(){return this.data instanceof f.visualization.DataTable?this.data:this.data instanceof f.visualization.DataView?this.data:Array.isArray(this.data)?f.visualization.arrayToDataTable(this.data):null!==this.data&&"object"===h(this.data)?new f.visualization.DataTable(this.data):null},createChartObject:function(){var t=this.createChart||function(t,e,r){if(!r)throw new Error("please, provide chart type property");return new e.visualization[r](t)};return this.chartObject=t(this.$refs.chart,f,this.type),this.attachListeners(),this.chartObject},attachListeners:function(){var t=this;this.events&&Object.entries(this.events).forEach((function(e){var r=l(e,2),n=r[0],o=r[1];f.visualization.events.addListener(t.chartObject,n,o)}))}}}},function(t,e){t.exports=function(t,e,r,n){var o,c=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,c=t.default);var h="function"==typeof c?c.options:c;if(e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns),r&&(h._scopeId=r),n){var f=h.computed||(h.computed={});Object.keys(n).forEach((function(t){var e=n[t];f[t]=function(){return e}}))}return{esModule:o,exports:c,options:h}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart"})},staticRenderFns:[]}}])}).call(this,r(40))},251:function(t,e,r){var content=r(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("5a511a7d",content,!0,{sourceMap:!1})},252:function(t,e,r){var content=r(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("bafb3f0a",content,!0,{sourceMap:!1})},305:function(t,e,r){"use strict";var n=r(230);r.o(n,"GChart")&&r.d(e,"GChart",(function(){return n.GChart}))},306:function(t,e,r){"use strict";var n=r(251);r.n(n).a},307:function(t,e,r){(e=r(11)(!1)).push([t.i,"#user-chart{height:auto;background:#fff3e0}",""]),t.exports=e},308:function(t,e,r){"use strict";var n=r(252);r.n(n).a},309:function(t,e,r){(e=r(11)(!1)).push([t.i,".user__card-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),t.exports=e},333:function(t,e,r){"use strict";r.r(e);r(18),r(13);var n=r(305),o={name:"Chart",data:function(){return{chartData:[["Day","Score","Avg Score"]],chartOptions:{title:"Company Performance",height:"auto",vAxis:{title:"Score"},hAxis:{title:"Dayly performance"},seriesType:"bars",series:{1:{type:"line"}},colors:["FFE0B2","#FB8C00"],backgroundColor:{fill:"#FFF3E0"}}}},mounted:function(){(null!=this.values||this.values.length>0)&&(this.chartData=this.chartData.concat(this.values)),this.chartOptions.title=this.title,this.chartOptions.title=this.title,this.chartOptions.hAxis.title=this.xName,this.chartOptions.vAxis.title=this.yName},props:{title:{type:String,default:""},values:{type:Array,required:!1},xName:{type:String,default:"Dayly performance"},yName:{type:String,default:"Score"}},components:{GChart:n.GChart}},c=(r(306),r(7)),l=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("GChart",{attrs:{type:"ColumnChart",data:this.chartData,options:this.chartOptions,settings:{packages:["corechart"]}}})}),[],!1,null,null,null).exports,h=r(264),f=r(228),d={name:"user",data:function(){return{status:null,user:{},us:null,filters:[],userChartData:[["Jan 1",938,522],["Jan 2",1120,599],["Jan 3",1167,587],["Jan 4",1110,615],["Jan 5",691,629],["Jan 6",712,810],["Jan 7",810,950],["Jan 8",950,1100],["Jan 9",1100,1350],["Jan 10",1200,1150]]}},created:function(){var t=this,e=this.$route.query.username;""!==e&&void 0!==e?(this.us=new f.a,this.filters=[{term:{"Players.Username.keyword":e}}],this.us.getUserdata(e).then((function(e){console.log("result",e),t.user=e}))):this.$router.push("/leaderboard")},components:{gamesTable:h.a,Chart:l}},v=(r(308),Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{staticClass:"ma-10 justify-center"},[r("v-col",{attrs:{cols:"11",lg:"3"}},[r("v-card",{attrs:{"max-width":"250"}},[t.user.avatar?r("v-img",{attrs:{"min-width":"250",src:t.user.avatar}}):t._e(),r("v-card-title",[r("h3",{staticClass:"headline"},[t._v(t._s(t.user.name))])]),t.user.company?r("v-card-text",{staticClass:"user__card-text pt-0"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"20"}},[t._v("people")]),r("span",[t._v(t._s(t.user.company))])],1):t._e(),t.user.location?r("v-card-text",{staticClass:"user__card-text pt-0"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"20"}},[t._v("place")]),r("span",[t._v(t._s(t.user.location))])],1):t._e(),t.user.blog?r("v-card-text",{staticClass:"user__card-text pt-0"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"20"}},[t._v("public")]),r("a",{attrs:{href:t.user.blog,target:"_blank"}},[t._v(t._s(t.user.blog))])],1):t._e()],1)],1),r("v-col",{attrs:{cols:"11",lg:"7",xl:"5"}},[r("h3",{staticClass:"headline mt-1 mb-3"},[t._v(t._s(t.$t("userTitle")))]),r("Chart",{staticClass:"elevation-1",attrs:{values:t.userChartData,username:"kezlya"}})],1),r("v-col",{staticClass:"mt-4",attrs:{cols:"11",lg:"8"}},[r("h3",{staticClass:"headline mt-1 mb-3"},[t._v(t._s(t.$t("userGames")))]),r("gamesTable",{attrs:{Filters:t.filters,PageSize:17}})],1)],1)],1)}),[],!1,null,null,null));e.default=v.exports}}]);