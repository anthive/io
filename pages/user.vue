<template>
  <section>
    <v-layout column align-center>
      <v-flex xs12 md8 lg8>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Hello player </h1>

      </v-flex>

    </v-layout>
  </section>
</template>

<script>
//import { AnthivePlayer } from "anthive-player";
import axios from "axios";


export default {
  data: () => ({
    status: null
  }),
  mounted() {


    const ghAxios = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 3000
    });

    const hhh = ghAxios.get("users/kezlya").then(function (data){
      console.log(data);
    });



    // let player_script = document.createElement('script');
    //      player_script.setAttribute('src','/js/anthive.js')
    //      document.head.appendChild(player_script);


  }
}
</script>
<style>
.ant-player {
  background-image: url("https://anthive.io/skins/server/1/background.png");
  background-repeat: repeat;
  margin-top: 100px;
}
</style>
