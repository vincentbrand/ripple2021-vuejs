import Vue from 'vue'
import Vuex from 'vuex'
import HomeModule from './home.module';
import EmulatorModule from './emulator.module';
import BookingsModule from './bookings.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {
      tabbar: {
        home: {
          text_en: "Home",
          icon: "fas fa-home",
          text_zh: "首页",
          text: "Home",
        },
        news: {
          text_en: "News",
          icon: "fas fa-address-card",
          text_zh: "新闻",
          text: "News",
        },
        booking: {
          text_en: "Booking",
          icon: "fas fa-bookmark",
          text_zh: "预定",
          text: "Booking",
        },
        me: {
          text_en: "Me",
          icon: "fas fa-user",
          text_zh: "我的",
          text: "Me",
        },
      },
      bg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2219830916,1102276342&fm=26&gp=0.jpg",
      logo: "http://ripple.local/img/ripple-logo.jpg",
      isnewsblock: 0,
      navigation: {
        text: '#ff0',
        bg: '#333'
      }
    },
  },
  mutations: {
    SET_CONFIG_NEWS_LAYOUT (state, val) {
      state.config.isnewsblock = val
    },
    SET_CONFIG_NAVIGATION_BG (state, val) {
      state.config.navigation.bg = val
    },
    SET_CONFIG_NAVIGATION_TEXT (state, val) {
      state.config.navigation.text = val
    }
  },
  actions: {
  },
  modules: {
    namespaced: true,
    HomeModule,
    EmulatorModule,
    BookingsModule,
  }
})
