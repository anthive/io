(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{175:function(t,e,n){"use strict";n(96),n(31);var a=n(176),r=n.n(a),s=n(177),i=n.n(s),o=n(62),l=n.n(o),u=function(){function t(){r()(this,t)}return i()(t,null,[{key:"getUserdata",value:function(t){var e=this;return l.a.create({baseURL:"https://api.github.com/",timeout:3e3}).get("users/"+t).then(function(n){var a=n.data;return{name:null!=a.name?a.name:t,avatar:e.photoUrl(t,250),company:a.company,location:a.location,blog:""!=a.blog?a.blog:null}}).catch(function(n){if(404==n.response.status)return{name:t,avatar:e.photoUrl(t,250),company:null,location:null,blog:null}})}},{key:"photoUrl",value:function(t,e){return t.startsWith("sample-")?this.langUrl(t.substring(7)):"https://github.com/"+t+".png?size="+e}},{key:"langUrl",value:function(t){return"https://anthive.io/skins/lang/"+t+".png"}},{key:"skinUrl",value:function(t){return"https://anthive.io/skins/client/"+t+"/ant.png"}},{key:"scoreString",value:function(t){var e=Math.floor(((""+t).length-1)/3);return parseFloat((0!=e?t/Math.pow(1e3,e):t).toPrecision(2))+["","K","M","B","t"][e]}},{key:"timeAgo",value:function(t){var e=Math.round(new Date)-t,n=2592e6,a=6048e5,r=864e5,s=36e5,i=6e4,o=1e3;return e>n?Math.floor(e/n)+"m ago":e>a?Math.floor(e/a)+"w ago":e>r?Math.floor(e/r)+"d ago":e>s?Math.floor(e/s)+"h ago":e>i?Math.floor(e/i)+"m ago":e>o?Math.floor(e/o)+"s ago":"Just now"}}]),t}();e.a=u},176:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},177:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}t.exports=function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}},178:function(t,e,n){var a=n(186);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(14).default)("3dc6f460",a,!0,{})},179:function(t,e,n){var a=n(188);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(14).default)("f62ad240",a,!0,{})},180:function(t,e,n){"use strict";var a=n(2),r=n(17),s=n(20),i=n(97),o=n(46),l=n(11),u=n(47).f,c=n(64).f,f=n(9).f,h=n(183).trim,g=a.Number,p=g,v=g.prototype,m="Number"==s(n(63)(v)),d="trim"in String.prototype,_=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var n,a,r,s=(e=d?e.trim():h(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var i,l=e.slice(2),u=0,c=l.length;u<c;u++)if((i=l.charCodeAt(u))<48||i>r)return NaN;return parseInt(l,a)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(m?l(function(){v.valueOf.call(n)}):"Number"!=s(n))?i(new p(_(e)),n,g):_(e)};for(var b,x=n(6)?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)r(p,b=x[y])&&!r(g,b)&&f(g,b,c(p,b));g.prototype=v,v.constructor=g,n(12)(a,"Number",g)}},183:function(t,e,n){var a=n(8),r=n(19),s=n(11),i=n(184),o="["+i+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var r={},o=s(function(){return!!i[t]()||"​"!="​"[t]()}),l=r[t]=o?e(f):i[t];n&&(r[n]=l),a(a.P+a.F*o,"String",r)},f=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},184:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},185:function(t,e,n){"use strict";var a=n(178);n.n(a).a},186:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n.user-info{display:inline-block;border-radius:10px;overflow:hidden;transition:all .5s ease\n}\n.user-info:hover{margin-right:0\n}\n.v-list__tile{padding:0\n}\n.v-list__tile:hover>.user-info__lang,.v-list__tile:hover>.user-info__skin{margin-left:-8px\n}\n.user-info__photo-avatar{z-index:2\n}\n.user-info__lang{margin-left:-56px;transition:all .5s ease\n}\n.user-info__lang-avatar{z-index:1\n}\n.user-info__skin{width:48px;margin-left:-56px;transition:all .5s ease\n}\n.user-info__version{position:relative;bottom:-2px;background:hsla(0,0%,100%,.8)\n}",""])},187:function(t,e,n){"use strict";var a=n(179);n.n(a).a},188:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n.games-table__meta{min-width:150px\n}",""])},189:function(t,e,n){var a=n(199);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(14).default)("80e5090c",a,!0,{})},195:function(t,e,n){"use strict";n(30);var a=n(4),r=n.n(a),s=(n(25),n(180),{name:"usesrInfo",props:{username:String,photo:String,lang:String,version:String,skin:String,hive:String,score:Number},data:function(){return{hiveStatic:"background: green url(https://anthive.io/skins/client/1/hive.png);"}},created:function(){},methods:{}}),i=(n(185),n(3)),o=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info"},[n("v-list",{staticClass:"py-0"},[n("v-list-tile",{staticClass:"grey lighten-4"},[n("v-list-tile-content",[n("v-list-tile-avatar",{staticClass:"user-info__photo-avatar",attrs:{size:"48",tile:""}},[n("v-img",{staticClass:"grey lighten-4",attrs:{src:t.photo}})],1)],1),n("v-list-tile-content",{staticClass:"user-info__lang"},[n("v-list-tile-avatar",{staticClass:"user-info__lang-avatar",attrs:{size:"48",tile:""}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:t.lang}})],1)],1),n("v-list-tile-content",{staticClass:"text-xs-center user-info__skin",style:t.hiveStatic},[n("img",{staticClass:"mx-auto",attrs:{src:t.skin,width:"20"}}),n("v-list-tile-sub-title",{staticClass:"caption user-info__version"},[t._v("v."+t._s(t.version))])],1),n("v-list-tile-content",{staticClass:"px-3"},[n("v-list-tile-title",{staticClass:"font-weight-bold"},[t._v(t._s(t.username))])],1),n("v-list-tile-content",{staticClass:"px-3 orange lighten-5"},[n("v-list-tile-sub-title",{staticClass:"orange--text text--lighten-2 title font-weight-bold"},[t._v(t._s(t.score)),n("v-avatar",{attrs:{size:"40"}},[n("v-icon",{staticClass:"ml-1 orange--text text--lighten-1",attrs:{size:"40"}},[t._v("bubble_chart")])],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);o.options.__file="UserInfo.vue";var l,u=o.exports,c=n(175),f=n(176),h=n.n(f),g=n(177),p=n.n(g),v=n(62),m=n.n(v).a.create({baseURL:"https://search.anthive.io/",timeout:3e3}),d=new(function(){function t(){h()(this,t)}var e;return p()(t,[{key:"wrap",value:function(t){return{params:{source:JSON.stringify(t),source_content_type:"application/json"}}}},{key:"searchGames",value:(e=r()(regeneratorRuntime.mark(function t(e,n,a,r){var s,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/games-prod/_search",s={size:a,sort:e,from:a*(n-1),query:{bool:{filter:r}}},t.next=4,m.get("/games-prod/_search",this.wrap(s));case 4:if(200!=(i=t.sent).status){t.next=7;break}return t.abrupt("return",i.data.hits);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}},t,this)})),function(t,n,a,r){return e.apply(this,arguments)})}]),t}()),_={name:"gamesTable",components:{userInfo:u},props:{PageSize:{type:Number,required:!0,default:function(){return 10}},Filters:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{us:c.a,loading:!1,pages:0,currentPage:1,sort:[],columns:[{text:"Ticks",align:"left",sortable:!0,value:"Age"},{text:"Wealth",align:"right",sortable:!0,sort:"desc",value:"Wealth"},{text:"Date",align:"right",sortable:!0,value:"Played"}],items:[]}},created:function(){this.preapareSort(),this.loadGames()},methods:{changePage:function(t){this.currentPage=t,this.loadGames()},doSort:function(t){t.sortable&&(null==t.sort?t.sort="asc":"asc"==t.sort?t.sort="desc":"desc"==t.sort&&(t.sort=null),this.preapareSort(),this.loadGames())},preapareSort:function(){var t=this;this.sort=[],this.columns.forEach(function(e){if(null!=e.sort){var n={};n[e.value]=e.sort,t.sort.push(n)}})},dataTableClasses:function(t){return["column",t.sortable?"sortable":"",null!=t.sort?"active":""]},openGame:function(t){this.$router.push("/game/?id="+t._id+"&v="+t._source.Version)},getColumnData:function(t,e){var n="";switch(e.value){case"Age":n=t._source.Age;break;case"Played":n=this.us.timeAgo(t._source.Played)+"<br><span class='grey--text'>by "+t._source.Author+"</span>";break;case"Wealth":n=t._source.Wealth}return n},loadGames:(l=r()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,d.searchGames(this.sort,this.currentPage,this.PageSize,this.Filters).then(function(t){null!=t&&(e.pages=Math.ceil(t.total/e.PageSize),e.items=t.hits),e.loading=!1});case 2:case"end":return t.stop()}},t,this)})),function(){return l.apply(this,arguments)})}},b=(n(187),Object(i.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"games-table"}},[n("v-data-table",{staticClass:"text-xs-center",attrs:{"hide-actions":"",loading:t.loading,headers:t.columns,items:t.items},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("th",{staticClass:"text-xs-left"},[t._v("Players")]),t._l(e.headers,function(e,a){return n("th",{key:a,class:t.dataTableClasses(e),on:{click:function(n){t.doSort(e)}}},[t._v(t._s(e.text)),e.hasOwnProperty("sort")&&"desc"==e.sort?n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]):t._e(),e.hasOwnProperty("sort")&&"asc"==e.sort?n("v-icon",{attrs:{small:""}},[t._v("arrow_downward")]):t._e()],1)})]}},{key:"items",fn:function(e){return[n("tr",{staticStyle:{cursor:"pointer"},on:{click:function(n){t.openGame(e.item)}}},[n("td",{staticClass:"py-1 text-xs-left"},t._l(e.item._source.Players,function(e,a){return n("userInfo",{key:e.id,staticClass:"my-1 mr-3",attrs:{username:e.Username,photo:t.us.photoUrl(e.Username,50),lang:t.us.langUrl(e.Lang),version:e.Version,skin:t.us.skinUrl(e.Skin),hive:"",score:e.Wealth}})})),t._l(t.columns,function(a,r){return n("td",{key:r,staticClass:"games-table__meta subheading",domProps:{innerHTML:t._s(t.getColumnData(e.item,a))}})})],2)]}}])}),n("v-toolbar",{attrs:{flat:""}},[n("v-pagination",{staticClass:"mx-auto",attrs:{length:t.pages,"total-visible":"10",color:"orange darken-3"},on:{input:function(e){t.changePage(e)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},[],!1,null,null,null));b.options.__file="gamesTable.vue";e.a=b.exports},198:function(t,e,n){"use strict";var a=n(189);n.n(a).a},199:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n.games__card{margin-top:-178px\n}",""])},213:function(t,e,n){"use strict";n.r(e);var a=n(175),r={name:"defaultHeader",data:function(){return{us:a.a,filters:[],user:{}}},created:function(){this.filters=[{term:{Age:1e3}},{range:{Wealth:{gte:1e3,lte:3e3}}}]},components:{GamesTable:n(195).a}},s=(n(198),n(3)),i=Object(s.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section section-lg pt-lg-0"},[e("v-parallax",{attrs:{src:"/img/home_bg.png",align:"",height:"300"}}),e("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[e("v-flex",{attrs:{xs12:"",md8:"",offset2:""}},[e("v-card",{staticClass:"games__card white text-xs-left pa-3 elevation-6 rules__card",attrs:{flat:"",tile:""}},[e("v-card-title",[e("h1",{staticClass:"headline"},[e("span",{staticClass:"grey--text"},[this._v("All battles:")]),e("span",{staticClass:"ml-2"},[this._v("Explore, watch, replay, learn strategies")])])]),e("v-card-text",[e("GamesTable",{attrs:{Filters:this.filters,PageSize:17,ShowTitle:!1}})],1)],1)],1)],1)],1)},[],!1,null,null,null);i.options.__file="games.vue";e.default=i.exports}}]);