<template>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >

      <p>这是一个消息提示框</p>
      
    </b-alert>
</template>

<script>
export default {
  name: 'alert',
  data () {
    return {
        dismissCountDown: 3
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
    this.dismissCountDown = dismissCountDown
    },
  }
}
</script>

<style scoped lang="less">

</style>
