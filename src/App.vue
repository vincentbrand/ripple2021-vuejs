<template>
<div class="app">

  <div v-if='releaseRouter.includes($route.path)'>
    <router-view/>
  </div>

  <div id="wrapper" v-else>
    <!-- Sidebar -->
    <cu-sidebar />
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <cu-navbar />
        <div class="container-fluid">
          <router-view/>
        </div>
      </div>
    </div>
  </div>

  <div v-if='!releaseRouter.includes($route.path)'>
    <cu-footer />
    <a class="scroll-to-top rounded" href="#page-top" style="display: inline;">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>

</div>
</template>
<script>
import cuNavbar from '@/components/app/navbar'
import cuSidebar from '@/components/app/sidebar'
import cuFooter from '@/components/app/footer'

export default {

  components: {
    "cu-navbar":cuNavbar,
    "cu-sidebar":cuSidebar,
    "cu-footer":cuFooter
  },

  data: () => ({
    releaseRouter: ['/notfound', '/login', '/forgot'],
    isRelease: false
  }),

  created () {
    const lang = this.$cookie.get('lang') ? this.$cookie.get('lang'): 'en'
    this.$i18n.locale = lang
  },

}
</script>
<style lang="less">
.text-ripple{
  color: #d11083;
}

.btn-primary {
  color: #fff;
  background-color: #d11083 !important;
  border-color: #d11083 !important;
}
.sidebar-heading{
  padding: .5rem .5rem 0!important;
  span{
   color: #999;
   font-weight: 800;
 }
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table .danger-row {
  background: #d11083;
}
</style>

