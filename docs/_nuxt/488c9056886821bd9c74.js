(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{192:function(t,e,r){"use strict";r(110),r(58);var n=r(193),o=r(194),l=r(75),c=r.n(l),f="https://anthive.io/",h=function(){function t(){Object(n.a)(this,t)}return Object(o.a)(t,null,[{key:"getUserdata",value:function(t){var e=this;return c.a.create({baseURL:"https://api.github.com/",timeout:3e3}).get("users/"+t).then((function(r){var n=r.data;return{name:null!=n.name?n.name:t,avatar:e.photoUrl(t,250),company:n.company,location:n.location,blog:""!=n.blog?n.blog:null}})).catch((function(r){if(404==r.response.status)return{name:t,avatar:e.photoUrl(t,250),company:null,location:null,blog:null}}))}},{key:"photoUrl",value:function(t,e){return t.startsWith("sample-")?this.langUrl(t.substring(7)):"https://github.com/"+t+".png?size="+e}},{key:"langUrl",value:function(t){return f+"skins/lang/"+t+".png"}},{key:"antUrl",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?f+"skins/client/"+t+"/antBig.png":f+"skins/client/"+t+"/ant.png"}},{key:"hiveUrl",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?f+"skins/client/"+t+"/hiveBig.png":f+"skins/client/"+t+"/hive.png"}},{key:"scoreString",value:function(t){var e=Math.floor(((""+t).length-1)/3);return parseFloat((0!=e?t/Math.pow(1e3,e):t).toPrecision(2))+["","K","M","B","t"][e]}},{key:"timeAgo",value:function(t){var e=Math.round(new Date)-t,r=2592e6,n=6048e5,o=864e5,l=36e5,c=6e4,f=1e3;return e>r?Math.floor(e/r)+"m ago":e>n?Math.floor(e/n)+"w ago":e>o?Math.floor(e/o)+"d ago":e>l?Math.floor(e/l)+"h ago":e>c?Math.floor(e/c)+"m ago":e>f?Math.floor(e/f)+"s ago":"Just now"}}]),t}();e.a=h},193:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},194:function(t,e,r){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))},195:function(t,e,r){"use strict";var n=r(3),o=r(19),l=r(25),c=r(111),f=r(59),h=r(11),d=r(42).f,v=r(60).f,m=r(10).f,_=r(198).trim,x=n.Number,k=x,y=x.prototype,w="Number"==l(r(76)(y)),C="trim"in String.prototype,N=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=C?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(w?h((function(){y.valueOf.call(r)})):"Number"!=l(r))?c(new k(N(e)),r,x):N(e)};for(var P,S=r(9)?d(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;S.length>I;I++)o(k,P=S[I])&&!o(x,P)&&m(x,P,v(k,P));x.prototype=y,y.constructor=x,r(12)(n,"Number",x)}},196:function(t,e,r){var content=r(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("d167c114",content,!0,{sourceMap:!1})},197:function(t,e,r){var content=r(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("b47cfd22",content,!0,{sourceMap:!1})},198:function(t,e,r){var n=r(8),o=r(24),l=r(11),c=r(199),f="["+c+"]",h=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),v=function(t,e,r){var o={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=o[t]=f?e(m):c[t];r&&(o[r]=h),n(n.P+n.F*f,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(d,"")),t};t.exports=v},199:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},203:function(t,e,r){"use strict";var n=r(196);r.n(n).a},204:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".user-info[data-v-59fb129e]{height:48px;max-width:300px;position:relative;border-radius:8px;overflow:hidden;cursor:default;z-index:3}.user-info__avatar[data-v-59fb129e]{border-radius:0;z-index:2}.user-info__avatar:hover+.user-info__avatar-lang[data-v-59fb129e]{margin-left:47px}.user-info__avatar:hover~.user-info__skin[data-v-59fb129e]{margin-left:94px}.user-info__avatar-lang[data-v-59fb129e],.user-info__skin[data-v-59fb129e]{position:absolute;z-index:1;transition:all .5s ease}.user-info__skin[data-v-59fb129e]{width:48px}.user-info__version[data-v-59fb129e]{background:hsla(0,0%,100%,.8)}.user-info__link[data-v-59fb129e]:hover{text-decoration:underline}",""])},205:function(t,e,r){"use strict";var n=r(197);r.n(n).a},206:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".games-table__meta{min-width:100px}",""])},207:function(t,e,r){var content=r(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("dd72b66a",content,!0,{sourceMap:!1})},217:function(t,e,r){"use strict";r(32);var n,o=r(4),l=(r(195),r(192)),c={name:"usesrInfo",props:{username:String,lang:String,version:String,skin:Number,score:Number},data:function(){return{us:l.a}},created:function(){},methods:{}},f=(r(203),r(7)),h=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-inline-block"},[r("div",{staticClass:"user-info grey lighten-4 elevation-3 d-flex"},[r("v-img",{staticClass:"user-info__avatar d-inline-block flex-grow-0 lighten-4",attrs:{src:t.us.photoUrl(t.username,96),width:"48",height:"48","aspect-ratio":"1"}}),r("v-img",{staticClass:"user-info__avatar-lang lighten-2",attrs:{src:t.us.langUrl(t.lang),width:"48",height:"48","aspect-ratio":"1"}}),r("div",{staticClass:"text-xs-center user-info__skin",style:"background: green url("+t.us.hiveUrl(t.skin)+");"},[r("v-img",{staticClass:"mx-auto",attrs:{src:t.us.antUrl(t.skin),width:"20"}}),r("span",{staticClass:"black--text text-center d-block user-info__version"},[t._v("v."+t._s(t.version))])],1),r("div",{staticClass:"text-center flex-grow-1 pt-3 px-5"},[r("a",{staticClass:"user-info__link black--text font-weight-bold",attrs:{href:"/user/?username="+t.username}},[t._v(t._s(t.username))])]),r("div",{staticClass:"orange lighten-5 pt-2"},[r("span",{staticClass:"orange--text title font-weight-bold mx-3"},[t._v(t._s(t.score)),r("v-icon",{staticClass:"orange--text text--lighten-1",attrs:{size:"20"}},[t._v("bubble_chart")])],1)])],1)])}),[],!1,null,"59fb129e",null).exports,d=r(193),v=r(194),m=r(75),_=r.n(m).a.create({baseURL:"https://search.anthive.io/",timeout:3e3}),x=new(function(){function t(){Object(d.a)(this,t)}var e;return Object(v.a)(t,[{key:"wrap",value:function(t){return{params:{source:JSON.stringify(t),source_content_type:"application/json"}}}},{key:"searchGames",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e,r,n,filter){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={size:n,sort:e,from:n*(r-1),query:{bool:{filter:filter}}},t.next=4,_.get("/games-prod/_search",this.wrap(o));case 4:if(200!=(l=t.sent).status){t.next=7;break}return t.abrupt("return",l.data.hits);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t,this)}))),function(t,r,n,o){return e.apply(this,arguments)})}]),t}()),k={name:"gamesTable",components:{userInfo:h},props:{PageSize:{type:Number,required:!0,default:function(){return 10}},Filters:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{us:l.a,loading:!1,pages:0,currentPage:1,sort:[],columns:[{text:"Ticks",align:"left",sortable:!0,value:"Age"},{text:"Wealth",align:"right",sortable:!0,sort:"desc",value:"Wealth"},{text:"Date",align:"right",sortable:!0,value:"Played"}],items:[]}},created:function(){this.preapareSort(),this.loadGames()},methods:{changePage:function(t){this.currentPage=t,this.loadGames()},doSort:function(t){t.sortable&&(null==t.sort?t.sort="asc":"asc"==t.sort?t.sort="desc":"desc"==t.sort&&(t.sort=null),this.preapareSort(),this.loadGames())},preapareSort:function(){var t=this;this.sort=[],this.columns.forEach((function(col){if(null!=col.sort){var e={};e[col.value]=col.sort,t.sort.push(e)}}))},dataTableClasses:function(t){return["column",t.sortable?"sortable":"",null!=t.sort?"active":""]},openGame:function(data){this.$router.push("/game/?id="+data._id+"&v="+data._source.Version)},getColumnData:function(data,t){var e="";switch(t.value){case"Age":e=data._source.Age;break;case"Played":e=this.us.timeAgo(data._source.Played)+"<br><span class='grey--text'>by "+data._source.Author+"</span>";break;case"Wealth":e=data._source.Wealth}return e},loadGames:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,x.searchGames(this.sort,this.currentPage,this.PageSize,this.Filters).then((function(t){null!=t&&(e.pages=Math.ceil(t.total/e.PageSize),console.log(t),e.items=t.hits),e.loading=!1}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},y=(r(205),Object(f.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"games-table"}},[r("v-data-table",{staticClass:"text-xs-center",attrs:{loading:t.loading,"loading-text":"Loading... Please wait",headers:t.columns,items:t.items,"hide-default-header":"","hide-default-footer":""},scopedSlots:t._u([{key:"header",fn:function(e){var n=e.props.headers;return[r("tr",[r("th",{staticClass:"text-xs-left"},[t._v("Players")]),t._l(n,(function(e,n){return r("th",{key:n,class:t.dataTableClasses(e),on:{click:function(r){return t.doSort(e)}}},[t._v(t._s(e.text)),e.hasOwnProperty("sort")&&"desc"==e.sort?r("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]):t._e(),e.hasOwnProperty("sort")&&"asc"==e.sort?r("v-icon",{attrs:{small:""}},[t._v("arrow_downward")]):t._e()],1)}))],2)]}},{key:"item",fn:function(e){var n=e.item;return[r("tr",{staticStyle:{cursor:"pointer"}},[r("td",{staticClass:"py-1 text-xs-left",on:{click:function(e){return e.target!==e.currentTarget?null:t.openGame(n)}}},t._l(n._source.Players,(function(t,e){return r("userInfo",{key:t.id,staticClass:"ma-3",attrs:{username:t.Username,lang:t.Lang,version:t.Version,skin:t.Skin,score:t.Wealth}})})),1),t._l(t.columns,(function(e,o){return r("td",{key:o,staticClass:"games-table__meta subheading",domProps:{innerHTML:t._s(t.getColumnData(n,e))},on:{click:function(e){return t.openGame(n)}}})}))],2)]}}])}),r("v-toolbar",{attrs:{flat:""}},[r("v-pagination",{staticClass:"mx-auto",attrs:{length:t.pages,"total-visible":"10",color:"orange darken-3"},on:{input:function(e){return t.changePage(e)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null));e.a=y.exports},222:function(t,e,r){"use strict";var n=r(207);r.n(n).a},223:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".games__card{margin-top:-178px}",""])},247:function(t,e,r){"use strict";r.r(e);var n=r(192),o={name:"defaultHeader",data:function(){return{us:n.a,filters:[],user:{}}},created:function(){this.filters=[{term:{Age:1e3}},{range:{Wealth:{gte:1e3,lte:3e3}}}]},components:{GamesTable:r(217).a}},l=(r(222),r(7)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("v-parallax",{attrs:{src:"/img/home_bg.png",height:"300"}}),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"11",md:"10"}},[e("v-card",{staticClass:"games__card white text-xs-left pa-3 elevation-6 ",attrs:{flat:"",tile:""}},[e("v-card-title",{staticClass:"mb-10"},[e("h1",{staticClass:"headline"},[e("span",{staticClass:"grey--text"},[this._v("All battles:")]),e("span",{staticClass:"ml-2"},[this._v("Explore, watch, replay, learn strategies")])])]),e("v-card-text",[e("GamesTable",{attrs:{Filters:this.filters,PageSize:17,ShowTitle:!1}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);