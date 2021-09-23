<template>
  <div class="row">
    <div class="col-12">
      <el-timeline>
        <el-timeline-item v-for="(item,index) in history" timestamp="item.date" :key="index" placement="top">
          <el-card>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>

export default {
  name: "MP Versions",
  components: {
  },

  data: () => ({
    stateChanged: false,
    lang: "en",
    history:[{
      date:'2021/4/2 20:46',
      title:'Code Push',
      text:'Vince committed '
    },{
      date:'2021/1/2 23:11',
      title:'Update Github template',
      text:'Tom committed '
    },{
      date:'2020/8/26 14:36',
      title:'Code Push',
      text:'Vince committed '
    },{
      date:'2020/2/22 12:46',
      title:'Update Github template',
      text:'Tom committed '
    }]
  }),
  computed: {
  },
  watch: {
  },
  methods: {
  },

  created() {
  },

  mounted() {
    window.document.addEventListener('click', this.onClickApp)
  },
  beforeDestroy() {
    window.document.removeEventListener('click', this.onClickApp)
  }

};
</script>

<style scoped>
</style>