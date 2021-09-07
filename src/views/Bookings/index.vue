<template>
  <div>
    <!-- header -->
    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Filter by ID or Name"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-filter fa-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-6">
                Some Range filters here for dates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- table -->
    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-body">
            <span class="pull-left mb-3 float-left">
              <h4>Bookings</h4>
            </span>

            <router-link
              to="/"
              tag='button'
              class="btn btn-primary btn-xs pull-right mb-3 float-right"
            >
              <i class="fas fa-plus-circle"></i> New Booking
            </router-link>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookings",
  data: () => ({
    /*
    dataSource: [
      { 
        id: 1,
        date: "2020-09-13",
        booked: "2020-09-10",
        name: "Karen",
        address: "上海市普陀区金沙江路 1518 弄",
        phone: "123123123123"
      },
      { 
        id: 2,
        date: "2020-09-13",
        booked: "2020-09-10",
        name: "Leon",
        address: "上海市普陀区金沙江路 1518 弄",
        phone: "123123123123"
      },
      { 
        id: 3,
        date: "2020-09-13",
        booked: "2020-09-10",
        name: "Hugo",
        address: "上海市普陀区金沙江路 1518 弄",
        phone: "123123123123"
      },
      { 
        id: 4,
        date: "2020-09-13",
        booked: "2020-09-10",
        name: "Vince",
        address: "上海市普陀区金沙江路 1518 弄",
        phone: "123123123123"
      },
      { 
        id: 5,
        date: "2020-09-13",
        booked: "2020-09-10",
        name: "Vince",
        address: "上海市普陀区金沙江路 1518 弄",
        phone: "123123123123"
      },
    ],
    */
    paging: {
      page: 1,
      page_size: 20
    }
  }),

  computed: {
    dataSource () {
      return this.$store.state.BookingsModule.ListData
    }
  },

  methods: {
    tableRowClassName({rowIndex}) {
        if (rowIndex%4 === 2) {
            return 'warning-row';
        } else if (rowIndex%4 === 0) {
            return 'success-row';
        }
        return '';
    }
  },

  created () {
    this.$store.dispatch('getBookingsData', this.paging);
  }
};
</script>
