/* eslint-disable */
<template>
   <v-app light>



    <v-content>
      <section>
        <v-parallax 
          src="/home_bg.png" 
          height="800">
          <v-container>
          <v-layout
            align-center 
            justify-start 
            row 
            fill-height
            class="white--text"
          >

          <v-flex offset-md2 md4>
            <h1 class="white--text mb-2 display-1 text-xs-left">You are not playing a game</h1>
            <div class="subheading mb-3 text-xs-left">Turn-based strategy game for your AI</div>
            <div class="body-2">
              Start your new coding adventure with three simple steps
            </div>

              Get Started
            </v-btn>
          </v-flex>
          <v-flex >
            Game embedded player placed here
          </v-flex>
            
          </v-layout>
          </v-container>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout align-center justify-center row fill-height>

                <v-flex xs12 md3 pa-5>
                  <v-card class="elevation-6 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="brown--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">1. GET A SAMPLE BOT</div>
                    </v-card-title>
                    <v-card-text>
                      It's a wrapper with primitive logic. Choose coding language that you prefer. Git clone sample repository or import it.
                    </v-card-text>
                    <div class="text-xs-center">
                      <v-chip class="brown lighten-2 white--text">Example Chip</v-chip>
                      <v-chip class="brown lighten-2 white--text">Example Chip</v-chip>
                      <v-chip class="brown lighten-2 white--text">Example Chip</v-chip>
                      <v-chip class="brown lighten-2 white--text">Example Chip</v-chip>
                      <v-chip class="brown lighten-2 white--text">Example Chip</v-chip>
                    </div>
                  </v-card>
                </v-flex>

                <v-flex xs12 md3 pa-5>
                  <v-card class="elevation-6 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="brown--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">2. CODE STRATEGIES</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                                        <v-btn color="info">Info</v-btn>

                  </v-card>
                </v-flex>

                <v-flex xs12 md3 pa-5>
                  <v-card class="elevation-6 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="brown--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">3. LINK YOUR REPO</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                                        <v-btn color="info">Info</v-btn>

                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="assets/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">test</div>
                </v-card-title>
                <v-card-text>
test
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">test</div>
                </v-card-title>
                <v-card-text>
                  test
                </v-card-text>
                <v-list class="">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>test</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

    </v-content>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>


<style>
</style>