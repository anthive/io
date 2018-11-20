/* eslint-disable */
<template>
   <v-app light>
    <v-content>

      <section>
        <v-parallax 
          src="/home_bg.png" 
          height="600"
          m4-2>
          <v-container>
          <v-layout
            align-center 
            justify-start 
            row 
            fill-height
            class="white--text"
          >

          <v-flex offset-md2 md4>
            <h1 class="white--text mb-2 display-3 text-xs-left font-weight-bold">You are not playing a game</h1>
            <div class="subheading mb-3 text-xs-left orange--text text--darken-1">Turn-based strategy game for your AI</div>
            <div class="title font-weight-regular">
              Start your new coding adventure with three simple steps
            </div>
            <v-btn color="green white--text darken-2 mx-0 my-4">
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

                <v-flex xs12 md3 pa-2 >
                  <v-card class="elevation-6 white">
                    <v-card-text class="text-xs-left px-3">
                      <v-icon x-large class="brown--text text--lighten-2">cloud_download</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-start ">
                      <div class="headline text-xs-left px-3">1. GET A SAMPLE BOT</div>
                    </v-card-title>
                    <v-card-text>
                      It's a wrapper with primitive logic. Choose coding language that you prefer. Git clone sample repository or import it.
                    </v-card-text>
                    <div class="text-xs-left px-3 py-3">
                      <v-chip class="brown lighten-2 white--text">JS</v-chip>
                      <v-chip class="brown lighten-2 white--text">Python</v-chip>
                      <v-chip class="brown lighten-2 white--text">Go</v-chip>
                      <v-chip class="brown lighten-2 white--text">C++</v-chip>
                      <v-chip class="brown lighten-2 white--text">Java</v-chip>
                      <v-chip class="brown lighten-2 white--text">PHP</v-chip>
                    </div>
                  </v-card>
                </v-flex>

                <v-flex xs12 md3 pa-2>
                  <v-card class="elevation-6 white">
                    <v-card-text class="text-xs-left px-3">
                      <v-icon x-large class="brown--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-start">
                      <div class="headline text-xs-left px-3">2. CODE STRATEGIES</div>
                    </v-card-title>
                    <v-card-text>
                      Alter logic with your own strategies. Git push to origin. Test/debug it in sandbox environment
                    </v-card-text>
                    <v-btn class="ma-3" color="brown">
                      <nuxt-link to="/rules" class="nuxt-link">Rules</nuxt-link>
                    </v-btn>
                  </v-card>
                </v-flex>

                <v-flex xs12 md3 pa-2 >
                  <v-card class="elevation-6 white" height="100%">
                    <v-card-text class="text-xs-left">
                      <v-icon x-large class="brown--text text--lighten-2">insert_link</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-left">
                      <div class="headline text-xs-left px-3">3. LINK YOUR REPO</div>
                    </v-card-title>
                    <v-card-text>
                      Link your repository in your profile.Set your username in ANTHIVE file. 
                    </v-card-text>
                    <v-btn class="ma-3" color="brown white--text">
                        <nuxt-link to="/rules" class="nuxt-link">Rules</nuxt-link>
                    </v-btn>

                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section >
        <v-layout
          column
          wrap
          class="my-5 brown-bg-1"
          align-center

        >
          <v-flex xs12 >
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height>

                <v-flex xs12 md8 my-5 >
                  <v-card class="elevation-6 white">
                    <v-layout align-center justify-center row wrap fill-height>
                    <v-flex xs12 md4 pa-5 justify-left>
                      <v-img
                        src="/ant_ml.svg"
                        aspect-ratio="1"
                        max-width="80%"
                        style="margin-left: 10%;"
                        contain
                        class="elevation-6 rounded"
                      ></v-img>
                    </v-flex >
                    <v-flex xs12 md8 pa-0 justify-right>
                    <v-card-title primary-title class="layout justify-start ">
                      <div class="headline text-xs-left px-3">Learn</div>
                    </v-card-title>
                    <v-card-text>
                      Always wanted to learn coding but didn’t know what to start with? Start right here. This turn-based strategy game is the most engaging way to learn real code. PIck a language, read the rules link to
                      the rules and start learning right now.
                    </v-card-text>
                    <div class="text-xs-left pa-3">

                    </div>
                    </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>

                <v-flex xs12 md8 my-5>
                  <v-card class="elevation-6 white">
                    <v-layout align-center justify-center row wrap fill-height>
                    <v-flex xs12 md4 pa-5 justify-left>
                      <v-img
                        src="/ant_engineer_red.svg"
                        aspect-ratio="1"
                        max-width="80%"
                        style="margin-left: 10%;"
                        contain
                        class="elevation-6 rounded" 
                        
                      ></v-img>
                    </v-flex >
                    <v-flex xs12 md8 pa-0 justify-right>
                    <v-card-title primary-title class="layout justify-start ">
                      <div class="headline text-xs-left px-3">Practice</div>
                    </v-card-title>
                    <v-card-text >
                      Keep practicing and improving your coding skills by playing this game. This game is a great way to advance your programming skills while having fun and getting noticed. Master your current language of
                       choice; or expand your understanding of a new one. By completing the levels you get trophies and certificates which will benefit you not only in the game but in real life.
                    </v-card-text>

                    </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>

                <v-flex xs12 md8 my-5>
                  <v-card class="elevation-6 white">
                    <v-layout align-center justify-center row wrap fill-height>
                    <v-flex xs12 md4 pa-5 justify-center>
                      <v-img
                        src="/ant_engineer_blue.svg"
                        aspect-ratio="1"
                        max-width="80%"
                        style="margin-left: 10%;"
                        contain
                        class="elevation-6 rounded" 
                        
                      ></v-img>
                    </v-flex >
                    <v-flex xs12 md8 pa-0 justify-right>
                    <v-card-title primary-title class="layout justify-start ">
                      <div class="headline text-xs-left px-3">Compete</div>
                    </v-card-title>
                    <v-card-text>
                      Demonstrate your skills by competing with other developers in your language of choice. This platform allows you to battle not just against other software engineers around the world, but also against
                       bots written in different languages on the same map and on your own time. Demonstrate to everyone that your strategy is superior, your code is the most efficient and has no errors. Climb the leaderboard,
                       improving your strategy. Let your bot dominate the tournaments.
                    </v-card-text>

                    </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>

                <v-flex xs12 md8 my-5>
                  <v-card class="elevation-6 white">
                    <v-layout align-center justify-center row wrap fill-height>
                    <v-flex xs12 md4 pa-5 justify-left>
                      <v-img
                        src="/ant_racing.svg"
                        aspect-ratio="1"
                        max-width="80%"
                        style="margin-left: 10%;"
                        contain
                        class="elevation-6 rounded" 
                        
                      ></v-img>
                    </v-flex >
                    <v-flex xs12 md8 pa-0 justify-right>
                    <v-card-title primary-title class="layout justify-start ">
                      <div class="headline text-xs-left px-3">Build your career</div>
                    </v-card-title>
                    <v-card-text>
                      Turn your virtual fun into career. This game not only helps you to practice/grow your programming skills but it also can get you a career you always dreamed of. Let your dream job hire you not only based
                      on your resume, but also on your actual skills. Use our game to show your potential employer your ability and strength in coding.
                    </v-card-text>

                    </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section class="video_bg">
        <v-layout
          column
          wrap
          class="my-0"
          align-center
          pa-0 
        >

          <v-flex xs12 class="md8 video_filter">
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height >
                <v-flex xs12 md12 ma-0 pa-0 >
                  <v-layout align-center justify-center row fill-height ma-0 pa-0 >
                    <v-flex xs12 md2 offset-md2 my-0 >
                      <v-card class="elevation-0 transparent">

                        <v-img
                        src="/play_button.png"
                        aspect-ratio="1"
                        max-width="128px"

                        contain

                      ></v-img>

                      </v-card>
                    </v-flex>

                <v-flex xs12 md4 my-0 class="align-center justify-center">
                  <v-card class="elevation-0 transparent">

                    <v-card-title primary-title class="layout justify-start ">
                      <div class="headline brown--text text-xs-left px-2">Get Started!</div>
                    </v-card-title>
                    <v-card-text>
                      <p>
                      This is a turn-based strategy game for your Bot.
                      </p>
                      <p>
                      Compute, contemplate and plan each step of your ants. Send commands to your ants in order for them to collect food, bring it to your hive, and to grow your colony.
                      </p>
                      <p>
                      A player with the biggest colony and less errors wins the game. To start the game please follow three steps below. 
                      </p>
                      <p>
                      For detailed rules please visit link
                      </p>
                    </v-card-text>
                    <v-btn class="mx-3 my-0" color="brown white--text">
                        <nuxt-link to="/rules" class="nuxt-link">Rules</nuxt-link>
                    </v-btn>

                  </v-card>
                </v-flex>
                </v-layout>
              </v-flex>
                

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section >
        <v-layout
          column
          wrap
          class="my-5"
          align-center

        >
          <v-flex xs12 >
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height >

                <v-flex xs12 md8 my-5 >

                    <v-layout align-center justify-center row wrap fill-height>
                    <v-flex xs12 md6 pa-5 justify-left>
                      <v-img
                        src="/lb_teaser.png"
                        aspect-ratio="1"

                        contain

                      ></v-img>
                    </v-flex >
                    <v-flex xs12 md6 justify-right>
                    <v-card class="elevation-6 white pl-5 ant-card-scientist" style="padding-left: 140px !important;">
                    <v-card-title primary-title class="layout justify-start ">
                      <div class="headline text-xs-left px-3">Learn</div>
                    </v-card-title>
                    <v-card-text>
                      Always wanted to learn coding but didn’t know what to start with? Start right here. This turn-based strategy game is the most engaging way to learn real code. PIck a language, read the rules link to
                      the rules and start learning right now.
                    </v-card-text>
                    </v-card>
                    </v-flex>
                    </v-layout>

                </v-flex>

                <v-flex xs12 md8 my-5 >

                    <v-layout align-center justify-center row wrap fill-height>
                    <v-flex xs12 md6 pa-5 justify-left>
                      <v-img
                        src="/badges_trinity.png"
                        aspect-ratio="1"

                        contain

                      ></v-img>
                    </v-flex >
                    <v-flex xs12 md6 justify-right>
                    <v-card class="elevation-6 white pl-5 ant-card-scientist" style="padding-left: 140px !important;">
                    <v-card-title primary-title class="layout justify-start ">
                      <div class="headline text-xs-left px-3">Learn</div>
                    </v-card-title>
                    <v-card-text>
                      Always wanted to learn coding but didn’t know what to start with? Start right here. This turn-based strategy game is the most engaging way to learn real code. PIck a language, read the rules link to
                      the rules and start learning right now.
                    </v-card-text>
                    </v-card>
                    </v-flex>
                    </v-layout>

                </v-flex>


              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section >
        <v-layout
          column
          wrap
          class="my-5 brown-bg-2"
          align-center

        >
          <v-flex xs12 >
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height >

                <v-flex xs12 md12 my-0 >

                    <v-layout align-center justify-center row wrap fill-height>

                      <v-flex xs12 md4 pa-5 justify-left>
                        <v-card class="elevation-6 white pa-3">
                          <v-card-text class="text-xs-center py-2">
                            <v-icon x-large class="green--text text--lighten-3">person</v-icon>
                          </v-card-text>

                            <div class="headline text-xs-center px-0 green--text text--lighten-2">Ranked bots</div>

                          <v-card-text class="display-1 text-xs-center grey--text">
                            12
                          </v-card-text>
                        </v-card>
                      </v-flex >

                      <v-flex xs12 md4 pa-5 justify-left>
                        <v-card class="elevation-6 white pa-3">
                          <v-card-text class="text-xs-center py-2">
                            <v-icon x-large class="green--text text--lighten-3">cloud_upload</v-icon>
                          </v-card-text>

                            <div class="headline text-xs-center px-0 green--text text--lighten-2">Commits</div>

                          <v-card-text class="display-1 text-xs-center grey--text">
                            213
                          </v-card-text>
                        </v-card>
                      </v-flex >

                      <v-flex xs12 md4 pa-5 justify-left>
                        <v-card class="elevation-6 white pa-3">
                          <v-card-text class="text-xs-center py-2">
                            <v-icon x-large class="green--text text--lighten-3">category</v-icon>
                          </v-card-text>

                            <div class="headline text-xs-center px-0 green--text text--lighten-2">Games played</div>

                          <v-card-text class="display-1 text-xs-center grey--text">
                            829
                          </v-card-text>
                        </v-card>
                      </v-flex >

                    </v-layout>

                </v-flex>

                <v-flex xs12 md12 my-0 >

                    <v-layout align-center justify-center row wrap fill-height>

                      <v-flex xs12 md4 pa-5 justify-left>
                        <v-card class="elevation-6 white pa-3">
                          <v-card-text class="text-xs-center py-2">
                            <v-icon x-large class="green--text text--lighten-3">cloud_upload</v-icon>
                          </v-card-text>

                            <div class="headline text-xs-center px-0 green--text text--lighten-2">Commits</div>

                          <v-card-text class="display-1 text-xs-center grey--text">
                            213
                          </v-card-text>
                        </v-card>
                      </v-flex>

                      <v-flex xs12 md4 pa-5 justify-left>
                        <v-card class="elevation-6 white pa-3">
                          <v-card-text class="text-xs-center py-2">
                            <v-icon x-large class="green--text text--lighten-3">cloud_upload</v-icon>
                          </v-card-text>

                          <div class="headline text-xs-center px-0 green--text text--lighten-2">Commits</div>

                          <v-card-text class="display-1 text-xs-center grey--text">
                            213
                          </v-card-text>
                        </v-card>
                      </v-flex>

                    </v-layout>

                </v-flex>


              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section >
        <v-parallax 
          src="/home_bg.png" 
          height="400"
          m4-2>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 style="width:100%;">
              <v-container grid-list-xl>
                <v-layout align-center justify-center row fill-height >

                        <v-flex xs12 md3 pa-5 >
                          <v-card class="elevation-6 white pa-3 bug" style="padding-left: 120px !important;">


                              <div class="headline text-xs-left px-0 brown--text text--lighten-2">
                                Found an issue?
                                </div>

                            <v-card-text class="body-1 text-xs-left px-0 grey--text">
                              Tell us on our github repo and we wil fix it!
                            </v-card-text>
                            <v-btn color="brown white--text darken-2 mx-0">
                              Report issue
                            </v-btn>
                          </v-card>
                        </v-flex >

                        <v-flex xs12 md3 pa-5>
                          <v-card class="elevation-6 white px-0 pa-3 mail" style="padding-left: 120px !important;">

                            <div class="headline text-xs-left px-0 brown--text text--lighten-2">Subscribe</div>

                            <v-card-text class="body-1 text-xs-left px-0 grey--text">
                              Stay in touch and get latest news first!
                            </v-card-text>
                            <v-btn color="brown white--text darken-2 mx-0">
                              Subscribe
                            </v-btn>
                          </v-card>
                        </v-flex>

                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-parallax>
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
.rounded {
  border-radius: 100%;
}

