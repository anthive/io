<template lang="pug">
  .user-info
    v-list.py-0
      v-list-tile(class="grey lighten-4")
        v-list-tile-content
          v-list-tile-avatar(size="48" tile).user-info__photo-avatar
            v-img(:src="us.photoUrl(username, 96)" class="lighten-4")
        v-list-tile-content.user-info__lang
          v-list-tile-avatar(size="48" tile).user-info__lang-avatar
            v-img(:src="us.langUrl(lang)" class="lighten-2")
        //- v-list-tile-content.user-info__skin.px-2.green.lighten-2(style="background: #000;")
        //- v-list-tile-content.px-3.user-info__skin(:style="hiveStatic")
        v-list-tile-content.text-xs-center.user-info__skin(:style="'background: green url('+us.hiveUrl(skin)+');'")
          img.mx-auto(:src="us.antUrl(skin)" width="20")
          v-list-tile-sub-title.black--text.user-info__version v.{{ version }}
        v-list-tile-content.px-3
          v-list-tile-title.font-weight-bold {{ username }}
        v-list-tile-content.px-3.orange.lighten-5
          v-list-tile-sub-title.orange--text.title.font-weight-bold {{ score }}
            v-avatar(size="20")
              v-icon.ml-1.orange--text.text--lighten-1(size="20") bubble_chart
</template>

<script>
import userService from "@/services/User";

export default {
  name: "usesrInfo",
  props: {
    username: String,
    lang: String,
    version: String,
    skin: Number,
    score: Number
  },
  data: () => ({
    us: userService
  }),
  created() {
  },
  methods: {
  }
};
</script>

<style>
  .user-info {
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
    transition: all ease .5s;
  }

  .user-info:hover {
    margin-right: 0;
  }

  .v-list__tile {
    padding: 0;
  }

  .v-list__tile:hover > .user-info__lang {
    margin-left: -8px;
  }

  .v-list__tile:hover > .user-info__skin {
    margin-left: -8px;
  }

  .user-info__photo-avatar {
    z-index: 2;
  }

  .user-info__lang {
    margin-left: -56px;
    transition: all ease .5s;
  }

  .user-info__lang-avatar {
    z-index: 1;
  }

  .user-info__skin {
    width: 48px;
    margin-left: -56px;
    transition: all ease .5s;
  }

  .user-info__version {
    position: relative;
    bottom: -2px;
    background: rgba(255, 255, 255, .8);
  }
</style>
