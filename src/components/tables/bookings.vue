<template>
  <div class="row">

    <!--
    <div class="col-xl-12 col-lg-12">
      <div class="mb-4">
        <div class="card-body">

          <el-table
            :data="data"
            style="width: 100%"
          >
            <el-table-column prop="id" label="#" width="50">
            </el-table-column>
            <el-table-column label="" width="60">
              <template slot-scope="{ row }">
                <img :src="row.img" alt="" class="avatar" />
              </template>
            </el-table-column>

            <el-table-column prop="name" label="name" width="150">
            </el-table-column>

            <el-table-column prop="bookedon" label="Booked on">
            </el-table-column>

            <el-table-column prop="date" label="date">
            </el-table-column>

            <el-table-column prop="membertype" label="membertype"> </el-table-column>

            <el-table-column prop="wallet" label="Wallet"> </el-table-column>

            <el-table-column label="">
              <router-link to="/members" class="btn btn-sm btn-warning text-white mx-1">
                <i class="far fa-edit"></i> Change Booking
              </router-link>
              <a to="" class="btn btn-sm btn-danger text-white mx-1" @click="">
                <i class="fas fa-trash-alt"></i> Cancel Booking
              </a>
            </el-table-column>
          </el-table>

        </div>
      </div>
    </div>
    -->
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

  created(){
    console.log('Bookings Table Created called')
  }
};
</script>
