import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const uploadBookMarks = () => [
  {
    name: 'YouTube',
    url: 'youtube.com',
  },
  {
    name: 'VK',
    url: 'vk.com',
  },
  {
    name: 'Vue',
    url: 'https://ru.vuejs.org/',
  },
  {
    name: 'Google translater',
    url: 'https://translate.google.ru/?hl=ru',
  },
];

export default new Vuex.Store({
  actions: {
    actionGetBookmarks(ctx) {
      const links = uploadBookMarks();
      ctx.commit('updateLinks', links);
    },
    addBookmarks(ctx, bookmark) {
      ctx.commit('mutationAddBookmarks', bookmark);
    },
  },
  mutations: {
    updateLinks(state, links) {
      state.bookMarks = links;
    },
    mutationAddBookmarks(state, bookmark) {
      state.bookMarks.unshift(bookmark);
    },
  },
  state: {
    bookMarks: [],
  },
  getters: {
    getBookmarks(state) {
      return state.bookMarks;
    },
  },

});
