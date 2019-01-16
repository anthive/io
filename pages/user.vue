<template lang="pug">
  #user
    v-container
      v-layout(row wrap mt-5 pt-5 class="")
        v-flex(shrink class="mr-4 mb-4")
          v-card(max-width="250")
            v-img(min-width="250" src="https://dummyimage.com/400x400/f1f1f1/f1f1f1" v-if="!user.avatar")
            v-img(min-width="250" :src="user.avatar" v-if="user.avatar")
              //- TODO: need lang data in players Index
              //- v-avatar(size="40" tile)
              //-   v-img(:src="us.langUrl('php')" class="white elevation-2")
            v-card-title()
              h3(class="headline") {{ user.name }}
            v-card-text(class="user__card-text pt-0" v-if="user.company")
              v-icon(size="20" class="mr-2") people
              span {{ user.company }}
            v-card-text(class="user__card-text pt-0" v-if="user.location")
              v-icon(size="20" class="mr-2") place
              span {{ user.location }}
            v-card-text(class="user__card-text pt-0" v-if="user.blog")
              v-icon(size="20" class="mr-2") public
              a(:href="user.blog" target="_blank") {{ user.blog }}
        v-flex(grow class="mb-4 py-2 px-2 white")
          span Chart
      v-flex(grow)
        gamesTable(:Filters="filters" :PageSize=17)
</template>

<script>
import gamesTable from "@/components/gamesTable";
import userService from "@/services/User";
import axios from "axios";

export default {
  name: 'user',
  data: () => ({
    status: null,
    user: {},
    us: userService,
    filters: [],
  }),
  created() {
    var username = this.$route.query.username.toLowerCase()

    if(username == '') {
      this.$router.push('/leaderboard')
    }

    this.filters = [{ "term":  { "Players.Username": username}}];
    this.us.getUserdata(username).then((result) => {
      this.user = result
    })
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
