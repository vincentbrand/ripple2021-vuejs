<template>
  <div :id="myRandomID"></div>
</template>

<script>
export default {
  name: "pie",
  props:{

  },
  data: () => ({
    myRandomID: 1234,
  }),
  methods: {
    makeChart(){
      console.log('make pie chart');
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