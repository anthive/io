(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{381:function(t,e,n){"use strict";var r=n(111),o={methods:{getBotAvatar:function(t,e){return t&&t.avatar?Object(r.a)(t.avatar,e):"/img/default-bot-avatar.png"},getUserAvatar:function(t,e){return t&&t.avatar?Object(r.a)(t.avatar,e):"/img/default-user-avatar.png"},getBotAuthorAvatar:function(t,e){return t&&t.userAvatar?Object(r.a)(t.userAvatar,e):"/img/default-user-avatar.png"},getUserBackgroundImage:function(t,e,n){return t&&Object(r.a)(t,e,n)},getLangImg:function(t){return t&&"/skins/lang/".concat(t,".png")},getAntSkinImg:function(t){return t&&"/skins/client/".concat(t,"/ant.png")},getHiveSkinImg:function(t){return t&&"/skins/client/".concat(t,"/hive.png")}}};e.a=o},382:function(t,e,n){var content=n(394);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("194aeac0",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";var r={methods:{getStringTruncated:function(t,e){return t.length>e?"".concat(t.substr(0,e-1),"..."):t},getNumberTruncated:function(t){return t<1e3?t:t<1e6?"".concat(Math.floor(t/10)/100,"K"):"".concat(Math.floor(t/1e4)/100,"M")}}};e.a=r},384:function(t){t.exports=JSON.parse('[{"id":"js","extention":"js","editor":"javascript","name":"Javascript","img":"https://anthive.io/skins/lang/js.png","sample":"https://github.com/anthive/js","sampleCode":"https://raw.githubusercontent.com/anthive/js/master/run.js"},{"id":"cpp","extention":"cpp","editor":"c_cpp","name":"C++","img":"https://anthive.io/skins/lang/cpp.png","sample":"https://github.com/anthive/cpp","sampleCode":"https://raw.githubusercontent.com/anthive/cpp/master/bot.cpp"},{"id":"cs","extention":"cs","editor":"csharp","name":"C#","img":"https://anthive.io/skins/lang/cs.png","sample":"https://github.com/anthive/cs","sampleCode":"https://raw.githubusercontent.com/anthive/cs/master/Bot.cs"},{"id":"go","extention":"go","editor":"golang","name":"Go","img":"https://anthive.io/skins/lang/go.png","sample":"https://github.com/anthive/go","sampleCode":"https://raw.githubusercontent.com/anthive/go/master/main.go"},{"id":"py","extention":"py","editor":"python","name":"Python","img":"https://anthive.io/skins/lang/py.png","sample":"https://github.com/anthive/py","sampleCode":"https://raw.githubusercontent.com/anthive/py/master/run.py"},{"id":"php","extention":"php","editor":"php","name":"PHP","img":"https://anthive.io/skins/lang/php.png","sample":"https://github.com/anthive/php","sampleCode":"https://raw.githubusercontent.com/anthive/php/master/run.php"},{"id":"rs","extention":"rs","editor":"rust","name":"Rust","img":"https://anthive.io/skins/lang/rs.png","sample":"https://github.com/anthive/rs","sampleCode":"https://raw.githubusercontent.com/anthive/rs/master/main.rs"}]')},385:function(t,e,n){"use strict";var r=n(49),o=n.n(r).a.create({baseURL:"".concat("https://api.anthive.io","/public"),timeout:15e3});e.a=o},386:function(t,e,n){"use strict";var r={name:"AntHivePageHeader",components:{AntHiveIcon:n(61).a},props:{title:{type:String,required:!0},subtitle:{type:String,required:!1,default:""},tooltipText:{type:String,required:!1,default:""}}},o=(n(393),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("h1",{staticClass:"page-header__title"},[t._v(t._s(t.title))]),t._v(" "),t.subtitle?n("p",{staticClass:"page-header__subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.tooltipText?n("div",{staticClass:"page-header__info"},[n("v-tooltip",{attrs:{right:"","nudge-left":"",color:"accent","content-class":"b-radius-0"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("div",t._g({},r),[n("AntHiveIcon",{staticClass:"ml-1",attrs:{icon:"alert-circle",small:"",color:"#4c377f"}})],1)]}}],null,!1,3554724775)},[t._v("\n      "+t._s(t.tooltipText)+"\n    ")])],1):t._e()])}),[],!1,null,"8fa44b42",null);e.a=component.exports},391:function(t,e,n){"use strict";var r=n(7),o=n(36),c=n(44),h=n(113),l=n(85),m=n(20),v=n(63).f,d=n(86).f,f=n(18).f,x=n(398).trim,_=r.Number,w=_,y=_.prototype,k="Number"==c(n(84)(y)),C="trim"in String.prototype,A=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=C?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,h=e.slice(2),i=0,m=h.length;i<m;i++)if((code=h.charCodeAt(i))<48||code>o)return NaN;return parseInt(h,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(k?m((function(){y.valueOf.call(n)})):"Number"!=c(n))?h(new w(A(e)),n,_):A(e)};for(var I,N=n(14)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),G=0;N.length>G;G++)o(w,I=N[G])&&!o(_,I)&&f(_,I,d(w,I));_.prototype=y,y.constructor=_,n(23)(r,"Number",_)}},392:function(t,e,n){var content=n(412);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("d634ecc0",content,!0,{sourceMap:!1})},393:function(t,e,n){"use strict";var r=n(382);n.n(r).a},394:function(t,e,n){(e=n(12)(!1)).push([t.i,".page-header[data-v-8fa44b42]{position:relative;display:inline-block}.page-header__subtitle[data-v-8fa44b42]{color:#4d3780;font-weight:400}.page-header__info[data-v-8fa44b42]{position:absolute;top:-5px;right:-26px}",""]),t.exports=e},397:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return m}));n(19);var r=n(4);function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=n(385),h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.Username="",this.Lang="",this.Version="",this.Games="",this.Wealth="",this.Wg="",this.Skin="",this.Stats={},this.TotalGames=0,this.TotalWealth=0}var e,n,r;return e=t,(n=[{key:"initUser",value:function(t){this.Username=t.username,this.Lang=t.lang,this.Version=t.version,this.Games=t.games,this.Wealth=t.wealth,this.Wg=t.wg,this.Skin=t.skin,this.Stats=t.stats,this.TotalGames=t.totalgames,this.TotalWealth=t.totalwealth}},{key:"getUserData",value:function(t){if(this.Username=t,""!==this.Username&&void 0!==this.Username)return c.a.get("/user?username=".concat(this.Username)).then((function(t){return t.data}))}},{key:"scoreString",value:function(){var t=Math.floor(((""+this.Wealth).length-1)/3);return parseFloat((0!==t?this.Wealth/Math.pow(1e3,t):this.Wealth).toPrecision(2))+["","K","M","B","t"][t]}}])&&o(e.prototype,n),r&&o(e,r),t}();function l(t){var e=Math.round(new Date/1e3)-t,n=2592e3,r=604800,o=86400,c=3600,h=60,l=1e3;return e>n?{time:Math.floor(e/n),text:"monthsAgo"}:e>r?{time:Math.floor(e/r),text:"weeksAgo"}:e>o?{time:Math.floor(e/o),text:"daysAgo"}:e>c?{time:Math.floor(e/c),text:"hoursAgo"}:e>h?{time:Math.floor(e/h),text:"minutesAgo"}:e>l?{time:Math.floor(e/l),text:"secondsAgo"}:{time:null,text:"justNow"}}var m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/leaderboard/users",{params:e});case 3:return n=t.sent,data=n.data,t.abrupt("return",data);case 8:if(t.prev=8,t.t0=t.catch(0),!((r=t.t0.response)&&r.data&&r.data.error)){t.next=13;break}return t.abrupt("return",null);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},398:function(t,e,n){var r=n(8),o=n(43),c=n(20),h=n(400),l="["+h+"]",m=RegExp("^"+l+l+"*"),v=RegExp(l+l+"*$"),d=function(t,e,n){var o={},l=c((function(){return!!h[t]()||"​"!="​"[t]()})),m=o[t]=l?e(f):h[t];n&&(o[n]=m),r(r.P+r.F*l,"String",o)},f=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(v,"")),t};t.exports=d},400:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},401:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return h}));var r=n(385);function o(t){return r.a.get("/games",{params:t}).then((function(t){return t.data}))}function c(t){var e="/game/".concat(t);return r.a.get(e).then((function(t){return t.data}))}function h(t){var e="/games/?un=".concat(t);return r.a.get(e).then((function(t){return t.data}))}},411:function(t,e,n){"use strict";var r=n(392);n.n(r).a},412:function(t,e,n){(e=n(12)(!1)).push([t.i,".chip[data-v-b375eb34]{width:100%;max-width:320px;height:100%;margin:20px;display:flex;flex-direction:column;box-shadow:0 0 13px 0 rgba(0,0,0,.12941);background-color:#fff}@media screen and (max-width:960px){.chip[data-v-b375eb34]{max-width:260px}}@media screen and (max-width:600px){.chip[data-v-b375eb34]{max-width:100%}}@media screen and (min-width:600px){.chip:hover .game-info-layout[data-v-b375eb34]{opacity:1;pointer-events:auto}}.author-name[data-v-b375eb34],.time-ago[data-v-b375eb34]{font-size:14px;color:#4d3780;margin:0;line-height:16px}.game-info[data-v-b375eb34]{padding:8px;position:relative}.game-info .info-row[data-v-b375eb34]{font-weight:600;padding:5px 12px}.game-info .play-btn[data-v-b375eb34]{pointer-events:none;margin:0 auto}.game-info-layout[data-v-b375eb34]{position:absolute;display:flex;flex-direction:column;justify-content:center;top:0;left:0;width:100%;height:100%;transition:.4s ease;opacity:0;pointer-events:none;cursor:pointer;background:rgba(0,0,0,.81961)}.author-info[data-v-b375eb34]{display:flex;justify-content:space-between}.author-info *[data-v-b375eb34]{font-size:14px;color:#9786bf;margin:0}.author-info .author-name[data-v-b375eb34]{font-weight:600;color:#4d3780}.bot-info[data-v-b375eb34]{position:absolute;width:150px;height:100%;padding:20px;right:-150px;opacity:0;background-color:#f5f2ff;flex-direction:column;transition:right .4s ease;pointer-events:none}.bot-info[data-v-b375eb34],.bot-info div[data-v-b375eb34]{display:flex;justify-content:space-between}.bot-info div[data-v-b375eb34]{color:#9786bf}.bot-info .info-value[data-v-b375eb34]{font-weight:600}.bots[data-v-b375eb34]{position:relative;display:flex;flex-wrap:wrap;overflow:hidden;height:185px;margin:-.6px}@media screen and (min-width:600px){.bots:hover .ffa-img[data-v-b375eb34],.bots:hover .vs-img[data-v-b375eb34]{opacity:0}.bots:hover .gradient[data-v-b375eb34]{opacity:1}.bots:hover .bot-avatar[data-v-b375eb34]{min-width:5%;flex:0}}.bot-icons[data-v-b375eb34],.bot-name[data-v-b375eb34]{opacity:0;pointer-events:none;transition:.4s ease}.bot-name[data-v-b375eb34]{position:absolute;width:calc(100% - 160px);left:10px;top:5px;color:#fff;font-size:16px;font-weight:600}.bot-version[data-v-b375eb34]{white-space:nowrap;font-weight:400}.bot-avatar[data-v-b375eb34]{position:relative;cursor:pointer;flex:1;min-width:24%;margin:.6px;text-decoration:none!important;transition:.4s ease}@media screen and (min-width:600px){.bot-avatar[data-v-b375eb34]:hover{flex:3!important;width:100%!important}.bot-avatar:hover .bot-icons[data-v-b375eb34],.bot-avatar:hover .bot-name[data-v-b375eb34]{opacity:1}.bot-avatar:hover .bot-info[data-v-b375eb34]{opacity:1;right:0}}.ffa-img[data-v-b375eb34],.vs-img[data-v-b375eb34]{transition:.4s ease;opacity:1;position:absolute;pointer-events:none}.vs-img[data-v-b375eb34]{top:50%;right:0;transform:translate(50%,-50%);z-index:1}.ffa-img[data-v-b375eb34]{top:50%;left:50%;transform:translate(-50%,-50%)}.bot-icons[data-v-b375eb34]{position:absolute;bottom:0;left:0;display:flex;flex-direction:column}.bot-icons *[data-v-b375eb34]{background-color:#fff;border-right:2px solid #fff;border-top:2px solid #fff}.button[data-v-b375eb34]{max-width:145px;width:100%;margin:0 auto}.gradient[data-v-b375eb34]{position:absolute;width:100%;height:100%;background:linear-gradient(0deg,transparent,rgba(0,0,0,.15) 39%,rgba(0,0,0,.33) 81%);pointer-events:none;opacity:0;transition:.4s ease}",""]),t.exports=e},413:function(t,e,n){var content=n(798);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("3776d5d2",content,!0,{sourceMap:!1})},439:function(t,e,n){"use strict";n(19);var r=n(4),o=(n(391),n(441)),c=n(401),h={name:"GamesTable",components:{AntHiveGameVertical:o.a},props:{pageSize:{type:Number,required:!1,default:50},sortType:{type:String,required:!1,default:""}},data:function(){return{searchParams:{},games:[],enoughLoadGames:!1}},fetch:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=3;break;case 3:case"end":return t.stop()}}),t)})))()},watch:{sortType:function(){this.games=[],this.searchParams.p=0,this.searchParams.sb=this.sortType,this.enoughLoadGames=!1,this.loadGames()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadGames();case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.searchParams={p:0,pp:this.pageSize,sb:this.sortType}},methods:{loadGames:function(){var t=this;this.enoughLoadGames=!0,Object(c.b)(this.searchParams).then((function(e){e.length&&(t.searchParams.p+=1,t.games=t.games.concat(e),t.enoughLoadGames=!1)}))}}},l=(n(797),n(6)),component=Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.games.length?e("div",[e("div",{staticClass:"games"},this._l(this.games,(function(t,n){return e("AntHiveGameVertical",{key:n+"game",attrs:{game:t}})})),1),this._v(" "),e("infinite-scroll",{attrs:{enough:this.enoughLoadGames},on:{"load-more":this.loadGames}})],1):e("div",{staticClass:"games"},this._l(18,(function(t){return e("v-skeleton-loader",{key:t+"skeleton",staticClass:"skeleton",attrs:{tile:"",height:"280px",type:"image, actions"}})})),1)])}),[],!1,null,"9510a846",null);e.a=component.exports},441:function(t,e,n){"use strict";n(25),n(62);var r=n(384),o=n(381),c=n(111),h=n(397),l=n(383),m={name:"AntHiveGameVertical",components:{AntHiveIcon:n(61).a},mixins:[o.a,l.a],props:{game:{type:Object,required:!0,default:function(){}}},data:function(){return{hoverOnChip:!1,hoverOnBots:!1,NA:"N/A"}},computed:{getTimeAgo:function(){return Object(h.c)(this.game.finished)},getFfaImage:function(){if(this.game.bots.length>4)return"/img/ffa.svg"},getAuthorName:function(){return this.game.author},getGameScore:function(){return this.game.bots&&this.game.bots.reduce((function(t,e){return t+e?e.score:0}),0)}},methods:{getArtInMs:function(t){return Math.round(t/10)/100},getImage:function(t){return Object(c.a)("".concat(t,"-background.png"),40)},getCurrentLangName:function(t){var e=r.find((function(e){return e.id===t.lang}));return e?e.name:null},getCurrentLangImg:function(t){var e=r.find((function(e){return e.id===t.lang}));return e?e.img:null},getVsImage:function(t){if(t!==this.game.bots.length-1&&this.game.bots.length>1&&this.game.bots.length<5)return"/img/vs.svg"},handlerChipMouseOver:function(){this.$gtag("event","gamechip_hover"),this.hoverOnChip=!0},handlerBotsMouseOver:function(){this.$gtag("event","gamechip_bots_hover")},handlerGoToGame:function(t){this.$gtag("event","gamechip_to_game"),this.$router.push({path:this.localePath("game"),query:{id:t.id,v:t.v}})},handlerClickUser:function(t){this.$gtag("event","gamechip_to_user"),t&&this.$router.push(this.localePath("/users?username=".concat(t.username)))}}},v=(n(411),n(6)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chip",on:{mouseover:t.handlerChipMouseOver,mouseleave:function(e){t.hoverOnChip=!1},click:function(e){t.$vuetify.breakpoint.xsOnly&&t.handlerGoToGame(t.game)}}},[n("div",{staticClass:"bots",on:{mouseover:t.handlerBotsMouseOver}},[t._l(t.game.bots,(function(e,r){return n("div",{key:r,staticClass:"bot-avatar",style:"background: center / cover no-repeat url("+t.getBotAvatar(e,600)+")",on:{click:function(n){return t.handlerClickUser(e)}}},[n("div",{staticClass:"gradient"}),t._v(" "),e?n("div",{staticClass:"bot-name"},[t._v("\n        "+t._s(e.displayName)),n("span",{staticClass:"bot-version"},[t._v(" v "+t._s(e.v))])]):t._e(),t._v(" "),n("div",{staticClass:"bot-icons"},[e?n("img",{staticClass:"px-1",attrs:{src:t.getAntSkinImg(e.skin),alt:t.$t("game.botSkin"),width:"40px",height:"40px"}}):t._e(),t._v(" "),e?n("img",{attrs:{src:t.getCurrentLangImg(e),alt:t.getCurrentLangName(e),width:"40px"}}):t._e()]),t._v(" "),n("div",{staticClass:"bot-info"},[n("div",[n("span",[t._v(t._s(t.$t("game.size"))+":")]),t._v(" "),n("span",{staticClass:"info-value"},[e?[t._v("\n              "+t._s(e.hive)+"/"+t._s(e.ants)+"\n            ")]:[t._v("\n              "+t._s(t.NA)+"\n            ")]],2)]),t._v(" "),n("div",[n("span",[t._v(t._s(t.$t("game.score"))+":")]),t._v(" "),n("span",{staticClass:"info-value"},[e?[t._v("\n              "+t._s(t.getNumberTruncated(e.score))+"\n            ")]:[t._v("\n              "+t._s(t.NA)+"\n            ")]],2)]),t._v(" "),n("div",[n("span",[t._v(t._s(t.$t("game.errors"))+":")]),t._v(" "),n("span",{staticClass:"info-value"},[e?[t._v("\n              "+t._s(e.err)+"%\n            ")]:[t._v("\n              "+t._s(t.NA)+"\n            ")]],2)]),t._v(" "),n("div",[n("span",[t._v(t._s(t.$t("global.art"))+":")]),t._v(" "),n("span",{staticClass:"info-value"},[e?[t._v("\n              "+t._s(t.getArtInMs(e.art))+" ms\n            ")]:[t._v("\n              "+t._s(t.NA)+"\n            ")]],2)])]),t._v(" "),t.getVsImage(r)?n("v-img",{staticClass:"vs-img",attrs:{src:t.getVsImage(r),width:"45"}}):t._e()],1)})),t._v(" "),t.getFfaImage?n("v-img",{staticClass:"ffa-img",attrs:{src:t.getFfaImage,width:"80"}}):t._e()],2),t._v(" "),n("div",{staticClass:"game-info"},[n("v-row",{staticClass:"pa-3"},[n("v-col",{staticClass:"info-row",attrs:{cols:"12",sm:"6"}},[n("AntHiveIcon",{staticClass:"mb-n1 mr-2",attrs:{color:"#d1cae8",icon:"timer"}}),t._v("\n        "+t._s(t.game.age)+"\n      ")],1),t._v(" "),n("v-col",{staticClass:"info-row",attrs:{cols:"12",sm:"6"}},[n("AntHiveIcon",{staticClass:"mb-n1 mr-2",attrs:{color:"#d1cae8",icon:"billiards-rack"}}),t._v("\n        "+t._s(t.getGameScore)+"\n      ")],1)],1),t._v(" "),n("div",{staticClass:"author-info"},[n("p",[t._v("\n        "+t._s(t.$t("game.by"))+" "),n("span",{staticClass:"author-name"},[t._v(t._s(t.getAuthorName))])]),t._v(" "),n("p",[t.getTimeAgo.time?n("span",[t._v("\n          "+t._s(t.getTimeAgo.time)+"\n        ")]):t._e(),t._v("\n        "+t._s(t.$t("games."+t.getTimeAgo.text))+"\n      ")])]),t._v(" "),n("div",{staticClass:"game-info-layout",on:{click:function(e){return t.handlerGoToGame(t.game)}}},[n("AntHiveIcon",{staticClass:"mt-1 play-btn",attrs:{color:"white",big:"",icon:"play-circle"}})],1)],1)])}),[],!1,null,"b375eb34",null);e.a=component.exports},797:function(t,e,n){"use strict";var r=n(413);n.n(r).a},798:function(t,e,n){(e=n(12)(!1)).push([t.i,".games[data-v-9510a846]{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -20px}@media screen and (max-width:600px){.games[data-v-9510a846]{justify-content:center}}.games .skeleton[data-v-9510a846]{width:100%;max-width:320px;margin:20px}@media screen and (max-width:960px){.games .skeleton[data-v-9510a846]{max-width:260px}}@media screen and (max-width:600px){.games .skeleton[data-v-9510a846]{max-width:100%}}",""]),t.exports=e}}]);