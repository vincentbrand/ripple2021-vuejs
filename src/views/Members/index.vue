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

                <router-link
                    to=""
                    tag="button"
                    class="btn btn-primary btn-sm pull-right mb-3 float-right"
                >
                  <i class="fas fa-plus-circle"></i> New Customer
                </router-link>
                <!-- display switcher -->
                <div class="float-right">
                  <button class="btn btn-primary btn-sm mx-2" @click="() => isCard = !isCard">
                    <i class="fas fa-th-large fa-sm"></i>
                  </button>
                </div>
                <!-- END OF: display switcher -->
                <!-- display switcher -->
                <div class="float-right">
                  <button class="btn btn-primary btn-sm " @click="filterPopup">
                    <i class="fas fa-filter fa-sm"></i>
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
        for(let i=0; i<10; i++) {
            this.dataSource.push({
                id: i + 1,
                name: 'Leon' + (i + 1),
                last: '2020-09-' + (7 + i),
                member: '2020-09-' + (14 + i),
                points: i * 2 + 3,
                wallet: i * 5 + 2,
                img: 'https://source.unsplash.com/Mv9hjnEUHR4/30x30'
            })
        }
    }
}
</script>
