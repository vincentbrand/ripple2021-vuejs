<template>
  <div class="row">
    <div class="col-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Settings</h6>
        </div>
        <div class="card-body">
          <label for="exampleFormControlSelect1">Select Layout</label>
          <select class="form-control" id="newLayoutOptions" v-model="layout">
            <option :value="0">List</option>
            <option :value="1">Block</option>
            <option :value="1">Masonry</option>
          </select>
          <hr />
          <p>Display Settings</p>
          <hr />
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

          <el-form ref="form" :model="page" label-width="80">

            <el-form-item>
              <p class="editor-label">Page Title</p>
              <el-input v-model="page.title"></el-input>
            </el-form-item>

            <el-form-item label="Publish Page">
              <el-switch v-model="page.publish"></el-switch>
            </el-form-item>

            <button class="btn btn-success btn-block  btn-sm mt-4" @click="onFormSubmit">
              <i class="fas fa-save fa-sm mr-2"></i> Save Settings
            </button>

          </el-form>

        </div>
      </div>
    </div>

    <!-- preview -->
    <div class="col-4">
      <div class="card shadow mb-4">
        <div class="card-body"></div>
      </div>
    </div>


    <!-- controls -->
    <div class="col-4">
      <div class="card mb-4">
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
    layouts:[{
      id:1,
      text:'List'
    },{
      id:2,
      text:'Block'
    },{
      id:3,
      text:'Masonry'
    }],
    page:{
      title:'',
      publish:true
    }
  }),

  watch: {
    layout(val) {
      this.$store.commit("SET_CONFIG_NEWS_LAYOUT", val);
    },
  },
};
</script>
