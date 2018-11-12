<template>
  <section class="section section-lg pt-lg-0 mt-100">
      <div class="container">
        <div class="row">
          <p class="description mt-3">
          AntHIve.IO is a turn-based coding game. Command your ants to collect food and return it to your hive to grow your colony. A player with the biggest colony and less errors wins the game.

Your bot starts the game with one ant and one hive on a two-dimensional map that consists of individual cells. The starting point (cell) of the game is called Span. Each cell might be occupied only by one ant or by one food with a value from 1 to 9. Cell also might be marked as “hive”.  If the hive ID matches your bot ID then your ants are allowed to walk into a hive cell. An ant with a “stranger” ID belongs to another bot and means other player on the map.
Your bot ID is defined in the beginning of the game by Span. For example, if your Span is at the point where Y=4 and X=7 then you Bot ID will be “s4-7”. The same ID will belong to your ants and your hives. If you see other IDs on the map it means they belong to another player. Your bot has to understand that it can only control ants and hives with the same ID (s4-7 in this example). Any other IDs on the map do not belong to your bot.
In order for ant to survive it has to eat meaning you have to look for the food and load it. The maximum number of food each ant can load is 9. There are three types of foods that are scaled differently: a seed represents a food from 1 to 3; a flower represents a food amount from 4 to 6; and an apple represents a food amount from 7 to 9.
To grow your colony you have to unload 5 foods into the cell of you hive, and then it will be converted to a new ant.
Your bot receives an information about the map with every turn. (POST with JSON payload). That includes location and amount of food, number of ants and hives on the map. You also get a knowledge about your colony: how many ants you have, their location, health, and errors of each of your ants.
Your bot has to use computational thinking and computer programming to navigate and give orders to each of your ant.  (JSON response). Game supports following actions for your ants: “move”, “eat”, “load”, “unload”.  Every turn each of your ants can perform only one action toward one of the four directions: “up”, “down”, “left”, “right”. In other words if you have 2 ants with IDs 1 and 2, your bot response might look like this:
{"1":{"act":"move","dir":"down"},"17":{"act":"unload","dir":"right"}}
If your ant performs an inappropriate action it counts as an error. Moving outside of the map or to a cell that is already occupied by ant/food, loading food from the cell that does not have any, or unloading food to the cell that is already full - these are the errors that affect your performance. The total number of errors is one of the parameters for defining a winner of the match.
Every ant has a Health that is scaled from 0 to 9. Health goes down by one point every 15 turns. You gain one health back every time you perform an action “eat” towards a cell with food. If ant’s health becomes 0 ant dies.  Dead ant get converted to one food on the same cell.
When the amount of ants is bigger than the amount of hive cells, the hive will grow to match the ants’ count. Hive does not grow down when ant dies. There are no limits how big is your hive or how many ants you can have.
During the game every ant can go thought one of the following life modes:
“Birth” - the Ant is born. This mode lasts one turn and it means you got a new ant.
“No Action” mode means you bot didn’t give any commands to your ant.
“Slow”  mode occurs when two ants from different bots want to go the same cell but the other bot is faster than yours (takes less time to get to this cell);
two ands (from the same or different bots) in the cells next to each other they will be moving based on their ID #. First # moves first.
“Bad Move” occurs when you try to move outside of the map; or if you try to move to a cell with somebody else’s ant; or you unload a food on a cell that already contains food; or when you have more than 9 food on the ant.
“Bad Unload” mode occurs when you try to unload when there is nothing to unload, in other words you don’t have any food to unload; or if you unload a food into a cell that already has food in it.
“Bad Eat” mode happens in two cases: when you try to eat from the cell with no food; or when you try to eat when you health is on maximum (on 9).
“Error” mode happens when there are programm’s issues. If you see an error please report a bug.
“Death”  - if you only have one ant and it dies the game is over for you.
During Beta stage all games are limited to 1000 turns.
If there are no changes on the map for 24 turns the game ends automatically.
</p>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "rules",
  components: {}
};
</script>

<style scope>
h5 {
  color: #dc923f !important;
}

.ant-image {
  width: 198px;
  height: 198px;
  margin-left: calc(50% - 99px);
}

.section-shaped .shape-default {
  background-image: url(../img/home_bg.png) !important;
  background-size: cover !important;
  background-position: center center !important;
}

.icon-shape-primary {
  color: #5f492f !important;
  background-color: #ded2c4 !important;
}

h6.text-primary {
  color: #5f492f !important;
}

.intro .description {
  min-height: 69px !important;
}

