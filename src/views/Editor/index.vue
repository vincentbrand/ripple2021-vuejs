<template>
  <div class="row">
    <!-- warning -->
    <div class="col-xl-12 mb-3" v-if="stateChanged">
      <div class="row bg-warning py-3 my-3" id="publishAlert">
        <div class="col-xl-9 col-lg-9 text-center">
          <p class="pull-left">
            Your app configuration has changed, would you like to publish the new app?
          </p>
        </div>
        <div class="col-xl-3 col-lg-3 text-right">
          <button class="btn btn-success pull-right mr-3" type="button">
            <i class="fas fa-globe"></i> Publish App
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

        <li
          v-for="(item, idx) in navPillsList"
          :class="$route.path.includes(item) ? 'nav-item active' : 'nav-item'"
          :key="idx"
        >
          <router-link :to="'/emulator/' + item" class="nav-link" tag="button"
            >{{ item }} page</router-link
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
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>News Page</option>
                    <option>Booking Page</option>
                    <option>Static Page</option>								
                  </select>
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
            <button class="btn btn-secondary" type="button" @click="isModal = false">Cancel</button>
            <a class="btn btn-primary" href="#">Add Page</a>
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
    navPillsList: ["splash", "news", "booking", "contact"],
    isModal: false,

    layout: "",
    layoutList: [
      "Background Image with logo",
      "Background Image without logo",
      "Background Color with logo",
    ],
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

    showModal () {
      this.isModal = true;
      document.getElementsByTagName('body')[0].className = 'open-modal';
    }
  },

  created() {
    this.$store.dispatch("getEmulatorConfig")

    document.addEventListener("mouseup", e => {
      let m = `x: ${e.clientX} | y: ${e.clientY}`;
      console.log(m);
    })

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


</style>