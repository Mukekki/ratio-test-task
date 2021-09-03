<template>
  <div class="input-container">
    <h3 class="input-container__title">Добавить закладку</h3>
    <div class="input__sub-title">Название:</div>
    <input type="text" class="input" v-model="name">
    <div class="input__sub-title">URL:</div>
    <input type="text" class="input" v-model="url">
    <div class="buttons">
      <button class="buttons__button false" @click="$router.push('/')">Отмена</button>
      <button class="buttons__button true" @click="addOrSaveBookmark()">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Add',
  data() {
    return {
      name: '',
      url: '',
    };
  },
  methods: {
    ...mapActions(['addBookmarks']),
    addOrSaveBookmark() {
      this.addBookmarks({
        name: this.name,
        url: this.url,
      });
      this.$router.push('/');
    },
  },
};

</script>

<style>
.input-container {
  margin: 16px auto;
  min-width: 300px;
  max-width: 512px;
  background-color: #292a2d;
  border-radius: 4px;
  padding: 4px 0px;
  padding: 1.5%;
}
.input {
  background: none;
  padding: 5px;
  border: 2px solid rgba(255, 255, 255, 0);
  margin: 1% 0 ;
  width: 100%;
  background-color: #1d1d1f;
  transition: all 0.2s;
  color: #8ab4f7;
}
.input:focus {
  border-bottom: 2px solid #8ab4f7
}
.buttons {
  display: flex;
  justify-content: flex-end;
  margin: 24px 8px 8px;
}
.buttons__button {
  padding: 8px 16px;
  border: 1px solid rgb(95, 99, 104);
  border-radius: 4px;
  background: none;
  transition: all 0.2s;
}
.false{
  margin-inline-end: 8px;
  color: #8ab4f7;;
}
.false:hover {
  transform: translateY(-2px);
  box-shadow: 0px 2px 2px 0px #8ab4f7;
}
.true{
  background-color: #8ab4f7;
  border-color: #8ab4f7;
}
.true:hover {
  transform: translateY(-2px);
  box-shadow: 0px 2px 2px 0px rgb(95, 99, 104);
}
.input-container__title {
  margin: 0px 0px 16px 0px
}
.input__sub-title {
  color: #8ab4f7;
}
</style>
