(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{250:function(t,e,r){var content=r(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("b9afa686",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";var n=r(250);r.n(n).a},304:function(t,e,r){(e=r(11)(!1)).push([t.i,"#textarea{max-width:460px!important}#player{height:200px}",""]),t.exports=e},332:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{totalFrame:null,playerRequest:"",status:"Loading...",player:null,responses:['{"antId":{"act":"move","dir":"right"}}','{"antId":{"act":"move","dir":"up"}}','{"antId":{"act":"move","dir":"down"}}'],requests:["Move the ant to the right","Move the ant to the up","Move the ant to the down"],counter:0}},mounted:function(){var t=this,e="https://storage.googleapis.com/anthive-dev-games/Kj5A2SydOFlqgLIu35Br.zip";this.player=new AnthivePlayer("#player",e),this.player.on(AnthivePlayer.event.READY,(function(){t.totalFrame=t.player.control.frameTotal,t.player.control.speed=.5})),this.player.on(AnthivePlayer.event.END,(function(){t.player.control.frame=0,t.player.control.play()}))},methods:{replay:function(){this.player.control.frame=0,this.player.control.play(),this.isGameEnd=!1},scrollTextarea:function(){var t=this;this.$nextTick((function(){var textarea=t.$el.querySelector("#textarea");textarea.scrollTop=textarea.scrollHeight}))},addDataToTextarea:function(){3===this.counter&&(this.counter=0);var t="REQUEST #".concat(this.frame+1,": ").concat(this.requests[this.counter],"\n\n"),e="RESPONSE: ".concat(this.responses[this.counter],"\n\n");this.playerRequest=t+e,this.counter++}},computed:{frame:function(){if(this.player&&this.player.control)return this.player.control.frame}},watch:{frame:function(){this.addDataToTextarea(),this.scrollTextarea()}}},o=(r(303),r(7)),l={data:function(){return{}},components:{tutorialSection:Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-container",[r("v-row",{staticClass:"justify-center align-start"},[r("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"8"}},[r("v-col",{staticClass:"mb-4 d-flex justify-center",attrs:{cols:"12",md:"6"}},[r("v-textarea",{ref:"textarea",attrs:{id:"textarea",value:t.playerRequest,height:"200",placeholder:"Loading...",solo:"",dark:"",dense:"","no-resize":"",readonly:""}})],1),r("v-col",{staticClass:"d-flex justify-center",attrs:{md:"6"}},[r("div",{staticClass:"ant-player ah-container",attrs:{id:"player"}},[r("h2",{staticClass:"loading"},[t._v(t._s(t.$t("loading")))])])])],1)],1),t.frame?r("p",{staticClass:"text-center"},[t._v("Ticks: "+t._s(t.frame)+" / "+t._s(t.totalFrame))]):t._e()],1)],1)}),[],!1,null,null,null).exports}},c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("tutorialSection")],1)}),[],!1,null,null,null);e.default=c.exports}}]);