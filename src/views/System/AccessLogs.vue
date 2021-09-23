<template>
  <div class="row" v-if="clientid">
    <div class="col-md-12">
      <div class="mb-4">
        <span class="pull-left mb-3 float-left">
          <h4>{{ $t('pages.logs.'+page.title) }}</h4>
        </span>
        <!--
        <button class="btn btn-primary btn-sm pull-right mb-3 mx-3 float-right" type="button">
          <i class="fas fa-filter fa-sm"></i> Filter
        </button>
        -->
        <el-table
            :data="dataSource"
            style="width: 100%"
        >
          <el-table-column prop="date" :label="$t('pages.logs.date')">
          </el-table-column>
          <el-table-column prop="time" :label="$t('pages.logs.time')">
          </el-table-column>
          <el-table-column :label="$t('pages.logs.client')" width="180">
            <template slot-scope="{ row }">
              <span style="font-weight:bold;">{{ row.client }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="user" :label="$t('pages.logs.user')">
          </el-table-column>
          <el-table-column prop="os" :label="$t('pages.logs.os')">
          </el-table-column>
          <el-table-column prop="ip" :label="$t('pages.logs.ip')">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

  <!-- page error -->
  <div class="row" v-else>
    <div class="col-md-12">
      <PageIssue
          title="Error Retrieving Data"
          text="The request is invalid please double check your request or contact support">
      </PageIssue>
    </div>
  </div>

</template>

<script>

import moment from "moment";
import Seedr from "../../plugins/Seedr";

import PageIssue from "@/components/common/PageIssue.vue";

export default {
  name: 'accesslogs',
  components: {
    PageIssue
  },

  data: () => ({
    clientid: false,
    dataSource: [],
    page:{
      title:'accesslog'
    }
  }),

  computed: {
  },

  watch: {
  },

  methods: {
  },

  created() {
    for(let i=0; i<20; i++) {
      this.dataSource.push({
        id: i + 1,
        client: 'Company X',
        user: 'David',
        url: Seedr.word(1).toLowerCase()+'/'+Seedr.word(1).toLowerCase()+'/',
        ip: Seedr.ip(),
        os: Seedr.word(1).toLowerCase()+'-'+Seedr.word(1).toLowerCase()+'.v'+Seedr.int(10),
        date: moment(Seedr.dateTime(new Date(2012, 0, 1), new Date())).format('Y-m-D'),
        time: moment(Seedr.dateTime(new Date(2012, 0, 1), new Date())).format('hh:mm'),
      })
    }
  },

  mounted() {
    this.clientid=this.$route.params.id;
    console.log(this.clientid);
  },

  beforeDestroy() {
  }

}
</script>

<style>

</style>