<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12">
      <div class="card shadow mb-4">
        <div class="card-body">
          <span class="pull-left mb-3 float-left">
            <h4>Customers</h4>
          </span>

          <router-link
            to=""
            tag="button"
            class="btn btn-primary btn-xs pull-right mb-3 float-right"
          >
            <i class="fas fa-plus-circle"></i> New Customer
          </router-link>

          <!-- :row-class-name="tableRowClassName" -->
          <el-table
            :data="data"
            style="width: 100%"
          >
            <el-table-column label=" " width="100">
              <template slot-scope="{ row }">
                <img :src="row.img" alt="" class="avatar" />
              </template>
            </el-table-column>

            <el-table-column prop="id" label="ID" width="100"> </el-table-column>

            <el-table-column prop="name" label="name" width="150">
            </el-table-column>

            <el-table-column prop="last" label="Last Reservation">
            </el-table-column>

            <el-table-column prop="member" label="Member Since">
            </el-table-column>

            <el-table-column prop="points" label="Points"> </el-table-column>

            <el-table-column prop="wallet" label="Wallet"> </el-table-column>

            <el-table-column label="Actions" width="120">
              <router-link to="/" class="text-success">
                <i class="fas fa-plus"></i>
              </router-link>
              <router-link class="text-info" to="">
                <i class="fas fa-donate"></i>
              </router-link>
              <router-link to="" class="text-warning">
                <i class="far fa-edit"></i>
              </router-link>
            </el-table-column>
          </el-table>



        </div>
      </div>
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
