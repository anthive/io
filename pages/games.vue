<template lang="pug">
  section(class="section section-lg pt-lg-0")
    v-parallax(
      src="/img/home_bg.png"
      align
      height="300"
    )
    v-layout(align-center justify-center row fill-height)
      v-flex(xs12 md8 offset2)
        v-card.games__card(
          flat
          tile
          class="white text-xs-left pa-3 elevation-6 rules__card"
        )
          v-card-title
            h1.headline
              span.grey--text All battles:
              span.ml-2 Explore, watch, replay, learn strategies
          v-card-text
            GamesTable(:Filters="filters" :PageSize=17 :ShowTitle="false")
</template>

<script>
import userService from "@/services/User";
import GamesTable from "@/components/gamesTable";

export default {
  name: 'defaultHeader',
  data: () => ({
    us: userService,
    filters: [],
    user: {}
  }),
  created() {
    var username = 'kezlya'

    this.filters = [
      {"term": { "Age": 1000 }},
      {"range": { "Wealth": { "gte": 1000, "lte": 3000 }}}
    ];
  },
  components: {
    GamesTable
  }
}
</script>

<style>
  .games__card {
    margin-top: -178px;
  }
</style>
