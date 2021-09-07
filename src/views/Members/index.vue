<template>
  <div>
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
              <div class="col-3">
                Some Range filters here for dates
              </div>
              <div class="col-3">
                range filters here for points/wallet

                <!-- display switcher -->
                <div class="pull-right float-right">
                  <button class="btn btn-primary" @click="() => isCard = !isCard">
                    <i class="fas fa-th-large fa-sm"></i>
                  </button>
                </div>
                <!-- END OF: display switcher -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <cu-card :data='dataSource' v-if="isCard"></cu-card>

    <cu-table :data='dataSource' v-else></cu-table>
    

  </div>
</template>

<script>
import cuTable from '@/components/members/table';
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
