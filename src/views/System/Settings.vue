<template>
  <div class="row">
    <div class="col-md-12">
      <h1>System: Settings</h1>
      <span class="pull-left mb-3 float-left">
              <h4>Bookings</h4>
            </span>



      <router-link
          to="/bookings/new"
          tag='button'
          class="btn btn-primary btn-xs pull-right mb-3 float-right"
      >
        <i class="fas fa-plus-circle"></i> New Booking
      </router-link>

      <button class="btn btn-primary btn-xs pull-right mb-3 mx-3 float-right" type="button">
        <i class="fas fa-filter fa-sm"></i> Filter
      </button>

      <el-table
          :data="dataSource"
          style="width: 100%"
      >
        <el-table-column prop="id" label="#" width="100">
        </el-table-column>

        <el-table-column label="Customer" width="180">
          <template slot-scope="{ row }">
            <span style="margin-left: 10px">{{ row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label=" " width="150">
          <button class="btn btn-success btn-call btn-sm text-white" href="#">
            CALL <i class="fas fa-phone fa-xs"></i>
          </button>
        </el-table-column>

        <el-table-column prop="booking_start_date" label="Bookend on">
        </el-table-column>

        <el-table-column prop="booking_end_date" label="Date">
        </el-table-column>

        <el-table-column label="Actions" width='120'>
          <a class="text-success" href="#">
            <i class="far fa-clock"></i>
          </a>
          <a class="text-info px-1" href="#">
            <i class="fas fa-wrench"></i>
          </a>
          <a href="#" class="text-warning">
            <i class="far fa-edit"></i>
          </a>
        </el-table-column>

      </el-table>

    </div>
    <div class="col-md-9">

    </div>

  </div>
</template>

<script>

export default {
  name: 'settings',
  components: {
  },

  data: () => ({
    stateChanged: false,
  }),

  computed: {
  },

  watch: {
  },

  methods: {
  },

  created() {
  },

  mounted() {
  },

  beforeDestroy() {
  }

}
</script>

<style>

</style>