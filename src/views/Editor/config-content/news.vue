<template>
  <div class="row">
    <div class="col-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Navigation</h6>
        </div>
        <div class="card-body">
          <p>
            Select Navigation Icon
            <a href="#" data-toggle="modal" data-target="#iconModal">
              <i class="fa fa-wrench fa-sm"></i>
            </a>
          </p>
          <hr />
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id=""
              aria-describedby="emailHelp"
              placeholder="Set Nagivation Text"
            />
            <small id="emailHelp" class="form-text text-muted"
              >The text that is displayed in the navigation</small
            >
          </div>
        </div>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Settings</h6>
        </div>
        <div class="card-body">
          <label for="exampleFormControlSelect1">Select Layout</label>
          <select class="form-control" id="newLayoutOptions" v-model="layout">
            <option :value="0">List Layout</option>
            <option :value="1">Block Layout</option>
          </select>
          <hr />
          <p>Display Settings</p>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" checked="" />
            <label class="form-check-label" for="exampleCheck1"
              >Show Author</label
            >
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" checked="" />
            <label class="form-check-label" for="exampleCheck1"
              >Show Date</label
            >
          </div>
          <hr />
          <button class="btn btn-success btn-block" type="button">
            <i class="fas fa-save fa-sm mr-2"></i> Save Settings
          </button>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="col-8">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Content</h6>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    layout: 0,
  }),

  watch: {
    layout(val) {
      this.$store.commit("SET_CONFIG_NEWS_LAYOUT", val);
    },
  },
};
</script>
