<template>
  <v-app light>
    <v-toolbar fixed class="white">
      <v-toolbar-title >
        <logo/>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container-fluid>
        <nuxt />
      </v-container-fluid>
    </v-content>

      <v-footer class="white">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              <logo/>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {}
  }
}
</script>


