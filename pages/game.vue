<template lang="pug">
  section
    v-layout(column align-center)
      v-flex(xs12 md8 lg8 class="players")
        template(v-for="(player, index) in players")
          a(:href="'/user/?username=' + player.Username")
            v-chip
              v-avatar
                v-img(:src="us.photoUrl(player.Username,70)")
              v-avatar
                v-img(:src="us.langUrl(player.Lang)")
              v-avatar
                v-img(:src="us.skinUrl(player.Skin)")
              b {{player.Username}}
          b(v-if="index+1<players.length") &nbsp;VS&nbsp;

      v-flex(xs12 md8 lg8)
        div(id="player" class="ant-player")
            h2(class="loading") {{status}}

      v-flex(xs12 md8 lg8)
        v-toolbar(v-if="players.length>0" flat)
          v-toolbar-items
            v-btn(@click="navigate('prev')" title="Previous" icon)
              v-icon skip_previous
            v-btn(@click="playPause()" :title="isPlaying ? 'pause':'play'" icon)
              v-icon {{ isPlaying ? 'pause':'play_arrow' }}
            v-btn(@click="navigate('next')" title="Next" icon)
              v-icon skip_next
          v-toolbar-title(class="body-2 grey--text text--darken-2") Speed:
          v-toolbar-items
            v-btn(@click="setSpeed(1)" title="Speed 1x" :disabled="currentSpeed == 1" icon) 1x
            v-btn(@click="setSpeed(2)" title="Speed 2x" :disabled="currentSpeed == 2" icon) 2x
            v-btn(@click="setSpeed(4)" title="Speed 4x" :disabled="currentSpeed == 4" icon) 4x
          v-toolbar-title(class="body-2 grey--text text--darken-2") Ticks: {{ this.currentTick }} out of {{ this.totalTicks }}
</template>

<script>
import userService from "@/services/User";

var player = null;

export default {
  data: () => ({
    status: "Loading...",
    isPlaying: true,
    us: userService,
    players: [],
    currentTick: 0,
    currentSpeed: 4,
    totalTicks: 0,
  }),
  mounted() {
    const base = "https://storage.googleapis.com/anthive-prod-games/";
    const gameid = this.$route.query.id || "";
    const version = this.$route.query.v || "";
    const dataUrl = base + version + "/" + gameid + ".zip";
    if (dataUrl != null){
      player = new AnthivePlayer(dataUrl,"#player");
      player.on(AnthivePlayer.onReady, () => {
        this.totalTicks =player.total;
        this.players = player.players;
      });
      player.on(AnthivePlayer.onFrameRendered, () => {
        this.currentTick = player.currentIndex;
      });
    } else {
      this.status = "Can't find game."
    }
  },
  methods: {
    navigate(dir) {
      this.isPlaying = false;
      if(dir == "prev") {
        player.prev()
      } else {
        player.next()
      }
    },
    playPause() {
      if (this.isPlaying){
        player.pause()
        this.isPlaying = false;
      }else {
        player.play()
        this.isPlaying = true;
      }
    },
    setSpeed(value) {
      this.currentSpeed = value
      player.speed = value
    },
  }
}
</script>
<style>
.ant-player {
  background-image: url("https://anthive.io/skins/server/1/background.png");
  background-repeat: repeat;
}
.players {
  margin-top: 100px;
}
</style>
