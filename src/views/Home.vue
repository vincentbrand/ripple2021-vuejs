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
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              {{ $t('pages.dashboard.bookings')}}
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{dashboard.today}}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
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
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      {{ $t('pages.dashboard.messages')}}
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{dashboard.messages}}
                    </div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
      <!-- Pending Requests Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-danger shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
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

    <div class="row">
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <h4 class="mb-4">{{ $t('pages.dashboard.charttitle') }}</h4>
            <div id="stackedbars" :style="{width: '100%', height: '330px'}"></div>
          </div>
        </div>
      </div>

        <div class="col-lg-4">
            <!-- Progress Small -->
            <div class="card">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Campaign Goal Progress</h6>
            </div>
            <div class="card-body">
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


    </div>
    
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Home',
  mounted(){
    this.drawLine();
  },

  data: () => ({
    options: ['BOOKINGS TODAY', 'UPCOMING BOOKINGS', 'MESSAGES'],
    dashboard:{
      today:12,
      upcoming:53,
      messages:1,
      members:64
    }
  }),

  methods: {
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
          data: ['Revenue', 'Members', 'Signup', 'Traffic', '百度', '谷歌', '必应', '其他']
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
            name: 'Members',
            type: 'bar',
            color:colorPalette[1],
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
            /*
          {
            name: '联盟广告',
            type: 'bar',
            color:colorPalette[2],
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          */
          {
            name: '视频广告',
            type: 'bar',
            color:colorPalette[3],
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Traffic',
            type: 'bar',
            color:colorPalette[4],
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [
                [{type: 'min'}, {type: 'max'}]
              ]
            }
          },
          {
            name: '百度',
            type: 'bar',
            color:colorPalette[5],
            barWidth: 5,
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [62, 82, 91, 84, 109, 110, 120]
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
  }

}
</script>
