<template lang="pug">
  .user-info.elevation-3
    v-list.py-0
      v-list-tile.grey.lighten-4
        v-list-tile-content.user-info__photo
          v-list-tile-avatar.user-info__photo-avatar.grey.lighten-4(size="48" tile)
            v-img(:src="us.photoUrl(username, 96)" class="lighten-4")
        v-list-tile-content.user-info__lang.grey.lighten-2
          v-list-tile-avatar.user-info__lang-avatar(size="48" tile)
            v-img(:src="us.langUrl(lang)" class="lighten-2")
        v-list-tile-content.text-xs-center.user-info__skin(:style="'background: green url('+us.hiveUrl(skin)+');'")
          img.mx-auto(:src="us.antUrl(skin)" width="20")
          v-list-tile-sub-title.black--text.user-info__version v.{{ version }}
        v-list-tile-content.px-3
          v-list-tile-title.font-weight-bold
            a.user-info__link(:href="'/user/?username='+username") {{ username }}
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
    position: relative;
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
    cursor: default;
    z-index: 3;
    transition: all ease .5s;
  }

  .v-list__tile {
    padding: 0;
  }

  .user-info__photo {
    width: 48px;
  }

  .user-info__photo-avatar {
    z-index: 2;
  }

  .user-info__photo:hover + .user-info__lang {
    margin-left: 47px;
  }

  .user-info__photo:hover ~ .user-info__skin {
    margin-left: 94px;
  }

  .user-info__lang {
    position: absolute;
    width: 48px;
    z-index: 1;
    transition: all ease .5s;
  }

  .user-info__lang-avatar {
    z-index: 1;
  }

  .user-info__skin {
    position: absolute;
    width: 48px;
    z-index: 1;
    transition: all ease .5s;
  }

  .user-info__version {
    position: relative;
    bottom: -2px;
    background: rgba(255, 255, 255, .8);
  }

  .user-info__link {
    text-decoration: none;
  }

  .user-info__link:hover {
    text-decoration: underline;
  }
</style>
