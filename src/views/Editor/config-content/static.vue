<template>
  <div class="row mb-4">
      <div class="col-4">
          <div class="card mb-4">
              <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Elements</h6>
              </div>
              <div class="card-body">
                <label>Components</label>
                <ul class="components list-unstyled draggable">
                  <li class="components-item">
                    <i class="fas fa-heading text-black-50"></i>
                    <h6>Title</h6>
                  </li>
                  <li class="components-item">
                    <i class="fas fa-subscript text-black-50"></i>
                    <h6>Subtitle</h6>
                  </li>
                  <li class="components-item">
                    <i class="fas fa-align-justify text-black-50"></i>
                    <h6>Text</h6>
                  </li>
                  <li class="components-item">
                    <i class="fas fa-image text-black-50"></i>
                    <h6>Image</h6>
                  </li>
                  <li class="components-item">
                    <i class="fas fa-columns text-black-50"></i>
                    <h6>2 Column</h6>
                  </li>
                  <li class="components-item">
                    <i class="fas fa-arrows-alt-h text-black-50"></i>
                    <h6>Slider</h6>
                  </li>

                </ul>

                <hr>

                <label>Select Layout</label>
                <el-select v-model="layout" style="width: 100%;">
                  <el-option
                      v-for="item in layoutList"
                      :key="item.id"
                      :value="item.id"
                      :label="item.text"
                  >
                  </el-option>
                </el-select>

              </div>
          </div>
      </div>
      <div class="col-4">
          <div class="card shadow preview" tabindex="0">
            <ul class="preview-list list-unstyled draggable">

              <PreviewElement
                  v-for="(item,index) in page.content"
                  :key="index"
                  :content="item.content"
                  :type="item.type"
                  @click.native="selectContentBlock(item.type, index)"
              />

              <!-- empty preview to add more elements -->
              <li class="preview-item empty">
                <i class="fas fa-plus-circle fa-3x fa-fw text-gray-400"></i>
              </li>

            </ul>
          </div>
      </div>
      <div class="col-4">
          <div class="card mb-4">
              <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">{{ $t('pages.editor.common.'+selectedState) }}</h6>
              </div>

              <div class="card-body" v-if="selectedState == 'header'">

                <el-form ref="form" :model="form" size="mini">
                  <el-form-item label="">
                    <el-input v-model="page.content[selectedIndex].content.text"></el-input>
                  </el-form-item>

                  <button class="btn btn-success btn-block  btn-sm mt-4" @click="onFormSubmit">
                    <i class="fas fa-save fa-sm mr-2"></i> {{ $t('pages.editor.common.btnSave') }}
                  </button>

                </el-form>

              </div>
              <!-- image -->
              <div class="card-body" v-else-if="selectedState == 'subtitle'">
                <el-form ref="form" :model="form" size="mini">
                  <el-form-item label="">
                    <el-input v-model="page.content[selectedIndex].content.text"></el-input>
                  </el-form-item>

                  <button class="btn btn-success btn-block  btn-sm mt-4" @click="onFormSubmit">
                    <i class="fas fa-save fa-sm mr-2"></i> {{ $t('pages.editor.common.btnSave') }}
                  </button>

                </el-form>
              </div>
              <!-- text -->
              <div class="card-body" v-else-if="selectedState == 'txt'">
                <el-form ref="form" :model="form" size="mini">
                <el-form-item label="">
                  <el-input type="textarea" rows="10" v-model="page.content[selectedIndex].content.text"></el-input>
                </el-form-item>
                </el-form>
              </div>
              <!-- image -->
              <div class="card-body" v-else-if="selectedState == 'img'">
                <div class="card mb-4 border-dashed bg-transparent">
                  <div class="card-body text-center">
                    <h6 class="text-gray-400">Click or drag image</h6>
                    <a href="#" data-toggle="modal" data-target="#addPageModal">
                      <i class="fas fa-5x fa-plus-circle text-gray-300 my-2"></i>
                    </a>
                    <h6 class="text-gray-400">to upload</h6>
                  </div>
                </div>
              </div>
              <div class="card-body" v-else-if="selectedState == 'columns'">

                <hr>
                <div class="card mb-4 border-dashed bg-transparent">
                  <div class="card-body text-center">
                    <h6 class="text-gray-400">Click or drag image</h6>
                    <a href="#" data-toggle="modal" data-target="#addPageModal">
                      <i class="fas fa-5x fa-plus-circle text-gray-300 my-2"></i>
                    </a>
                    <h6 class="text-gray-400">to upload</h6>
                  </div>
                </div>

              </div>
              <div class="card-body" v-else-if="selectedState == 'slider'">

              </div>

              <div class="card-body" v-else>
                <el-form ref="form" :model="form">

                  <el-form-item label="Page Title">
                    <el-input v-model="page.title"></el-input>
                  </el-form-item>

                  <el-form-item label="Publish Page" label-width="80">
                    <el-switch v-model="page.publish"></el-switch>
                  </el-form-item>

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
// import draggable from 'vuedraggable';
import PreviewElement from '@/components/editor/elements/PreviewElement';

