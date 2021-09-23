<template>
  <div class="locale-changer menu-color dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="lang">
      <span v-for="(l, i) in langs" :key="`Lang${i}`" class="menu-color dropdown-item" @click="switchLanguage(l.locale)">
        {{ l.title }}
      </span>
  </div>
</template>

<script>

/*
*
*  ToDo:
*   add .selected class to the selected (current language) based on cookie
*
* */


export default {
  name: 'locale-changer',
  data () {
    return {
      langs: [{
        title:'English',
        locale:'en'
      },{
        title:'中文',
        locale:'zh'
      },{
        title:'Nederlands',
        locale:'nl'
      }]
    }
  },
  methods:{
    switchLanguage(l){
      this.$i18n.locale = l
      this.$cookie.set('lang', l)
      console.log(this.$i18n.locale);
    },
  }
}
</script>

<style scoped>
.selected{
  color:#d11083;
}
</style>
