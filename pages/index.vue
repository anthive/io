/* eslint-disable */
<template>
     <div>
      <parallaxSection></parallaxSection>
      <section>
        <v-layout column class="my-5 mt-n12" align-center>
          <v-flex xs12 md8 lg8 class="steps-section__flex">
            <v-container grid-list-xl>
              <v-layout justify-center row wrap fill-height>

                <v-flex xs12 md4 lg4 pa-2 justify-left>
                  <v-card class="elevation-6 white" height="100%">
                    <v-card-text class="pb-0">
                      <v-layout row wrap justify-space-between pa-2>
                        <v-avatar
                          size="45"
                          color="brown"
                          class="lighten-1"
                        >
                          <v-card-text pa-0 class="title white--text">1</v-card-text>
                        </v-avatar>
                    
                        <v-icon x-large class="orange--text text--lighten-2">cloud_download</v-icon>

                      </v-layout>
                    </v-card-text>
                    <v-card-title class="pt-3 display-1 font-weight-thin">Get a sample bot</v-card-title>
                    
                    <v-card-text class="subheading">
                      Choose coding language that you prefer. Git clone sample repository or
                      <a
                        href="https://github.com/new/import"
                        style="color: blue"
                      >import</a> it. You can choose sample from next languages.
                    </v-card-text>
                    <div class="text-xs-left px-3 py-3">
                      <v-chip class="brown lighten-2 white--text">
                        <a href="https://github.com/anthive/js" target="_blank">JS</a>
                      </v-chip>
                      <v-chip class="brown lighten-2 white--text">
                        <a href="https://github.com/anthive/python" target="_blank">Python</a>
                      </v-chip>
                      <v-chip class="brown lighten-2 white--text">
                        <a href="https://github.com/anthive/go" target="_blank">Go</a>
                      </v-chip>
                      <v-chip class="brown lighten-2 white--text">
                        <a href="https://github.com/anthive/cpp" target="_blank">C++</a>
                      </v-chip>

                      <v-chip to="/" class="brown lighten-2 white--text">
                        <a href="https://github.com/anthive/php" target="_blank">PHP</a>
                      </v-chip>
                    </div>
                  </v-card>
                </v-flex>

                <v-flex xs12 md4 lg4 pa-2 justify-left>
                  <v-card class="elevation-6 white" height="100%">
                    <v-card-text class="pb-0">
                      <v-layout row wrap justify-space-between pa-2>
                        <v-avatar
                          size="45"
                          color="brown"
                          class="lighten-1"
                        >
                          <v-card-text pa-0 class="title white--text">2</v-card-text>
                        </v-avatar>
                    
                        <v-icon x-large class="orange--text text--lighten-2">insert_link</v-icon>

                      </v-layout>
                    </v-card-text>
                    <v-card-title class="pt-3 display-1 font-weight-thin">Link your repo</v-card-title>

                    <v-card-text
                      class="subheading"
                    >In your repository set your username in ANTHIVE file. Link your repository in profile settings page.</v-card-text>
                    <v-btn href="https://profile.anthive.io/login/" class="ma-3" color="brown white--text">Profile</v-btn>
                  </v-card>
                </v-flex>

                <v-flex xs12 md4 lg4 pa-2 justify-left>
                  <v-card class="elevation-6 white" height="100%">
                    
                    <v-card-text class="pb-0">
                      <v-layout row wrap justify-space-between pa-2>
                        <v-avatar
                          size="45"
                          color="brown"
                          class="lighten-1"
                        >
                          <v-card-text pa-0 class="title white--text">3</v-card-text>
                        </v-avatar>
                    
                        <v-icon x-large class="orange--text text--lighten-2">flash_on</v-icon>

                      </v-layout>
                    </v-card-text>
                    <v-card-title class="pt-3 display-1 font-weight-thin">Code strategies code</v-card-title>
                    <v-card-text
                      class="subheading"
                    >Refactor code with your own strategies. Git push to origin. Start games, compete and climb the
                      <a href="/leaderboard/" style="color: blue">leaderboard</a>.</v-card-text>
                    <v-btn to="/rules/" class="ma-3" color="brown white--text">Rules</v-btn>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section class="feature-section">
        <v-parallax src="/img/leaderboard_bg.png" align height="100%">
        <!-- <v-parallax src="/img/leaderboard_bg.png" align height="800"> -->
        <!-- <v-parallax src="/img/leaderboard_bg.png"> -->
          
        <v-layout column wrap class="feature-section__layout my-5" align-center>
            <v-flex xs12>
              <v-container pa-0>
                <v-layout align-center justify-center row wrap fill-height>

                  <v-flex xs12 lg8 my-5>
                    <v-card class="elevation-6 white">
                      <v-layout align-center justify-center row wrap fill-height pa-3>
                        <v-flex xs4 sm4 md4 justify-left pa-2>
                          <v-img
                            src="/img/ant_ml.svg"
                            aspect-ratio="1"
                            max-width="100%"
                            contain
                            class="elevation-6 rounded"
                          ></v-img>
                        </v-flex>
                        <v-flex xs12 sm8 md8 justify-right>
                          <v-card-title primary-title class="layout justify-start">
                            <div class="headline brown--text text-xs-left px-3">Learn</div>
                          </v-card-title>
                          <v-card-text class="subheading">
                            Always wanted to learn coding but didn’t know what to start with? Start right here. This turn-based strategy game is the most engaging way to learn real code. PIck a language, read the rules link to
                            the rules and start learning right now.
                          </v-card-text>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 lg8 my-5>
                    <v-card class="elevation-6 white">
                      <v-layout align-center justify-center row wrap fill-height pa-3>
                        <v-flex xs4 sm4 md4 justify-left pa-2>
                          <v-img
                            src="/img/ant_engineer_red.svg"
                            aspect-ratio="1"
                            max-width="100%"
                            contain
                            class="elevation-6 rounded"
                          ></v-img>
                        </v-flex>
                        <v-flex xs12 sm8 md8 justify-right>
                          <v-card-title primary-title class="layout justify-start">
                            <div class="headline brown--text text-xs-left px-3">Practice</div>
                          </v-card-title>
                          <v-card-text class="subheading">
                            Keep practicing and improving your coding skills by playing this game. This game is a great way to advance your programming skills while having fun and getting noticed. Master your current language of
                            choice; or expand your understanding of a new one. By completing the levels you get trophies and certificates which will benefit you not only in the game but in real life.
                          </v-card-text>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 lg8 my-5>
                    <v-card class="elevation-6 white">
                      <v-layout align-center justify-center row wrap fill-height pa-3>
                        <v-flex xs4 sm4 md4 justify-left pa-2>
                          <v-img
                            src="/img/ant_racing.svg"
                            aspect-ratio="1"
                            max-width="100%"
                            contain
                            class="elevation-6 rounded"
                          ></v-img>
                        </v-flex>
                        <v-flex xs12 sm8 md8 justify-right>
                          <v-card-title primary-title class="layout justify-start">
                            <div class="headline brown--text text-xs-left px-3">Compete</div>
                          </v-card-title>
                          <v-card-text class="subheading">
                            Demonstrate your skills by competing with other developers in your language of choice. This platform allows you to battle not just against other software engineers around the world, but also against
                            bots written in different languages on the same map and on your own time. Demonstrate to everyone that your strategy is superior, your code is the most efficient and has no errors. Climb the leaderboard,
                            improving your strategy. Let your bot dominate the tournaments.
                          </v-card-text>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>

                </v-layout>
              </v-container>
            </v-flex>
          
        </v-layout>
        </v-parallax>
      </section>

      <section class="video_bg">
        <v-layout column wrap align-center pa-0>
          <v-flex xs12 class="md8 video_filter">
            <v-container grid-list-xl mt-5>
              <v-layout align-center justify-center row wrap fill-height>
                <v-flex xs12 md12 lg8 ma-0 pa-0>
                  <v-layout align-center justify-space-around row wrap fill-height ma-0 pa-0>
                    <v-flex xs12 md12 lg4 my-0 justify-center>
                      <v-card @click="dialog = !dialog" class="py-3 transparent" style="cursor: pointer;">
                        <v-img
                          src="/img/play_button.png"
                          style="margin: 0 auto;"
                          aspect-ratio="1"
                          max-width="128px"
                          contain
                        ></v-img>
                      </v-card>
                      <div class="text-xs-center">
                        <v-dialog
                          v-model="dialog"
                          width="70%"
                        >
                          <v-card>
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/8CKeXZQdKKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </v-card>
                        </v-dialog>
                      </div>
                    </v-flex>

                    <v-flex xs12 md12 lg6 my-0 class="align-center justify-center">
                      <v-card elevation="0" class="pa-3 transparent">
                        <v-card-title primary-title class="layout justify-start">
                          <div class="headline brown--text text-xs-left px-2">Get Started!</div>
                        </v-card-title>
                        <v-card-text class="subheading">
                          <p>This is a turn-based strategy game for your Bot.</p>
                          <p>Compute, contemplate and plan each step of your ants. Send commands to your ants in order for them to collect food, bring it to your hive, and to grow your colony.</p>
                          <p>A player with the biggest colony and least errors wins the game. To start the game please follow three steps below.</p>
                          <p>For detailed rules please visit link</p>
                        </v-card-text>
                        <v-btn to="/rules/" class="mx-3 mb-3" color="brown white--text">Rules</v-btn>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center pa-0>
          <v-flex xs12 class="md8 video_filter">
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height>
                <v-flex xs12 md12 lg12 ma-0 pa-0>
                  <v-layout align-center justify-space-around row wrap fill-height ma-0 pa-0>
                    <v-flex xs12 md12 lg5 my-0 class="align-center justify-center">
                      <v-card
                        class="elevation-3 white pa-2 pl-4 ant-card-scientist"
                      >
                        <v-card-title primary-title class="layout justify-start">
                          <div class="headline brown--text text-xs-left px-3">Badges and Ranking</div>
                        </v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien velit, sodales in elementum sed, facilisis suscipit massa.</v-card-text>
                        <v-card-text>Maecenas efficitur lectus non ligula accumsan euismod in a quam. Vivamus finibus tincidunt tellus vitae aliquet. Suspendisse justo ipsum, pharetra non pretium ut, scelerisque ac mi.</v-card-text>
                        <v-card-text>Pellentesque hendrerit sodales tortor, in faucibus diam tempus ac. Donec convallis fringilla mauris vitae tristique.</v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs10 sm6 md5 lg3 my-0 justify-center>
                        <v-img src="/img/badges_trinity.png" aspect-ratio="1" contain></v-img>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="/img/home_bg.png" height="500">
          <v-layout wrap align-center fill-height>
            <v-flex xs12 align-center>
              <v-layout justify-space-around row wrap>
                <v-flex xs12 sm6 md5 lg4 xl3 pa-2>
                  <v-card
                    class="elevation-6 white px-0 pa-3 mail"
                    style="padding-left: 70px !important;"
                    height="100%"
                  >
                    <div class="headline text-xs-left px-0 brown--text text--lighten-2">Subscribe</div>

                    <v-card-text
                      class="body-1 text-xs-left px-0 grey--text"
                    >Stay in touch and get latest news first!</v-card-text>
                    <v-btn href="https://visitor.r20.constantcontact.com/d.jsp?llr=iei6rx6ab&amp;p=oi&amp;m=1131440677000&amp;sit=hmwc8c9mb&amp;f=c1095ec4-d2a5-4f31-85e6-9f5d16f7d72c" target="_blank" color="brown white--text darken-2 mx-0">Subscribe</v-btn>
                  </v-card>
                </v-flex>

                <v-flex xs12 sm6 md5 lg4 xl3 pa-2>
                  <v-card
                    class="elevation-6 white pa-3 bug"
                    style="padding-left: 70px !important;"
                    height="100%"
                  >
                    <div class="headline text-xs-left px-0 brown--text text--lighten-2">Found an issue?</div>

                    <v-card-text
                      class="body-1 text-xs-left px-0 grey--text"
                    >Tell us on our github repo and we wil fix it!</v-card-text>
                    <v-btn href="https://github.com/anthive/io/issues" color="brown white--text darken-2 mx-0">Report issue</v-btn>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-parallax>
      </section>
   </div>
