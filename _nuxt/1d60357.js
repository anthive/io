(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1112:function(t,e,n){"use strict";var o=n(292);n.n(o).a},1113:function(t,e,n){(e=n(11)(!1)).push([t.i,".user[data-v-407abbb2]{overflow-x:hidden}.user-name[data-v-407abbb2]{padding:100px 0 0 20px}.bots-section[data-v-407abbb2],.games-section[data-v-407abbb2]{margin-top:90px}.bots-section .bots[data-v-407abbb2],.bots-section .games[data-v-407abbb2],.games-section .bots[data-v-407abbb2],.games-section .games[data-v-407abbb2]{display:flex;flex-wrap:wrap;margin:0 -20px}.games[data-v-407abbb2]{margin-top:40px}.user-background[data-v-407abbb2]{position:absolute;top:0;height:225px;left:0;right:0}.gradient[data-v-407abbb2],.image[data-v-407abbb2]{width:100%}.gradient[data-v-407abbb2]{position:absolute;height:100%;background:linear-gradient(0deg,transparent,rgba(0,0,0,.15) 39%,rgba(0,0,0,.33) 81%)}.avatar[data-v-407abbb2]{background-color:#fff;border:7px solid #fff}.title[data-v-407abbb2]{margin-left:20px;flex-direction:column;justify-content:center}.social-media[data-v-407abbb2],.title[data-v-407abbb2]{display:flex}.social-link[data-v-407abbb2]{margin:5px;width:30px}",""]),t.exports=e},1166:function(t,e,n){"use strict";n.r(e);n(19);var o=n(3),r=n(259),c=n(299),l=n(297),f=n(241),d=n(260),v={name:"User",head:function(){return{title:"".concat(this.getUserFullName," - AntHive.IO"),meta:[{name:"description",content:this.$t("userInfo.meta.description")}]}},components:{AntHiveGameVertical:l.a,AntHiveBotVertical:c.a},mixins:[f.a],data:function(){return{status:null,userInfo:{},user:{},us:null,games:[],username:""}},fetch:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=3;break;case 3:case"end":return t.stop()}}),t)})))()},computed:{getUserAvatar:function(){if(this.userInfo&&this.userInfo.user)return this.us.photoUrl(this.userInfo.user.avatar,150)},getUser:function(){if(this.userInfo)return this.userInfo},getUserFullName:function(){if(this.userInfo&&this.userInfo.displayName)return this.userInfo.displayName},getUserBots:function(){if(this.userInfo&&this.userInfo.bots&&this.userInfo.bots.length)return this.userInfo.bots},getUserBackground:function(){return this.userInfo&&this.userInfo.background?this.userInfo.background:"/img/user_background.png"},getUserSocials:function(){if(this.getUser&&this.getUser.socials&&this.getUser.socials.length)return this.getUser.socials}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadGames();case 2:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;this.username=this.$route.params.user||"anthive",this.us=new r.a,this.us.getUserData(this.username).then((function(e){t.userInfo=e}))},methods:{loadGames:function(){var t=this;Object(d.c)(this.username).then((function(e){e.length&&(t.games=t.games.concat(e))}))}}},h=(n(1112),n(7)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"user page-wrap"},[n("v-container",[n("v-row",{staticClass:"user-background"},[n("div",{staticClass:"image",style:"background: center/ cover no-repeat url("+t.getUserBackground+")"}),t._v(" "),n("div",{staticClass:"gradient"})]),t._v(" "),n("div",{staticClass:"mt-n3"},[n("div",{staticClass:"d-flex"},[n("v-avatar",{attrs:{tile:"",size:"200"}},[n("v-img",{staticClass:"avatar",attrs:{src:t.getAvatar(t.getUser.avatar,400)}})],1),t._v(" "),n("div",{staticClass:"title"},[n("h1",{staticClass:"user-name"},[t._v(t._s(t.getUserFullName))])])],1)]),t._v(" "),n("div",{staticClass:"justify-space-between mt-12"},[t.getUser.description?n("p",[t._v(t._s(t.getUser.description))]):t._e(),t._v(" "),t.getUserSocials?n("div",{staticClass:"d-flex"},t._l(t.getUserSocials,(function(t,e){return n("a",{key:e,staticClass:"social-link",attrs:{href:t.link,title:t.name,rel:"noreferrer",target:"_blank"}},[n("v-img",{attrs:{src:"/img/"+t.name+".png"}})],1)})),0):t._e()]),t._v(" "),t.getUserBots?n("div",{staticClass:"bots-section"},[n("h3",[t._v(t._s(t.$t("userInfo.bots")))]),t._v(" "),n("div",{staticClass:"bots"},t._l(t.getUserBots,(function(e,o){return n("AntHiveBotVertical",{key:o+"bot",attrs:{bot:e,user:t.getUser}})})),1)]):t._e(),t._v(" "),t.games.length?n("div",{staticClass:"games-section"},[n("h3",[t._v(t._s(t.$t("userInfo.bestGames")))]),t._v(" "),n("div",{staticClass:"games"},t._l(t.games,(function(t,e){return n("AntHiveGameVertical",{key:e+"game",attrs:{game:t}})})),1)]):t._e()],1)],1)}),[],!1,null,"407abbb2",null);e.default=component.exports},241:function(t,e,n){"use strict";var o=n(108),r={methods:{getAvatar:function(t,e){return t&&Object(o.a)(t,e)},getLangImg:function(t){return"/skins/lang/".concat(t,".png")},getAntSkinImg:function(t){return"/skins/client/".concat(t,"/ant.png")},getHiveSkinImg:function(t){return"/skins/client/".concat(t,"/hive.png")}}};e.a=r},242:function(t){t.exports=JSON.parse('[{"id":"js","extention":"js","editor":"javascript","name":"Javascript","img":"https://anthive.io/skins/lang/js.png","sample":"https://github.com/anthive/js","sampleCode":"https://raw.githubusercontent.com/anthive/js/master/run.js"},{"id":"cpp","extention":"cpp","editor":"c_cpp","name":"C++","img":"https://anthive.io/skins/lang/cpp.png","sample":"https://github.com/anthive/cpp","sampleCode":"https://raw.githubusercontent.com/anthive/cpp/master/bot.cpp"},{"id":"csharp","extention":"cs","editor":"csharp","name":"C#","img":"https://anthive.io/skins/lang/csharp.png","sample":"https://github.com/anthive/csharp","sampleCode":"https://raw.githubusercontent.com/anthive/csharp/master/Program.cs"},{"id":"go","extention":"go","editor":"golang","name":"Go","img":"https://anthive.io/skins/lang/go.png","sample":"https://github.com/anthive/go","sampleCode":"https://raw.githubusercontent.com/anthive/go/master/main.go"},{"id":"python","extention":"py","editor":"python","name":"Python","img":"https://anthive.io/skins/lang/python.png","sample":"https://github.com/anthive/python","sampleCode":"https://raw.githubusercontent.com/anthive/python/master/run.py"},{"id":"php","extention":"php","editor":"php","name":"PHP","img":"https://anthive.io/skins/lang/php.png","sample":"https://github.com/anthive/php","sampleCode":"https://raw.githubusercontent.com/anthive/php/master/run.php"},{"id":"rust","extention":"rs","editor":"rust","name":"Rust","img":"https://anthive.io/skins/lang/rust.png","sample":"https://github.com/anthive/rust","sampleCode":"https://raw.githubusercontent.com/anthive/rust/master/main.rs"}]')},246:function(t,e,n){"use strict";var o={methods:{getStringTruncated:function(t,e){return t.length>e?"".concat(t.substr(0,e-1),"..."):t},getNumberTruncatedToThousand:function(t){return t>1e3?"".concat(Math.floor(t/1e3),"K"):t}}};e.a=o},251:function(t,e,n){"use strict";var o=n(54),r=n.n(o).a.create({baseURL:"".concat("https://api.anthive.io","/public"),timeout:15e3});e.a=r},252:function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("1562780e",content,!0,{sourceMap:!1})},254:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("13b95841",content,!0,{sourceMap:!1})},259:function(t,e,n){"use strict";function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(251),c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.Username="",this.Lang="",this.Version="",this.Games="",this.Wealth="",this.Wg="",this.Skin="",this.Stats={},this.TotalGames=0,this.TotalWealth=0}var e,n,c;return e=t,(n=[{key:"initUser",value:function(t){this.Username=t.username,this.Lang=t.lang,this.Version=t.version,this.Games=t.games,this.Wealth=t.wealth,this.Wg=t.wg,this.Skin=t.skin,this.Stats=t.stats,this.TotalGames=t.totalgames,this.TotalWealth=t.totalwealth}},{key:"getUserData",value:function(t){if(this.Username=t,""!==this.Username&&void 0!==this.Username)return r.a.get("/user?username=".concat(this.Username)).then((function(t){return t.data}))}},{key:"scoreString",value:function(){var t=Math.floor(((""+this.Wealth).length-1)/3);return parseFloat((0!==t?this.Wealth/Math.pow(1e3,t):this.Wealth).toPrecision(2))+["","K","M","B","t"][t]}}])&&o(e.prototype,n),c&&o(e,c),t}();function l(t){var e=Math.round(new Date/1e3)-t,n=2592e3,o=604800,r=86400,c=3600,l=60,f=1e3;return e>n?{time:Math.floor(e/n),text:"monthsAgo"}:e>o?{time:Math.floor(e/o),text:"weeksAgo"}:e>r?{time:Math.floor(e/r),text:"daysAgo"}:e>c?{time:Math.floor(e/c),text:"hoursAgo"}:e>l?{time:Math.floor(e/l),text:"minutesAgo"}:e>f?{time:Math.floor(e/f),text:"secondsAgo"}:{time:null,text:"justNow"}}},260:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l}));var o=n(251);function r(t){return o.a.get("/games",{params:t}).then((function(t){return t.data}))}function c(t){var e="/game/".concat(t);return o.a.get(e).then((function(t){return t.data}))}function l(t){var e="/games/?u=".concat(t);return o.a.get(e).then((function(t){return t.data}))}},269:function(t,e,n){"use strict";var o=n(252);n.n(o).a},270:function(t,e,n){(e=n(11)(!1)).push([t.i,".chip[data-v-fc25f3d2]{width:100%;max-width:320px;height:100%;margin:20px;display:flex;flex-direction:column;box-shadow:0 0 13px 0 rgba(0,0,0,.12941);background-color:#fff}.chip:hover .game-info-layout[data-v-fc25f3d2]{opacity:1;pointer-events:auto}.author-name[data-v-fc25f3d2],.time-ago[data-v-fc25f3d2]{font-size:14px;color:#4d3780;margin:0;line-height:16px}.game-info[data-v-fc25f3d2]{padding:8px;position:relative}.game-info .info-row[data-v-fc25f3d2]{font-weight:600;padding:5px 12px}.game-info-layout[data-v-fc25f3d2]{position:absolute;display:flex;flex-direction:column;justify-content:center;top:0;left:0;width:100%;height:100%;transition:.4s ease;opacity:0;pointer-events:none;background:rgba(0,0,0,.81961)}.author-info[data-v-fc25f3d2]{display:flex;justify-content:space-between}.author-info *[data-v-fc25f3d2]{font-size:12px;color:#9786bf;margin:0}.author-info .author-name[data-v-fc25f3d2]{font-weight:600;color:#4d3780}.bot-info[data-v-fc25f3d2]{position:absolute;width:140px;height:100%;padding:20px;right:-140px;opacity:0;background-color:#f5f2ff;flex-direction:column;transition:right .4s ease;pointer-events:none}.bot-info[data-v-fc25f3d2],.bot-info div[data-v-fc25f3d2]{display:flex;justify-content:space-between}.bot-info div[data-v-fc25f3d2]{color:#9786bf}.bot-info .info-value[data-v-fc25f3d2]{font-weight:600}.bots[data-v-fc25f3d2]{position:relative;display:flex;flex-wrap:wrap;overflow:hidden;height:185px;margin:-.6px}.bots:hover .ffa-img[data-v-fc25f3d2],.bots:hover .vs-img[data-v-fc25f3d2]{opacity:0}.bots:hover .gradient[data-v-fc25f3d2]{opacity:1}.bots:hover .bot-avatar[data-v-fc25f3d2]{min-width:5%;flex:0}.bot-icons[data-v-fc25f3d2],.bot-name[data-v-fc25f3d2]{opacity:0;pointer-events:none;transition:.4s ease}.bot-name[data-v-fc25f3d2]{position:absolute;width:calc(100% - 150px);left:10px;top:5px;color:#fff;font-size:16px;font-weight:600}.bot-version[data-v-fc25f3d2]{white-space:nowrap;font-weight:400}.bot-avatar[data-v-fc25f3d2]{position:relative;cursor:pointer;flex:1;min-width:24%;margin:.6px;text-decoration:none!important;transition:.4s ease}.bot-avatar[data-v-fc25f3d2]:hover{flex:3!important;width:100%!important}.bot-avatar:hover .bot-icons[data-v-fc25f3d2],.bot-avatar:hover .bot-name[data-v-fc25f3d2]{opacity:1}.bot-avatar:hover .bot-info[data-v-fc25f3d2]{opacity:1;right:0}.ffa-img[data-v-fc25f3d2],.vs-img[data-v-fc25f3d2]{transition:.4s ease;opacity:1;position:absolute;pointer-events:none}.vs-img[data-v-fc25f3d2]{top:50%;right:0;transform:translate(50%,-50%);z-index:1}.ffa-img[data-v-fc25f3d2]{top:50%;left:50%;transform:translate(-50%,-50%)}.bot-icons[data-v-fc25f3d2]{position:absolute;bottom:0;left:0;display:flex;flex-direction:column}.bot-icons *[data-v-fc25f3d2]{background-color:#fff;border-right:2px solid #fff;border-top:2px solid #fff}.button[data-v-fc25f3d2]{max-width:145px;width:100%;margin:0 auto}.gradient[data-v-fc25f3d2]{position:absolute;width:100%;height:100%;background:linear-gradient(0deg,transparent,rgba(0,0,0,.15) 39%,rgba(0,0,0,.33) 81%);pointer-events:none;opacity:0;transition:.4s ease}",""]),t.exports=e},287:function(t,e,n){"use strict";var o=n(254);n.n(o).a},288:function(t,e,n){(e=n(11)(!1)).push([t.i,".chip[data-v-71dee32e]{width:100%;max-width:200px;height:100%;max-height:310px;margin:20px;display:flex;flex-direction:column;box-shadow:0 0 13px 0 rgba(0,0,0,.12941);background-color:#fff}.chip .img[data-v-71dee32e]{background-position:50%;width:100%;min-height:120px}.chip .bot-title[data-v-71dee32e]{font-weight:600;margin-bottom:10px}.chip .version[data-v-71dee32e]{margin-left:10px;font-weight:400;color:#9786bf}.chip .lang-icon[data-v-71dee32e]{background-color:#fff;border-right:2px solid #fff;border-bottom:2px solid #fff}.chip .description[data-v-71dee32e]{padding:12px 18px;height:100%;position:relative}.chip .description .layout[data-v-71dee32e]{position:absolute;flex-direction:column;justify-content:flex-end;display:flex;padding:15px;top:0;left:0;width:100%;height:100%;transition:all .4s;background:rgba(0,0,0,.81961);opacity:0}.chip .description .user-info[data-v-71dee32e]{cursor:pointer;font-size:14px;color:#fff;margin:0 auto 30px}.chip:hover .layout[data-v-71dee32e]{opacity:1}.chip .stats .stats-row[data-v-71dee32e]{display:flex;justify-content:space-between}.chip .stats p[data-v-71dee32e]{margin-bottom:4px;font-size:14px}.chip .stats .value[data-v-71dee32e]{font-weight:600}.chip .button[data-v-71dee32e]{letter-spacing:0}",""]),t.exports=e},292:function(t,e,n){var content=n(1113);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("3fb5e0d7",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(61),n(24);var data=n(242),o=n(241),r=n(108),c=n(259),l=n(246),f={name:"AntHiveGameVertical",components:{AntHiveIcon:n(60).a},mixins:[o.a,l.a],props:{game:{type:Object,required:!0,default:function(){}}},data:function(){return{hoverOnChip:!1,hoverOnBots:!1}},computed:{getTimeAgo:function(){return Object(c.b)(this.game.finished)},getFfaImage:function(){if(this.game.bots.length>4)return"/img/ffa.svg"},getAuthorName:function(){return this.game.author},getGameScore:function(){return this.game.bots&&this.game.bots.reduce((function(t,e){return t+e.score}),0)}},methods:{getArtInMs:function(t){return Math.round(t/10)/100},getImage:function(t){return Object(r.a)("".concat(t,"-background.png"),40)},getCurrentLangName:function(t){return data.find((function(e){return e.id===t.lang})).name},getCurrentLangImg:function(t){return data.find((function(e){return e.id===t.lang})).img},getVsImage:function(t){if(t!==this.game.bots.length-1&&this.game.bots.length>1&&this.game.bots.length<5)return"/img/vs.svg"}}},d=(n(269),n(7)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chip",on:{mouseover:function(e){t.hoverOnChip=!0},mouseleave:function(e){t.hoverOnChip=!1}}},[n("div",{staticClass:"bots"},[t._l(t.game.bots,(function(e,o){return n("nuxt-link",{key:o,staticClass:"bot-avatar",style:"background: center / cover no-repeat url("+t.getAvatar(e.avatar,600)+")",attrs:{to:t.localePath("/users/"+e.username)}},[n("div",{staticClass:"gradient"}),t._v(" "),n("div",{staticClass:"bot-name"},[t._v("\n        "+t._s(e.displayName)),n("span",{staticClass:"bot-version"},[t._v(" v "+t._s(e.v))])]),t._v(" "),n("div",{staticClass:"bot-icons"},[n("img",{staticClass:"px-1",attrs:{src:t.getAntSkinImg(e.skin),alt:t.$t("game.botSkin"),width:"40px",height:"40px"}}),t._v(" "),n("img",{attrs:{src:t.getCurrentLangImg(e),alt:t.getCurrentLangName(e),width:"40px"}})]),t._v(" "),n("div",{staticClass:"bot-info"},[n("div",[n("span",[t._v(t._s(t.$t("game.size"))+":")]),t._v(" "),n("span",{staticClass:"info-value"},[t._v(t._s(e.hive)+"/"+t._s(e.ants))])]),t._v(" "),n("div",[n("span",[t._v(t._s(t.$t("game.score"))+":")]),t._v(" "),n("span",{staticClass:"info-value"},[t._v("\n            "+t._s(t.getNumberTruncatedToThousand(e.score))+"\n          ")])]),t._v(" "),n("div",[n("span",[t._v(t._s(t.$t("game.errors"))+":")]),t._v(" "),n("span",{staticClass:"info-value"},[t._v("\n            "+t._s(t.getNumberTruncatedToThousand(e.errors))+" %\n          ")])]),t._v(" "),n("div",[n("span",[t._v(t._s(t.$t("game.rt"))+":")]),t._v(" "),n("span",{staticClass:"info-value"},[t._v("\n            "+t._s(t.getArtInMs(e.art))+" ms\n          ")])])]),t._v(" "),t.getVsImage(o)?n("v-img",{staticClass:"vs-img",attrs:{src:t.getVsImage(o),width:"45"}}):t._e()],1)})),t._v(" "),t.getFfaImage?n("v-img",{staticClass:"ffa-img",attrs:{src:t.getFfaImage,width:"80"}}):t._e()],2),t._v(" "),n("div",{staticClass:"game-info"},[n("v-row",{staticClass:"pa-3"},[n("v-col",{staticClass:"info-row",attrs:{cols:"12",sm:"6"}},[n("AntHiveIcon",{staticClass:"mb-n1 mr-2",attrs:{color:"#d1cae8",icon:"timer"}}),t._v("\n        "+t._s(t.game.age)+"\n      ")],1),t._v(" "),n("v-col",{staticClass:"info-row",attrs:{cols:"12",sm:"6"}},[n("AntHiveIcon",{staticClass:"mb-n1 mr-2",attrs:{color:"#d1cae8",icon:"billiards-rack"}}),t._v("\n        "+t._s(t.getGameScore)+"\n      ")],1)],1),t._v(" "),n("div",{staticClass:"author-info"},[n("p",[t._v("\n        "+t._s(t.$t("game.by"))+" "),n("span",{staticClass:"author-name"},[t._v(t._s(t.getAuthorName))])]),t._v(" "),n("p",[t._v(t._s(t.getTimeAgo.time+t.$t("games."+t.getTimeAgo.text)))])]),t._v(" "),n("div",{staticClass:"game-info-layout"},[n("nuxt-link",{staticClass:"text-center d-block",attrs:{to:t.localePath({name:"game",query:{id:t.game.id,v:t.game.v}})}},[n("AntHiveIcon",{staticClass:"mt-1",attrs:{color:"white",big:"",icon:"play-circle"}})],1)],1)],1)])}),[],!1,null,"fc25f3d2",null);e.a=component.exports},299:function(t,e,n){"use strict";n(36),n(20),n(22),n(10),n(27),n(61);var o=n(14),r=n(25),data=n(242),c=n(241),l=n(246);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"AntHiveBotVertical",components:{AntHiveIcon:n(60).a},mixins:[c.a,l.a],props:{bot:{type:Object,required:!0},user:{type:Object,required:!1,default:function(){}}},computed:d(d({},Object(r.b)(["getUser"])),{},{getCurrentLang:function(){var t=this;return data.find((function(e){return e.id===t.bot.lang}))},getCurrentLangImg:function(){return this.getCurrentLang&&this.getCurrentLang.img},getBotName:function(){if(this.bot&&this.bot.displayName)return this.getStringTruncated(this.bot.displayName,10)},getUserAvatar:function(){return this.user&&this.user.avatar},getUsername:function(){return this.user&&this.user.username},isUserProfile:function(){return!!this.getUser&&this.getUsername===this.getUser.userName}}),methods:{challange:function(t){var e="".concat("https://profile.anthive.io","/new-game?challange=").concat(t);window.open(e)}}},h=(n(287),n(7)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chip"},[n("div",{staticClass:"img",style:"background: center / cover no-repeat url("+t.getAvatar(t.bot.avatar,400)+")"},[n("img",{staticClass:"lang-icon",attrs:{src:t.getCurrentLangImg,alt:t.getCurrentLang.name,width:"40px"}})]),t._v(" "),n("div",{staticClass:"description"},[n("p",{staticClass:"bot-title"},[t._v(t._s(t.getBotName)),n("span",{staticClass:"version"},[t._v("v "+t._s(t.bot.v))])]),t._v(" "),n("div",{staticClass:"stats"},[n("div",{staticClass:"stats-row"},[n("p",[t._v(t._s(t.$t("userInfo.games"))+":")]),t._v(" "),n("p",{staticClass:"value"},[t._v(t._s(t.bot.games))])]),t._v(" "),n("div",{staticClass:"stats-row"},[n("p",[t._v(t._s(t.$t("userInfo.wl"))+":")]),t._v(" "),n("p",{staticClass:"value"},[t._v(t._s(t.bot.wins)+"/"+t._s(t.bot.losses))])]),t._v(" "),n("div",{staticClass:"stats-row"},[n("p",[t._v(t._s(t.$t("userInfo.mmr"))+":")]),t._v(" "),n("p",{staticClass:"value"},[t._v(t._s(t.bot.mmr))])]),t._v(" "),n("div",{staticClass:"stats-row"},[n("p",[t._v(t._s(t.$t("userInfo.art"))+":")]),t._v(" "),n("p",{staticClass:"value"},[t._v(t._s(t.bot.art))])]),t._v(" "),n("div",{staticClass:"stats-row"},[n("p",[t._v(t._s(t.$t("userInfo.errors"))+":")]),t._v(" "),n("p",{staticClass:"value"},[t._v(t._s(t.bot.errors)+"%")])])]),t._v(" "),t.isUserProfile?t._e():n("div",{staticClass:"layout"},[n("nuxt-link",{staticClass:"user-info",attrs:{to:t.localePath("/users/"+t.getUsername)}},[t._v("\n        "+t._s(t.$t("game.by"))+" "+t._s(t.getUsername)+"\n        "),n("v-avatar",{staticClass:"ml-1",attrs:{tile:"",size:"35"}},[n("v-img",{attrs:{src:t.getAvatar(t.getUserAvatar,70)}})],1)],1),t._v(" "),n("AntHiveButton",{staticClass:"button",attrs:{tile:"",color:"primary"},on:{click:function(e){return t.challange(t.bot.id)}}},[n("AntHiveIcon",{staticClass:"mx-1",attrs:{icon:"challange",small:"",color:"white"}}),t._v(" "),n("span",[t._v(t._s(t.$t("userInfo.challangeMe")))])],1)],1)])])}),[],!1,null,"71dee32e",null);e.a=component.exports}}]);