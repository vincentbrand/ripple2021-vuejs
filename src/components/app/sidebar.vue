<template>
  <!-- Sidebar
  'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
  'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
  -->
  <ul
    :class="
      status
        ? 'navbar-nav sidebar sidebar-dark accordion toggled'
        : 'navbar-nav sidebar sidebar-dark accordion'
    "
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <router-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      to="/"
    >
      <div class="sidebar-brand-icon">
        <img src="../../assets/img/frontpage-logo.png" class="ripple-logo" />
      </div>
      <div class="sidebar-brand-text mx-3">
        <img src="../../assets/img/full-logo.png" class="img-fluid" />
      </div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- for each router -->
    <li
      :class="r.path ? 'nav-item' : 'sidebar-heading'"
      v-for="(r, i) in rs"
      :key="r.name"
    >
      <!-- more subpath-->
      <div v-if="r.children">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          :data-target="'#item_index' + i"
          aria-expanded="true"
          :aria-controls="'index_item' + i"
        >
          <i :class="'fas fa-fw ' + r.icon"></i>
          <span>{{r.name}}</span>
        </a>

        <div
          :id="'item_index' + i"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link
              v-for="rch in r.children"
              :key="rch.name"
              class="collapse-item"
              :to="r.path + '/' + rch.path"
            >
              <i v-if="rch.icon" :class="'fas fa-fw ' + rch.icon"></i>
              {{ rch.name }}
            </router-link>
          </div>
        </div>
      </div>

      <!--  There is no subpath -->
      <div v-else :class="r.path ? '' : 'sidebar-heading font-weight-bold'">
        <span v-if="!r.path">{{ r.name }}</span>

        <router-link class="nav-link" :to="r.path" v-else>
          <i :class="'fas fa-fw ' + r.icon"></i>
          <span>{{ r.name }}</span>
        </router-link>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button
        @click="() => (status = !status)"
        class="rounded-circle border-0"
        id="sidebarToggle"
      ></button>
    </div>
  </ul>
</template>

<script>
import { allSidebarRouter } from "@/router/base";
export default {
  name: "Sidebar",
  data: () => ({
    rs: allSidebarRouter,
    status: false,
  }),
  methods: {},
};
</script>
