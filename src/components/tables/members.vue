<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12">
      <div class="mb-4">
        <div class="card-body">


          <!-- :row-class-name="tableRowClassName" -->
          <el-table
            ref="membersTable"
            :data="data"
            style="width: 100%"
            lazy="true"
            fit="true"
            stripe
          >
            <el-table-column label=" " width="">
              <template slot-scope="{ row }">
                <img :src="row.img" alt="" class="avatar" />
              </template>
            </el-table-column>

            <!--
            <el-table-column prop="id" label="ID" width="100"> </el-table-column>
            -->

            <el-table-column prop="name" label="name" width="150">
            </el-table-column>

            <el-table-column prop="last" label="Last Reservation" class-name="hide-on-small">
              <!--
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
              -->
            </el-table-column>

            <el-table-column prop="member" label="Member Since" class-name="hide-on-small">
            </el-table-column>

            <el-table-column prop="points" label="Points" width="70px"> </el-table-column>

            <el-table-column prop="wallet" label="Wallet" width="80px"> </el-table-column>

            <el-table-column label="" class-name="actions">
              <template slot-scope="scope">
                <router-link to="/members" class="btn btn-sm btn-warning btn-table-action text-white mx-1">
                  <i class="far fa-edit"></i>  <span class="hide-on-mobile ml-1">Edit</span>
                </router-link>
                <a to="" class="btn btn-sm btn-danger btn-table-action text-white mx-1" @click="handleDelete(scope.$index, scope.row)">
                  <i class="fas fa-trash-alt"></i> <span class="hide-on-mobile ml-1">Remove</span>
                </a>
              </template>
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

    handleDelete(index, row){
      console.log('SOFT DELETE member: '+index +':'+row);
    },


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
<style>
@media only screen and (max-width: 500px) and (min-width: 200px)  {
  .hide-on-mobile{
    display:none;
  }
  td.actions{
    width:80px;
  }
  td.hide-on-small{
    display: hidden;
  }
}
@media only screen and (min-width: 501px)  {
  td.actions{
    width:25vw;
  }
  /*
  td.hide-on-small{
    display: none;
  }
  */
}
td.actions{
  margin:0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
}

.btn-table-action { flex: 1 0 20%; margin: 5px; }



</style>