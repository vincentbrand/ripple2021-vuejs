<template>
  <div class="row mb-4">
    <div class="col-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Content</h6>
        </div>
        <div class="card-body">
          <label class="el-form-item__label mb-0">Headline</label>
          <el-input class="mb-3" v-model="webpage.content.h1" aria-placeholder="test"></el-input>
          <label class="el-form-item__label mb-0">Subline</label>
          <el-input class="mb-3" v-model="webpage.content.h2"></el-input>
          <label class="el-form-item__label mb-0">Text</label>
          <el-input type="textarea"
                    :autosize="{ minRows: 10, maxRows: 15}"
                    class="mb-3"
                    v-model="webpage.content.text"
          ></el-input>


        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card shadow" tabindex="0">
        <div class="card-body text-center py-5">
          <i class="fas fa-exclamation-triangle fa-5x text-warning my-4"></i>
          <p>Webpage not available in editor.</p>
          <p>Please <a :href="webpage.url" class="" target="_blank">open the webpage</a> in a new tab to see the changes</p>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">HI</h6>
        </div>
        <div class="card-body">
          <el-form ref="form" :model="form">

            <el-form-item label="Page Title">
              <el-input v-model="webpage.title"></el-input>
            </el-form-item>

            <hr>

            <label>Select Layout</label>
            <el-select v-model="form.layout" style="width: 100%;">
              <el-option
                  v-for="item in form.layoutList"
                  :key="item.id"
                  :value="item.id"
                  :label="item.text"
              >
              </el-option>
            </el-select>

            <hr>

            <el-form-item label="Publish Page" label-width="80" style="margin-bottom: 0px;">
              <el-switch v-model="webpage.publish"></el-switch>
            </el-form-item>

            <div class="example-url">
              {{ webpage.url }}
              <el-tooltip class="item" effect="dark" content="Open New Tab" placement="bottom">
                <a :href="webpage.url" class="text-black-50 float-right" target="_blank">
                    <i class="fas fa-share"></i>
                </a>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="Copy URL" placement="bottom">
                <i class="fas fa-copy float-right text-black-50 mx-2" @click="copyUrl"></i>
              </el-tooltip>
            </div>

            <hr>

            <button class="btn btn-success btn-block  btn-sm mt-4" @click="onFormSubmit">
              <i class="fas fa-save fa-sm mr-2"></i> {{ $t('pages.editor.common.btnSave') }}
            </button>

          </el-form>
        </div>

      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "webpage",
  components: {
  },
  data: () => ({
    stateChanged: false,
    form:{
      title:'',
      publish:true,
      selectedIndex:0,
      layout:'select layout',
      layoutList:[{
        id:1,
        text:'Free Layout 1'
      },{
        id:2,
        text:'Free Layout 2'
      },{
        id:3,
        text:'Free Layout 3'
      }]
    },
    webpage:{
      url:'http://jackass.com',
      title:'My Web Form',
      publish:true,
      style:{
        logo:'https://picsum.photos/600/450?grayscale',
        bgcolor:'#fff',
        headingcolor:'#333',
        textcolor:'#666'
      },
      content:{
        h1:'My Awesome Shit',
        h2:'subheader or little header blabalb',
        text:'some random bullshit text goes here with some more bs'
      }
    },
  }),
  computed: {
  },
  watch: {
  },
  methods: {
    onFormSubmit(){
      console.log('submit form');
    },
    async copyUrl(){
      try {
        await navigator.clipboard.writeText(this.webpage.url);
        this.$message({
          type: 'success',
          message: 'URL successfully copied'
        });
      } catch($e) {
        this.$message({
          type: 'warning',
          message: 'Cannot Copy URL'
        });
      }
    }

  },
  created() {

    // insert paid layouts into the layout options
    this.form.layoutList.push({id:4, text:'Paid Layout 1'});
    console.log(this.selectedState);
  },
  mounted() {
  },
  beforeDestroy() {
  }

};
</script>

<style lang="scss">
.example-url{
  padding:10px 20px;
  border:1px dotted #ccc;
  background: rgba(0,0,0,0.02);
  font-style: italic;
  color:#666;
  margin:10px 0;
}
</style>