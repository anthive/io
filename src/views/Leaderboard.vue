<template>
<div>

        <section class="section section-lg pt-lg-0">
            <div class="container-fluid" style="height: 200px;background-color: rgba(95, 73, 47, 1)">

            </div>

            <div class="container-fluid shape-container d-flex" style="margin-top: -50px;">
                <div class="col px-0">
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10">


                                <v-data-table
                                    :headers="headers"
                                    :items="APIdata"
                                    class="elevation-1"
                                    :rows-per-page-items="rowsPerPageItems"
                                >
                                    <template slot="items" slot-scope="props">
                                    <td>test</td>
                                    <td class="text-xs-left">
                                        <div class="profile-chip shadow">
                                            <div class="profile-chip-image">
                                                <img :src="props.item._source.picture" alt="">
                                            </div>
                                            <div class="profile-chip-name">
                                                {{ props.item._id }}
                                            </div>
                                        </div>
                                        
                                        
                                    </td>
                                    <td class="text-xs-left">{{ props.item._source.country }}</td>
                                    <td class="text-xs-left">{{ props.item._source.city }}</td>
                                    <td class="text-xs-left">{{ props.item._source.games }}</td>
                                    <td class="text-xs-left">{{ props.item._source.ranking }}</td>
                                    </template>
                                </v-data-table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
</div>
</template>

<script>
import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(Vuetify);
export default {
  name: "leaderboard",
  components: {},
  data() {
    return {
      headers: [
        {
          text: "Placement",
          align: "left",
          sortable: true,
          value: "placement"
        },
        { text: "User", value: "_id" },
        { text: "Country", value: "_source.country" },
        { text: "City", value: "_source.city" },
        { text: "Games played", value: "_source.games" },
        { text: "Ranking", value: "rank" }
      ],
      leaderboard: [],
      APIdata: [],
      rowsPerPageItems: [10]
    };
  },
  mounted() {
    this.$http.get("https://search.anthive.io/users/_search").then(response => {
      this.APIdata = response.data.hits.hits;

      console.log(this.APIdata[0]);
    });
  }
};
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
.profile-chip-image {
  width: 48px;
  height: 48px;
  float: left;
  border-radius: 100%;
}

.profile-chip-image img {
  width: 100%;
  border-radius: 100%;
}

.profile-chip-name {
  line-height: 48px;
}
</style>
