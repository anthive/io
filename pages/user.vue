<template lang="pug">
  #user
    v-container
      v-layout(row wrap mt-5 pt-5 class="")
        v-flex(shrink class="mr-4 mb-4")
          v-card(max-width="250")
            v-img(min-width="250" :src="us.photoUrl($route.query.username,460)")
              v-avatar(size="100")
                v-img(:src="us.langUrl('go')" class="elevation-2")
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
          gamesTable(:columns="columns")
</template>

<script>
import gamesTable from "@/components/gamesTable";
import userService from "@/services/User";
import axios from "axios";

export default {
  name: 'user',
  data: () => ({
    status: null,
    us: userService,
    columns: [
      {
        text: "Author",
        align: "left",
        sortable: true,
        value: "Author"
      },
      {
        text: "Age",
        align: "left",
        sortable: true,
        value: "Age"
      },
      {
        text: "Played",
        align: "left",
        sortable: true,
        value: "Played"
      }
    ]
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
  },
  components: {
    gamesTable
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