export default {
  name: "static",
  components: {
    // draggable,
    PreviewElement
  },
  data: () => ({
    stateChanged: false,
    selectedState:'pagesettings',
    selectedIndex:0,
    testme:['hello world','i can drag?','fuck yeah'],
    form:{
      title:'',
      publish:true
    },
    page:{
      type:'static',
      title:'Hello World',
      publish:true,
      content:[
        {
          type:'header',
          content: {
            text: 'My Headersss'
          }
        },{
          type:'subtitle',
          content:{
            text:'My Subtitle'
          }
        },{
          type:'img',
          content:{
            url:'https://picsum.photos/600/450?grayscale'
          }
        }, {
          type: 'txt',
          content: {
            text: 'Donec lectus tortor, lobortis nec mollis quis, ultrices vitae urna. Sed nec nibh nec risus pharetra viverra. Quisque quis urna mauris. Nam facilisis scelerisque justo, convallis pellentesque urna eleifend vel.'
          }
        },{
          type:'subtitle',
          content:{
            text:'My Subtitle'
          }
        },{
          type:'img',
          content:{
            url:'https://picsum.photos/600/450?grayscale'
          }
        }, {
          type: 'txt',
          content: {
            text: 'Donec lectus tortor, lobortis nec mollis quis, ultrices vitae urna. Sed nec nibh nec risus pharetra viverra. Quisque quis urna mauris. Nam facilisis scelerisque justo, convallis pellentesque urna eleifend vel. '
          }
        }
      ]
    }


  }),
  computed: {
  },
  watch: {
  },
  methods: {
    onFormSubmit() {
      console.log('submit!');
    },
    selectContentBlock(type, index){
      this.selectedState = type;
      // console.log('this.selectedState === '+this.selectedState);
      this.selectedIndex = index;
      // console.log(index);
    }
  },
  created() {
    console.log(this.selectedState);
  },
  mounted() {
  },
  beforeDestroy() {
  }

};
</script>

<style lang="scss">
.component-list{
  list-style: none;
  margin:0;
  padding:0;
}
.component-list-item{
  padding:0;
  margin:0;
}
.component-item{
  padding:6px 10px;
  background: #ccc;
  margin:10px 0 0 0;
  color:#fff;
}
.component-list-item h6{
  padding:6px 10px;
  margin:0;
  color:#fff;
  background: #333;
  font-size: 0.8em;
}


/* components */
.components{
  padding:0;
  margin:0;
  display: flex;
  flex-wrap: wrap;
  width:100%;
}
.components li{
  width:30%;
  min-width:30%;
  max-width:30%;
  height:50px;
  min-height:50px;
  border:1px dotted #999;
  justify-content: space-between;
  text-align: center;
  padding:5px;
  margin: 0 0 5px 5px;
}
.components li h6{
  padding:4px 0 ;
  margin:0;
  color:#666;
  font-size: 0.6em;
}
.components li:hover, .components li.selected{
  color:#fff;
  background: #ccc;
  border:1px dotted #333;
}
.components li:hover h6, .components li.selected h6{
  color:#fff;
}

/* preview */
.preview{
  min-height: 40vw;
  height: 40vw;
  max-height: 40vw;
  overflow-y: scroll;
}

.preview-list{

}
.preview-list.draggable{

}
.preview-item{
  padding:5px 10px;
  margin:5px;
  border:1px solid transparent;
}

.preview-item:hover{
  border:1px solid lightgreen;
  background:rgba(0,0,0,0.015);
}
.preview-item.empty{
  border:1px dashed #ccc;
  color:#ccc;
  padding:20px 10px;
  margin:10px;
  text-align: center;
}


.preview-item{
  &.header{
     text-align: center;
     color: #333;
     font-size: 1.2em;
  }
  &.subtitle {
    text-align: center;
    color: #333;
     font-size: 0.9em;
  }
}
/* controls */

.el-switch .el-switch__core {
  border-color: #dc3547;
  background-color: #dc3547;
}

.el-switch.is-checked .el-switch__core {
  border-color: #1CC88A;
  background-color: #1CC88A;
}

p.editor-label{
  padding:0;
  margin:0;
}

</style>