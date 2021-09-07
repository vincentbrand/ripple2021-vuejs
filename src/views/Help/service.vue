<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" v-for="r in routerService" :key="r.path">
          <router-link
            :class="
              $route.path.includes(r.path) ? 'nav-link active' : 'nav-link'
            "
            :to='r.path'
          >
            {{ r.text }}
          </router-link>
        </li>
      </ul>

        <div class="tab-content" id="pills-tabContent">
            <router-view />
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    routerService: [
      {
        path: "/help/service/pages",
        text: "Pages",
      },
      {
        path: "/help/service/boot",
        text: "Boot Sequence",
      },
      {
        path: "/help/service/styling",
        text: "Styling",
      },
      {
        path: "/help/service/settings",
        text: "Settings",
      },
      {
        path: "/help/service/payments",
        text: "Payments",
      },
      {
        path: "/help/service/notifications",
        text: "Notifications",
      },
      {
        path: "/help/service/reports",
        text: "Reports",
      },
    ],
  }),
};
</script>
<style>								
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: #d11083;
}
a{
    color: #858796;

}
a:hover{
    color: #d11083;
}

</style>