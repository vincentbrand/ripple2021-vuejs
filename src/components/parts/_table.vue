<template>

    <div class="row">

      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-body">

            <button href="#" class="btn btn-primary btn-xs pull-right mb-3 float-right">
              <i class="fas fa-plus-circle"></i> New
            </button>

            <b-table striped hover :busy="loading" :items="tableData" :fields="fields">
              <!-- 加载 -->
              <template v-slot:table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>{{$t('common.loading')}}...</strong>
                </div>
              </template>
              <!-- action -->
              <template v-slot:cell(action)="data">
                <span class="btn btn-danger btn-xs" @click="remove(data.item)">
                  <i class="fas fa-trash-alt"></i>
                </span>
              </template>

            </b-table>

            <div class="overflow-auto">
              <b-pagination-nav :number-of-pages="totalPage"  align='center'></b-pagination-nav>
            </div>

          </div>
        </div>
      </div>
            
    </div>

</template>

<script>

export default {
  name: 'dataTable',
  components: {
  },
  data () {
    return {
      tableData: [],
      loading: false,
      fields: [
        {
          label: 'ID',
          key: 'id',
          sortable: true
        },
        {
          label: 'Task name',
          key: 'name'
        },
        'create_at',
        'content',
        {
          label: 'Action',
          key: 'action'
        }
      ],
      totalPage: 20,
    }
  },
  methods: {
    remove (row) {
      this.$bvModal.msgBoxConfirm(this.$t('common.deleteHint'), {
        title: this.$t('common.warning'),
        okVariant: 'danger',
        okTitle: this.$t('common.ok'),
        cancelTitle: this.$t('common.cancel'),
      }).then(value => {

        if (value) {
          this.tableData.forEach((el,index) => {
            if (el.id !== row.id) return;
            this.tableData.splice(index,1)
          })
        }

      })
    },
    pageChange (e) {
      console.log(e)
    },
    
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000)
    for (let i=0;i<10;i++) {
      this.tableData.push({
        id: i,
        name: 'task' + i,
        create_at: '2020-5-' + (15+i),
        content: 'Get the job done quickly'
      })
    }
  }
}
</script>
