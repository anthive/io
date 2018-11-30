<template>
  <section class="section section-lg pt-lg-0">
    <v-parallax src="/img/leaderboard_bg.png" align height="300"></v-parallax>
    <v-layout align-center justify-center row fill-height mt-5>
      <v-flex xs12 md8 offset2>
        <v-data-table
          :headers="headers"
          :items="APIdata"
          class="elevation-1"
          :rows-per-page-items="rowsPerPageItems"
          item-key="rank"
          :pagination.sync="pagination"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">
              <div class="profile-chip elevation-3">
                <div class="profile-chip-image">
                  <img :src="props.item._source.picture" alt>
                </div>
                <div class="profile-chip-image">
                  <img :src="'https://anthive.io/skins/lang/' + props.item._source.lang + '.png'">
                  <!-- props.item._source.lang -->
                </div>
                <div class="profile-chip-name">{{ props.item._id }}</div>
                <div class="profile-chip-version">v.{{props.item._source.version}}</div>
              </div>
            </td>
            <td class="text-xs-left">{{ props.item._source.country }}</td>
            <td class="text-xs-left">{{ props.item._source.city }}</td>
            <td class="text-xs-left">{{ props.item._source.games }}</td>
            <td class="text-xs-left">{{ props.item._source.ranking }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Vuetify)
export default {
  data() {
    return {
      headers: [
        { text: 'User', value: '_id' },
        { text: 'Country', value: '_source.country' },
        { text: 'City', value: '_source.city' },
        { text: 'Games played', value: '_source.games' },
        { text: 'Ranking', value: '_source.ranking' }
      ],
      pagination: {
        sortBy: '_source.ranking',
        descending: true
      },
      APIdata: [],
      rowsPerPageItems: [10]
    }
  },
  mounted() {
    this.$http.get('https://search.anthive.io/users/_search').then(response => {
      this.APIdata = response.data.hits.hits
    })
  }
}
</script>

<style scoped>
.profile-chip {
  width: 90%;
  height: 48px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 25px;
}
.profile-chip-name {
  float: left;
}
.profile-chip-image {
  position: relative;
  width: 48px;
  height: 48px;
  float: left;
  border-radius: 100%;
  overflow: hidden;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  border: 2px solid #a1a1a1;
}
.profile-chip-image:nth-child(2) {
  transform: translateX(-10px);
  z-index: 0;
}
.profile-chip-skin {
  height: 48px;
  line-height: 48px;
  padding-right: 5px;
  float: right;
  border-radius: 100%;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}
.profile-chip-version {
  width: 48px;
  height: 48px;
  float: right;
  border-radius: 100%;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(95, 73, 47, 0.9);
  font-size: 18px;
  text-align: center;
  line-height: 48px;
  padding: 0;
  padding-right: 0px;
}
.profile-chip-image img {
  width: 100%;
}
.profile-chip-name {
  line-height: 48px;
}
</style>
