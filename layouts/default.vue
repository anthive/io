<template>
  <v-app light>
    <v-toolbar scroll-off-screen fixed class="header__nav px-5">
      <v-toolbar-title>
        <nuxt-link to="/" class="undeco">
          <logo/>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/leaderboard/" flat>Leaderboard</v-btn>
        <v-btn to="/rules/" flat>Rules</v-btn>
        <v-btn href="https://profile.anthive.io/login/" class="green darken-2 white--text" flat>Login</v-btn>
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
        <v-flex xs12 >
          <v-card-text class="dark--text">
            <b>AntHive.IO</b> Copyright&copy;, 2018
            <v-spacer></v-spacer>
            Report an <a href="https://github.com/anthive/io/issues">Issue on GitHub</a>
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
.header__nav {
  z-index: 10;
}
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
