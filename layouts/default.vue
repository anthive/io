<template>
  <v-app light>
    <v-toolbar scroll-off-screen fixed class="px-5">
      <v-toolbar-title>
        <nuxt-link to="/" class="undeco">
          <logo/>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <nuxt-link to="/leaderboard" class="undeco">Leaderboard</nuxt-link>
        </v-btn>
        <v-btn flat>
          <nuxt-link to="/rules" class="undeco">Rules</nuxt-link>
        </v-btn>
        <v-btn color="green white--text darken-2 mx-0">
          <a style="color:#fff;" class="undeco" href="https://profile.anthive.io/">Login</a>
        </v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile>
            <v-list-tile-content justify-center>
              <v-btn flat class="mx-0">
                <nuxt-link to="/leaderboard" class="undeco">Leaderboard</nuxt-link>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content justify-center>
              <v-btn flat class="mx-0">
                <nuxt-link to="/rules" class="undeco">Rules</nuxt-link>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-btn color="green white--text darken-2 mx-0">
                <a style="color:#fff;" class="undeco" href="https://profile.anthive.io/">Login</a>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid ma-0 pa-0>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer height="auto" width="100%">
      <v-layout row wrap white>
        <v-flex xs10 justify-start>
          <v-card-text class="grey--text">
            <logo/>
            <br>Copyright&copy;, 2018
          </v-card-text>
        </v-flex>

        <v-flex xs2>
          <v-card-text class="grey--text justify-right" width="100%">
            <a href="#">
              <v-btn fab small class="yt-icon"></v-btn>
            </a>
            <a href="#">
              <v-btn fab small class="tw-icon"></v-btn>
            </a>
            <a href="#">
              <v-btn fab small class="fb-icon"></v-btn>
            </a>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import logo from '~/components/logo.vue'
import Vuetify from 'vuetify'

export default {
  components: {
    logo
  },
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style>
.undeco {
  text-decoration: none;
}
.shadow {
  box-shadow: none !important;
  margin-top: 20px !important;
}
.yt-icon {
  background-image: url(/img/yt-icon.png);
  background-size: cover;
  background-position: center center;
}

.tw-icon {
  background-image: url(/img/twitter-icon.png);
  background-size: cover;
  background-position: center center;
}

.fb-icon {
  background-image: url(/img/facebook-icon.png);
  background-size: cover;
  background-position: center center;
}
</style>
