<template>
  <div>

    <!-- table -->
    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <div class="card mb-4">
          <div class="card-body">
            <span class="pull-left mb-3 float-left">
              <h4>Bookings</h4>
            </span>

            <router-link
              to="/bookings/new"
              tag='button'
              class="btn btn-primary btn-sm pull-right mb-3 float-right"
            >
              <i class="fas fa-plus-circle"></i> New Booking
            </router-link>

            <button class="btn btn-primary btn-sm pull-right mb-3 mx-3 float-right" type="button">
              <i class="fas fa-filter fa-sm"></i> Filter
            </button>

            <!--
              <cu-table :data='dataSource'></cu-table>
            -->

            <div class="table-responsive">
            <el-table
              :data="dataSource"
              style="width: 100%"
              class="table table-striped table-borderless table-sm align-middle"
            >

                <!-- remove when small -->
                <el-table-column
                    sortable
                    prop="id"
                    label="#"
                    width="60px"
                    class-name="d-none d-lg-table-cell"
                    align="center">
                </el-table-column>

                <el-table-column sortable label="Customer">
                  <template slot-scope="{ row }">
                      <span style="margin-left: 10px">{{ row.name }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="Contact" width="" class-name="">
                  <button class="btn btn-success btn-call btn-xs text-white" @click="contactCustomer()">
                    <i class="fas fa-phone fa-xs"></i> <span class="hide-on-mobile ml-1">Contact</span>
                  </button>
                </el-table-column>

              <!-- remove when small -->
              <el-table-column
                  sortable
                  label="type"
                  prop="membertype"
                  class-name="d-none d-md-table-cell"
                  align="center">
              </el-table-column>

              <!-- remove when small -->
              <el-table-column
                  sortable
                  prop="bookedon"
                  label="Bookend on"
                  class-name="d-none d-lg-table-cell"
                  align="center">
              </el-table-column>

              <!-- remove when small -->
              <el-table-column prop="bookedfor" label="Bookend for" width="">
              </el-table-column>

              <el-table-column label="Actions" width="">
                <button class="btn btn-sm btn-info text-white mx-1" @click="changeBooking(1)">
                  <i class="far fa-edit"></i> <span class="hide-on-mobile">Change Booking</span>
                </button>
                <button class="btn btn-sm btn-danger text-white mx-1" @click="cancelBooking(1)">
                  <i class="fas fa-trash-alt"></i> <span class="hide-on-mobile">Cancel Booking</span>
                </button>
              </el-table-column>

            </el-table>

            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <el-calendar v-model="calendarValue"/>
      </div>
    </div>


  </div>
</template>

<script>
// import cuTable from '@/components/tables/bookings';


import Seedr from "../../plugins/Seedr";
import moment from "moment";

export default {
  name: "bookings",
  data: () => ({
    calendarValue: new Date(),
    dataSource:[],
    paging: {
      page: 1,
      page_size: 20
    }
  }),

  computed: {
  },

  methods: {
    /*
    tableRowClassName({rowIndex}) {
        if (rowIndex%4 === 2) {
            return 'warning-row';
        } else if (rowIndex%4 === 0) {
            return 'success-row';
        }
        return '';
    },
    */
    contactCustomer(){
      console.log('change to h5 link to call customer directly');
    },
    changeBooking(id){
      console.log('Change booking with ID:' +id);
    },
    cancelBooking(id){
      console.log('Cancel booking with ID:' +id);
    }


  },

  created () {
    this.$store.dispatch('getBookingsData', this.paging);

    // var format = 'Y-m-D hh:mm';
    var format = 'Y-mm-DD';
    // loop to generate
    for(let i=0; i<Seedr.range(3,10); i++) {
      let d = Seedr.dateTime( new Date(2020, 0, 1), new Date() )
      let e = Seedr.dateTime( new Date(2021, 0, 1), new Date() )
      this.dataSource.push({
        id: i + 1,
        name: Seedr.fullname(),
        bookedon: moment(d).format(format),
        bookedfor:  moment(e).format(format),
        membertype: Seedr.range(1,5)
      })
    }
    console.log(this.dataSource);

  }
};
</script>

<style>
.btn-group-xs>.btn, .btn-xs {
  padding: .15rem .3rem;
  font-size: .75rem;
  line-height: 1.2;
  border-radius: .1rem;
}
@media only screen and (max-width: 500px) and (min-width: 200px)  {
  .hide-on-mobile{
    display:none;
  }
}
</style>
