<template>
  <div>

    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <div class="card mb-4">
          <div class="card-body">

            <div class="row">
              <div class="col-6">
                <span class="pull-left mb-3 float-left">
                  <h4>Members</h4>
                </span>

              </div>
              <div class="col-6">

                <!-- new customer -->
                <router-link
                    to=""
                    tag="button"
                    class="btn btn-primary btn-sm pull-right mb-3 mx-2 float-right"
                >
                  <i class="fas fa-plus-circle"></i> <span class="hide-on-mobile">New Customer</span>
                </router-link>
                <!-- END OF: new customer -->

                <!-- import members -->
                <div class="float-right">
                  <button class="btn btn-info btn-sm " @click="filterPopup">
                    <i class="fas fa-upload fa-sm"></i> <span class="hide-on-mobile">Import</span>
                  </button>
                </div>
                <!-- END OF: import members -->

                <!-- display switcher -->
                <div class="float-right">
                  <button class="btn btn-warning btn-sm mx-2" @click="() => isCard = !isCard">
                    <i class="fas fa-th-large fa-sm" v-if="!isCard"></i>
                    <i class="fas fa-list fa-sm" v-else></i>
                    <span class="ml-1 hide-on-mobile">view</span>
                  </button>
                </div>
                <!-- END OF: display switcher -->

                <!-- display switcher -->
                <div class="float-right">
                  <button class="btn btn-primary btn-sm " @click="filterPopup">
                    <i class="fas fa-filter fa-sm"></i> <span class="hide-on-mobile">filter</span>
                  </button>
                </div>
                <!-- END OF: display switcher -->

              </div>
            </div>



            <cu-card :data='dataSource' v-if="isCard"></cu-card>
            <cu-table :data='dataSource' v-else></cu-table>
          </div>

          <!-- pagination -->
          <div class="ml-4">
            <ul class="pagination pagination-primary m-b-0">
              <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">{{ $t('common.previous') }}</a></li>
              <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">{{ $t('common.next') }}</a></li>
            </ul>
          </div>
          <!-- end of pagination -->
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import cuTable from '@/components/tables/members';
import cuCard from '@/components/members/card';
import Seedr from "@/plugins/Seedr";
import moment from "moment";

export default {
    name: 'Customers',
    components: {
       'cu-table': cuTable,
       'cu-card': cuCard,
    },

    data: () => ({
        dataSource: [],
        isCard: false
    }),
    methods:{
      filterPopup(){
        console.log('filterPopup');
      }
    },

    created () {
        var format = 'Y-M-D';
        for(let i=0; i<10; i++) {
          let d = Seedr.dateTime( new Date(2020, 0, 1), new Date() )
          let e = Seedr.dateTime( new Date(2021, 0, 1), new Date() )
            this.dataSource.push({
              id: i + 1,
              name: Seedr.fullname(),
              last: moment(d).format(format),
              member: moment(e).format(format),
              points: Seedr.range(100,5000),
              wallet: Seedr.range(1,6000),
              img: 'https://source.unsplash.com/random/50x50'
            })
        }
    }
}

</script>
