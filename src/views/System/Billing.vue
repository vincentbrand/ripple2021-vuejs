<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-4">
        <div class="card-body">
          <div class="titleDiv">
            <h4>{{ $t('pages.billing.last10') }}</h4>
          </div>
          <el-table
              :data="lastBilling"
              style="width: 100%"
          >
            <el-table-column prop="date" :label="$t('pages.billing.date')">
            </el-table-column>
            <el-table-column prop="purchased" :label="$t('pages.billing.purchased')">
            </el-table-column>
            <el-table-column prop="amount" :label="$t('pages.billing.amount')">
            </el-table-column>
            <el-table-column prop="status" :label="$t('pages.billing.status')" width="80px">
            </el-table-column>
          </el-table>

        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-4">
        <div class="card-body">
          <h4>{{ $t('pages.billing.charttitle') }}</h4>
          <div id="billingChart" :style="{width: '100%', height: '310px'}"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">

      <div class="mb-4 card">
        <div class="card-body">
          <span class="pull-left mb-3 float-left">
            <h4>{{ $t('pages.billing.allbillings') }}</h4>
          </span>
          <button class="btn btn-primary btn-xs pull-right mb-3 mx-3 float-right" type="button">
            <i class="fas fa-filter fa-sm"></i> {{ $t('common.filter') }}
          </button>
          <el-table
              :data="dataSource"
              style="width: 100%"
          >
            <el-table-column :label="$t('pages.billing.client')" width="180">
              <template slot-scope="{ row }">
                <span style="margin-left: 10px">{{ row.client }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="user" :label="$t('pages.billing.user')">
            </el-table-column>
            <el-table-column prop="date" :label="$t('pages.billing.date')">
            </el-table-column>
            <el-table-column prop="purchased" :label="$t('pages.billing.purchased')">
            </el-table-column>
            <el-table-column prop="amount" :label="$t('pages.billing.amount')">
            </el-table-column>
            <el-table-column prop="status" :label="$t('pages.billing.status')">
            </el-table-column>
          </el-table>
        </div>

        <!-- pagination -->
        <div class="ml-4">
          <ul class="pagination pagination-primary m-b-0">
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">{{ $t('common.previous') }}</a></li>
            <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">{{ $t('common.next') }}</a></li>
          </ul>
        </div>
        <!-- end of pagination -->

      </div>
    </div>
  </div>
</template>



<script>
import Seedr from "../../plugins/Seedr";
import ChartPreprocessor from "@/plugins/ChartPreprocessor";
import moment from "moment";
import echarts from 'echarts'

export default {
  name: 'billing',
  components: {
  },

  data: () => ({
    dataSource: [],
    lastBilling: [],
    chartsettings:{
      maxMembers:0,
      intervalMembers:0,
      maxRevenue:0,
      intervalRevenue:0,
    }

  }),

  computed: {
  },

  watch: {
  },

  methods: {
    makeChart(){
      // color pallete
      // dark pink, light pink, grey, blue grey, green
      var colorPalette = ['#d11083', '#EFBCD5','#2E294E', '#4B5267','#339989']
      // line chart
      let mixLineBar = echarts.init(document.getElementById('billingChart'))
      const lineBarData = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: false, readOnly: false},
            magicType: {show: false, type: ['line', 'bar']},
            restore: {show: false},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['Signups', 'Members', 'Revenue']
        },
        xAxis: [
          {
            type: 'category',
            data: ['January', 'February', 'March', 'April', 'May', 'June'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Revenue (K)',
            min: 0,
            max: this.chartsettings.revenue.topChart,
            interval: this.chartsettings.revenue.stepAmount,
            axisLabel: {
              // formatter: '{value} ml'
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: 'Members',
            min: 0,
            max: this.chartsettings.members.topChart,
            interval: this.chartsettings.members.stepAmount,
            axisLabel: {
              // formatter: '{value} °C'
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: 'Members',
            type: 'bar',
            color: colorPalette[0],
            data: [100, 130, 170, 200, 240, 360]
          },
          {
            name: 'Signups',
            type: 'bar',
            color: colorPalette[1],
            data: [70, 40, 150, 140, 160, 156]
          },
          {
            name: 'Revenue',
            type: 'line',
            color: colorPalette[4],
            yAxisIndex: 1,
            data: [210, 258, 300, 360, 350, 140, 200, 240, 320, 435, 500, 384]
          }
        ]
      };
      mixLineBar.setOption(lineBarData)
    }
  },

  created() {
    const format = 'Y-M-D  hh:mm';

    // CAN BE REMOVED -------------------
    for(let i=0; i<20; i++) {
      this.dataSource.push({
        id: i + 1,
        client: Seedr.word(),
        user: Seedr.firstname(),
        purchased: Seedr.word(1).toLowerCase()+'/'+Seedr.word(1).toLowerCase()+'/',
        amount: Seedr.int(500),
        status: Seedr.int(3),
        date: moment(Seedr.dateTime(new Date(2019, 0, 1), new Date())).format(format),
      })
    }
    // CAN BE REMOVED -------------------

    // CAN BE REMOVED -------------------
    for(let i=0; i<5; i++) {
      this.lastBilling.push({
        id: i + 1,
        client: Seedr.word(),
        user: Seedr.firstname(),
        purchased: Seedr.word(1).toLowerCase(),
        amount: Seedr.int(500),
        status: Seedr.int(3),
        date: moment(Seedr.dateTime(new Date(2019, 0, 1), new Date())).format(format),
      })
    }
    // CAN BE REMOVED -------------------

  },

  mounted() {
    // calculate numbers for graph
    this.chartsettings.revenue = ChartPreprocessor.getChartSettingsObject(2300);
    this.chartsettings.members = ChartPreprocessor.getChartSettingsObject(400);
    // generate chart
    this.makeChart()
  },


  beforeDestroy() {
  }

}
</script>

<style>

</style>