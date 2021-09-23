<template>
  <div class="">
    <cu-table :data='dataSource'></cu-table>
  </div>
</template>

<script>
import cuTable from '@/components/tables/invoices';
import Seedr from "../../plugins/Seedr";


import moment from "moment";

export default {
  name: 'Invoices',
  components: {
    'cu-table': cuTable
  },

  data: () => ({
    dataSource: [],
    isCard: false
  }),


  created () {
    // var format = 'Y-m-D hh:mm';
    var format = 'Y-mm-DD';

    console.log( Seedr.dateTime( new Date(2012, 0, 1), new Date() ) );

    for(let i=0; i<Seedr.int(20); i++) {
      let d = Seedr.dateTime( new Date(2012, 0, 1), new Date() )
      this.dataSource.push({
        id: i + 1,
        reference: Seedr.id(12),
        dateTime: moment(d).format(format),
        status: 'paid',
        amount: i * 5 + 2,
      })
    }
  }
}
</script>
