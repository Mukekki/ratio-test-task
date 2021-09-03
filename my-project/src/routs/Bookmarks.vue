<template>
  <div class="marks__container">
    <bookmark
    v-for="(bookmark, i) of bookmarks" :key="bookmark.name"
    :bookmark="bookmark"
    :border="i + 1 !== getBookmarks().length"
    @selectBookmark='selectBookmark(i)'
    :selected='selectedBookmark === i'
    @missClick='deleteSelection'/>
  </div>
</template>

<script>
import Bookmark from '@/components/Bookmark';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Bookmarks',
  created() {
    this.bookmarks = this.$store.getters.getBookmarks;
  },
  components: {
    Bookmark,
  },
  data() {
    return {
      bookmarks: [],
      selectedBookmark: null,
    };
  },
  methods: {
    ...mapActions(['actionGetBookmarks']),
    ...mapGetters(['getBookmarks']),
    selectBookmark(i) {
      this.selectedBookmark = i;
    },
    deleteSelection() {
      this.selectedBookmark = null;
    },
  },
};
</script>

<style>

.marks__container{
  margin: 16px auto;
  width: 600px;
  background-color: #292a2d;
  border-radius: 4px;
  padding: 4px 0px;
}
</style>
