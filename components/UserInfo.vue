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
        //- v-list-tile-content.px-3.user-info__skin(:style="hiveStatic")
        v-list-tile-content.text-xs-center.user-info__skin(:style="hiveStatic")
          img.mx-auto(:src="skin" width="20")
          v-list-tile-sub-title.caption.user-info__version v.{{ version }}
        v-list-tile-content.px-3
          v-list-tile-title.font-weight-bold {{ username }}
        v-list-tile-content.px-3.orange.lighten-5
          v-list-tile-sub-title.orange--text.text--lighten-2.title.font-weight-bold {{ score }}
            v-avatar(size="40")
              v-icon.ml-1.orange--text.text--lighten-1(size="40") bubble_chart

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
    hiveStatic: 'background: green url(https://anthive.io/skins/client/1/hive.png);'
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
