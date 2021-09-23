<template>
  <div class="home">

    <ul class="col-4-txt list-unstyled">

    <li
        v-for="(itemchild,index) in alllinks"
        :key="index"
    >
      <a :href="itemchild.url">
        {{ itemchild.title }}
      </a>
    </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'Links',
  data: () => ({
    alllinks:[
      {title:"login", url:"/login"},
      {title:"dashboard", url:"/dashboard"},
      {title:"booking", url:"/bookings/overview"},
      {title:"members", url:"/members"},
      {title:"member details", url:"/member/1"},
      {title:"reports", url:"/reports"}
    ]
  }),

  methods: {
  },

  computed: {
  },

  created () {
    console.log(this.alllinks);
  }

}
</script>
<style>
.col-4-txt{
  column-count: 4;
}
</style>