</template>
<script>
import parallaxSection from '../components/indexPage/parallaxSection.vue'

export default {
  data: () => ({
    dialog: false
  }),
  components: {
    parallaxSection
  },
}
</script>

<style scoped>
.feature-section__layout {
  position: relative;
}

.feature-section__layout:before {
  content: "";
  display: block;
  position: absolute;
  top: -80px;
  right: -25%;
  width: 100%;
  height: 300px;
  background-color: #FAFAFA;
  border-radius: 100%;
}

.feature-section__layout:after {
  content: "";
  display: block;
  position: absolute;
  top: -90px;
  left: -20%;
  width: 100%;
  height: 300px;
  background: #FAFAFA;
  border-radius: 100%;
  z-index: -1;
}

.brown a {
  color: #fff !important;
}

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
  background-image: url(/img/howto_bg.png);
  background-size: 90% 90%;
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
    #fff351f2 0%,
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
  background-image: url(/img/ant_ml_25.png);
  background-size: 250px;
  background-position: -110px center;
  background-repeat: no-repeat;
}

.ant-card-racing {
  background-image: url(/img/ant_racing_25.png) !important;
  background-size: 250px;
  background-position: -110px center;
  background-repeat: no-repeat;
}

.brown-bg-1 {
  width: 100%;
  height: 100%;
  background-image: url(/img/brown-shape-1.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.brown-bg-2 {
  width: 100%;
  height: 100%;
  background-image: url(/img/brown-shape-2.png);
  background-size: 120%;
  background-position: center center;
  background-repeat: no-repeat;
}

.bug {
  background-image: url(/img/bug.svg) !important;
  background-size: 200px;
  background-position: -110px center;
  background-repeat: no-repeat;
}

.mail {
  background-image: url(/img/mail.svg) !important;
  background-size: 200px;
  background-position: -110px center;
  background-repeat: no-repeat;
}
</style>
