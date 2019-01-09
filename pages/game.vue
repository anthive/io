<template>
  <section>
    <v-layout column align-center>
      <v-flex xs12 md8 lg8>
        <div id="player" class="ant-player">
            <h2 class="loading">{{status}}</h2>
        </div>
        
      </v-flex>
      <v-flex xs12 md8 lg8>
        <v-toolbar flat>
          <v-toolbar-items>
            <v-btn @click="navTick(-1)" title="Previous" icon><v-icon>skip_previous</v-icon></v-btn>
            <v-btn @click="play()" title="Play" :disabled="played" icon><v-icon>play_arrow</v-icon></v-btn>
            <v-btn @click="navTick(1)" title="Next" icon><v-icon>skip_next</v-icon></v-btn>
            <v-btn @click="pause()" title="Pause" :disabled="!played" icon><v-icon>pause</v-icon></v-btn>
          </v-toolbar-items>
          <v-toolbar-title class="body-2 grey--text text--darken-2">Speed:</v-toolbar-title>
          <v-toolbar-items>
            <v-btn @click="setSpeed(speeds['1x'])" title="Speed 1x" :disabled="speed == speeds['1x']" icon>1x</v-btn>
            <v-btn @click="setSpeed(speeds['2x'])" title="Speed 2x" :disabled="speed == speeds['2x']" icon>2x</v-btn>
            <v-btn @click="setSpeed(speeds['4x'])" title="Speed 4x" :disabled="speed == speeds['4x']" icon>4x</v-btn>
          </v-toolbar-items>
          <v-toolbar-title @click="setAge()" class="body-2 grey--text text--darken-2">Ticks: {{ tick.current }} out of {{ tick.total }}</v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
//import { AnthivePlayer } from "anthive-player";

var player = null;

export default {
  data: () => ({
    status: "Loading...",
    played: true,
    speeds: {
      "1x": 1,
      "2x": 2,
      "4x": 4
    },
    speed: 4,
    tick: {
      total: 1,
      current: 0
    }
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
      //const Myplayer  = new AnthivePlayer(dataUrl,"#player");
      player = new AnthivePlayer(dataUrl,"#player");

      this.play()
    } else {
      this.status = "Can't find game."
    }
    //Myplayer.play();
    //console.log("sdfas",AnthivePlayer);
  },
  methods: {
    getCurrentTick() {
      return player.currentIndex + 1
    },
    watchTick() {
      var interval = setInterval(() => {
        // catch total ticks
        if(player.total != 0 && this.tick.total == 1) {
          this.tick.total = player.total
        }

        this.tick.current = this.getCurrentTick()

        // stop if ended of ticks or if paused
        if((player.currentIndex > 1 && player.total == this.tick.current) || !this.played) {
          clearInterval(interval)
        }
      }, 100)
    },
    navTick(position) {
      this.pause()

      if(position == -1) {
        player.prev()
      } else if(position == 1) {
        player.next()
      }

      this.tick.current = this.getCurrentTick()
    },
    play() {
      this.played = true
      player.play()
      
      this.watchTick()
    },
    pause() {
      this.played = false
      player.pause()
    },
    setSpeed(value) {
      this.speed = value
      player.speed = value
    }
  }
}
</script>
<style>
.ant-player {
  background-image: url("https://anthive.io/skins/server/1/background.png");
  background-repeat: repeat;
  margin-top: 100px;
}
</style>