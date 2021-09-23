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
      <h5>Details</h5>
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="label-col">IP</td>
            <td>{{ dataSet.ip }}</td>
          </tr>
          <tr>
            <td class="label-col">OS</td>
            <td>{{ dataSet.os }}</td>
          </tr>
          <tr>
            <td class="label-col">Last Login</td>
            <td>{{ dataSet.lastlogin }}</td>
          </tr>
          <tr>
            <td class="label-col">Paying</td>
            <td>{{ dataSet.paying }}</td>
          </tr>
          <tr>
            <td class="label-col">Package</td>
            <td>{{ dataSet.package }}</td>
          </tr>
          <tr>
            <td class="label-col">Customer Indication</td>
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
      <h5>System Stats</h5>
      <table class="table table-borderless">
        <tbody>
        <tr>
          <td class="label-col">members</td>
          <td>{{ dataSet.members }}</td>
        </tr>
        <tr>
          <td class="label-col">bookings</td>
          <td>{{ dataSet.bookings }}</td>
        </tr>
        <tr>
          <td class="label-col">booking this week</td>
          <td>{{ dataSet.bookingsthisweek }}</td>
        </tr>
        <tr>
          <td class="label-col">logins</td>
          <td>{{ dataSet.logins }}</td>
        </tr>
        <tr>
          <td class="label-col">Revenue</td>
          <td>{{ dataSet.revenue }}</td>
        </tr>
        <tr>
          <td class="label-col">System Indicator</td>
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
      <button class="btn btn-primary mx-2">Reset Password</button>
      <button class="btn btn-danger mx-2">Delete</button>
      <button class="btn btn-success mx-2">Login as User</button>
    </div>
    <div class="col-md-12 my-4">
      <h5>Logs</h5>
      <el-table
          :data="clientlogs"
          style="width: 100%"
      >
        <el-table-column prop="date" label="Date">
        </el-table-column>
        <el-table-column prop="user" label="User">
        </el-table-column>
        <el-table-column prop="url" label="URL">
        </el-table-column>
        <el-table-column prop="action" label="action">
        </el-table-column>
        <el-table-column prop="parameters" label="parameters">
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
  name: 'NewClient',
  components: {
    PageIssue
  },

  data: () => ({
    clientid: false,
    stateChanged: false,
    dataSet: [],
    clientlogs: []
  }),
  computed:{
  },

  methods: {
    resetPassword(){
      console.log('Reset Password');
    }
  },

  created() {
  },

  mounted() {
    var format = 'MMMM Do YYYY hh:mm';

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
      lastlogin: moment(Seedr.dateTime(new Date(2012, 0, 1), new Date())).format(format),
    }
    console.log(dummyClient);
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
  },

  beforeDestroy() {
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