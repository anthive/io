<template>
  <div>
    <v-card>
      <v-responsive :aspect-ratio="16/9" class="flex vertical-middle">
            <div class="text-xs-center fill-height">
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  :src="userData._source.picture"
                >
              </v-avatar>
              <div class="headline"><span style="font-weight:bold">{{userData._index}}</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">{{userData._source.org}}</div>
              <div class="subheading text-xs-center pt-1 pb-3">Ranking: {{userData._source.ranking}}</div>
              <div class="subheading text-xs-center pt-1 pb-3">Language: {{userData._source.lang}}</div>
            </div>
      </v-responsive>
    </v-card>
  </div>

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
        userData: {
          _source: {}
        }
      }
    },
    mounted() {
      this.$http.get('https://search.anthive.io/users/_search?q=_id:kezlya').then(response => {
        this.userData = response.data.hits.hits[0]
        console.log("userData", this.userData)
      })
    }
  }
</script>

<style>
  .vertical-middle {
    align-items: center;
  }
</style>
