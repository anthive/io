/* eslint-disable */
<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax src="/img/home_bg.png" min-height="600">
          <v-container>
            <v-layout align-center justify-start row wrap fill-height class="white--text">
              <v-flex offset-sm2 sm8 offset-md2 md4 my-5>
                <div
                  class="white--text mb-2 mt-5 display-1 text-xs-left font-weight-bold"
                >You are not playing a game</div>

                <div
                  class="subheading mb-3 text-xs-left font-weight-bold orange--text text--darken-1"
                >Turn-based strategy game for your AI</div>

                <div
                  class="title font-weight-regular"
                >Start your new coding adventure with 3 simple steps</div>
              </v-flex>
              <v-flex>
                <div id="player" class="ant-player">
                  <h2 class="loading">Loading...</h2>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
      </section>

      <section>
        <v-layout column class="my-5" align-center>
          <v-flex xs12 md8 lg8>
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height>
                <v-flex xs12 md4 lg3 pa-2 justify-left>
                  <v-card class="elevation-6 white">
                    <v-card-text class="text-xs-left px-3">
                      <v-icon x-large class="brown--text text--lighten-2">cloud_download</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-start">
                      <div class="headline text-xs-left px-3">1. GET A SAMPLE BOT</div>
                    </v-card-title>
                    <v-card-text class="subheading">
                      Choose coding language that you prefer. Git clone sample repository or
                      <a
                        href="https://github.com/new/import"
                        style="color: blue"
                      >import</a> it.
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

                      <v-chip class="brown lighten-2 white--text">
                        <a href="https://github.com/anthive/php" target="_blank">PHP</a>
                      </v-chip>
                    </div>
                  </v-card>
                </v-flex>

                <v-flex xs12 md4 lg3 pa-2 justify-left>
                  <v-card class="elevation-6 white" height="100%">
                    <v-card-text class="text-xs-left">
                      <v-icon x-large class="brown--text text--lighten-2">insert_link</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-left">
                      <div class="headline text-xs-left px-3">2. LINK YOUR REPO</div>
                    </v-card-title>
                    <v-card-text
                      class="subheading"
                    >In your repository set your username in ANTHIVE file. Link your repository in profile settings page.</v-card-text>
                    <v-btn class="ma-3" color="brown white--text">
                      <a href="https://profile.anthive.io/login/" class="undeco">Profile</a>
                    </v-btn>
                  </v-card>
                </v-flex>

                <v-flex xs12 md4 lg3 pa-2 justify-left>
                  <v-card class="elevation-6 white">
                    <v-card-text class="text-xs-left px-3">
                      <v-icon x-large class="brown--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-start">
                      <div class="headline text-xs-left px-3">3. CODE STRATEGIES</div>
                    </v-card-title>
                    <v-card-text
                      class="subheading"
                    >Refactor code with your own strategies. Git push to origin. Start games, compete and climb the
                      <a href="/leaderboard/" style="color: blue">leaderboard</a>.
                    </v-card-text>
                    <v-btn class="ma-3" color="brown">
                      <nuxt-link to="/rules/" class="nuxt-link">Rules</nuxt-link>
                    </v-btn>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-layout column wrap class="my-5 brown-bg-1" align-center>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height>
                <v-flex xs12 lg8 my-5>
                  <v-card class="elevation-6 white">
                    <v-layout align-center justify-center row wrap fill-height>
                      <v-flex xs12 sm4 md4 pa-5 justify-left>
                        <v-img
                          src="/img/ant_ml.svg"
                          aspect-ratio="1"
                          max-width="100%"
                          contain
                          class="elevation-6 rounded"
                        ></v-img>
                      </v-flex>
                      <v-flex xs12 md8 pa-0 justify-right>
                        <v-card-title primary-title class="layout justify-start">
                          <div class="headline text-xs-left px-3">Learn</div>
                        </v-card-title>
                        <v-card-text class="subheading">
                          Always wanted to learn coding but didn’t know what to start with? Start right here. This turn-based strategy game is the most engaging way to learn real code. PIck a language, read the rules link to
                          the rules and start learning right now.
                        </v-card-text>
                        <div class="text-xs-left pa-3"></div>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>

                <v-flex xs12 lg8 my-5>
                  <v-card class="elevation-6 white">
                    <v-layout align-center justify-center row wrap fill-height>
                      <v-flex xs12 sm4 md4 pa-5 justify-left>
                        <v-img
                          src="/img/ant_engineer_red.svg"
                          aspect-ratio="1"
                          max-width="100%"
                          contain
                          class="elevation-6 rounded"
                        ></v-img>
                      </v-flex>
                      <v-flex xs12 md8 pa-0 justify-right>
                        <v-card-title primary-title class="layout justify-start">
                          <div class="headline text-xs-left px-3">Practice</div>
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
                    <v-layout align-center justify-center row wrap fill-height>
                      <v-flex xs12 sm4 md4 pa-5 justify-center>
                        <v-img
                          src="/img/ant_racing.svg"
                          aspect-ratio="1"
                          width="100%"
                          contain
                          class="elevation-6 rounded"
                        ></v-img>
                      </v-flex>
                      <v-flex xs12 md8 pa-0 justify-right>
                        <v-card-title primary-title class="layout justify-start">
                          <div class="headline text-xs-left px-3">Compete</div>
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
      </section>

      <section class="video_bg">
        <v-layout column wrap class="my-0" align-center pa-0>
          <v-flex xs12 class="md8 video_filter">
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height>
                <v-flex xs12 md12 lg8 ma-0 pa-0>
                  <v-layout align-center justify-center row wrap fill-height ma-0 pa-0>
                    <v-flex xs12 md12 lg4 offset-md2 my-0 justify-center>
                      <v-card class="elevation-0 transparent">
                        <v-img
                          src="/img/play_button.png"
                          style="margin: 0 auto;"
                          aspect-ratio="1"
                          max-width="128px"
                          contain
                        ></v-img>
                      </v-card>
                    </v-flex>

                    <v-flex xs12 md12 lg6 my-0 class="align-center justify-center">
                      <v-card class="elevation-0 transparent">
                        <v-card-title primary-title class="layout justify-start">
                          <div class="headline brown--text text-xs-left px-2">Get Started!</div>
                        </v-card-title>
                        <v-card-text class="subheading">
                          <p>This is a turn-based strategy game for your Bot.</p>
                          <p>Compute, contemplate and plan each step of your ants. Send commands to your ants in order for them to collect food, bring it to your hive, and to grow your colony.</p>
                          <p>A player with the biggest colony and least errors wins the game. To start the game please follow three steps below.</p>
                          <p>For detailed rules please visit link</p>
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

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout align-center justify-center row wrap fill-height>
                <v-flex xs12 md12 lg8 my-5>
                  <v-layout align-center justify-center row wrap fill-height>
                    <v-flex xs12 md6 pa-5 justify-left>
                      <v-img src="/img/badges_trinity.png" aspect-ratio="1" contain></v-img>
                    </v-flex>
                    <v-flex xs12 md6 justify-right>
                      <v-card
                        class="elevation-6 white pl-5 ant-card-scientist"
                        style="padding-left: 140px !important;"
                      >
                        <v-card-title primary-title class="layout justify-start">
                          <div class="headline text-xs-left px-3">Badges and Ranking</div>
                        </v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien velit, sodales in elementum sed, facilisis suscipit massa. Maecenas efficitur lectus non ligula accumsan euismod in a quam. Vivamus finibus tincidunt tellus vitae aliquet. Suspendisse justo ipsum, pharetra non pretium ut, scelerisque ac mi. Pellentesque hendrerit sodales tortor, in faucibus diam tempus ac. Donec convallis fringilla mauris vitae tristique.</v-card-text>
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
        <v-parallax src="/img/home_bg.png" min-height="300" m4-2>
          <v-layout column wrap class="my-5" align-center>
            <v-flex xs12 style="width:100%;">
              <v-container grid-list-xl class="my-5">
                <v-layout align-center justify-center row wrap fill-height>
                  <v-flex xs12 md6 lg4 xl3 pa-5>
                    <v-card
                      class="elevation-6 white px-0 pa-3 mail"
                      style="padding-left: 100px !important;"
                    >
                      <div class="headline text-xs-left px-0 brown--text text--lighten-2">Subscribe</div>

                      <v-card-text
                        class="body-1 text-xs-left px-0 grey--text"
                      >Stay in touch and get latest news first!</v-card-text>
                      <v-btn color="brown white--text darken-2 mx-0">
                        <a
                          target="_blank"
                          href="https://visitor.r20.constantcontact.com/d.jsp?llr=iei6rx6ab&amp;p=oi&amp;m=1131440677000&amp;sit=hmwc8c9mb&amp;f=c1095ec4-d2a5-4f31-85e6-9f5d16f7d72c"
                        >Subscribe</a>
                      </v-btn>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 md6 lg4 xl3 pa-5>
                    <v-card
                      class="elevation-6 white pa-3 bug"
                      style="padding-left: 100px !important;"
                    >
                      <div
                        class="headline text-xs-left px-0 brown--text text--lighten-2"
                      >Found an issue?</div>

                      <v-card-text
                        class="body-1 text-xs-left px-0 grey--text"
                      >Tell us on our github repo and we wil fix it!</v-card-text>
                      <v-btn color="brown white--text darken-2 mx-0">
                        <a href="https://github.com/anthive/io/issues">Report issue</a>
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
//import { AnthivePlayer } from "anthive-player";
export default {
  mounted() {
    const dataUrl =
      'https://storage.googleapis.com/anthive-dev-games/Kj5A2SydOFlqgLIu35Br.zip'
    const Myplayer = new AnthivePlayer(dataUrl, '#player')
  }
}
</script>

<style>
.ant-player {
  background-image: url('https://anthive.io/skins/server/1/background.png');
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
