(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1147:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),o={name:"GameLogPanel",data:function(){return{currentLogTab:"request",panelInfo:{request:"Requests go here...",response:"Response go here...",logs:"Logs go here..."}}}},c=(n(630),n(11)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"log-panel__wrap mt-3"},[n("div",{staticClass:"log-panel__tabs py-2 accent elevation-6",attrs:{dark:""}},[n("AntHiveBtn",{staticClass:"mx-2",class:{"v-btn--active":"request"==t.currentLogTab},attrs:{tile:"",primary:"",fill:""},on:{click:function(e){t.currentLogTab="request"}}},[t._v("Requests")]),t._v(" "),n("AntHiveBtn",{staticClass:"mx-2",class:{"v-btn--active":"response"==t.currentLogTab},attrs:{tile:"",primary:"",fill:""},on:{click:function(e){t.currentLogTab="response"}}},[t._v("Response")]),t._v(" "),n("AntHiveBtn",{staticClass:"mx-2",class:{"v-btn--active":"logs"==t.currentLogTab},attrs:{tile:"",primary:"",fill:""},on:{click:function(e){t.currentLogTab="logs"}}},[t._v("Logs")])],1),t._v(" "),n("div",[n("v-card",{staticClass:"log-panel__tab-block",attrs:{tile:""}},[n("v-card-text",[n("pre",{staticClass:"log-panel__text"},[t._v(t._s(t.panelInfo[t.currentLogTab])+" "+t._s(t.currentLogTab))])])],1)],1)])}),[],!1,null,"02152e21",null).exports,d=n(628),m=n(629),v=n(60),f={name:"GamePlayersList",components:{GamesUserChip:d.a,GamesUserIcon:m.a,AntHiveIcon:v.a},data:function(){return{selectedPlayer:{}}},props:{players:{type:Array,required:!0}},methods:{showUserCard:function(t){this.selectedPlayer=t,this.isShowUserCard=!0}}},h=(n(636),Object(c.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"players"},[e("div",{staticClass:"players__wrap"},[e("div",{staticClass:"players__list"},[e("transition-group",{attrs:{name:"flip-list"}},this._l(this.players,(function(t,n){return e("v-card",{key:t.id,staticClass:"py-2 elevation-0",attrs:{tile:"",width:"100%"}},[e("GamesUserChip",{attrs:{player:t,number:n+1}})],1)})),1)],1)])])}),[],!1,null,"6a65a51a",null).exports),_={name:"GamePlayer",components:{AntHiveIcon:v.a},props:{isGameEnd:Boolean},computed:{currentUrl:function(){return"https://anthive.io".concat(this.$route.fullPath)},currentEncudeUrl:function(){return encodeURIComponent(this.currentUrl)},gameId:function(){return this.$route.query.id},getRematchUrl:function(){return"".concat("https://profile.anthive.io/","/new-game/?rematch=").concat(this.gameId)}},methods:{copyToClipboard:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$copyText(t.currentUrl);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},y=(n(638),Object(c.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"pa-0 player__section",attrs:{cols:"auto"}},[n("div",{ref:"playerWrap",staticClass:"player__wrap",on:{click:function(e){return t.playPause()},mouseover:function(e){t.showActionsState=!0},mouseleave:function(e){t.showActionsState=!1}}}),t._v(" "),n("div",{attrs:{id:"player"}},[n("h2",{staticClass:"px-2 white--text loading"},[t._v(t._s(t.$t("game.loading")))])]),t._v(" "),n("v-slide-y-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isGameEnd,expression:"isGameEnd"}],staticClass:"end-game-layout"},[n("div",{staticClass:"layout-buttons"},[n("v-btn",{staticClass:"layout-button mb-6",attrs:{color:"#00BF70",dark:"",block:"",href:t.getRematchUrl}},[t._v(t._s(t.$t("game.requestRematch")))]),t._v(" "),n("v-btn",{staticClass:"layout-button",attrs:{color:"#333333",dark:"",block:""},on:{click:function(e){return t.$emit("replay")}}},[t._v(t._s(t.$t("game.replay"))+"\n          "),n("AntHiveIcon",{staticClass:"ml-1",attrs:{color:"white"}},[t._v("autorenew")])],1),t._v(" "),n("div",{staticClass:"social-share"},[n("p",[t._v(t._s(t.$t("game.shareGame")))]),t._v(" "),n("div",{staticClass:"d-flex justify-center"},[n("v-tooltip",{attrs:{bottom:"",color:"accent","content-class":"b-radius-0"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"share-button",attrs:{fab:"",dark:"",color:"#333333",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/shareArticle?mini=true&url="+t.currentEncudeUrl+"&title=Anthive.io game"}},r),[n("AntHiveIcon",{attrs:{color:"grey"}},[t._v("linkedin")])],1)]}}])},[n("span",[t._v(t._s(t.$t("game.shareOn"))+" Linkedin")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:"",color:"accent","content-class":"b-radius-0"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"share-button",attrs:{fab:"",dark:"",color:"#333333",target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/sharer/sharer.php?u="+t.currentEncudeUrl}},r),[n("AntHiveIcon",{attrs:{color:"grey"}},[t._v("facebook")])],1)]}}])},[n("span",[t._v(t._s(t.$t("game.shareOn"))+" Facebook")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:"",color:"accent","content-class":"b-radius-0"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"share-button",attrs:{fab:"",dark:"",color:"#333333",target:"_blank",rel:"noreferrer",href:"https://twitter.com/share?url=/&text=Anthive.io Game - "+t.currentEncudeUrl}},r),[n("AntHiveIcon",{attrs:{color:"grey"}},[t._v("twitter")])],1)]}}])},[n("span",[t._v(t._s(t.$t("game.shareOn"))+" Twitter")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:"",color:"accent","content-class":"b-radius-0"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"share-button",attrs:{fab:"",dark:"",color:"#333333",target:"_blank",rel:"noreferrer",href:"mailto:?subject=Anthive.io&body=Game - "+t.currentEncudeUrl}},r),[n("AntHiveIcon",{attrs:{color:"grey"}},[t._v("email")])],1)]}}])},[n("span",[t._v(t._s(t.$t("game.sendBy"))+" Email")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:"",color:"accent","content-class":"b-radius-0"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"share-button",attrs:{fab:"",dark:"",color:"#333333"},on:{click:function(e){return t.copyToClipboard()}}},r),[n("AntHiveIcon",{attrs:{color:"grey"}},[t._v("file-document-box-multiple")])],1)]}}])},[n("span",[t._v(t._s(t.$t("game.copyUrl")))])])],1)])],1)])])],1)}),[],!1,null,"3adf6a60",null).exports),x=n(627),w=n(247),k=null,C={head:function(){return{title:this.$t("game.meta.title"),meta:[{name:"description",content:this.$t("game.meta.description")}]}},data:function(){return{isGameAvailable:!0,theme:1,players:[],isGameEnd:!1,gameLoaded:!1,gameId:""}},components:{GameLogPanel:l,GamePlayerList:h,GamePlayer:y,GamesTable:x.a,ThePageHeader:w.a},watch:{$route:function(){this.fetchGame()}},mounted:function(){this.fetchGame()},methods:{fetchGame:function(){var t=this;Promise.all([n.e(3),n.e(4)]).then(n.t.bind(null,1146,7)).then((function(){t.gameId=t.$route.query.id||"";var e=t.$route.query.v||"",n="".concat(void 0,"/").concat(e,"/").concat(t.gameId,".zip");t.isGameFound(n)?((k=new AnthivePlayer("#player",n)).on(AnthivePlayer.event.READY,Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.gameLoaded=!0;case 1:case"end":return e.stop()}}),e)})))),k.on(AnthivePlayer.event.END,(function(){t.isGameEnd=!0})),k.on(AnthivePlayer.event.TICK,(function(data){t.players=data.bots}))):(t.isGameAvailable=!1,t.$ga.event({eventCategory:"game",eventAction:"notfound",eventValue:t.gameId}))}))},getAvatar:function(t){return"".concat("https://api.anthive.io/","/images/").concat(t,"/100/100")},isGameFound:function(t){var e=new XMLHttpRequest;return e.open("HEAD",t,!1),e.send(),404!==e.status},replay:function(){k.control.frame=0,k.control.play(),this.isGameEnd=!1},compare:function(a,b){return a.Wealth<b.Wealth?1:a.Wealth>b.Wealth?-1:0},showActions:function(){this.showActionsState=!this.showActionsState}}},G=(n(644),n(646),Object(c.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"game page-wrap"},[n("v-container",[t.isGameAvailable?[n("div",{staticClass:"mx-auto"},[n("ThePageHeader",{attrs:{title:t.$t("game.game")+" #"+t.gameId,"tooltip-text":t.$t("game.gameId")}})],1),t._v(" "),n("v-row",{staticClass:"mx-auto"},[n("v-col",{staticClass:"player-zone__wrap",attrs:{cols:"12",md:"8"}},[n("GamePlayer",{attrs:{isGameEnd:t.isGameEnd},on:{replay:t.replay}})],1),t._v(" "),n("v-col",{staticClass:"game__players-section",attrs:{cols:"12",md:"4"}},[n("div",[n("GamePlayerList",{attrs:{players:t.players}})],1)])],1),t._v(" "),n("h3",{staticClass:"mt-10 mb-0"},[t._v(t._s(t.$t("game.moreGames"))+":")]),t._v(" "),n("GamesTable",{attrs:{"games-limit":5}})]:n("div",{staticClass:"game__game-not-found"},[n("h2",{staticClass:"mb-10"},[t._v(t._s(t.$t("game.cantFindGame"))+" #"+t._s(t.gameId))]),t._v(" "),n("p",[t._v(t._s(t.$t("game.checkOut")))]),t._v(" "),n("div",{staticClass:"game_games-links"},[n("a",{attrs:{href:t.localePath("game")+"?id=1596089763&v=4.0"}},[n("img",{staticClass:"game__game-image",attrs:{src:"/img/game1.png",alt:"game"}})]),t._v(" "),n("a",{attrs:{href:t.localePath("game")+"?id=1596616511&v=4.0"}},[n("img",{staticClass:"game__game-image",attrs:{src:"/img/game2.png",alt:"game"}})]),t._v(" "),n("a",{attrs:{href:t.localePath("game")+"?id=1596039187&v=4.0"}},[n("img",{staticClass:"game__game-image",attrs:{src:"/img/game3.png",alt:"game"}})])]),t._v(" "),n("a",{staticClass:"game__link",attrs:{href:t.localePath("games")}},[t._v(t._s(t.$t("game.goToGames")))])])],2)],1)}),[],!1,null,"37c5ad7c",null));e.default=G.exports},251:function(t,e,n){var content=n(631);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("5583a786",content,!0,{sourceMap:!1})},254:function(t,e,n){var content=n(637);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("9c89cdb6",content,!0,{sourceMap:!1})},255:function(t,e,n){var content=n(639);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("28b5e942",content,!0,{sourceMap:!1})},260:function(t,e,n){var content=n(645);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("6824e689",content,!0,{sourceMap:!1})},261:function(t,e,n){var content=n(647);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0c7bcf09",content,!0,{sourceMap:!1})},630:function(t,e,n){"use strict";var r=n(251);n.n(r).a},631:function(t,e,n){(e=n(13)(!1)).push([t.i,".log-panel__tab-block[data-v-02152e21]{height:423px;overflow:auto;color:#000!important}",""]),t.exports=e},636:function(t,e,n){"use strict";var r=n(254);n.n(r).a},637:function(t,e,n){(e=n(13)(!1)).push([t.i,".players[data-v-6a65a51a]{height:100%}.players__wrap[data-v-6a65a51a]{display:flex;flex-direction:column;padding:0 10px;height:100%;overflow-x:hidden;overflow-y:auto;position:relative;background-color:#fff}.players__wrap--toggled[data-v-6a65a51a]{min-width:250px}.players__list[data-v-6a65a51a]{display:flex;flex-wrap:wrap}.players .flip-list-move[data-v-6a65a51a]{transition:transform .2s}",""]),t.exports=e},638:function(t,e,n){"use strict";var r=n(255);n.n(r).a},639:function(t,e,n){(e=n(13)(!1)).push([t.i,"#player[data-v-3adf6a60]{background-repeat:repeat;position:relative}.game__vs-separator[data-v-3adf6a60]{position:relative;top:-80px}.player__section[data-v-3adf6a60]{margin-top:8px;position:relative}.v-btn--disabled[data-v-3adf6a60]{background:hsla(0,0%,100%,.2)}.v-btn--disabled>.v-btn__content[data-v-3adf6a60]{color:hsla(0,0%,100%,.8)}.end-game-layout[data-v-3adf6a60],.player__wrap[data-v-3adf6a60]{position:absolute;top:0;left:0;height:100%}.end-game-layout[data-v-3adf6a60]{width:100%;background-color:rgba(0,0,0,.88);justify-content:flex-end}.end-game-layout[data-v-3adf6a60],.layout-buttons[data-v-3adf6a60]{display:flex;flex-direction:column}.layout-buttons[data-v-3adf6a60]{padding:10px;width:60%;height:80%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;justify-content:center}.layout-button[data-v-3adf6a60]{max-height:72px!important;text-transform:none;font-weight:600;font-size:24px!important;letter-spacing:1px}.social-share[data-v-3adf6a60]{margin-top:10%;text-align:center;font-size:16px}.share-button[data-v-3adf6a60]{margin:0 12px}@media screen and (max-width:1264px){.layout-button[data-v-3adf6a60]{max-height:46px!important;font-size:14px!important;letter-spacing:1px}.social-share[data-v-3adf6a60]{margin-top:15px;font-size:12px}.social-share p[data-v-3adf6a60]{margin-bottom:5px}.share-button[data-v-3adf6a60]{height:35px;width:35px}}",""]),t.exports=e},644:function(t,e,n){"use strict";var r=n(260);n.n(r).a},645:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-content__wrap{background:#fff}.player-zone__wrap{width:100%;padding:10px 0 0}",""]),t.exports=e},646:function(t,e,n){"use strict";var r=n(261);n.n(r).a},647:function(t,e,n){(e=n(13)(!1)).push([t.i,".game[data-v-37c5ad7c]{height:100%;overflow-x:hidden}.game__game-not-found[data-v-37c5ad7c]{width:100%;text-align:center;color:#fff;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.game__game-image[data-v-37c5ad7c]{margin:0 5px;border:2px solid #9d2747;transform:scale(.98);transition:.2s}.game__game-image[data-v-37c5ad7c]:hover{transform:scale(1.02)}.game__link[data-v-37c5ad7c]{display:inline-block;color:#fff;text-decoration:underline;margin-top:10px}.game__link[data-v-37c5ad7c]:hover{text-decoration:none!important}",""]),t.exports=e}}]);