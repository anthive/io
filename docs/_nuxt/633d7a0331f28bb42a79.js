(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,e,n){"use strict";n(110),n(58);var r=n(183),o=n(184),l=n(74),c=n.n(l),f="https://anthive.io/",h=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"getUserdata",value:function(t){var e=this;return c.a.create({baseURL:"https://api.github.com/",timeout:3e3}).get("users/"+t).then((function(n){var r=n.data;return{name:null!=r.name?r.name:t,avatar:e.photoUrl(t,250),company:r.company,location:r.location,blog:""!=r.blog?r.blog:null}})).catch((function(n){if(404==n.response.status)return{name:t,avatar:e.photoUrl(t,250),company:null,location:null,blog:null}}))}},{key:"photoUrl",value:function(t,e){return t.startsWith("sample-")?this.langUrl(t.substring(7)):"https://github.com/"+t+".png?size="+e}},{key:"langUrl",value:function(t){return f+"skins/lang/"+t+".png"}},{key:"antUrl",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?f+"skins/client/"+t+"/antBig.png":f+"skins/client/"+t+"/ant.png"}},{key:"hiveUrl",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?f+"skins/client/"+t+"/hiveBig.png":f+"skins/client/"+t+"/hive.png"}},{key:"scoreString",value:function(t){var e=Math.floor(((""+t).length-1)/3);return parseFloat((0!=e?t/Math.pow(1e3,e):t).toPrecision(2))+["","K","M","B","t"][e]}},{key:"timeAgo",value:function(t){var e=Math.round(new Date)-t,n=2592e6,r=6048e5,o=864e5,l=36e5,c=6e4,f=1e3;return e>n?Math.floor(e/n)+"m ago":e>r?Math.floor(e/r)+"w ago":e>o?Math.floor(e/o)+"d ago":e>l?Math.floor(e/l)+"h ago":e>c?Math.floor(e/c)+"m ago":e>f?Math.floor(e/f)+"s ago":"Just now"}}]),t}();e.a=h},183:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},184:function(t,e,n){"use strict";function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},185:function(t,e,n){"use strict";var r=n(3),o=n(17),l=n(23),c=n(111),f=n(59),h=n(11),v=n(42).f,d=n(60).f,m=n(10).f,_=n(188).trim,x=r.Number,y=x,k=x.prototype,w="Number"==l(n(75)(k)),C="trim"in String.prototype,N=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=C?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(w?h((function(){k.valueOf.call(n)})):"Number"!=l(n))?c(new y(N(e)),n,x):N(e)};for(var S,P=n(9)?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;P.length>I;I++)o(y,S=P[I])&&!o(x,S)&&m(x,S,d(y,S));x.prototype=k,k.constructor=x,n(12)(r,"Number",x)}},186:function(t,e,n){var content=n(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("311f7e6f",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("b47cfd22",content,!0,{sourceMap:!1})},188:function(t,e,n){var r=n(8),o=n(22),l=n(11),c=n(189),f="["+c+"]",h=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),d=function(t,e,n){var o={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=o[t]=f?e(m):c[t];n&&(o[n]=h),r(r.P+r.F*f,"String",o)},m=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(v,"")),t};t.exports=d},189:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},193:function(t,e,n){"use strict";var r=n(186);n.n(r).a},194:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,".user-info{position:relative;display:inline-block;border-radius:10px;overflow:hidden;cursor:default;z-index:3;transition:all .5s ease}.v-list__tile{padding:0}.user-info__photo{width:48px}.user-info__photo-avatar{z-index:2}.user-info__photo:hover+.user-info__lang{margin-left:47px}.user-info__photo:hover~.user-info__skin{margin-left:94px}.user-info__lang{position:absolute;width:48px;z-index:1;transition:all .5s ease}.user-info__lang-avatar{z-index:1}.user-info__skin{position:absolute;width:48px;z-index:1;transition:all .5s ease}.user-info__version{position:relative;bottom:-2px;background:hsla(0,0%,100%,.8)}.user-info__link{text-decoration:none}.user-info__link:hover{text-decoration:underline}",""])},195:function(t,e,n){"use strict";var r=n(187);n.n(r).a},196:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,".games-table__meta{min-width:100px}",""])},197:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("dd72b66a",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n(32);var r,o=n(4),l=(n(185),n(182)),c={name:"usesrInfo",props:{username:String,lang:String,version:String,skin:Number,score:Number},data:function(){return{us:l.a}},created:function(){},methods:{}},f=(n(193),n(6)),h=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info elevation-3"},[n("v-list",{staticClass:"py-0"},[n("v-list-tile",{staticClass:"grey lighten-4"},[n("v-list-tile-content",{staticClass:"user-info__photo"},[n("v-list-tile-avatar",{staticClass:"user-info__photo-avatar grey lighten-4",attrs:{size:"48",tile:""}},[n("v-img",{staticClass:"lighten-4",attrs:{src:t.us.photoUrl(t.username,96)}})],1)],1),n("v-list-tile-content",{staticClass:"user-info__lang grey lighten-2"},[n("v-list-tile-avatar",{staticClass:"user-info__lang-avatar",attrs:{size:"48",tile:""}},[n("v-img",{staticClass:"lighten-2",attrs:{src:t.us.langUrl(t.lang)}})],1)],1),n("v-list-tile-content",{staticClass:"text-xs-center user-info__skin",style:"background: green url("+t.us.hiveUrl(t.skin)+");"},[n("img",{staticClass:"mx-auto",attrs:{src:t.us.antUrl(t.skin),width:"20"}}),n("v-list-tile-sub-title",{staticClass:"black--text user-info__version"},[t._v("v."+t._s(t.version))])],1),n("v-list-tile-content",{staticClass:"px-3"},[n("v-list-tile-title",{staticClass:"font-weight-bold"},[n("a",{staticClass:"user-info__link",attrs:{href:"/user/?username="+t.username}},[t._v(t._s(t.username))])])],1),n("v-list-tile-content",{staticClass:"px-3 orange lighten-5"},[n("v-list-tile-sub-title",{staticClass:"orange--text title font-weight-bold"},[t._v(t._s(t.score)),n("v-avatar",{attrs:{size:"20"}},[n("v-icon",{staticClass:"ml-1 orange--text text--lighten-1",attrs:{size:"20"}},[t._v("bubble_chart")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,v=n(183),d=n(184),m=n(74),_=n.n(m).a.create({baseURL:"https://search.anthive.io/",timeout:3e3}),x=new(function(){function t(){Object(v.a)(this,t)}var e;return Object(d.a)(t,[{key:"wrap",value:function(t){return{params:{source:JSON.stringify(t),source_content_type:"application/json"}}}},{key:"searchGames",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e,n,r,filter){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={size:r,sort:e,from:r*(n-1),query:{bool:{filter:filter}}},t.next=4,_.get("/games-prod/_search",this.wrap(o));case 4:if(200!=(l=t.sent).status){t.next=7;break}return t.abrupt("return",l.data.hits);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t,this)}))),function(t,n,r,o){return e.apply(this,arguments)})}]),t}()),y={name:"gamesTable",components:{userInfo:h},props:{PageSize:{type:Number,required:!0,default:function(){return 10}},Filters:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{us:l.a,loading:!1,pages:0,currentPage:1,sort:[],columns:[{text:"Ticks",align:"left",sortable:!0,value:"Age"},{text:"Wealth",align:"right",sortable:!0,sort:"desc",value:"Wealth"},{text:"Date",align:"right",sortable:!0,value:"Played"}],items:[]}},created:function(){this.preapareSort(),this.loadGames()},methods:{changePage:function(t){this.currentPage=t,this.loadGames()},doSort:function(t){t.sortable&&(null==t.sort?t.sort="asc":"asc"==t.sort?t.sort="desc":"desc"==t.sort&&(t.sort=null),this.preapareSort(),this.loadGames())},preapareSort:function(){var t=this;this.sort=[],this.columns.forEach((function(col){if(null!=col.sort){var e={};e[col.value]=col.sort,t.sort.push(e)}}))},dataTableClasses:function(t){return["column",t.sortable?"sortable":"",null!=t.sort?"active":""]},openGame:function(data){this.$router.push("/game/?id="+data._id+"&v="+data._source.Version)},getColumnData:function(data,t){var e="";switch(t.value){case"Age":e=data._source.Age;break;case"Played":e=this.us.timeAgo(data._source.Played)+"<br><span class='grey--text'>by "+data._source.Author+"</span>";break;case"Wealth":e=data._source.Wealth}return e},loadGames:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,x.searchGames(this.sort,this.currentPage,this.PageSize,this.Filters).then((function(t){null!=t&&(e.pages=Math.ceil(t.total/e.PageSize),e.items=t.hits),e.loading=!1}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},k=(n(195),Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"games-table"}},[n("v-data-table",{staticClass:"text-xs-center",attrs:{"hide-actions":"",loading:t.loading,headers:t.columns,items:t.items},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("th",{staticClass:"text-xs-left"},[t._v("Players")]),t._l(e.headers,(function(e,r){return n("th",{key:r,class:t.dataTableClasses(e),on:{click:function(n){return t.doSort(e)}}},[t._v(t._s(e.text)),e.hasOwnProperty("sort")&&"desc"==e.sort?n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]):t._e(),e.hasOwnProperty("sort")&&"asc"==e.sort?n("v-icon",{attrs:{small:""}},[t._v("arrow_downward")]):t._e()],1)}))]}},{key:"items",fn:function(e){return[n("tr",{staticStyle:{cursor:"pointer"}},[n("td",{staticClass:"py-1 text-xs-left",on:{click:function(n){return n.target!==n.currentTarget?null:t.openGame(e.item)}}},t._l(e.item._source.Players,(function(t,e){return n("userInfo",{key:t.id,staticClass:"my-1 mr-3",attrs:{username:t.Username,lang:t.Lang,version:t.Version,skin:t.Skin,score:t.Wealth}})})),1),t._l(t.columns,(function(r,o){return n("td",{key:o,staticClass:"games-table__meta subheading",domProps:{innerHTML:t._s(t.getColumnData(e.item,r))},on:{click:function(n){return t.openGame(e.item)}}})}))],2)]}}])}),n("v-toolbar",{attrs:{flat:""}},[n("v-pagination",{staticClass:"mx-auto",attrs:{length:t.pages,"total-visible":"10",color:"orange darken-3"},on:{input:function(e){return t.changePage(e)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null));e.a=k.exports},208:function(t,e,n){"use strict";var r=n(197);n.n(r).a},209:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,".games__card{margin-top:-178px}",""])},225:function(t,e,n){"use strict";n.r(e);var r=n(182),o={name:"defaultHeader",data:function(){return{us:r.a,filters:[],user:{}}},created:function(){this.filters=[{term:{Age:1e3}},{range:{Wealth:{gte:1e3,lte:3e3}}}]},components:{GamesTable:n(203).a}},l=(n(208),n(6)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section section-lg pt-lg-0"},[e("v-parallax",{attrs:{src:"/img/home_bg.png",align:"",height:"300"}}),e("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[e("v-flex",{attrs:{xs12:"",md8:"",offset2:""}},[e("v-card",{staticClass:"games__card white text-xs-left pa-3 elevation-6 rules__card",attrs:{flat:"",tile:""}},[e("v-card-title",[e("h1",{staticClass:"headline"},[e("span",{staticClass:"grey--text"},[this._v("All battles:")]),e("span",{staticClass:"ml-2"},[this._v("Explore, watch, replay, learn strategies")])])]),e("v-card-text",[e("GamesTable",{attrs:{Filters:this.filters,PageSize:17,ShowTitle:!1}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);