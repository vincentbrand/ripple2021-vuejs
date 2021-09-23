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

    <li
        :class="item.path ? 'nav-item' : 'sidebar-heading'"
        v-for="(item,index) in menu"
        :key="index"
    >


      <!--
      <div v-if="item.children">
        <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            :data-target="'#item_index' + index"
            aria-expanded="true"
            :aria-controls="'index_item' + index"
        >
          <i :class="'fas fa-fw ' + item.icon"></i>
          <span>{{ item.name }}</span>
        </a>

        <div
            :id="'item_index' + index"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link
                v-for="itemchild in children"
                :key="itemchild.name"
                class="collapse-item"
                :to="itemchild.path"
                v-if="itemchild.parent == item.id"
            >
              <i v-if="itemchild.icon" :class="'fas fa-fw ' + itemchild.icon"></i>
              {{ itemchild.name }}
            </router-link>
          </div>
        </div>
      </div>
      -->


      <div :class="item.path ? '' : 'sidebar-heading font-weight-bold'">
        <!-- menu heading -->
        <span v-if="!item.path">{{ $t('interface.sidemenu.'+item.name) }}</span>
        <!-- main menu item -->
        <router-link class="nav-link" :to="item.path" v-else>
          <i :class="'fas fa-fw ' + item.icon"></i>
          <span>{{ $t('interface.sidemenu.'+item.name) }}</span>
        </router-link>
      </div>

      <!--
      <div :class="r.path ? '' : 'sidebar-heading font-weight-bold'">
        <span v-if="!r.path">{{ rch.name }}</span>
        <router-link class="nav-link" :to="r.path" v-else>
          <i :class="'fas fa-fw ' + r.icon"></i>
          <span>{{ rch.name }}</span>
        </router-link>
      </div>
      -->

    </li>

    <!-- for each router --
    <li
      :class="item.path ? 'nav-item' : 'sidebar-heading'"
      v-for="(item, index) in menu"
      :key="item.name"
    >

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
          <span>{{ r.name }}</span>
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

      <div v-else :class="r.path ? '' : 'sidebar-heading font-weight-bold'">
        <span v-if="!r.path">{{ rch.name }}</span>
        <router-link class="nav-link" :to="r.path" v-else>
          <i :class="'fas fa-fw ' + r.icon"></i>
          <span>{{ rch.name }}</span>
        </router-link>
      </div>
    </li>
    -->

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


/*
*
*  ToDo:
*   add children to menu
*   add translations to the options
*   convert all logo elements to base64
*
* */

// import { allSidebarRouter } from "@/router/base";

export default {
  name: "Sidebar",
  data: () => ({
    menu: [
            {
              id: 1,
              path: '/',
              name: 'dashboard',
              icon: 'fa-home'
            },
            {
              id: 2,
              name: 'web_page'
            },
            {
              id: 3,
              path: '/webpage',
              name: 'web_page',
              icon: 'fa-globe-asia',
              children: true
            },
            {
              id: 2,
              name: 'mini_program'
            },
            {
              id: 3,
              path: '/emulator/splash',
              name: 'editor',
              icon: 'fa-mobile-alt',
              children: true
            },
            {
              id: 4,
              name: 'data'
            },
            {
              id: 5,
              path: '/bookings/overview',
              name: 'bookings',
              icon: 'fa-calendar-alt'
            },
            {
              id: 5,
              path: '/members',
              name: 'members',
              icon: 'fa-users'
            },
            {
              id: 6,
              path: '/reports',
              name: 'reports',
              icon: 'fa-file-alt'
            },
            {
              id: 7,
              name: 'configuration'
            },
            {
              id: 8,
              path: '/settings',
              name: 'settings',
              icon: 'fa-toolbox'
            },
            {
              id: 9,
              name: 'support',
            },
            {
              id: 10,
              path: '/support',
              name: 'support',
              icon: 'fa-help',
              children: true
            }

          ],
    children: [
      {
        parent: 10,
        path: '/support/services',
        name: 'dashboard',
        icon: 'fa-home'
      },
      {
        parent: 10,
        path: '/support/services',
        name: 'settings',
        icon: 'fa-toolbox'
      }
    ],
    status: true,
  }),
  methods: {

  },
  created() {
    console.log(this.menu);
  }
};
</script>
