<template>
<div>

        <section class="section section-lg pt-lg-0">
            <div class="container-fluid" style="height: 200px;background-color: rgba(95, 73, 47, 0.25)">

            </div>

            <div class="container shape-container d-flex">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card shadow p-4 mt--100">

                              <h1>Rules</h1>

                              <p>AntHIve.IO is a turn-based coding game. Command your ants to collect food and return it to your hive to grow your colony. A player with the biggest colony and less errors wins the game.</p>

                              
                              <p>Your bot starts the game with one ant and one hive on a two-dimensional map that consists of individual cells. The starting point (cell) of the game is called Span. Each cell might be occupied only by one ant or by one food with a value from 1 to 9. Cell also might be marked as “hive”.  If the hive ID matches your bot ID then your ants are allowed to walk into a hive cell. An ant with a “stranger” ID belongs to another bot and means other player on the map.
                                  Your bot ID is defined in the beginning of the game by Span. For example, if your Span is at the point where Y=4 and X=7 then you Bot ID will be “s4-7”. The same ID will belong to your ants and your hives. If you see other IDs on the map it means they belong to another player. Your bot has to understand that it can only control ants and hives with the same ID (s4-7 in this example). Any other IDs on the map do not belong to your bot.
                                  In order for ant to survive it has to eat meaning you have to look for the food and load it. The maximum number of food each ant can load is 9. There are three types of foods that are scaled differently: a seed represents a food from 1 to 3; a flower represents a food amount from 4 to 6; and an apple represents a food amount from 7 to 9.
                                  To grow your colony you have to unload 5 foods into the cell of you hive, and then it will be converted to a new ant.</p>
                              <p>
                                  Your bot receives an information about the map with every turn. (POST with JSON payload). That includes location and amount of food, number of ants and hives on the map. You also get a knowledge about your colony: how many ants you have, their location, health, and errors of each of your ants.
                                  Your bot has to use computational thinking and computer programming to navigate and give orders to each of your ant.  (JSON response).
                              </p>
              
                              <p>
                                  Game supports following actions for your ants: <strong>“move”</strong>, <strong>“eat”</strong>, <strong>“load”</strong>, <strong>“unload”</strong>. Every turn each of your ants can perform only one action toward one of the four directions: <strong>“up”</strong>, <strong>“down”</strong>, <strong>“left”</strong>, <strong>“right”</strong>. In other words if you have 2 ants with IDs 1 and 2, your bot response might look like this:
                                  <strong>{"1":{"act":"move","dir":"down"},"17":{"act":"unload","dir":"right"}}</strong>
                              </p>
                              <p>
                                  If your ant performs an inappropriate action it counts as an error. Moving outside of the map or to a cell that is already occupied by ant/food, loading food from the cell that does not have any, or unloading food to the cell that is already full - these are the errors that affect your performance. The total number of errors is one of the parameters for defining a winner of the match.
                                  Every ant has a Health that is scaled from 0 to 9. Health goes down by one point every 15 turns. You gain one health back every time you perform an action “eat” towards a cell with food. If ant’s health becomes 0 ant dies.  Dead ant get converted to one food on the same cell.
                                  When the amount of ants is bigger than the amount of hive cells, the hive will grow to match the ants’ count. Hive does not grow down when ant dies. There are no limits how big is your hive or how many ants you can have.
                              </p>
                              <p>
                                  During the game every ant can go thought one of the following life modes:<br>
                                  <ol class="p-5">
                
                                  <li><strong>“Birth”</strong> - the Ant is born. This mode lasts one turn and it means you got a new ant.</li>

                                  <li><strong>“No Action”</strong> mode means you bot didn’t give any commands to your ant.</li>

                                  <li><strong>“Slow”</strong>  mode occurs when two ants from different bots want to go the same cell but the other bot is faster than yours (takes less time to get to this cell);

                                  two ands (from the same or different bots) in the cells next to each other they will be moving based on their ID #. First # moves first.</li>
              
                                  <li><strong>“Bad Move”</strong> occurs when you try to move outside of the map; or if you try to move to a cell with somebody else’s ant; or you unload a food on a cell that already contains food; or when you have more than 9 food on the ant.</li>

                                  <li><strong>“Bad Unload”</strong> mode occurs when you try to unload when there is nothing to unload, in other words you don’t have any food to unload; or if you unload a food into a cell that already has food in it.</li>
              
                                  <li><strong>“Bad Eat”</strong> mode happens in two cases: when you try to eat from the cell with no food; or when you try to eat when you health is on maximum (on 9).</li>
              
                                  <li><strong>“Error”</strong> mode happens when there are programm’s issues. If you see an error please report a bug.</li>
              
                                  <li><strong>“Death”</strong>  - if you only have one ant and it dies the game is over for you.</li>
                                  </ol>
                                  During Beta stage all games are limited to 1000 turns.
                                  If there are no changes on the map for 24 turns the game ends automatically.
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
</div>
</template>

<script>
export default {
  name: "rules",
  components: {}
};
</script>

<style scoped>
p {
  text-indent: 1.5em;
}
</style>
