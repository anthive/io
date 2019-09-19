// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

// Vue.use(Vuetify, {
//   theme: {
//     primary: '#121212', // a color that is not in the material colors palette
//     accent: colors.grey.darken3,
//     secondary: colors.amber.darken3,
//     info: colors.teal.lighten1,
//     warning: colors.amber.base,
//     error: colors.deepOrange.accent4,
//     success: colors.green.accent3
//   }
// })


// Vue.use(Vuetify);

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi',
//   },
// theme: {
//   primary: '#121212', // a color that is not in the material colors palette
//   accent: colors.grey.darken3,
//   secondary: colors.amber.darken3,
//   info: colors.teal.lighten1,
//   warning: colors.amber.base,
//   error: colors.deepOrange.accent4,
//   success: colors.green.accent3
// }
// });

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader version "^2.1.1" ,
Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      dark: false ,// From 2.0 You have to select the theme dark or light here
      primary: '#121212', // a color that is not in the material colors palette
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}

// import Vue from 'vue';
// import Vuetify from 'vuetify/lib';

// Vue.use(Vuetify);

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi',
//   },
// });