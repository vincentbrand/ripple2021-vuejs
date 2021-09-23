<template>
  <div class="row">
    <div class="col-md-12">
      <div class="mb-4">
        <span class="pull-left mb-3 float-left">
          <h4>User: Log</h4>
        </span>
        <button class="btn btn-primary btn-xs pull-right mb-3 mx-3 float-right" type="button">
          <i class="fas fa-filter fa-sm"></i> Filter
        </button>
        <el-table
            :data="dataSource"
            style="width: 100%"
        >
          <el-table-column prop="date" label="Date">
          </el-table-column>
          <el-table-column prop="url" label="action">
          </el-table-column>
          <el-table-column prop="action" label="action">
          </el-table-column>
          <el-table-column prop="parameters" label="parameters">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>

import Seedr from "../../plugins/Seedr";
import moment from "moment";

export default {
  name: 'profile',
  components: {
  },

  data: () => ({
    dataSource: [],
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