<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">
					<!-- Sidebar Toggle (Topbar) -->
					<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
						<i class="fa fa-bars"></i>
					</button>
					<!-- Topbar Search --
					<form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
						<div class="input-group">
							<input type="text" class="form-control bg-light small" :placeholder="$t('interface.navbar.search')" aria-label="Search" aria-describedby="basic-addon2">
							<div class="input-group-append">
								<button class="btn btn-primary" type="button">
									<i class="fas fa-search fa-sm"></i>
								</button>
							</div>
						</div>
					</form>
					-->

					<!-- Topbar Navbar -->
					<ul class="navbar-nav ml-auto">

						<!-- Nav Item - Search Dropdown (Visible Only XS) -->
						<li class="nav-item dropdown no-arrow d-sm-none">
							<a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-search fa-fw"></i>
							</a>
							<!-- Dropdown - Messages -->
							<div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
								<form class="form-inline mr-auto w-100 navbar-search">
									<div class="input-group">
										<input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
										<div class="input-group-append">
											<button class="btn btn-primary" type="button">
												<i class="fas fa-search fa-sm"></i>
											</button>
										</div>
									</div>
								</form>
							</div>
						</li>

            <!-- language switch -->
            <li class="nav-item dropdown no-arrow mx-1" style="font-size: 14px">
              <a class="nav-link dropdown-toggle" href="#" id="lang" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-globe-asia fa-fw"></i>
              </a>
              <LocaleSwitch></LocaleSwitch>
            </li>
            <!-- END OF: language switch -->


            <div class="topbar-divider d-none d-sm-block"></div>

            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="admin-menu-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-users-cog fa-fw"></i>
              </a>
              <!-- Dropdown - Admins Only -->
							<div class="menu-color dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="admin-menu-1">
                <router-link
                    to="/system/clients"
                    tag='button'
                    class="menu-color dropdown-item">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.clientmanagement') }}
                </router-link>
                <!--
                <router-link
                    to="/system/settings"
                    tag='button'
                    class="menu-color dropdown-item">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.systemsettings') }}
                </router-link>
                -->
                <router-link
                    to="/system/billing"
                    tag='button'
                    class="menu-color dropdown-item">
                  <i class="fas fa-file-invoice-dollar fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.billing') }}
                </router-link>
                <router-link
                    to="/system/logs"
                    tag='button'
                    class="menu-color dropdown-item">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.logs') }}
                </router-link>

                <!--
                <a class="menu-color dropdown-item" href="#">
									<i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
									Client Management
								</a>
								<a class="menu-color dropdown-item" href="#">
									<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
									System Settings
								</a>								
								<a class="dropdown-item" href="#">
									<i class="fas fa-file-invoice-dollar fa-sm fa-fw mr-2 text-gray-400"></i> Billing System
								</a>
								<a class="menu-color dropdown-item" href="#">
									<i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
									System Logs
								</a>
								-->
							</div>
						</li>

						<div class="topbar-divider d-none d-sm-block"></div>

            <!-- ShoppingCart -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="admin-menu-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-shopping-basket fa-fw"></i>
                <span class="badge badge-danger badge-counter" v-if="cart.length > 0">{{ cart.length}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                <h6 class="dropdown-header">
                  {{ $t('interface.navbar.cart') }}
                </h6>
                <a class="dropdown-item d-flex align-items-center" href=""  v-for="(item, index) in cart.products" :key="index" @click="goToProduct(item.id)">
                  <div class="dropdown-list-image mr-3">
                    <img class="img-fluid" :src="item.image" alt="">
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">{{ item.title }}</div>
                    <div class="small text-gray-500">{{ item.description }}</div>
                  </div>
                </a>
                <router-link
                    to="/purchase/cart"
                    tag='button'
                    class="dropdown-item text-center small text-gray-500">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.cartfooter') }}
                </router-link>
              </div>
            </li>
            <!-- END OF: ShoppingCart -->

            <div class="topbar-divider d-none d-sm-block"></div>

						<!-- Nav Item - Alerts -->
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-bell fa-fw"></i>
								<span class="badge badge-danger badge-counter" v-if="alerts.length > 0">{{ alerts.length }}</span>
							</a>
							<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
								<h6 class="dropdown-header">{{ $t('interface.navbar.alerttop') }}</h6>
                <a class="dropdown-item d-flex align-items-center" href="" v-for="(item, index) in alerts" :key="index" @click="goToAlert(item.id)">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary" v-bind:class="{ 'bg- ':item.style }">
                      <i class="fas fa-file-alt text-white" v-bind:class="{ 'fas ':item.icon }"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">{{ item.date }}</div>
                    <span class="font-weight-bold">{{ item.text }}</span>
                  </div>
                </a>
                <router-link
                    to="/user/alerts"
                    tag='button'
                    class="dropdown-item text-center small text-gray-500">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.alertfooter') }}
                </router-link>
							</div>
						</li>

						<!-- Nav Item - Messages -->
						<li class="nav-item dropdown no-arrow mx-1" v-if="user.settings.messages">
							<a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-envelope fa-fw"></i>
								<span class="badge badge-danger badge-counter" v-if="messages.length > 0">{{ messages.length}}</span>
							</a>
							<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
								<h6 class="dropdown-header">
                  {{ $t('interface.navbar.messagetop') }}
								</h6>
                <a class="dropdown-item d-flex align-items-center" href=""  v-for="(item, index) in messages" :key="index" @click="goToMessage(item.id)">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" :src="item.avatar" alt="">
                    <div class="status-indicator bg-danger" v-if="item.status == 0"></div>
                    <div class="status-indicator bg-success" v-if="item.status > 0"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">{{ item.text }}</div>
                    <div class="small text-gray-500">{{ item.name }} · {{ item.date }}</div>
                  </div>
                </a>
                <router-link
                    to="/user/inbox"
                    tag='button'
                    class="dropdown-item text-center small text-gray-500">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.messagefooter') }}
                </router-link>
							</div>
						</li>

						<div class="topbar-divider d-none d-sm-block"></div>

						<!-- Nav Item - User Information -->
						<li class="nav-item dropdown no-arrow">
							<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span class="mr-2 d-none d-lg-inline text-gray-600 small">
									SuperUser
								</span>
								<img class="img-profile rounded-circle" src="../../assets/img/profile.png">
							</a>
							<!-- Dropdown - User Information -->
							<div class="menu-color dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">

                <router-link
                    to="/user/profile"
                    tag='button'
                    class="menu-color dropdown-item">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.profile') }}
                </router-link>

                <!--
                <router-link
                    to="/user/settings"
                    tag='button'
                    class="menu-color dropdown-item">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.settings') }}
                </router-link>
                -->

                <router-link
                    to="/user/invoices"
                    tag='button'
                    class="menu-color dropdown-item">
                  <i class="fas fa-file-invoice-dollar fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.invoices') }}
                </router-link>
                <!--
                <router-link
                    to="/user/log"
                    tag='button'
                    class="menu-color dropdown-item">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('interface.navbar.activity') }}
                </router-link>
                -->

								<div class="dropdown-divider"></div>
								<a class="menu-color dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
									<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
									Logout
								</a>
							</div>
						</li>

					</ul>

	</nav>
