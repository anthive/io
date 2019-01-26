<template lang="pug">
  .user-info-full.mb-3.elevation-1
    v-card(:to="{ path: '/user/?username=' + username }")
      v-layout(row)
        v-flex
          div
            v-avatar.grey.lighten-2(size="50" tile)
              v-img(:src="lang")
            v-avatar.grey.lighten-4(size="50" tile)
              v-card-text.pa-0.grey.lighten-4 v.{{ version }}
          v-avatar(size="100" tile)
            v-img(:src="photo" class="grey lighten-4")
          //- div
          //-   v-avatar.grey.lighten-2(size="50" tile)
          //-     v-img(:src="lang")
          //-   v-avatar.grey.lighten-4(size="50" tile)
          //-     v-card-text.pa-0.grey.lighten-4 v.{{ version }}
        v-flex.text-xs-center(:style="{ background: '#ccc url(https://anthive.io/skins/client/'+hive+'/hiveBig.png)' }")
          //- background: green url(https://anthive.io/skins/client/1/hive.png
          v-card-text.user-info-full__username.py-3.font-weight-bold {{ username }}
          v-avatar.mt-3.pl-5.pr-5(size="60" tile)
            v-img(height="auto" :src="skin")
        //- v-flex.grey.lighten-4
        v-flex.text-xs-left
          v-card-text.user-info-full__meta-title.pt-1.pb-0.grey--text.text--darken-2.caption.text-xs-center Bot info
          v-card-text.py-0.caption
            span.user-info-full__meta-item-title Span:
            span Y{{ span[0] }}, X{{ span[1] }}
          v-card-text.py-0.caption
            span.user-info-full__meta-item-title Wealth:
            span {{ stats.Age }}
          v-card-text.py-0.caption
            span.user-info-full__meta-item-title Age:
            span {{ stats.Errors }}
          v-card-text.py-0.caption
            span.user-info-full__meta-item-title Ants:
            span {{ stats.Ants }}
          v-card-text.py-0.caption
            span.user-info-full__meta-item-title Hive:
            span {{ stats.Hive }}
          v-card-text.py-0.caption
            span.user-info-full__meta-item-title Art:
            span {{ stats.Art }}
          v-card-text.py-0.caption
            span.user-info-full__meta-item-title Errors:
            span {{ stats.Errors }}
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
    hive: Number,
    score: Number,
    span: Array,
    stats: Object
  },
  data: () => ({
  }),
  created() {
  },
  methods: {
  }
};
</script>

<style>
  .user-info-full {
    display: inline-block;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .user-info-full__username {
    margin-top: -3px;
    background: rgba(255, 255, 255, .8);
  }

  .user-info-full__meta-title {
    margin-top: -3px;
  }

  .user-info-full__meta-item-title {
    display: inline-block;
    width: 50px;
    margin-right: 5px;
  }
</style>
