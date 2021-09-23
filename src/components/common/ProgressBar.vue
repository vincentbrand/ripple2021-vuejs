<template>
  <div>
    <div class="mb-1 small">Followers <b>(75%)</b></div>
    <div class="progress mb-4">
      <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'ProgressBar',
    props: {
      dataset:{
        name:{
          type: String,
          default: ''
        },
        value:{
          type: Number,
          default: 0
        },
        min:{
          type: Number,
          default: 0
        },
        max:{
          type: Number,
          default: 100
        }
      }
    },
    data: () => ({
      /*
      dataset:{
          name:'',
          value:0
        }
       */
    }),
    methods: {
        myMethod (i) {
            console.log(i)
        }
    },
    created() {
    },
    mounted() {
    }
}
</script>