.btn-primary {
  background-color: #5f492f !important;
  border-color: #5f492f !important;
}

.howto-div {
  height: 400px;
}

.howto-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../img/howto_bg.png);
  background-size: cover;
}

.howto-filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../img/howto_filter.png);
  background-size: cover;
}

.play-block {
  height: 100%;
}

.play-block img {
  position: absolute;
  width: 138px;
  height: 138px;
  top: calc(50% - 68px);
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0.8;
  transition: opacity 0.25s ease-in-out 0s;
}

.play-block img:hover {
  cursor: pointer;
  opacity: 1;
}

.intro-card-scientist {
  background-image: url(../img/ant_scientist_25.png) !important;
  background-size: 168px;
  background-position: 130% -10%;
  background-repeat: no-repeat;
}

.intro-card-engineer-red {
  background-image: url(../img/ant_engineer_red_25.png) !important;
  background-size: 168px;
  background-position: 130% -10%;
  background-repeat: no-repeat;
}

.intro-card-engineer-blue {
  background-image: url(../img/ant_engineer_blue_25.png) !important;
  background-size: 168px;
  background-position: 130% -10%;
  background-repeat: no-repeat;
}

.intro-card-racing {
  background-image: url(../img/ant_racing_25.png) !important;
  background-size: 168px;
  background-position: 130% -10%;
  background-repeat: no-repeat;
}

.ant-card-scientist {
  background-image: url(../img/ant_scientist_25.png) !important;
  background-size: 250px;
  background-position: -110px center;
  background-repeat: no-repeat;
  top: 50%;
  transform: translateY(-50%);
}

.ant-card-racing {
  background-image: url(../img/ant_racing_25.png) !important;
  background-size: 250px;
  background-position: -110px center;
  background-repeat: no-repeat;
  top: 50%;
  transform: translateY(-50%);
}

.teaser > img {
  margin-left: 50%;
  transform: translateX(-50%);
}

.language-card {
  width: 135px;
  height: 135px;
  background-color: #fff;
  border-radius: 100% !important;
  margin: 0 auto;
}

.language-header {
  width: 100%;
  margin-bottom: 30px;
}

.python-icon {
  background-image: url(../img/python-icon.svg);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center center;
}

.java-icon {
  background-image: url(../img/java-icon.svg);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center center;
}

.java-icon {
  background-image: url(../img/java-icon.svg);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center center;
}

.go-icon {
  background-image: url(../img/golang-icon.svg);
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center center;
}

.js-icon {
  background-image: url(../img/js-icon.svg);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center center;
}

.csharp-icon {
  background-image: url(../img/csharp-icon.svg);
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center center;
}

.php-icon {
  background-image: url(../img/php-icon.svg);
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
}

.language-button {
  margin-top: 30px;
}

.numbers-card {
  min-height: 150px !important;
  padding: 20px;
}

.numbers-card-image-wrapper {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
}

.numbers-card-icon {
  height: 40px;
}

.numbers-card-header-3 {
  font-size: 20px;
}

.numbers-card-header-1 {
  font-size: 30px;
}

.prefooter-card {
  width: 300px;
  margin: 0 auto;
}

.bug {
  background-image: url(../img/bug.svg) !important;
  background-size: 200px;
  background-position: -110px center;
  background-repeat: no-repeat;
}

.mail {
  background-image: url(../img/mail.svg) !important;
  background-size: 200px;
  background-position: -110px center;
  background-repeat: no-repeat;
}

.brown-bg-1 {
  width: 100%;
  height: 100%;
  background-image: url(../img/brown-shape-1.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.brown-bg-2 {
  width: 100%;
  height: 100%;
  background-image: url(../img/brown-shape-2.png);
  background-size: 120%;
  background-position: center center;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 400px) {
  .teaser > img {
    width: 100% !important;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .brown-bg-2 {
    width: 100%;
    height: 100%;
    background-image: url(../img/brown-shape-2.svg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .howto-div {
    height: 800px;
  }
  .howto-content {
    margin-top: 400px;
  }
  .play-block {
    height: 400px;
  }

  .howto-bg {
    width: 100%;
    height: 50%;
    position: absolute;
    background-image: url(../img/howto_bg.png);
    background-size: cover;
  }

  .howto-filter {
    width: 100%;
    height: 50%;
    position: absolute;
    background-image: url(../img/howto_filter.png);
    background-size: cover;
  }

  .brown-bg-2 {
    width: 100%;
    height: 100%;
    background-image: url(../img/brown-shape-2.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
</style>
