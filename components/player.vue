<template>
  <div id="player" class="ant-player">
                        <h2 class="loading">Loading...</h2>
                    </div>
</template>
<script>
export default {
  name: 'player',
  data: () => ({
    dataUrl: null,
    player: null,
    ready: false
  }),
  mounted() {
    const gameid = this.$route.query.gameid || null;

    this.dataUrl = gameid ? "https://storage.googleapis.com/anthive-dev-games/" + gameid + ".zip" : null;
    window.dataUrl = this.dataUrl;
    let player_script = document.createElement('script');
    player_script.setAttribute('src','/js/anthive.js')
    document.head.appendChild(player_script);
  }
}
</script>
