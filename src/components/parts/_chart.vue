<template>
<div>
    
    <div class="row">
        <div class="col-lg-12">
            <div class="card shadow mb-4">

                <!-- <a href="#line" class="d-block card-header py-3 collapsed" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                  <h6 class="m-0 font-weight-bold text-danger">Line</h6>
                </a> -->

                <div class="card-body">
                    
                    <div id="line" :style="{width: '100%', height: '600px'}"></div>

                </div>
            </div>
        </div>

        <div class="col-lg-12">
            <div class="card shadow mb-4">
                <div class="card-body">


                    <div id="pie1" :style="{width: '100%', height: '600px'}"></div>

                </div>
            </div>
        </div>


        <div class="col-lg-12">
            <div class="card shadow mb-4">
                <div class="card-body">
                    
                    <div id="bar" :style="{width: '100%', height: '600px'}"></div>

                </div>
            </div>
        </div>

    </div>
   
</div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'statistics',
  data () {
      return {
      }
  },
  components: {
  },
  mounted(){
    this.drawLine()  
  },
  methods: {
    
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let lineChart = echarts.init(document.getElementById('line'))
        let barChart = echarts.init(document.getElementById('bar'))
        let pieChart1 = echarts.init(document.getElementById('pie1'))
        const barOption = {
            title: {
                text: 'Bars',
                left: 'left'
            },
            color:['#28a745', '#17a2b8', '#dc3545'],
            legend: {
            },
            tooltip: {},
            axisLabel:{
                show:true,
                rotate:45,
            },
            dataset: {
                source: [
                    ['product', 'A', 'B', 'C'],
                    ['1', 43.3, 85.8, 93.7],
                    ['2', 83.1, 73.4, 55.1],
                    ['3', 86.4, 65.2, 82.5],
                    ['4', 72.4, 53.9, 39.1],
                    ['5', 80, 63.8, 50.9],
                    ['6', 86.4, 65.2, 82.5],
                    ['7', 72.4, 53.9, 39.1],
                    ['8', 80, 63.8, 50.9],
                ],
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    interval:0,
                    rotate:45
                }
            },
            yAxis: {},
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        }
        const pieOption = {
           tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
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
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }
            ] 
        }
        const lineOption = {
            color: ['#28a745', '#17a2b8', '#dc3545'],
            title: {
                text: 'Line'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['1', '2', '3',]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                // containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                // boundaryGap: false,   // 是否紧贴y轴
                data: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Users Growth',
                    type: 'line',
                    data: [1,3,6,4,56,2,5],
                    // smooth: true  // 是否为圆滑曲线
                },
                {
                    name: 'Reviews Posted',
                    type: 'line',
                    data: [10,30,4,67,34,63,85],
                    // smooth: true
                },
                {
                    name: 'Checkins Daily',
                    type: 'line',
                    data: [0, 10, 20, 10, 6, 80, 23, 65],
                    // smooth: true
                }
            ]
        };

        // 绘制图表
        lineChart.setOption(lineOption)
        // 
        barChart.setOption(barOption)
        pieChart1.setOption(pieOption)
    }
  }
}


</script>
<style scoped lang="less">

</style>
