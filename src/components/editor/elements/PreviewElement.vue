<template>
  <li class="preview-item" v-bind:class="type" v-if="type == 'header'">
    <h3>{{ content.text }}</h3>
  </li>
  <li class="preview-item" v-bind:class="type" v-else-if="type == 'subtitle'">
    <h6>{{ content.text }}</h6>
  </li>
  <li class="preview-item" v-bind:class="type" v-else-if="type == 'txt'">
    <p>{{ content.text }}</p>
  </li>
  <li class="preview-item" v-bind:class="type" v-else-if="type == 'img'">
    <img :src="content.url" class="img-fluid"/>
  </li>
  <li class="preview-item" v-bind:class="type" v-else>
    Error in element
  </li>
</template>

<script>
export default {
  name: "PreviewElement",
  props: {
    content:{
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: '',
    }
  },
  data: () => ({
  }),
  created() {
    console.log('loaded preview element: '+ this.type);
    console.log(this.content);
  }
}
</script>

<style scoped>
</style>