.undeco {
  text-decoration: none;
}

.nuxt-link {
  color: #fff !important;
  text-decoration: none;
}

.video_bg {
  background-image: url(/howto_bg.png);
  background-size: cover;
}

.video_filter {
  min-height: 400px;
  height: 100%;
  width: 100%;
  background: rgba(250, 250, 250, 0.95);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(250, 250, 250, 0.95) 0%,
    rgba(250, 250, 250, 1) 53%,
    rgba(250, 250, 250, 1) 100%
  );
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(250, 250, 250, 0.95)),
    color-stop(53%, rgba(250, 250, 250, 1)),
    color-stop(100%, rgba(250, 250, 250, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(250, 250, 250, 0.95) 0%,
    rgba(250, 250, 250, 1) 53%,
    rgba(250, 250, 250, 1) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(250, 250, 250, 0.95) 0%,
    rgba(250, 250, 250, 1) 53%,
    rgba(250, 250, 250, 1) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(250, 250, 250, 0.95) 0%,
    rgba(250, 250, 250, 1) 53%,
    rgba(250, 250, 250, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(250, 250, 250, 0.95) 0%,
    rgba(250, 250, 250, 1) 53%,
    rgba(250, 250, 250, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fafafa', endColorstr='#fafafa', GradientType=1 );
}

.ant-card-scientist {
  background-image: url(/ant_ml_25.png);
  background-size: 250px;
  background-position: -110px center;
  background-repeat: no-repeat;
}

.ant-card-racing {
  background-image: url(/ant_racing_25.png) !important;
  background-size: 250px;
  background-position: -110px center;
  background-repeat: no-repeat;
}

.brown-bg-1 {
  width: 100%;
  height: 100%;
  background-image: url(/brown-shape-1.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.brown-bg-2 {
  width: 100%;
  height: 100%;
  background-image: url(/brown-shape-2.png);
  background-size: 120%;
  background-position: center center;
  background-repeat: no-repeat;
}

.bug {
  background-image: url(/bug.svg) !important;
  background-size: 200px;
  background-position: -110px center;
  background-repeat: no-repeat;
}

.mail {
  background-image: url(/mail.svg) !important;
  background-size: 200px;
  background-position: -110px center;
  background-repeat: no-repeat;
}
</style>