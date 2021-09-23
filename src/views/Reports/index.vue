<template>
<div class="row">
  <div class="col-12 mb-3">
    <h4>Reporting</h4>
  </div>
  <div class="col-12 mb-3">
    <div class="card">
      <div class="card-body">
        <h6>Filter</h6>
        <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :picker-options="pickerOptions">
        </el-date-picker>
      </div>
    </div>
  </div>
  <div class="col-12 mb-3">
    <div class="card">
      <div class="card-body">
        <div id="stackedbars" :style="{width: '100%', height: '380px'}"></div>
      </div>
    </div>
  </div>
  <div class="col-12 mb-3">
    <div class="card">
      <div class="card-body">
        <div id="piechart" :style="{width: '100%', height: '400px'}"></div>
      </div>
    </div>
  </div>
  <div class="col-12 mb-3">
    <div class="card">
      <div class="card-body">
        <div id="sunburstchart" :style="{width: '100%', height: '330px'}"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import echarts from "echarts";


export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last month',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last 3 months',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: '',
      value2: '',

    };
  },
  methods:{
    drawLine(){
      // dark pink, light pink, grey, blue grey, green
      var colorPalette = ['#d11083', '#EFBCD5','#2E294E', '#4B5267','#339989']
      // stacked bars
      let chart1 = echarts.init(document.getElementById('stackedbars'))
      let chart2 = echarts.init(document.getElementById('piechart'))
      // let chart3 = echarts.init(document.getElementById('sunburstchart'))

      // create stacked bars data
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
      const pieChartData = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            // data: ['paid', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            data: ['Male', 'Female', 'Unknown', 'Members', 'Non-Members']
          },
          series: [
            {
              name: 'Details',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],
              label: {
                position: 'inner',
                fontSize: 14,
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 1548, name: 'Male'},
                {value: 775, name: 'Female'},
                {value: 679, name: 'Unknown'}
              ]
            },
            {
              name: 'Details',
              type: 'pie',
              radius: ['45%', '60%'],
              labelLine: {
                length: 30,
              },
              label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                  a: {
                    color: '#6E7079',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#8C8D8E',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: '#4C5058',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 33
                  },
                  per: {
                    color: '#fff',
                    backgroundColor: '#4C5058',
                    padding: [3, 4],
                    borderRadius: 4
                  }
                }
              },
              data: [
                {value: 1048, name: 'Members'},
                {value: 335, name: 'Non-Members'},
                {value: 310, name: 'Unknown'}
              ]

            }
          ]
      };

      /*
      const sunburstData = [{
          name: 'Grandpa',
          children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
              name: 'Cousin Jack',
              value: 2
            }, {
              name: 'Cousin Mary',
              value: 5,
              children: [{
                name: 'Jackson',
                value: 2
              }]
            }, {
              name: 'Cousin Ben',
              value: 4
            }]
          }, {
            name: 'Father',
            value: 10,
            children: [{
              name: 'Me',
              value: 5
            }, {
              name: 'Brother Peter',
              value: 1
            }]
          }]
        },{
          name: 'Nancy',
          children: [{
            name: 'Uncle Nike',
            children: [{
              name: 'Cousin Betty',
              value: 1
            }, {
              name: 'Cousin Jenny',
              value: 2
            }]
          }]
        }];

      const sunburstChart = {
          series: {
            type: 'sunburst',
            // emphasis: {
            //     focus: 'ancestor'
            // },
            data: sunburstData,
            radius: [0, '90%'],
            label: {
              rotate: 'radial'
            }
          }
        }
      };
      */


      chart1.setOption(stackedBarsData);
      chart2.setOption(pieChartData);
      //chart3.setOption(sunburstChart);

    }
  },
  mounted() {
    this.drawLine();
  },

};
</script>
