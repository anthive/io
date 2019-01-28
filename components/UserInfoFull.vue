<template lang="pug">
  .user-info-full.mb-3.elevation-1
    v-card(:to="{ path: '/user/?username=' + username }")
      v-layout(row)
        v-layout(column)
          v-layout(row)
            v-avatar(size="100" tile)
              v-img(:src="us.photoUrl(username, 100)" class="grey lighten-4")
                v-layout(fill-height align-end left)
                  v-flex(xs12 flexbox)
                    v-avatar(size="30" tile)
                      v-img(:src="us.langUrl(lang)")
                v-layout(fill-height align-end right)
                  v-flex(xs12 flexbox)
                    v-avatar.grey.lighten-4(size="30" tile)
                      v-card-text.pa-0.lighten-4 v.{{ version }}
            v-avatar(size="100" tile)
              v-img(:src="us.hiveUrl(skin, true)")
                v-layout(fill-height align-end)
                  v-flex(xs12 flexbox)
                    v-avatar(size="70" tile)
                      v-img(:src="us.antUrl(skin, true)")
          v-layout(row)
            v-card-text.py-2.font-weight-bold {{ username }}
              v-avatar.ml-2(size="10" :class="color")
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
    score: Number,
    span: Array,
    stats: Object,
    color: String
  },
  data: () => ({
    us: userService,
  }),
  created() {
  },
};
</script>

<style>
  .user-info-full {
    display: inline-block;
    border-radius: 5px;
    overflow: hidden;
  }

  .user-info-full__meta-item-title {
    display: inline-block;
    width: 50px;
    margin-right: 5px;
  }
</style>
