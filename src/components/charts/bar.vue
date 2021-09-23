<template>
  <div :id="myRandomID"></div>
</template>

<script>
export default {
  name: "bar"
  props:{

  },
  data: () => ({
    myRandomID: 12345,
  }),
  methods: {
    makeChart(){
      console.log('make bar chart');
    }
  },
  created() {

  },
  mounted() {
    this.makeChart();
  }
}
</script>

<style scoped>

</style>