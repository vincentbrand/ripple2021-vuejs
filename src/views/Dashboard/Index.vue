<template>
  <div class="home">
    <!--
    <div class="card shadow mb-4">
      <div class="card-header py-3 bg-ripple">
        <h6 class="m-0 font-weight-bold text-white">{{$t('home.title')}}</h6>
      </div>
      <div class="card-body">
        {{$t('home.content')}}
      </div>
    </div>
    -->

    <div class="row">
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {{ $t('pages.dashboard.bookings')}}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{this.bookingTable.length}}</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  {{ $t('pages.dashboard.upcoming')}}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{dashboard.upcoming}}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar-alt fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pending Requests Card Example -->
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4">
        <div class="card border-left-danger shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                  {{ $t('pages.dashboard.messages')}}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{dashboard.messages}}
                </div>
              </div>
              <div class="col-auto">
                <!-- <i class="fas fa-comments fa-2x text-gray-300"></i> -->
                <i class="fas fa-bell fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pending Requests Card Example -->
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4">
        <div class="card border-left-warning shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  {{ $t('pages.dashboard.members')}}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{dashboard.members}}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-users fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- latest booking table -->
    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <div class="card mb-4">
          <div class="card-body">
            <span class="pull-left mb-3 float-left">
              <h4>{{ $t('pages.dashboard.todaysbookings')}}</h4>
            </span>
            <router-link
                to="/bookings/new"
                tag='button'
                class="btn btn-primary btn-sm pull-right mb-3 float-right"
            >
              <i class="fas fa-plus-circle"></i> {{ $t('common.newbooking')}}
            </router-link>
            <!--
            <button class="btn btn-primary btn-sm pull-right mb-3 mx-3 float-right" type="button">
              <i class="fas fa-filter fa-sm"></i> Filter
            </button>
            -->
            <el-table
                :data="bookingTable"
                style="width: 100%"
            >
              <el-table-column prop="id" label="#" width="50px">
              </el-table-column>

              <el-table-column label="Customer" width="">
                <template slot-scope="{ row }">
                  <span style="margin-left: 10px">{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Contact" width="140px">
                <button class="btn btn-success btn-call btn-xs text-white" @click="contactCustomer()">
                  <i class="fas fa-phone fa-xs mr-1"></i> {{ $t('common.contact')}}
                </button>
              </el-table-column>

              <el-table-column prop="bookedfor" label="Booked for" width="150px">
              </el-table-column>

              <el-table-column label="" width=''>
                <button class="btn btn-sm btn-info text-white mx-1 my-1" @click="changeBooking(1)">
                  <i class="far fa-edit"></i> <span class="hide-on-mobile">{{ $t('common.edit')}}</span>
                </button>
                <button class="btn btn-sm btn-danger text-white mx-1 my-1" @click="cancelBooking(1)">
                  <i class="fas fa-trash-alt"></i> <span class="hide-on-mobile">{{ $t('common.cancel')}}</span>
                </button>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <!-- END OF: latest booking table -->


    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-body">
            <h4 class="mb-4">{{ $t('pages.dashboard.charttitle') }}</h4>
            <div id="stackedbars" :style="{width: '100%', height: '330px'}"></div>
          </div>
        </div>
      </div>

      <!-- Progress Small -->
      <!--
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-4">{{ $t('pages.dashboard.campaign') }}</h4>
            <div class="mb-1 small">Followers <b>(75%)</b></div>
            <div class="progress mb-4">
              <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="mb-1 small">Comments <b>(10%)</b></div>
            <div class="progress mb-4">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="mb-1 small">Shares <b>(18%)</b></div>
            <div class="progress mb-4">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 18%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="mb-1 small">Likes <b>(93%)</b></div>
            <div class="progress mb-4">
              <div class="progress-bar bg-success" role="progressbar" style="width: 93%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
      -->


    </div>

  </div>
</template>

<script>
import echarts from 'echarts'
import Seedr from "../../plugins/Seedr";
import moment from "moment";

export default {

  /*
  *
  *
  *  ToDo:
  *    - API calls
  *    - Change bookings (popup)
  *    - Cancel bookings
  *    - New booking
  *
  *
  *
  * */


  name: 'Home',
  components:{
  },
  mounted(){
    this.drawLine();
  },

  data: () => ({
    bookingTable:[],
    options: ['BOOKINGS TODAY', 'UPCOMING BOOKINGS', 'MESSAGES'],
    dashboard:{
      today:0,
      upcoming:0,
      messages:0,
      members:0
    },
  }),

  methods: {
    contactCustomer(i){
      console.log('contact customer with bookingid:'+i);
    },
    changeBooking(i){
      console.log('change booking with id:'+i);
    },
    cancelBooking(i){
      console.log('cancel booking with id:'+i);

      this.$confirm('This will permanently delete this booking. Are you sure you want to continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // show confirmmation message
        this.$message({
          type: 'success',
          message: 'Booking Deleted'
        });

        // dummy removal
        // this.bookingTable.splice(id, 1);

      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Booking Deletion Canceled'
        });
      });
    },
    drawLine(){
      // dark pink, light pink, grey, blue grey, green
      var colorPalette = ['#d11083', '#EFBCD5','#2E294E', '#4B5267','#339989']
      // stacked bars
      let stackedBars = echarts.init(document.getElementById('stackedbars'))
      const stackedBarsData = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['Revenue', 'Visitors', 'Signup', 'Users']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Revenue',
            type: 'bar',
            color:colorPalette[0],
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Visitors',
            type: 'bar',
            color:colorPalette[1],
            stack: 'traffic',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Signup',
            type: 'bar',
            color:colorPalette[2],
            stack: 'traffic',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Users',
            type: 'bar',
            color:colorPalette[4],
            stack: 'traffic',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'solid'
              },
              data: [
                [{type: 'min'}, {type: 'max'}]
              ]
            }
          }
        ]
      };
      stackedBars.setOption(stackedBarsData)
    }
  },

  computed: {
    /*
    dashboard () {
        return this.$store.state.HomeModule.dashboard
    }
    */
  },

  created () {
    //this.$store.dispatch("getHomeCardData")

    // dummy data for bookings
    for(let i=0; i<Seedr.range(3,10); i++) {
      // let d = Seedr.dateTime( new Date(2021, 2, 1), new Date() )
      let e = Seedr.dateTime( new Date(2021, 5, 1), new Date() )
      this.bookingTable.push({
        id: i + 1,
        name: Seedr.fullname(),
        // bookedon: moment(d).format('Y-mm-DD'),
        bookedfor:  moment(e).format('HH:mm'),
        // membertype: Seedr.range(1,5)
      })
    }
    // set dummy data
    this.dashboard.upcoming = Seedr.range(0,20);
    this.dashboard.messages = 2;
    this.dashboard.members = Seedr.range(50,200);
  }

}
</script>
<style>
.btn-group-xs>.btn, .btn-xs {
  padding: .15rem .3rem;
  font-size: .75rem;
  line-height: 1.2;
  border-radius: .1rem;
}
@media only screen and (max-width: 500px) and (min-width: 200px)  {
  .hide-on-mobile{
    display:none;
  }
}
</style>