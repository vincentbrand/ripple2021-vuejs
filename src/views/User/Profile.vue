<template>
  <div>
    <div class="row">
      <!--
      <div class="col-md-3">
        <div class="rounded-circle" @click="uploadAvatar">
        <img class="img-profile" src="../../assets/img/profile.png">
        </div>
      </div>
      <div class="col-md-6">
        <table class="user-details">
          <tbody>
          <tr>
            <td class="label">Username</td>
            <td>{{ userData.name }}</td>
          </tr>
          <tr>
            <td class="label">Last Login</td>
            <td>{{ userData.last_login }}</td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td>{{ userData.email }}</td>
          </tr>
          <tr>
            <td class="label">Phone</td>
            <td>{{ userData.phone }}</td>
          </tr>
          <tr>
            <td class="label">Organisation</td>
            <td>{{ userData.organization }}</td>
          </tr>
          <tr>
            <td class="label">Role</td>
            <td>{{ userData.role }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-3">
        <p><a class="btn btn-primary btn-sm text-white mx-2">Reset Password</a></p>
        <p><a class="btn btn-warning btn-sm text-white mx-2">Change Role</a></p>
        <p><a class="btn btn-danger btn-sm text-white mx-2">Delete User</a></p>
        <p><a class="btn btn-info btn-sm text-white mx-2">Membership</a></p>
      </div>
      -->
      <div class="col-md-3 text-center">
        <div class="rounded-circle" @click="uploadAvatar">
          <img class="img-profile" src="../../assets/img/profile.png">
        </div>
        <p>{{ userData.name }}</p>
        <p>{{ userData.email }}</p>
        <p>{{ userData.phone }}</p>
        <hr>
        <div class="flex-container" style="height:auto;">
          <button class="btn btn-primary btn-sm text-white mx-2 mb-2" @click="resetPassword">Reset Password</button>
          <button class="btn btn-warning btn-sm text-white mx-2 mb-2" @click="changeRole">Change Role</button>
          <button class="btn btn-danger btn-sm text-white mx-2 mb-2" @click="deleteUser">Delete User</button>
          <!--<p><a class="btn btn-info btn-sm text-white mx-2">Membership</a></p>-->
        </div>
        <hr>
        <p>{{ userData.role }}</p>
        <p>Indicator Score</p>

      </div>
      <div class="col-md-5">
        <h5>Organisation Details</h5>
        <table class="user-details">
          <tbody>
          <tr>
            <td class="label">Organisation</td>
            <td>{{ userData.organization }}</td>
          </tr>
          <tr>
            <td class="label">Last Login</td>
            <td>{{ userData.last_login }}</td>
          </tr>
          </tbody>
        </table>
        <hr>
        <h5>Payment Details</h5>
        <cu-table :data='invoices'></cu-table>
      </div>
      <div class="col-md-4">
        <h5>Logs</h5>
        <el-table
            :data="dataSource"
            style="width: 100%"
        >
          <el-table-column prop="date" label="Date">
          </el-table-column>
          <el-table-column prop="url" label="action">
          </el-table-column>
          <!--
          <el-table-column prop="action" label="action">
          </el-table-column>
          <el-table-column prop="parameters" label="parameters">
          </el-table-column>
          -->
        </el-table>
        <router-link
            to="/user/log"
            tag='a'
            class="dropdown-item text-center small text-gray-500">
          <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
          See more {{ $t('interface.navbar.logs') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import cuTable from '@/components/tables/invoices';
import Seedr from "../../plugins/Seedr";
import moment from "moment";

console.log( );
export default {
  name: 'Profile',
  components: {
    cuTable
  },

  data: () => ({
    dataSource:[],
    invoices:[],
    stateChanged: false,
    userData:{
      name:'Vince',
      organization:'Ripple',
      last_login: Seedr.dateTime( new Date(2021, 8, 10), new Date() ),
      role:'Super User',
      email:'mail@vincentbrand.com',
      phone:'15026751094'
    }
  }),

  computed: {
  },

  watch: {
  },

  methods: {
    uploadAvatar(){
      console.log('upload avatar')
    },
    resetPassword() {
      console.log('reset user password');

      // dummy variable to show the different api responses
      var resetSuccess = false;

      if(resetSuccess){
        // show confirmmation message
        this.$message({
          type: 'success',
          message: 'Password Reset'
        })
      }else{
        // show confirmmation message
        this.$message({
          type: 'warning',
          message: 'Password not reset, error in request'
        });
      }

    },
    changeRole(){
      console.log('change role');
    },
    deleteUser(){
      console.log('delete user');
      this.$confirm('This will permanently delete this user. Are you sure you want to continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {

        // ------------------------------------------------------
        // delete client demo only
        // redirect to overview
        this.$router.push({ name: 'dashboard' })
        // ------------------------------------------------------------

        // show confirmmation message
        this.$message({
          type: 'success',
          message: 'User Deleted'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    }
  },

  created() {
    const format = 'Y-m-D hh:mm';
    for(let i=0; i<10; i++) {
      this.dataSource.push({
        id: i + 1,
        client: Seedr.word(),
        user: Seedr.firstname(),
        url: Seedr.word(1).toLowerCase()+'/'+Seedr.word(1).toLowerCase()+'/',
        action: 'delete',
        parameters: Seedr.word(1).toLowerCase(),
        date: moment(Seedr.dateTime(new Date(2012, 0, 1), new Date())).format(format),
      })
    }

    var f = 'Y-mm-DD';
    for(let i=0; i<Seedr.int(20); i++) {
      let d = Seedr.dateTime( new Date(2012, 0, 1), new Date() )
      this.invoices.push({
        id: i + 1,
        reference: Seedr.id(12),
        dateTime: moment(d).format(f),
        status: 'paid',
        amount: i * 5 + 2,
      })
    }
  },

  mounted() {
  },

  beforeDestroy() {
  }

}
</script>

<style scoped>

</style>