</template>

<script>
import moment from "moment";

import LocaleSwitch from "@/components/app/LocaleSwitch.vue";

export default {
  name: 'Navbar',

  components: {
    LocaleSwitch
  },

  data () {
    return {
      // system settings block
      user:{
        settings:{
          messages:false
        }
      },

      cart:{
          id:'ab218fc6e2cb6302c079d770d60893a1', // localStorage
          products:[{
            id:1,
            title:'Test',
            image: "https://source.unsplash.com/CS2uCrpNzJY/100x100",
            description:'afda fdsafa sfasf safasfd asdf safsadfsa fasdfasas fa fdasfasf asf asf safsa ',
            amount:1,
            price:188
          }]
      },

      avatar: "../assets/img/profile.png",
      alerts:[
        {
          id:1,
          style: "warning",
          icon: "fa-exclamation-triangle",
          date: moment().format('Y-m-d hh:mm'),
          text: "Spending Alert: We've noticed unusually high spending for your account"
        },{
          id:2,
          style: "warning",
          icon: "fa-exclamation-triangle",
          date: moment().format('Y-m-d hh:mm'),
          text: "Spending Alert: We've noticed unusually high spending for your account"
        },
      ],
      messages:[
        {
          id:1,
          avatar: "https://source.unsplash.com/fn_BT9fwg_E/60x60",
          name: "Batman",
          status:0,
          date: moment().format('Y-m-d hh:mm'),
          text: "Hi there! I am wondering if you can help me with a problem I've been having"
        },{
          id:2,
          avatar: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
          name: "Robin",
          status:1,
          date: moment().format('Y-m-d hh:mm'),
          text: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even"
        },{
          id:2,
          avatar: "https://source.unsplash.com/CS2uCrpNzJY/60x60",
          name: "The Joker",
          status:1,
          date: moment().format('Y-m-d hh:mm'),
          text: "Last month's report looks great, I am very happy with the progress so far, keep up the good work"
        }
      ]
    }


  },
  methods: {
    // language switcher
    tabEN() {
      this.$i18n.locale = 'en'
      this.$cookie.set('lang', 'en')
    },
    tabZH() {
      this.$i18n.locale = 'zh'
      this.$cookie.set('lang', 'zh')
    },
    tabNL() {
      this.$i18n.locale = 'nl'
      this.$cookie.set('lang', 'nl')
    },
    goToAlert(alertid) {
      this.$router.push({ name: 'alertmessage', params: { id: alertid } })
    },
    goToMessage(messageid) {
      this.$router.push({ name: 'message', params: { id: messageid } })
    }
  },



  create(){
    this.alerts.splice(Math.floor(Math.random()*this.alerts.length), 1);
    this.messages.splice(Math.floor(Math.random()*this.messages.length), 1);
  }


}
</script>

<style scoped lang="less">
.lang{
	font-size: 14px;
	span{
		cursor: pointer;
		display: inline-block;
		padding: 0 5px;
	}
}
</style>
