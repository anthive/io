<template lang="pug">
  section
    v-layout(column align-center)
      v-flex.players.mx-4.px-5.text-xs-center(xs12 md8 lg8)
        template(v-for="(player, index) in players")
          userInfoFull(
            :username="player.Username"
            :lang="player.Lang"
            :version="player.Version"
            :skin="player.Skin"
            :score="player.Wealth"
            :span="[player.Y, player.X]"
            :stats="player.Stats"
          )
          span.game__vs-separator.mx-4(v-if="index+1<players.length") VS
      v-flex(xs12 md8 lg8)
        div(id="player" :style="{background: '#ccc url(/skins/server/'+theme+'/background.png)' }")
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
import userInfoFull from "@/components/UserInfoFull";

var player = null;

export default {
  data: () => ({
    status: "Loading...",
    isPlaying: true,
    players: [],
    currentTick: 0,
    currentSpeed: 4,
    totalTicks: 0,
    theme: 1,
  }),
  components: {
    userInfoFull
  },
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
        this.theme = player.theme;
      });
      player.on(AnthivePlayer.onFrameRendered, () => {
        this.currentTick = player.currentIndex + 1;
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
#player {
  background-repeat: repeat;
}
.players {
  margin-top: 100px;
}

.game__vs-separator {
  position: relative;
  top: -80px;
}
</style>
