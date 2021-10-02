<template>
<div class="row">
    <div class="col-lg-4">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">{{ $t('pages.editor.navigation.navstructure') }}</h6>
            </div>
            <div class="card-body">
              <label>Select Menu</label>
              <el-select v-model="formData.layout" style="width: 100%;">
                <el-option
                    v-for="item in formOptions.layouts"
                    :key="item.id"
                    :value="item.id"
                    :label="item.title"
                >
                </el-option>
              </el-select>

              <hr>

              <label style="width:100%;">
                Display Text
                <el-switch v-model="formOptions.settings.displayText" class="mb-2 float-right"></el-switch>
              </label>

              <hr>

              <label style="width:100%;">
                Display Icon
                <el-switch v-model="formOptions.settings.displayIcon" class="mb-2 float-right"></el-switch>
              </label>

              <hr>

              <div class="row">
                <div class="col-12">
                  <h6>Normal State</h6>
                </div>
                <div class="col-6">
                  <label>{{ $t('pages.editor.navigation.bgcolor') }}</label>
                  <el-color-picker v-model="navigation.theme.color.normal.bg" style="width: 100%"></el-color-picker>
                </div>
                <div class="col-6">
                  <label>{{ $t('pages.editor.navigation.textcolor') }}</label>
                  <el-color-picker v-model="navigation.theme.color.normal.text" style="width: 100%"></el-color-picker>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h6>Hover State</h6>
                </div>
                <div class="col-6">
                  <label>{{ $t('pages.editor.navigation.bgcolor') }}</label>
                  <el-color-picker v-model="navigation.theme.color.hover.bg" style="width: 100%"></el-color-picker>
                </div>
                <div class="col-6">
                  <label>{{ $t('pages.editor.navigation.textcolor') }}</label>
                  <el-color-picker v-model="navigation.theme.color.hover.text" style="width: 100%"></el-color-picker>
                </div>
              </div>

              <!--
              <div class="form-group">
                <label>{{ $t('pages.editor.navigation.bgcolor') }}</label>
                <el-color-picker v-model="navigation.bgcolor" style="width: 100%"></el-color-picker>
              </div>
              <div class="form-group">
                <label>{{ $t('pages.editor.navigation.textcolor') }}</label>
                <el-color-picker v-model="navigation.textcolor" style="width: 100%"></el-color-picker>
              </div>
              -->

            </div>
        </div>
    </div>

    <div class="col-lg-4">
      <div class="card shadow mb-4">

        <MenuElement
            :theme="navigation.style"
            :content="navigation.links">
        </MenuElement>

        <div class="card-body">
        </div>
      </div>
    </div>


    <div class="col-lg-4">
      <div class="card shadow mb-4">

            <div class="card-body">

              <div v-if="formOptions.settings.displayText">
                <p>Display Text</p>
                <hr>
                <label style="width:100%;">Chinese</label>
                <el-input placeholder="中文" class="mb-2" v-model="navigation.links[0].name"></el-input>
                <label style="width:100%;">English</label>
                <el-input placeholder="Title" class="mb-2" v-model="navigation.links[0].name"></el-input>
                <hr>
              </div>

              <div v-if="formOptions.settings.displayIcon">
                <p>Display Icon</p>
                <hr>
                <el-input placeholder="Email" class="mb-2" v-model="navigation.links[0].name"></el-input>
                <hr>
              </div>

              <p>Link</p>

              <label style="width:100%;">
                Internal
                <el-switch v-model="formOptions.settings.linkInternal" class="mb-2 float-right"></el-switch>
              </label>
              <div v-if="formOptions.settings.linkInternal">
                <div v-if="navigation.links[0].type">
                  <el-select v-model="myroute" style="width: 100%;">
                    <el-option
                        v-for="item in routes"
                        :key="item.id"
                        :value="item.goTo"
                        :label="item.name"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div v-else>
                <label style="width: 100%">URL</label>
                <el-input placeholder="http://www.yourlink.com/here" class="mb-2" v-model="navigation.links[0].name"></el-input>
              </div>

              <button class="btn btn-success btn-block  btn-sm mt-4" @click="onFormSubmit">
                <i class="fas fa-save fa-sm mr-2"></i> {{ $t('pages.editor.common.btnSave') }}
              </button>
              <div class="">

              </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import MenuElement from '@/components/editor/elements/MenuElement';

export default {
  components: {
    MenuElement
  },
  data: () => ({

      formOptions:{
        layouts:[{
          id:1,
          title:'plain',
          rules: {
            accept: [2, 3, 4, 5]
          }
         },{
          id:2,
          title:'Odd Bubble',
          rules: {
            accept: [3,5]
          }
         },{
          id:3,
          title:'SideDrawer',
          rules: {
            accept: [1,2,3,4,5,6,7,8]
          }
        }],
        settings:{
          displayText:true,
          displayIcon:true,
          linkInternal:true
        }
      },
      formData:{
        selectedIndex:0,
        layout:{
          id:1,
          title:'plain'
        }
      },
      myroute:'',
      routes:[{
        id:1,
        name:'Homepage',
        goTo:'Home'
      },{
        id:4,
        name:'News',
        goTo:'News'
      },{
        id:2,
        name:'About us',
        goTo:'About'
      },{
        id:3,
        name:'Booking',
        goTo:'Booking'
      },{

        id:5,
        name:'Contact',
        goTo:'Contact'
      }],
    navigation:{
        theme:{
          layout:{
            id:1,
            name:'bubble',
          },
          display:{
            title:true,
            icon:true
          },
          color:{
            normal:{
              text:'#000',
              bg:'#fff'
            },
            hover:{
              text:'#fff',
              bg:'#000'
            }
          },
        },
        links:[{
          id:1,
          text:'home',
          icon:'fas fa-cogs',
          type:'internal',
          goTo:'/'
        },{
          text:'home',
          icon:'fas fa-home',
          link:'/'
        },{
          text:'home',
          icon:'fas fa-book',
          link:'/'
        },{
          text:'home',
          icon:'fas fa-cog',
          link:'/'
        },{
          text:'home',
          icon:'fas fa-user',
          link:'/'
        }]
      }
    }),

    methods:{
      onFormSubmit(){
        console.log('on Form Submit');
      }
    },
    created() {
      // merge data and default form data together {...Object1, ...Object2} is ES2015 syntax for merge in which secondary overwrites
      // this.formData = {...person, ...job}
    }
}
</script>
<style>

label{
  font-size: 0.8em;
}
</style>
