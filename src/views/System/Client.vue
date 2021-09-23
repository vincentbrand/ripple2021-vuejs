<template>

  <div class="row" v-if="clientid">

    <div class="col-12 mb-3">
      <h4> Client Detail Page ({{ clientid }}) </h4>
    </div>

    <div class="col-md-2 my-3">
      <table class="table table-borderless text-center">
        <tbody>
        <tr>
          <td colspan="2">
            <img src="https://source.unsplash.com/Mv9hjnEUHR4/300x300" class="avatar img-fluid" />
          </td>
        </tr>
        <tr>
          <td>{{ dataSet.username }}</td>
        </tr>
        <tr>
          <td>{{ dataSet.email }}</td>
        </tr>
        <tr>
          <td>{{ dataSet.phone }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-5 my-3">
      <h5>{{ $t('pages.clients.details.details') }}</h5>
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="label-col">{{ $t('pages.clients.details.ip') }}</td>
            <td>{{ dataSet.ip }} <i class="fas fa-list fa-sm fa-fw ml-2 text-gray-400" @click="viewAccessLogs(clientid)"></i>
            </td>
          </tr>
          <tr>
            <td class="label-col">{{ $t('pages.clients.details.os') }}</td>
            <td>{{ dataSet.os }} <i class="fas fa-list fa-sm fa-fw ml-2 text-gray-400" @click="viewAccessLogs(clientid)"></i></td>
          </tr>
          <tr>
            <td class="label-col">{{ $t('pages.clients.details.lastlogin') }}</td>
            <td>{{ dataSet.lastlogin }} <i class="fas fa-list fa-sm fa-fw ml-2 text-gray-400" @click="viewAccessLogs(clientid)"></i></td>
          </tr>
          <tr>
            <td class="label-col">{{ $t('pages.clients.details.paying') }}</td>
            <td>{{ dataSet.paying }}</td>
          </tr>
          <tr>
            <td class="label-col">{{ $t('pages.clients.details.package') }}</td>
            <td>{{ dataSet.package }}</td>
          </tr>
          <tr>
            <td class="label-col">{{ $t('pages.clients.details.clientindicator') }}</td>
            <td>
              <div class="progress my-2">
                <div class="progress-bar"
                     role="progressbar"
                     v-bind:class="progressClass(dataSet.customerindication)"
                     v-bind:style="progressWidth(dataSet.customerindication)"
                     :aria-valuenow="dataSet.customerindication"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-5 my-3">
      <h5>{{ $t('pages.clients.details.systemstats')}}</h5>
      <table class="table table-borderless">
        <tbody>
        <tr>
          <td class="label-col">{{ $t('pages.clients.details.members') }}</td>
          <td>{{ dataSet.members }}</td>
        </tr>
        <tr>
          <td class="label-col">{{ $t('pages.clients.details.bookings') }}</td>
          <td>{{ dataSet.bookings }}</td>
        </tr>
        <tr>
          <td class="label-col">{{ $t('pages.clients.details.bookings_this_week') }}</td>
          <td>{{ dataSet.bookingsthisweek }}</td>
        </tr>
        <tr>
          <td class="label-col">{{ $t('pages.clients.details.logins') }}</td>
          <td>{{ dataSet.logins }}</td>
        </tr>
        <tr>
          <td class="label-col">{{ $t('pages.clients.details.revenue') }}</td>
          <td>{{ dataSet.revenue }}</td>
        </tr>
        <tr>
          <td class="label-col">{{ $t('pages.clients.details.systemindicator') }}</td>
          <td>
            <div class="progress my-2">
              <div class="progress-bar"
                   role="progressbar"
                   v-bind:class="progressClass(dataSet.systemindicator)"
                   v-bind:style="progressWidth(dataSet.systemindicator)"
                   :aria-valuenow="dataSet.systemindicator"
                   aria-valuemin="0"
                   aria-valuemax="100">
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="col-md-12 my-4 text-right">
      <button class="btn btn-primary btn-sm mx-2" @click="clientResetPassword(clientid)">
        <i class="fas fa-sync-alt fa-sm fa-fw mr-2 text-white"></i> {{ $t('pages.clients.resetpassword') }}
      </button>
      <button class="btn btn-danger btn-sm mx-2" @click="clientRemove(clientid)">
        <i class="fas fa-trash fa-sm fa-fw mr-2 text-white"></i> {{ $t('pages.clients.delete') }}
      </button>
      <button class="btn btn-success btn-sm mx-2"  @click="clientLogin(clientid)">
        <i class="fas fa-sign-in-alt fa-sm fa-fw mr-2 text-white"></i> {{ $t('pages.clients.loginasuser') }}
      </button>
    </div>
    <div class="col-md-12 my-4">
      <h5>{{ $t('pages.clients.logs') }}</h5>
      <el-table
          :data="clientlogs"
          style="width: 100%"
      >
        <el-table-column prop="date" :label="$t('pages.clients.date')">
        </el-table-column>
        <el-table-column prop="user" :label="$t('pages.clients.user')">
        </el-table-column>
        <el-table-column prop="url" :label="$t('pages.clients.url')">
        </el-table-column>
        <el-table-column prop="action" :label="$t('pages.clients.action')">
        </el-table-column>
        <el-table-column prop="parameters" :label="$t('pages.clients.parameters')">
        </el-table-column>
      </el-table>
    </div>
  </div>

  <!-- id error -->
  <div class="row" v-else>
    <div class="col-md-12">
      <PageIssue
          title="Error retrieving Client Data"
          text="The request is invalid please double check your request or contact support">
      </PageIssue>
    </div>
  </div>

</template>

<script>
import Seedr from "../../plugins/Seedr";
import moment from "moment";

import PageIssue from "@/components/common/PageIssue.vue";

export default {
  name: 'clients',
  components: {
    PageIssue
  },

  data: () => ({
    clientid: false,
    stateChanged: false,
    dataSet: [],
    clientlogs: [],
    passwordResetConfirmation:false,
    clientLoginConfirmation:true
  }),
  computed:{
  },

  methods: {
    viewAccessLogs(id){
      console.log('View Access Logs '+id);
      this.$router.push({ name: 'accesslogs', params: { id: '666' } })
    },
    progressClass: function (p) {
      if(p <= 33){
        return 'bg-danger'
      }else if((p > 33)&&(p <= 66)){
        return 'bg-warning'
      }else{
        return 'bg-success'
      }
    },
    progressWidth:function(w){
      return "width: "+w+"%;";
    },
    clientResetPassword(id){
      console.log('Reset Password Client:'+id);

      // notification
      if(this.passwordResetConfirmation){
        this.$message({
          type: 'info',
          message: 'Password reset for CLIENT'
        });
      }else{
        // notification
        this.$message({
          type: 'warning',
          message: 'Failed to reset password for CLIENT'
        });
      }

    },
    clientRemove(id) {
      console.log('Delete client ' + id);
      this.$confirm('This will permanently delete this Client. Are you sure you want to continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // show confirmmation message
        this.$message({
          type: 'success',
          message: 'Client Deleted'
        });

      // redirect to overview
      this.$router.push({ name: 'clients' })


      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
    clientLogin(id) {
      console.log('Login as Client ' + id);

      // notification
      if(this.clientLoginConfirmation){
        this.$message({
          type: 'success',
          message: 'Logging in as CLIENT'
        });
        // redirect to overview
        this.$router.push({ name: 'dashboard' })
      }else{
        // notification
        this.$message({
          type: 'warning',
          message: 'Failed to login as CLIENT'
        });
      }


    }

  },


  created() {
  },

  mounted() {
    // ======================================================================
    // replace by real data
    let dummyClient = {
      id: this.$route.params.id,
      name: Seedr.fullname(),
      members: Seedr.int(1000),
      state: Seedr.int(3),
      ip: Seedr.ip(),
      os: Seedr.word().toLowerCase().trim(),
      phone:Seedr.phone(),
      email:Seedr.email(),
      paying: Seedr.int(1),
      package: Seedr.int(5),
      bookings: Seedr.range(50,200),
      bookingsthisweek: Seedr.int(50),
      logins: Seedr.range(10,20),
      revenue: Seedr.range(500,1000),
      customerindication: Seedr.range(0,100),
      systemindicator: Seedr.range(0,100),
      lastlogin: moment(Seedr.dateTime(new Date(2012, 0, 1), new Date())).format('MMMM Do YYYY hh:mm'),
    }
    // END OF: replace by real data
    // ======================================================================
    this.dataSet = dummyClient;

    const flog = 'Y-m-D hh:mm';
    for(let i=0; i<10; i++) {
      this.clientlogs.push({
        id: i + 1,
        user: Seedr.firstname(),
        url: Seedr.word(1).toLowerCase()+'/'+Seedr.word(1).toLowerCase()+'/',
        action: 'delete',
        parameters: Seedr.word(1).toLowerCase(),
        date: moment(Seedr.dateTime(new Date(2012, 0, 1), new Date())).format(flog),
      })
    }

    this.clientid=this.$route.params.id;
    console.log(this.clientid);
  }

}
</script>

<style>
.label-col{
  font-weight: bold;
  width:160px;
}
.label-col-2{
  font-weight: bold;
  width:160px;
}
</style>