<template lang="pug">
  #user
    v-container
      v-layout(row wrap mt-5 pt-5 class="")
        v-flex(shrink class="mr-4 mb-4")
          v-card(max-width="250")
            v-img(min-width="250" src="https://avatars3.githubusercontent.com/u/2000153?s=460&v=4")
            v-card-title()
              h3(class="headline") Vitaly Kezlya
            //- v-card-text(class="pt-0") 
            v-card-text(class="user__card-text pt-0 pb-1")
              v-icon(size="20" class="mr-2") people
              span AntHive.IO AntHive.IO AntHive.IO AntHive.IO
            v-card-text(class="user__card-text py-1")
              v-icon(size="20" class="mr-2") place
              span San Francisco
            v-card-text(class="user__card-text pt-1")
              v-icon(size="20" class="mr-2") public
              a(href="#" target="_blank") http://kezlya.com
        v-flex(grow class="")
          span User games here
</template>

<script>
import axios from "axios";


export default {
  name: 'user',
  data: () => ({
    status: null
  }),
  mounted() {

    console.log(this.$route.query.username)


    const ghAxios = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 3000
    });

    const hhh = ghAxios.get("users/kezlya").then(function (data){
      console.log(data);
    });
  }
}
</script>
<style>
.user__card-text {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
