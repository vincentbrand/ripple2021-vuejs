<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: 'PageIssue',
  props: {
    title:{
      type: String,
      default: ''
    },
    text:{
      type: Number,
      default: 0
    },
    icon:{
      type: String,
      default: ''
    },
    link:{
      type: Boolean,
      default: false
    }
  },
  data: () => ({
  }),
  mounted() {
    console.log('Page Issue Component Mounted');
  }
}
</script>

