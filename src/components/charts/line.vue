<template>
  <div :id="myRandomID"></div>
</template>

<script>
export default {
  name: "line",
  props:{

  },
  data: () => ({
    myRandomID:12345,
  }),
  methods: {
    makeChart(){
      console.log('make line chart');
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