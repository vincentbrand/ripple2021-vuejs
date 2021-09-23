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
                    :selected="item.id === formData.layout.id"
                >
                </el-option>
              </el-select>

              <hr>


              <div class="row">
                <div class="col-12">
                  <h6>Normal State</h6>
                </div>
                <div class="col-6">
                  <label>{{ $t('pages.editor.navigation.bgcolor') }}</label>
                  <el-color-picker v-model="navigation.state.normal.bgcolor" style="width: 100%"></el-color-picker>
                </div>
                <div class="col-6">
                  <label>{{ $t('pages.editor.navigation.textcolor') }}</label>
                  <el-color-picker v-model="navigation.state.normal.textcolor" style="width: 100%"></el-color-picker>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h6>Hover State</h6>
                </div>
                <div class="col-6">
                  <label>{{ $t('pages.editor.navigation.bgcolor') }}</label>
                  <el-color-picker v-model="navigation.state.hover.bgcolor" style="width: 100%"></el-color-picker>
                </div>
                <div class="col-6">
                  <label>{{ $t('pages.editor.navigation.textcolor') }}</label>
                  <el-color-picker v-model="navigation.state.hover.textcolor" style="width: 100%"></el-color-picker>
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
        <!--
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">{{ $t('pages.editor.common.preview') }}</h6>
        </div>
        -->
        <div class="card-body">
        </div>
      </div>
    </div>


    <div class="col-lg-4">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">{{ $t('pages.editor.navigation.navsettings') }}</h6>
            </div>
            <div class="card-body">
              <el-form-item label="Navigation Link">
                <el-input v-model="navigation.links[0].name"></el-input>
              </el-form-item>

              <p>link</p>
              <el-form-item label="Link Page" label-width="80">
                <el-switch v-model="navigation.links[0].type"></el-switch>
              </el-form-item>

              <el-input v-model="navigation.links[0].icon"></el-input>

              <div v-if="navigation.links[0].type">
                <el-form-item label="Navigation Link">
                  <el-input v-model="navigation.links[0].name"></el-input>
                </el-form-item>
              </div>
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
export default {
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
        }]
      },
      formData:{
        layout:{
          id:1
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
      navigation: {
        bgcolor:'#ffffff',
        textcolor:'#666666',
        state:{
          normal:{
            bgcolor:'#ffffff',
            textcolor:'#666666'
          },
          hover:{
            bgcolor:'#666666',
            textcolor:'#ffffff'
          },
        },
        layout:1,
        links:[{
          id:0,
          name:'',
          icon:'fas fa-home',
          type:'internal',
          goTo:''
        }]
      }
    }),

    methods:{
      onFormSubmit(){
        console.log('on Form Submit');
      }
    }
}
</script>
<style>

label{
  font-size: 0.8em;
}
</style>
