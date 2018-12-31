<template>
  <section>
    <v-layout column align-center>
      <v-flex xs12 md8 lg8>
        <div id="player" class="ant-player">
            <h2 class="loading">{{status}}</h2>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
//import { AnthivePlayer } from "anthive-player";

export default {
  data: () => ({
    status: "Loading...",
  }),
  mounted() {
    // let player_script = document.createElement('script');
    //      player_script.setAttribute('src','/js/anthive.js')
    //      document.head.appendChild(player_script);

    const base = "https://storage.googleapis.com/anthive-prod-games/";
    const gameid = this.$route.query.id || "";
    const version = this.$route.query.v || "";

    const dataUrl = base + version + "/" + gameid + ".zip";
    if (dataUrl != null){
      const Myplayer  = new AnthivePlayer(dataUrl,"#player");
    } else {
      this.status = "Can't find game."
    }
    //Myplayer.play();
    //console.log("sdfas",AnthivePlayer);
  },
}
</script>
<style>
.ant-player {
  background-image: url("https://anthive.io/skins/server/1/background.png");
  background-repeat: repeat;
  margin-top: 100px;
}
</style>
