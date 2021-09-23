<template>
  <div class="row">
    <div class="col-md-12">
      <div class="flex-container">

        <!-- client card -->
        <div class="client-card border-bottom-primary" v-for="item in dataSource" :key="item.id">
          <span class="status-indicator online" v-if="item.state > 0"></span>
          <span class="status-indicator offline" v-else></span>
          <div class="client-card-content">
            <h4>{{ item.name | clientCutOff }}</h4>
            <hr>
            <p><i class="fas fa-sign-in-alt fa-sm fa-fw mr-2 text-gray-400"></i>: <b>{{ item.lastlogin }}</b></p>
            <div class="client-details">
              <p><i class="fas fa-users fa-sm fa-fw mr-2 text-gray-400"></i> {{ item.members }}</p>
              <p><i class="fas fa-calendar-alt fa-sm fa-fw mr-2 text-gray-400"></i> {{ item.avgbookings }}</p>
              <p>
                <i class="fas fa-globe-asia fa-sm fa-fw mr-2" v-bind:class=" item.web ? 'text-success':'text-gray-400' "></i>
                <i class="fab fa-weixin fa-1x fa-fw mr-2" v-bind:class=" item.wechat ? 'text-success':'text-gray-400' "></i>
              </p>
            </div>
            <hr>
            <div class="client-details">
              <a class="btn btn-sm btn-info text-white" @click="clientLogin(item.id)">
                <i class="fas fa-sign-in-alt fa-sm fa-fw mr-1"></i>
                {{ $t('pages.clients.login') }}
              </a>
              <a class="btn btn-sm btn-warning text-white mx-1" @click="clientView(item.id)">
                <i class="fas fa-pencil-alt fa-sm fa-fw mr-1"></i>
                {{ $t('pages.clients.view') }}
              </a>
              <a class="btn btn-sm btn-danger text-white" @click="clientRemove(item.id)">
                <i class="fas fa-trash-alt fa-sm fa-fw mr-1"></i>
                {{ $t('pages.clients.remove') }}
              </a>
            </div>
          </div>
          <!--
          <div class="client-indicator bg-warning" v-if="item.state == 1 "></div>
          <div class="client-indicator bg-gold" v-else-if="item.state == 0"></div>
          <div class="client-indicator bg-danger" v-else></div>
          -->
        </div>

        <div class="client-card add-new" @click="createClient">
          <i class="fas fa-plus-circle fa-10x fa-fw mx-5 mt-5 text-gray-400"></i>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Seedr from "../../plugins/Seedr";
import moment from "moment";

export default {
  name: 'clients',
  components: {
  },

  data: () => ({
    stateChanged: false,
    dataSource: [],
  }),


  computed: {
  },

  watch: {
  },

  methods: {
    clientView(id){
      console.log('View client '+id);
      this.$router.push({ name: 'client', params: { id: '666' } })
    },
    clientLogin(id){
      console.log('Login as client '+id);
    },
    clientRemove(id){
      console.log('Delete client '+id);
        this.$confirm('This will permanently delete this Client. Are you sure you want to continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {

          // ------------------------------------------------------
          // delete client demo only
          this.dataSource.splice(id, 1);
          // ------------------------------------------------------

          // show confirmmation message
          this.$message({
            type: 'success',
            message: 'Client Deleted'
            // message: $t('pages.clients.notifications.confirmation')
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });
        });
    },
    createClient(){
      console.log('Create New Client');
    }
  },

  created() {


  },

  mounted() {
    var format = 'MMMM Do YYYY hh:mm';
    for(let i=0; i<7; i++) {
      this.dataSource.push({
        id: i + 1,
        name: Seedr.word()+Seedr.word()+Seedr.word(),
        members: Seedr.int(1000),
        state: Seedr.int(3),
        status: Seedr.int(1),
        web: Seedr.int(2),
        wechat: Seedr.int(2),
        avgbookings: Seedr.int(20),
        lastlogin: moment(Seedr.dateTime(new Date(2012, 0, 1), new Date())).format(format),
      })
    }
    console.log(this.dataSource);
  },

  beforeDestroy() {
  }

}
</script>

<style>





</style>