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
    >
      <v-card
        flat
        tile
        class="white grey--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 grey--text"
            icon
          >
            <v-icon size="24px"></v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="grey--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="grey--text">
          <logo/>
        </v-card-text>
      </v-card>
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
</style>

