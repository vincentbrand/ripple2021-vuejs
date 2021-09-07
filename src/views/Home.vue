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
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                {{options[0]}}
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
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                {{options[1]}}
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {{dashboard.upcoming}}
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Pending Requests Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    {{options[2]}}
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
    </div>

    <div class="row">
        <div class="col-xl-4">
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

        <div class="col-lg-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">ECharts</h6>
                </div>
                <div class="card-body">
                    <div id="pie1" :style="{width: '100%', height: '330px'}"></div>
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
    options: ['BOOKINGS TODAY', 'UPCOMING BOOKINGS', 'MESSAGES']
  }),

  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let pieChart1 = echarts.init(document.getElementById('pie1'))
        const pieOption = {
           tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'top',
                left: 10,
                top: 0,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                        fontWeight: 'bold'
                    }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'}
                    ]
                }
            ] 
        }
        pieChart1.setOption(pieOption)
    }
  },

  computed: {
    dashboard () {
        return this.$store.state.HomeModule.dashboard
    }
  },

  created () {
    this.$store.dispatch("getHomeCardData")
  }

}
</script>
