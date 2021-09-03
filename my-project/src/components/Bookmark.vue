<template>
  <div class="marks__item"
  @click.stop="$emit('selectBookmark')"
  :class="{
    border: border,
    selected: selected
    }">
    <div class="marks__info-container">
      <div class="marks__image" :style="favIco(bookmark.url)"></div>
      <div class="marks__title">{{bookmark.name}}
        <span class="marks__url"
        v-if="selected">{{bookmark.url}}</span>
      </div>
    </div>
    <div class="marks__button-container">
      <span class="marks__button-icon"
      :class="{selected: selected}"></span>
      <span class="marks__button-icon"
      :class="{selected: selected}"></span>
      <span class="marks__button-icon"
      :class="{selected: selected}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bookmark',
  props: {
    selected: Boolean,
    border: Boolean,
    bookmark: {
      type: Object,
      required: true,
    },
  },
  created() {
    document.addEventListener('click', this.missClick);
  },
  methods: {
    missClick() {
      this.$emit('missClick');
    },
    favIco(link) {
      return `background-image: url(http://www.google.com/s2/favicons?domain=${link});`;
    },
  },
  destroyed() {
    document.removeEventListener('click', this.missClick);
  },
};

</script>

<style>

.marks__item {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  transition: all 0.2s;
}
.marks__info-container {
  display: flex;
}
.marks__image {
  width: 16px;
  height: 16px;
  margin: 12px 12px;
  background-size: 16px;
  border-radius: 3px;
}
.marks__title {
  min-width: 100px;
  margin: 12px;
}
.marks__url {
  font-size: 16px;
  margin-left: 16px;
  color: #292a2d;
}
.marks__button-container {
  display: block;
  width: 36px;
  height: 36px;
  margin: 2px;
  background: none;
  border-radius: 50%;
  transition: all 0.2s;
}
.marks__button-container:hover {
  background-color: #8ab4f71c;
}

.marks__button-icon{
  display: block;
  width: 5px;
  height: 5px;
  margin: 5px auto;
  margin-bottom: 4px;
  border-radius: 50%;
  background-color: rgb(154, 160, 166);
}
.marks__button-icon.selected {
  background-color: rgb(32, 33, 36);
}
.border{
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.selected{
  background-color: #8ab4f7;
  color: #000
}
</style>
