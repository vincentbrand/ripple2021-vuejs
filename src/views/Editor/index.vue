<template>
  <div class="row">
    <!-- warning -->
    <div class="col-xl-12 mb-3" v-if="stateChanged">
      <div class="row bg-warning py-3 my-3" id="publishAlert">
        <div class="col-xl-8 col-lg-8 col-md-6 text-left">
          <p class="pull-left my-1">
            Your app configuration has changed, would you like to publish the new app?
          </p>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 text-right">
          <button class="btn btn-info btn-sm pull-right mr-3" type="button">
            <i class="fas fa-save"></i> Save
          </button>
          <button class="btn btn-success btn-sm btn-disabled pull-right mr-3" type="button" disabled>
            <i class="fas fa-globe"></i> Publish
          </button>
          <i class="fas fa-times-circle close-alert-icon" id="closePublishAlert"></i>
        </div>
      </div>
    </div>

    <!-- emulator -->
    <cu-emulator :config="appConfig" />

    <div class="col-xl-12 col-lg-12">
      <!-- nav-pills -->
      <ul class="nav nav-pills mb-3">
        <li class="nav-item-gary">
          <router-link to="/emulator/setting" class="nav-link" tag="button"
            >Basic Settings</router-link
          >
        </li>
        <li class="nav-item-gary">
          <router-link to="/emulator/navigation" class="nav-link" tag="button"
            >Navigation</router-link
          >
        </li>

        <!--
        <li
          v-for="(item, idx) in navPillsList"
          :class="$route.path.includes(item) ? 'nav-item active' : 'nav-item'"
          :key="idx"
        >
          <router-link :to="'/emulator/' + item" class="nav-link" tag="button"
            >{{ item }} page</router-link
          >
        </li>
        -->

        <li
            v-for="(item, index) in mp.navigation"
            :class="$route.path.includes(item.type) ? 'nav-item active' : 'nav-item'"
            :key="index"
        >
          <router-link :to="'/emulator/' + item.type" class="nav-link" tag="button"
          >{{ item.title }}</router-link
          >
        </li>


        <li class="nav-item active ml-2" @click="showModal">
          <button class="nav-link"><i class="fas fa-plus"></i></button>
        </li>
      </ul>
      <!-- config content -->
      <router-view />
      <!-- config content end -->
    </div>
    <!-- modal -->
    <div class="modal fade show" v-if="isModal" style="display: block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Page</h5>
            <button class="close" type="button" @click="isModal = false">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Page Type</label>
                  <select class="form-control" id="exampleFormControlSelect1" v-model="newPageType">
                    <option value="booking">Booking Page</option>
                    <option value="news">News Page</option>
                    <option value="static">Static Page</option>
                    <option value="splash">Splash Page</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Page Title</label>
                  <input type="text" class="form-control" placeholder="My Page" v-model="newPageTitle">
                </div>
                <div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" checked="">
                    <label class="form-check-label" for="exampleCheck1">add to navigation</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary btn-sm" type="button" @click="isModal = false">Cancel</button>
            <button class="btn btn-primary btn-sm" @click="addPage">Add Page</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import cuEmulator from "@/components/editor/emulator";

export default {
  name: "Editor",
  components: {
    "cu-emulator": cuEmulator,
  },

  data: () => ({
    stateChanged: false,
    lang: "en",
    // navPillsList: ["splash", "news", "booking", "contact"],
    isModal: false,
    layout: "",
    layoutList: [
      "Background Image with logo",
      "Background Image without logo",
      "Background Color with logo",
    ],
    // form configs
    newPageType:'Booking',
    newPageTitle:'',
    /*
    newPage:{
      type:'',
      title:''
    },
     */
    // newPageType:'',
    // newPageName:'',
    form:{
      mptitle:'Test',
      multilanguage:true,
      autotranslate:false
    },

    // object coming from MP
    mp:{
      navigation:[{
        type: 'splash',
        title:'Splash'
      },{
        type: 'Booking',
        title:'Booking'
      },{
        type: 'News',
        title:'News'
      },{
        type: 'contact',
        title:'Contact Us'
      },{
        type: 'static',
        title:'Facilities'
      },{
        type: 'static',
        title:'Prices'
      }],
      pages:[{
        splash:{
          title:'',
          content:{
            bgcolor:'#fff',
            bggradient:false,
            logo:false,
            bgimg:false
          },
        }
      },
      ]
    },
    newMP:{}
  }),

  computed: {
    config() {
      return this.$store.state.config;
    },
    appConfig() {
      return this.$store.state.EmulatorModule.appConfig
    }
  },


  watch: {
  },

  methods: {
    onCutNavActText(text) {
      this.navActText = text;
      this.navPillsIdx = null;
    },

    onCutNavPillsIdx(idx) {
      this.navActText = null;
      this.navPillsIdx = idx;
    },

    onClickApp(){
      this.stateChanged = true;
    },

    showModal() {
      this.isModal = true;
      document.getElementsByTagName('body')[0].className = 'open-modal';
    },



    addPage(){
      var newPage = {};
      this.newPage.type = this.newPageType;
      this.newPage.title = this.newPageTitle;
      this.mp.pages.push(newPage);
    },

    versionControl(){
      // check if this approach can be replaced
      // Using Lodash
      // _.isEqual(one, two);
      // this check will flag on order changes while Lodash will check exact matches without the order etc
      if( JSON.stringify(this.mp) === JSON.stringify(this.newMP) ){
        // similar no issue
      }else{
        // change has been made
      }
    }

  },

  created() {
    this.$store.dispatch("getEmulatorConfig")

    /*
    document.addEventListener("mouseup", e => {
      let m = `x: ${e.clientX} | y: ${e.clientY}`;
      console.log(m);
    })
    */

    // create a copy of the current mp on start
    this.newMP = this.mp;
  },

  mounted() {
    window.document.addEventListener('click', this.onClickApp)
  },
  beforeDestroy() {
    window.document.removeEventListener('click', this.onClickApp)
  }

};
</script>

<style scoped>
#publishAlert{
  text-align: center;
  background:rgba(246,194,62,0.2) !important;
  color:#333;
}

.btn-disabled{
  background: #666;
  color:#fff;
  border:none;
}


</style>