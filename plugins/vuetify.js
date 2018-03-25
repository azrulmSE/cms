import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.deepOrange.base,
    secondary: colors.deepOrange.lighten1,
    tertiary: colors.deepOrange.lighten2,
    quaternary: colors.deepOrange.lighten3,
    quinary: colors.deepOrange.lighten4,
    senary: colors.deepOrange.lighten5,
    septenary: colors.deepOrange.darken1,
    octonary: colors.deepOrange.darken2,
    nonary: colors.deepOrange.darken3,
    accent: colors.grey.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
  }
})

// Original color
// theme: {
//   primary: '#121212', // a color that is not in the material colors palette
//primary: "#ff5722", // a color that is not in the material colors palette
//   accent: colors.grey.darken3,
//   secondary: colors.amber.darken3,
//   info: colors.teal.lighten1,
//   warning: colors.amber,
//   error: colors.deepOrange.accent4,
//   success: colors.green.accent3
// }
