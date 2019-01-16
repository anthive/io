<template lang="pug">
  .user-info
    v-list.py-0
      v-list-tile(class="grey lighten-4")
        v-list-tile-content
          v-list-tile-avatar(size="48" tile).user-info__photo-avatar
            v-img(:src="photo" class="grey lighten-4")
        v-list-tile-content.user-info__lang
          v-list-tile-avatar(size="48" tile).user-info__lang-avatar
            v-img(:src="lang" class="grey lighten-2")
        //- v-list-tile-content.user-info__skin.px-2.green.lighten-2(style="background: #000;")
        v-list-tile-content.user-info__skin.px-2(:style="hiveStatic")
          img(:src="skin" width="20")
        v-list-tile-content(class="pr-2 pl-3")
          v-list-tile-title {{ username }}
        v-list-tile-content
          v-avatar(size="30" class="mr-3 grey lighten-3 grey--text text--darken-5 caption") v.{{ version }}
        v-list-tile-content.px-3.orange.lighten-5
          v-list-tile-sub-tile.orange--text.text--lighten-2.caption.font-weight-bold {{ score }}
            v-avatar(size="25")
              v-icon.ml-1.orange--text.text--lighten-1(size="25") bubble_chart

</template>

<script>

export default {
  name: "usesrInfo",
  props: {
    username: String,
    photo: String,
    lang: String,
    version: String,
    skin: String,
    hive: String,
    score: Number
  },
  data: () => ({
    hiveStatic: 'background: green url(https://anthive.io/skins/client/2/hive@2x.png);'
  }),
  created() {
  },
  methods: {
    
  }
};
</script>

<style>
  .user-info {
    margin-right: 60px;
    border-radius: 2px;
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
    margin-left: -10px;
  }

  .v-list__tile:hover > .user-info__skin {
    margin-left: -10px;
  }

  .user-info__photo-avatar {
    z-index: 2;
  }

  .user-info__lang {
    margin-left: -34px;
    transition: all ease .5s;
  }

  .user-info__lang-avatar {
    z-index: 1;
  }

  .user-info__skin {
    margin-left: -44px;
    transition: all ease .5s;
  }
</style>
