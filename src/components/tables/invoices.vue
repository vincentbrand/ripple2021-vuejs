<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12">

          <span class="pull-left mb-3 float-left">
            <h4>{{ $t('pages.invoices.title') }}</h4>
          </span>

          <router-link
            to=""
            tag="button"
            class="btn btn-primary btn-xs pull-right mb-3 float-right"
          >
            <i class="fas fa-filter"></i> {{ $t('common.filter') }}
          </router-link>

          <!-- :row-class-name="tableRowClassName" -->
          <el-table
            :data="data"
            style="width: 100%"
          >

            <!-- <el-table-column prop="id" label="ID" width="100"> </el-table-column> -->

            <el-table-column prop="reference" :label="$t('pages.invoices.table.reference')"></el-table-column>

            <el-table-column prop="dateTime" :label="$t('pages.invoices.table.date')"></el-table-column>

            <el-table-column prop="amount" :label="$t('pages.invoices.table.amount')"></el-table-column>

            <el-table-column prop="status" :label="$t('pages.invoices.table.status')"></el-table-column>

            <el-table-column label="" width="120">
              <router-link to="/" class="text-white btn btn-sm btn-info">
                <i class="fas fa-search"></i>
              </router-link>
              <router-link to="/" class="text-white btn btn-sm mx-2 btn-primary">
                <i class="fas fa-download"></i>
              </router-link>
            </el-table-column>
          </el-table>




    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],

  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 4 === 2) {
        return "warning-row";
      } else if (rowIndex % 4 === 0) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>
