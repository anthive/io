(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(t,e,n){"use strict";n(96),n(31);var r=n(176),a=n.n(r),s=n(177),i=n.n(s),o=n(62),l=n.n(o),u="https://anthive.io/",c=function(){function t(){a()(this,t)}return i()(t,null,[{key:"getUserdata",value:function(t){var e=this;return l.a.create({baseURL:"https://api.github.com/",timeout:3e3}).get("users/"+t).then(function(n){var r=n.data;return{name:null!=r.name?r.name:t,avatar:e.photoUrl(t,250),company:r.company,location:r.location,blog:""!=r.blog?r.blog:null}}).catch(function(n){if(404==n.response.status)return{name:t,avatar:e.photoUrl(t,250),company:null,location:null,blog:null}})}},{key:"photoUrl",value:function(t,e){return t.startsWith("sample-")?this.langUrl(t.substring(7)):"https://github.com/"+t+".png?size="+e}},{key:"langUrl",value:function(t){return u+"skins/lang/"+t+".png"}},{key:"antUrl",value:function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?u+"skins/client/"+t+"/antBig.png":u+"skins/client/"+t+"/ant.png"}},{key:"hiveUrl",value:function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?u+"skins/client/"+t+"/hiveBig.png":u+"skins/client/"+t+"/hive.png"}},{key:"scoreString",value:function(t){var e=Math.floor(((""+t).length-1)/3);return parseFloat((0!=e?t/Math.pow(1e3,e):t).toPrecision(2))+["","K","M","B","t"][e]}},{key:"timeAgo",value:function(t){var e=Math.round(new Date)-t,n=2592e6,r=6048e5,a=864e5,s=36e5,i=6e4,o=1e3;return e>n?Math.floor(e/n)+"m ago":e>r?Math.floor(e/r)+"w ago":e>a?Math.floor(e/a)+"d ago":e>s?Math.floor(e/s)+"h ago":e>i?Math.floor(e/i)+"m ago":e>o?Math.floor(e/o)+"s ago":"Just now"}}]),t}();e.a=c},176:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},177:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},178:function(t,e,n){"use strict";var r=n(2),a=n(17),s=n(20),i=n(97),o=n(46),l=n(11),u=n(47).f,c=n(64).f,f=n(9).f,h=n(181).trim,p=r.Number,d=p,v=p.prototype,g="Number"==s(n(63)(v)),m="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var n,r,a,s=(e=m?e.trim():h(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var i,l=e.slice(2),u=0,c=l.length;u<c;u++)if((i=l.charCodeAt(u))<48||i>a)return NaN;return parseInt(l,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(g?l(function(){v.valueOf.call(n)}):"Number"!=s(n))?i(new d(y(e)),n,p):y(e)};for(var b,_=n(6)?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)a(d,b=_[w])&&!a(p,b)&&f(p,b,c(d,b));p.prototype=v,v.constructor=p,n(12)(r,"Number",p)}},179:function(t,e,n){var r=n(187);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(14).default)("3dc6f460",r,!0,{})},180:function(t,e,n){var r=n(189);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(14).default)("f62ad240",r,!0,{})},181:function(t,e,n){var r=n(8),a=n(19),s=n(11),i=n(182),o="["+i+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var a={},o=s(function(){return!!i[t]()||"​"!="​"[t]()}),l=a[t]=o?e(f):i[t];n&&(a[n]=l),r(r.P+r.F*o,"String",a)},f=c.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},182:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},183:function(t,e,n){(function(e){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(window.google&&window.google.charts?Promise.resolve(window.google.charts):(s||(s=new Promise(function(t){var e=document.createElement("script");e.type="text/javascript",e.onload=function(){return t(window.google.charts)},e.src=a,document.body.appendChild(e)})),s)).then(function(n){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("Google Charts loader: settings must be an object");var a=t+"_"+JSON.stringify(e,Object.keys(e).sort());if(i.has(a))return i.get(a);var s=new Promise(function(r){n.load(t,e),n.setOnLoadCallback(function(){return r(window.google)})});return i.set(a,s),s})};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a="https://www.gstatic.com/charts/loader.js",s=null,i=new Map},function(t,e,n){var r=n(5)(n(4),n(6),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n){function r(){var u=Date.now()-o;u<e&&u>=0?a=setTimeout(r,e-u):(a=null,n||(l=t.apply(i,s),i=s=null))}var a,s,i,o,l;null==e&&(e=100);var u=function(){i=this,s=arguments,o=Date.now();var u=n&&!a;return a||(a=setTimeout(r,e)),u&&(l=t.apply(i,s),i=s=null),l};return u.clear=function(){a&&(clearTimeout(a),a=null)},u.flush=function(){a&&(l=t.apply(i,s),i=s=null,clearTimeout(a),a=null)},u}},function(t,n,r){"use strict";function a(t){t.component("GChart",o.a)}Object.defineProperty(n,"__esModule",{value:!0}),n.install=a;var s=r(0),i=r(1),o=r.n(i);r.d(n,"loadGoogleCharts",function(){return s.a}),r.d(n,"GChart",function(){return o.a});var l={version:"0.3.2",install:a};n.default=l;var u=null;"undefined"!=typeof window?u=window.Vue:void 0!==e&&(u=e.Vue),u&&u.use(l)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n(2),s=n.n(a),i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,a=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,s=t}finally{try{!r&&o.return&&o.return()}finally{if(a)throw s}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=null;e.default={name:"GChart",props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},data:function(){return{chartObject:null}},watch:{data:{deep:!0,handler:function(){this.drawChart()}},options:{deep:!0,handler:function(){this.drawChart()}},type:function(t){this.createChartObject(),this.drawChart()}},mounted:function(){var t=this;n.i(r.a)(this.version,this.settings).then(function(e){l=e;var n=t.createChartObject();t.$emit("ready",n,e),t.drawChart()}),this.resizeDebounce>0&&window.addEventListener("resize",s()(this.drawChart,this.resizeDebounce))},beforeDestroy:function(){this.chartObject&&this.chartObject.clearChart()},methods:{drawChart:function(){if(l&&this.chartObject){var t=this.getValidChartData();t&&this.chartObject.draw(t,this.options)}},getValidChartData:function(){return this.data instanceof l.visualization.DataTable?this.data:this.data instanceof l.visualization.DataView?this.data:Array.isArray(this.data)?l.visualization.arrayToDataTable(this.data):null!==this.data&&"object"===o(this.data)?new l.visualization.DataTable(this.data):null},createChartObject:function(){var t=this.createChart||function(t,e,n){if(!n)throw new Error("please, provide chart type property");return new e.visualization[n](t)};return this.chartObject=t(this.$refs.chart,l,this.type),this.attachListeners(),this.chartObject},attachListeners:function(){var t=this;this.events&&Object.entries(this.events).forEach(function(e){var n=i(e,2),r=n[0],a=n[1];l.visualization.events.addListener(t.chartObject,r,a)})}}}},function(t,e){t.exports=function(t,e,n,r){var a,s=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),r){var l=o.computed||(o.computed={});Object.keys(r).forEach(function(t){var e=r[t];l[t]=function(){return e}})}return{esModule:a,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart"})},staticRenderFns:[]}}])}).call(this,n(48))},186:function(t,e,n){"use strict";var r=n(179);n.n(r).a},187:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n.user-info{position:relative;display:inline-block;border-radius:10px;overflow:hidden;cursor:default;z-index:3;transition:all .5s ease\n}\n.v-list__tile{padding:0\n}\n.user-info__photo{width:48px\n}\n.user-info__photo-avatar{z-index:2\n}\n.user-info__photo:hover+.user-info__lang{margin-left:47px\n}\n.user-info__photo:hover~.user-info__skin{margin-left:94px\n}\n.user-info__lang{position:absolute;width:48px;z-index:1;transition:all .5s ease\n}\n.user-info__lang-avatar{z-index:1\n}\n.user-info__skin{position:absolute;width:48px;z-index:1;transition:all .5s ease\n}\n.user-info__version{position:relative;bottom:-2px;background:hsla(0,0%,100%,.8)\n}\n.user-info__link{text-decoration:none\n}\n.user-info__link:hover{text-decoration:underline\n}",""])},188:function(t,e,n){"use strict";var r=n(180);n.n(r).a},189:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n.games-table__meta{min-width:100px\n}",""])},193:function(t,e,n){var r=n(209);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(14).default)("7f80192e",r,!0,{})},194:function(t,e,n){var r=n(211);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(14).default)("26c5d22c",r,!0,{})},196:function(t,e,n){"use strict";n(30);var r=n(4),a=n.n(r),s=(n(25),n(178),n(175)),i={name:"usesrInfo",props:{username:String,lang:String,version:String,skin:Number,score:Number},data:function(){return{us:s.a}},created:function(){},methods:{}},o=(n(186),n(3)),l=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info elevation-3"},[n("v-list",{staticClass:"py-0"},[n("v-list-tile",{staticClass:"grey lighten-4"},[n("v-list-tile-content",{staticClass:"user-info__photo"},[n("v-list-tile-avatar",{staticClass:"user-info__photo-avatar grey lighten-4",attrs:{size:"48",tile:""}},[n("v-img",{staticClass:"lighten-4",attrs:{src:t.us.photoUrl(t.username,96)}})],1)],1),n("v-list-tile-content",{staticClass:"user-info__lang grey lighten-2"},[n("v-list-tile-avatar",{staticClass:"user-info__lang-avatar",attrs:{size:"48",tile:""}},[n("v-img",{staticClass:"lighten-2",attrs:{src:t.us.langUrl(t.lang)}})],1)],1),n("v-list-tile-content",{staticClass:"text-xs-center user-info__skin",style:"background: green url("+t.us.hiveUrl(t.skin)+");"},[n("img",{staticClass:"mx-auto",attrs:{src:t.us.antUrl(t.skin),width:"20"}}),n("v-list-tile-sub-title",{staticClass:"black--text user-info__version"},[t._v("v."+t._s(t.version))])],1),n("v-list-tile-content",{staticClass:"px-3"},[n("v-list-tile-title",{staticClass:"font-weight-bold"},[n("nuxt-link",{staticClass:"user-info__link",attrs:{to:{path:"/user/?username="+t.username}}},[t._v(t._s(t.username))])],1)],1),n("v-list-tile-content",{staticClass:"px-3 orange lighten-5"},[n("v-list-tile-sub-title",{staticClass:"orange--text title font-weight-bold"},[t._v(t._s(t.score)),n("v-avatar",{attrs:{size:"20"}},[n("v-icon",{staticClass:"ml-1 orange--text text--lighten-1",attrs:{size:"20"}},[t._v("bubble_chart")])],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);l.options.__file="UserInfo.vue";var u,c=l.exports,f=n(176),h=n.n(f),p=n(177),d=n.n(p),v=n(62),g=n.n(v).a.create({baseURL:"https://search.anthive.io/",timeout:3e3}),m=new(function(){function t(){h()(this,t)}var e;return d()(t,[{key:"wrap",value:function(t){return{params:{source:JSON.stringify(t),source_content_type:"application/json"}}}},{key:"searchGames",value:(e=a()(regeneratorRuntime.mark(function t(e,n,r,a){var s,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/games-prod/_search",s={size:r,sort:e,from:r*(n-1),query:{bool:{filter:a}}},t.next=4,g.get("/games-prod/_search",this.wrap(s));case 4:if(200!=(i=t.sent).status){t.next=7;break}return t.abrupt("return",i.data.hits);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}},t,this)})),function(t,n,r,a){return e.apply(this,arguments)})}]),t}()),y={name:"gamesTable",components:{userInfo:c},props:{PageSize:{type:Number,required:!0,default:function(){return 10}},Filters:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{us:s.a,loading:!1,pages:0,currentPage:1,sort:[],columns:[{text:"Ticks",align:"left",sortable:!0,value:"Age"},{text:"Wealth",align:"right",sortable:!0,sort:"desc",value:"Wealth"},{text:"Date",align:"right",sortable:!0,value:"Played"}],items:[]}},created:function(){this.preapareSort(),this.loadGames()},methods:{changePage:function(t){this.currentPage=t,this.loadGames()},doSort:function(t){t.sortable&&(null==t.sort?t.sort="asc":"asc"==t.sort?t.sort="desc":"desc"==t.sort&&(t.sort=null),this.preapareSort(),this.loadGames())},preapareSort:function(){var t=this;this.sort=[],this.columns.forEach(function(e){if(null!=e.sort){var n={};n[e.value]=e.sort,t.sort.push(n)}})},dataTableClasses:function(t){return["column",t.sortable?"sortable":"",null!=t.sort?"active":""]},openGame:function(t){this.$router.push("/game/?id="+t._id+"&v="+t._source.Version)},getColumnData:function(t,e){var n="";switch(e.value){case"Age":n=t._source.Age;break;case"Played":n=this.us.timeAgo(t._source.Played)+"<br><span class='grey--text'>by "+t._source.Author+"</span>";break;case"Wealth":n=t._source.Wealth}return n},loadGames:(u=a()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,m.searchGames(this.sort,this.currentPage,this.PageSize,this.Filters).then(function(t){null!=t&&(e.pages=Math.ceil(t.total/e.PageSize),e.items=t.hits),e.loading=!1});case 2:case"end":return t.stop()}},t,this)})),function(){return u.apply(this,arguments)})}},b=(n(188),Object(o.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"games-table"}},[n("v-data-table",{staticClass:"text-xs-center",attrs:{"hide-actions":"",loading:t.loading,headers:t.columns,items:t.items},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("th",{staticClass:"text-xs-left"},[t._v("Players")]),t._l(e.headers,function(e,r){return n("th",{key:r,class:t.dataTableClasses(e),on:{click:function(n){t.doSort(e)}}},[t._v(t._s(e.text)),e.hasOwnProperty("sort")&&"desc"==e.sort?n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]):t._e(),e.hasOwnProperty("sort")&&"asc"==e.sort?n("v-icon",{attrs:{small:""}},[t._v("arrow_downward")]):t._e()],1)})]}},{key:"items",fn:function(e){return[n("tr",{staticStyle:{cursor:"pointer"}},[n("td",{staticClass:"py-1 text-xs-left",on:{click:function(n){if(n.target!==n.currentTarget)return null;t.openGame(e.item)}}},t._l(e.item._source.Players,function(t,e){return n("userInfo",{key:t.id,staticClass:"my-1 mr-3",attrs:{username:t.Username,lang:t.Lang,version:t.Version,skin:t.Skin,score:t.Wealth}})})),t._l(t.columns,function(r,a){return n("td",{key:a,staticClass:"games-table__meta subheading",domProps:{innerHTML:t._s(t.getColumnData(e.item,r))},on:{click:function(n){t.openGame(e.item)}}})})],2)]}}])}),n("v-toolbar",{attrs:{flat:""}},[n("v-pagination",{staticClass:"mx-auto",attrs:{length:t.pages,"total-visible":"10",color:"orange darken-3"},on:{input:function(e){t.changePage(e)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},[],!1,null,null,null));b.options.__file="gamesTable.vue";e.a=b.exports},207:function(t,e,n){"use strict";var r=n(183);n.o(r,"GChart")&&n.d(e,"GChart",function(){return r.GChart})},208:function(t,e,n){"use strict";var r=n(193);n.n(r).a},209:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n#user-chart{height:auto;background:#fff3e0\n}",""])},210:function(t,e,n){"use strict";var r=n(194);n.n(r).a},211:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n.user__card-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}",""])},215:function(t,e,n){"use strict";n.r(e);n(25);var r=n(207),a={name:"Chart",data:function(){return{chartData:[["Day","Score","Avg Score"]],chartOptions:{title:"Company Performance",height:"auto",vAxis:{title:"Score"},hAxis:{title:"Dayly performance"},seriesType:"bars",series:{1:{type:"line"}},colors:["FFE0B2","#FB8C00"],backgroundColor:{fill:"#FFF3E0"}}}},mounted:function(){(null!=this.values||this.values.length>0)&&(this.chartData=this.chartData.concat(this.values)),this.chartOptions.title=this.title,this.chartOptions.title=this.title,this.chartOptions.hAxis.title=this.xName,this.chartOptions.vAxis.title=this.yName},props:{title:{type:String,default:""},values:{type:Array,required:!1},xName:{type:String,default:"Dayly performance"},yName:{type:String,default:"Score"}},components:{GChart:r.GChart}},s=(n(208),n(3)),i=Object(s.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("GChart",{attrs:{type:"ColumnChart",data:this.chartData,options:this.chartOptions,settings:{packages:["corechart"]}}})},[],!1,null,null,null);i.options.__file="chart.vue";var o=i.exports,l=n(196),u=n(175),c=(n(62),{name:"user",data:function(){return{status:null,user:{},us:u.a,filters:[],userChartData:[["Jan 1",938,522],["Jan 2",1120,599],["Jan 3",1167,587],["Jan 4",1110,615],["Jan 5",691,629],["Jan 6",712,810],["Jan 7",810,950],["Jan 8",950,1100],["Jan 9",1100,1350],["Jan 10",1200,1150]]}},created:function(){var t=this,e=this.$route.query.username;""==e&&this.$router.push("/leaderboard"),this.filters=[{term:{"Players.Username.keyword":e}}],this.us.getUserdata(e).then(function(e){t.user=e})},components:{gamesTable:l.a,Chart:o}}),f=(n(210),Object(s.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user"}},[n("v-container",{staticClass:"pb-0"},[n("v-layout",{attrs:{row:"",wrap:"","mt-5":"","pt-3":""}},[n("v-flex",{staticClass:"mr-4 mb-4",attrs:{shrink:""}},[n("v-card",{attrs:{"max-width":"250"}},[t.user.avatar?n("v-img",{attrs:{"min-width":"250",src:t.user.avatar}}):t._e(),n("v-card-title",[n("h3",{staticClass:"headline"},[t._v(t._s(t.user.name))])]),t.user.company?n("v-card-text",{staticClass:"user__card-text pt-0"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"20"}},[t._v("people")]),n("span",[t._v(t._s(t.user.company))])],1):t._e(),t.user.location?n("v-card-text",{staticClass:"user__card-text pt-0"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"20"}},[t._v("place")]),n("span",[t._v(t._s(t.user.location))])],1):t._e(),t.user.blog?n("v-card-text",{staticClass:"user__card-text pt-0"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"20"}},[t._v("public")]),n("a",{attrs:{href:t.user.blog,target:"_blank"}},[t._v(t._s(t.user.blog))])],1):t._e()],1)],1),n("v-flex",{staticClass:"mb-4 pa-0",attrs:{grow:""}},[n("h3",{staticClass:"headline mt-1 mb-3"},[t._v("Bot performance in the last 10 days")]),n("Chart",{staticClass:"elevation-1",attrs:{values:t.userChartData,username:"kezlya"}})],1)],1),n("v-flex",{attrs:{grow:""}},[n("h3",{staticClass:"headline mt-1 mb-3"},[t._v("User games:")]),n("gamesTable",{attrs:{Filters:t.filters,PageSize:17}})],1)],1)],1)},[],!1,null,null,null));f.options.__file="user.vue";e.default=f.exports}}]);