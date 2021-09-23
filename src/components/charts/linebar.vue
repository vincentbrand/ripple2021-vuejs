<template>
  <div :id="myRandomID"></div>
</template>

<script>
export default {
  name: "linebar",
  props:{

  },
  data: () => ({
    myRandomID:12345,
  }),
  methods: {
    makeChart(){
      console.log('make linebar chart');
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