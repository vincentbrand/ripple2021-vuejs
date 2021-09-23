<template>
  <div class="row">
    <div class="col-md-12">
      <div class="mb-4">
        <span class="pull-left mb-3 float-left">
          <h4>{{ $t('pages.logs.'+page.title) }}</h4>
        </span>
        <button class="btn btn-primary btn-xs pull-right mb-3 mx-3 float-right" type="button">
          <i class="fas fa-filter fa-sm"></i> Filter
        </button>
        <el-table
            :data="dataSource"
            style="width: 100%"
        >
          <el-table-column prop="date" :label="$t('pages.logs.date')">
          </el-table-column>
          <el-table-column :label="$t('pages.logs.client')" width="180">
            <template slot-scope="{ row }">
              <span style="margin-left: 10px">{{ row.client }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="user" :label="$t('pages.logs.user')">
          </el-table-column>
          <el-table-column prop="url" :label="$t('pages.logs.url')">
          </el-table-column>
          <el-table-column prop="action" :label="$t('pages.logs.action')">
          </el-table-column>
          <el-table-column prop="parameters" :label="$t('pages.logs.parameters')">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>

import moment from "moment";
import Seedr from "../../plugins/Seedr";

export default {
  name: 'settings',
  components: {
  },

  data: () => ({
    dataSource: [],
    page:{
      title:'systemlog'
    }
  }),

  computed: {
  },

  watch: {
  },

  methods: {
  },

  created() {
    const format = 'Y-m-D hh:mm';
    for(let i=0; i<20; i++) {
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
  },

  mounted() {
  },

  beforeDestroy() {
  }

}
</script>

<style>

</style>