<template>
<div>
  <!-- 1、 -->
  <!-- <b-button v-b-modal.my-modal>Launch demo modal</b-button> -->
  <!-- 2、 -->
  <!-- <b-button @click="showModal">Open modal</b-button> -->
  <!-- 3、 -->
  <b-button @click="$bvModal.show('my-modal')">Open modal</b-button>

  <b-modal ref='my-modal' id="my-modal" title="This is modal">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
	
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    showModal () {
      // show => modal.id
      this.$refs['my-modal'].show()
      // hide => modal.id
      // this.$refs['my-modal'].hide()	
    }
  }
}
</script>

<style scoped lang="less">

</style>
