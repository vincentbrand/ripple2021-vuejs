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
            <label class="form-check-label">Show Author</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" checked="" />
            <label class="form-check-label"
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

            <button class="btn btn-danger btn-block  btn-sm mt-4" @click="deleteCurrentPage">
              <i class="fas fa-trash fa-sm mr-2"></i> Delete Page
            </button>

          </el-form>

        </div>
      </div>
    </div>

    <!-- preview -->
    <div class="col-4">
      <div class="card shadow preview" tabindex="0">
        <ul class="preview-list list-unstyled draggable news-page-preview">

          <NewsElement
              v-for="(item,index) in page.content"
              :key="index"
              :content="item"
              @click.native="selectContentBlock(index)"
          />

        </ul>
      </div>
    </div>

    <!-- controls -->
    <div class="col-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Content</h6>
        </div>
        <div class="card-body" v-if="page.selectedIndex != null">

            <el-form-item label="Page Title">
              <el-input v-model="page.content[selectedIndex].title"></el-input>
            </el-form-item>

            <el-form-item label="Publish Page" label-width="80">
              <el-switch v-model="page.content[selectedIndex].publish"></el-switch>
            </el-form-item>

            <button class="btn btn-success btn-block  btn-sm mt-4" @click="onFormSubmit">
              <i class="fas fa-save fa-sm mr-2"></i> {{ $t('pages.editor.common.btnSave') }}
            </button>

        </div>
        <div class="card-body" v-else>

          <p>Header Image</p>
          <div class="card mb-4 border-dashed bg-transparent">
            <div class="card-body text-center">
              <h6 class="text-gray-400">Click or drag image</h6>
              <a href="#" data-toggle="modal" data-target="#addPageModal">
                <i class="fas fa-5x fa-plus-circle text-gray-300 my-2"></i>
              </a>
              <h6 class="text-gray-400">to upload</h6>
            </div>
          </div>

          <label style="width: 100%">Title</label>
          <el-input v-model="form.title"></el-input>

          <label style="width: 100%">Text</label>
          <el-input type="textarea" v-model="form.text"></el-input>

          <el-form-item label="Publish Page" label-width="80">
            <el-switch v-model="page.publish"></el-switch>
          </el-form-item>


          <button class="btn btn-info btn-block  btn-sm mt-4" @click="postArticle">
            <i class="fas fa-save fa-sm mr-2"></i> Post Article
          </button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import NewsElement from '@/components/editor/elements/NewsElement';
import Seedr from "../../../plugins/Seedr";
import moment from "moment";

export default {
  components: {
    NewsElement
  },
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
    form:{
      image:'',
      title:'',
      text:''
    },
    page:{
      title:'',
      publish:true,
      type:'news',
      selectedIndex:null,
      settings:{
        layout:{
          detail:{
            layout:'standard',
            display:{
              dateTime:true,
              title:true,
              headerimg:true
            }
          },
          overview:{
            layout:'blocks',
            display:{
              dateTime:true,
              title:true,
              headerimg:true
            }
          }
        }
      },
      content:[]
    }
  }),

  methods: {
    onFormSubmit() {
      // console.log('submit!');
    },
    postArticle(){
      console.log('add this news');
    },
    deleteCurrentPage(){
      console.log('delete page XXX');
    },
    selectContentBlock(type, index){
      this.selectedState = type;
      // console.log('this.selectedState === '+this.selectedState);
      this.selectedIndex = index;
      // console.log(index);
    }
  },
  created(){
    // var format = 'MMMM Do YYYY hh:mm';
    for(let i=0; i<7; i++) {
      this.page.content.push({
        id: i + 1,
        title: Seedr.word()+Seedr.word()+Seedr.word(),
        headerimage: 'https://picsum.photos/600/400?grayscale',
        text: Seedr.text(),
        dateTime: moment(Seedr.dateTime(new Date(2012, 0, 1), new Date())).format('Y-m-d'),
        publish:Seedr.int(0,1)
      })
    }
  }
};
</script>
<style scoped>
.news-page-preview{
  margin:5px;
}
.preview{
  min-height: 50vw;
  height: 50vw;
  max-height: 50vw;
  overflow-y: scroll;
}
</style>