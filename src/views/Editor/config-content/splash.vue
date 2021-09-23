<template>
  <div class="row" >
    <div class="col-4">
      <div class="card mb-4">

        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Settings</h6>
        </div>
        <div class="card-body">
          <label>Select Layout</label>
          <br />
          <el-select v-model="layout" style="width: 100%;">
            <el-option
              v-for="item in layoutList"
              :key="item.id"
              :value="item.id"
              :label="item.text"
            >
            </el-option>
          </el-select>

          <hr />

          <label>Transition Delay</label>
          <br />
          <el-select v-model="delay" style="width: 100%;">
            <el-option
              v-for="item in 5"
              :key="item"
              :value="item"
              :label="item">
            </el-option>
          </el-select>

          
            <!-- set logo -->
            <div v-if="layout !== 2">
                <hr />
                <p>Set Logo</p>

                <el-upload
                    class="upload-demo"
                    style="width: 100%"
                    drag
                    :action="uploadUri"
                    multiple
                >
                    <i class="fas fa-5x fa-plus-circle text-gray-300"></i>
                    <div class="el-upload__text text-gray-400 my-1">
                    {{ $t("common.upload") }}
                    </div>
                </el-upload>
              <!--
              <button class="btn btn-success btn-block pull-right mt-4" type="button">
                  <i class="fas fa-save fa-sm mr-2"></i> Save Settings
              </button>
              -->
          </div>
          <!-- set logo end -->


          <button class="btn btn-success btn-block  btn-sm mt-4" type="button">
            <i class="fas fa-save fa-sm mr-2"></i> Save Settings
          </button>

        </div>
      </div>
    </div>

    <div class="col-8">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Content</h6>
        </div>
        <!-- background img -->
        <div class="card-body" v-if="layout !== 3">
          <div class="row">
            <div class="col-6">
              <img :src="config.bg" class="img-fluid" />
            </div>
            <div class="col-6">

              <el-upload
                class="upload-demo"
                style="width: 100%"
                drag
                :action="uploadUri"
                multiple
              >
                <i class="fas fa-5x fa-plus-circle text-gray-300"></i>
                <div class="el-upload__text text-gray-400 my-1">
                  {{ $t("common.upload") }}
                </div>
              </el-upload>

              <!--
              <button class="btn btn-success btn-block mt-4" type="button">
                <i class="fas fa-save fa-sm mr-2"></i> Save Settings
              </button>
              -->

            </div>
          </div>
        </div>
        <!-- background color -->
        <div class="card-body" v-if="layout == 3">
          <div class="row">
            <div class="col-6">
              <div :style="'height: 500px;' + bgStyle"></div>
            </div>
            <div class="col-6">

              <el-color-picker v-model="bgc[0]" style="width: 100%"></el-color-picker>

              <el-color-picker v-model="bgc[1]" style="width: 100%;" class="mt-3" v-if="isGradient"></el-color-picker>
              <!-- 是否渐变色 -->
              <div class="mt-5">
                <el-radio v-model="isGradient" :label="false" border>Not use gradient colors</el-radio>
              </div>
              <div>
                <el-radio v-model="isGradient" :label="true" border>Use gradient colors</el-radio>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    config() {
      return this.$store.state.config;
    },
  },

  data: () => ({
    isGradient: false,
    layout: 1,
    delay: 3,
    uploadUri: '',
    bgc: ['#cccccc', ''],
    bgStyle: 'background-color: #cccccc',
    layoutList: [
        {
            text: 'Background Image with logo',
            id: 1
        },
        {
            text: 'Background Image without logo',
            id: 2
        },
        {
            text: 'Background Color with logo',
            id: 3
        }
    ],
  }),

  watch: {
    bgc (latest) {
      if (latest[1] !== '' && this.isGradient) 
        this.bgStyle = `background: linear-gradient(${latest[0]},${latest[1]});`
      else if (latest[0] !== '')
        this.bgStyle = `background: ${latest[0]}`
    },

    isGradient (val) {
      if (val) 
        this.bgStyle = `background: linear-gradient(${this.bgc[0]},${this.bgc[1]});`
      else
        this.bgStyle = `background: ${this.bgc[0]}`
    }

  }
};
</script>
