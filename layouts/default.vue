<template>
  <v-app light>
    <v-toolbar fixed class="px-5" :class="{ 'white': scrollPosition > 10, 'transparent': scrollPosition < 10, 'shadow':scrollPosition < 10}">
      <v-toolbar-title >
         <nuxt-link to="/" class="undeco"><logo/></nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat><nuxt-link to="/leaderboard" class="undeco" :class="{ 'nuxt-link': scrollPosition < 10}">Leaderboard</nuxt-link></v-btn>
        <v-btn flat><nuxt-link to="/rules" class="undeco" :class="{ 'nuxt-link': scrollPosition < 10}">Rules</nuxt-link></v-btn>
        <v-btn color="green white--text darken-2 mx-0"><a style="color:#fff;" class="undeco" href="https://profile.anthive.io/login">Login</a></v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-content>
      <v-container fluid ma-0 pa-0>
        <nuxt />
      </v-container fluid>
    </v-content>

  <v-footer
      height="auto"
      width="100%"
    >
      <v-layout row align-center wrap>
        <v-flex xs12>

        

          <v-card
            flat
            tile
            class="white grey--text text-xs-center"
          >
            <v-card-text>
              <v-btn

                class="mx-3 grey--text"
                icon
              >
                <v-icon size="24px"></v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="grey--text pt-0" width="100%">
              <a href="#">
                <v-btn fab medium class="yt-icon">
                  
                </v-btn>
              </a>
              <a href="#">
                <v-btn fab medium class="tw-icon">
                  
                </v-btn>
              </a>
              <a href="#">
                <v-btn fab medium class="fb-icon">
                  
                </v-btn>
              </a>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="grey--text">
              <logo/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Vuetify from 'vuetify'

export default {
  components: {
    Logo,
    VuetifyLogo
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
.shadow {
  box-shadow: none !important;
  margin-top: 20px !important;
}
.yt-icon {
  background-image: url(/yt-icon.png);
  background-size: cover;
  background-position: center center;
}

.tw-icon {
  background-image: url(/twitter-icon.png);
  background-size: cover;
  background-position: center center;
}

.fb-icon {
  background-image: url(/facebook-icon.png);
  background-size: cover;
  background-position: center center;
}
</style>

