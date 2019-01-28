<template lang="pug">
  section
    v-layout(column align-center style="overflow: scroll;")
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
            :color="botColors[index]"
          )
          span.game__vs-separator.mx-4(v-if="index+1<players.length") VS

      v-flex
        v-flex.player__section
          v-layout.player__wrap(@click="showBotsInfo()")
            v-layout(v-show="displayBotInfo")
              v-flex(row wrap)
                template(v-for="(player, index) in players")
                  v-card.d-inline-block.my-5.ml-5
                    v-card-title Info about bot
                      v-avatar.ml-2(size="10" :class="botColors[index]")
                    v-card-text.py-0.caption
                      span.bot-info__title.d-inline-block.mr-2 Span:
                      span.bot-info__data Y{{ player.Y }}, X{{ player.X }}
                    v-card-text.py-0.caption
                      span.bot-info__title.d-inline-block.mr-2 Ticks:
                      span.bot-info__data {{ player.Stats.Age }}
                    v-card-text.py-0.caption
                      span.bot-info__title.d-inline-block.mr-2 Ants:
                      span.bot-info__data {{ player.Stats.Ants }}
                    v-card-text.py-0.caption
                      span.bot-info__title.d-inline-block.mr-2 HiveSize:
                      span.bot-info__data {{ player.Stats.Hive }}
                    v-card-text.py-0.caption
                      span.bot-info__title.d-inline-block.mr-2 Errors:
                      span.bot-info__data {{ player.Stats.Errors }}
                    v-card-text.pt-0.pb-2.caption
                      span.bot-info__title.d-inline-block.mr-2 Earned:
                      span.bot-info__data.font-weight-bold {{ player.Wealth }}
          div(id="player" :style="{ background: '#ccc url(/skins/server/'+theme+'/background.png)' }")
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
    displayBotInfo: false,
    botColors: [
      'blue-grey',
      'brown',
      'deep-orange',
      'orange',
      'amber',
      'yellow',
      'lime',
      'light-green',
      'green',
      'teal',
      'cyan',
      'light-blue',
      'blue',
      'indigo',
      'deep-purple',
      'purple',
      'pink',
      'red'
    ]
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
    showBotsInfo() {
      this.playPause()
      this.displayBotInfo = !this.displayBotInfo
    },
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

.player__section {
  position: relative;
}

.player__wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.bot-info__title {
  width: 50px;
}

.bot-info__data {
  display: inline-block;
  width: 60px;
  text-align: center;

}

.players {
  margin-top: 100px;
}

.game__vs-separator {
  position: relative;
  top: -80px;
}
</style>
