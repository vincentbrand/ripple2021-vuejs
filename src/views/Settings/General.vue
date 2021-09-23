<template>
  <div class="row">
    <div class="col-12">
      <h4>Settings</h4>
      <hr>
    </div>
    <div class="col-lg-3 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5><i class="fas fa-globe-asia mr-2"></i> Webpage</h5>
          <hr>
          <!-- webpage -->
          <div>
            <label>Enable Webpage</label><el-switch v-model="settingsForm.enableWebpage"></el-switch>
          </div>
          <div class="example-url" v-if="settingsForm.enableWebpage">
            {{ settingsForm.url }}
            <el-tooltip class="item" effect="dark" content="Copy URL" placement="bottom">
              <i class="fas fa-copy float-right" @click="copyUrl"></i>
            </el-tooltip>
          </div>
          <div class="example-url-disabled" v-else>
            webpage is disabled
          </div>

        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5>
            <i class="fab fa-weixin mr-2"></i> MiniProgram
            <el-popover
                placement="bottom"
                title=""
                width="300"
                trigger="hover"
                v-if="purchased.enableMP == false"
            >
              <div>
                <h5>Mini Program feature</h5>
                <img src="https://picsum.photos/300/200" class="img-fluid">
                <p>This is a paid feature, some examples, images and links</p>
                <div class="flex-container">
                  <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                  <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                </div>
              </div>
              <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
            </el-popover>
          </h5>
          <hr>
          <p>Your WeChat Mini Program feature is disabled, please make sure that you have purchased this feature or are a paying member.</p>
          <hr>
          <!-- mini program -->
          <div v-if="options.enableMP">
            <label>
              Enable MP
              <el-popover
                  placement="bottom"
                  title=""
                  width="300"
                  trigger="hover"
                  v-if="purchased.enableMP == false"
              >
                <div>
                  <h5>Mini Program feature</h5>
                  <img src="https://picsum.photos/300/200" class="img-fluid">
                  <p>This is a paid feature, some examples, images and links</p>
                  <div class="flex-container">
                    <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                    <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                  </div>
                </div>
                <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
              </el-popover>
            </label>
            <el-switch v-model="settingsForm.enableMP"></el-switch>
          </div>
          <div v-else>
            <label>
              Enable MP
              <el-popover
                  placement="bottom"
                  title=""
                  width="300"
                  trigger="hover"
                  v-if="purchased.enableMP == false"
              >
                <div>
                  <h5>Mini Program feature</h5>
                  <img src="https://picsum.photos/300/200" class="img-fluid">
                  <p>This is a paid feature, some examples, images and links</p>
                  <div class="flex-container">
                    <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                    <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                  </div>
                </div>
                <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
              </el-popover>
            </label>
            <el-switch v-model="settingsForm.enableMP" disabled></el-switch>
          </div>

          <transition name="el-fade-in">
            <div v-if="settingsForm.enableMP">
              <el-input placeholder="App ID" class="mb-2" v-model="settingsForm.appID" :disabled="user.role.isOwner == false"></el-input>
              <el-input placeholder="MP title" class="mb-2" v-model="settingsForm.mpTitle" :disabled="user.role.isOwner == false"></el-input>
            </div>
          </transition>

        </div>
      </div>
    </div>



    <div class="col-lg-3 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5>
            <i class="fas fa-language mr-2"></i> Additional Features
            <el-tooltip class="item" effect="dark" content="Paid Feature" placement="bottom">
              <span class="paid">(<i class="fas fa-star"></i>)</span>
            </el-tooltip>
          </h5>
          <hr>

          <!-- multillingual feature -->
          <div v-if="options.multilingual">
            <table class="table-borderless">
              <tr>
                <td>
                  <label>
                    Multilingual
                    <el-popover
                        placement="bottom"
                        title=""
                        width="300"
                        trigger="hover"
                        v-if="purchased.multilingual == false"
                    >
                      <div>
                        <h5>Multilingual</h5>
                        <img src="https://picsum.photos/300/200" class="img-fluid">
                        <p>This is a paid feature, some examples, images and links</p>
                        <div class="flex-container">
                          <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                          <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                        </div>
                      </div>
                      <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
                    </el-popover>
                  </label>
                </td>
                <td class="td-switch-col">
                  <el-switch v-model="settingsForm.multilingual">
                  </el-switch>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p>Your webpage and miniprogram will support multilingual content. English and Chinese.</p>
                </td>
              </tr>
            </table>
          </div>
          <div v-else>
            <table class="table-borderless">
              <tr>
                <td>
                  <label>
                    Multilingual
                    <el-popover
                        placement="bottom"
                        title=""
                        width="300"
                        trigger="hover"
                        v-if="purchased.multilingual == false"
                    >
                      <div>
                        <h5>Mini Program feature</h5>
                        <img src="https://picsum.photos/300/200" class="img-fluid">
                        <p>This is a paid feature, some examples, images and links</p>
                        <div class="flex-container">
                          <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                          <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                        </div>
                      </div>
                      <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
                    </el-popover>
                  </label>
                </td>
                <td class="td-switch-col">
                  <el-switch v-model="settingsForm.multilingual">
                  </el-switch>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p>Your webpage and miniprogram will support multilingual content. English and Chinese.</p>
                </td>
              </tr>
            </table>
          </div>

          <!-- auto translate feature -->
          <div v-if="options.autoTranslate">
            <table class="table-borderless">
              <tr>
                <td>
                  <label>
                    Auto Translate
                    <el-popover
                        placement="bottom"
                        title=""
                        width="300"
                        trigger="hover"
                        v-if="purchased.autoTranslate == false"
                    >
                      <div>
                        <h5>Auto Translate</h5>
                        <img src="https://picsum.photos/300/200" class="img-fluid">
                        <p>This is a paid feature, some examples, images and links</p>
                        <div class="flex-container">
                          <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                          <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                        </div>
                      </div>
                      <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
                    </el-popover>
                  </label>
                </td>
                <td class="td-switch-col">
                  <el-switch v-model="settingsForm.autoTranslate">
                  </el-switch>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p>Your content will be automatically translated using online translation services.</p>
                  <p class="legal-comment">We are not responsible for the accuracy of these translations</p>
                </td>
              </tr>
            </table>
          </div>
          <div v-else>
            <table class="table-borderless">
              <tr>
                <td>
                  <label>
                    Auto Translate
                    <el-popover
                        placement="bottom"
                        title=""
                        width="300"
                        trigger="hover"
                        v-if="purchased.translate == false"
                    >
                      <div>
                        <h5>Mini Program feature</h5>
                        <img src="https://picsum.photos/300/200" class="img-fluid">
                        <p>This is a paid feature, some examples, images and links</p>
                        <div class="flex-container">
                          <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                          <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                        </div>
                      </div>
                      <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
                    </el-popover>
                  </label>
                </td>
                <td class="td-switch-col">
                  <el-switch v-model="settingsForm.autoTranslate" disabled>
                  </el-switch>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p>Your content will be automatically translated using online translation services.</p>
                  <p class="legal-comment">We are not responsible for the accuracy of these translations</p>
                </td>
              </tr>
            </table>
          </div>

          <hr>

          <!-- wechat payment --
          <div v-if="options.enablePayment">
            -->
            <label>
              Enable WeChat Pay
              <el-popover
                  placement="bottom"
                  title=""
                  width="300"
                  trigger="hover"
                  v-if="purchased.enablePayment == false"
              >
                <div>
                  <h5>WeChat Pay</h5>
                  <img src="https://picsum.photos/300/200" class="img-fluid">
                  <p>This is a paid feature, some examples, images and links</p>
                  <div class="flex-container">
                    <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                    <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                  </div>
                </div>
                <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
              </el-popover>
            </label>
            <el-switch v-model="settingsForm.enablePayment" :disabled="!options.enablePayment"></el-switch>

            <!--
          </div>
          <div v-else>
            <label>
              Enable WeChat Pay
              <el-popover
                  placement="bottom"
                  title=""
                  width="300"
                  trigger="hover"
                  v-if="purchased.enablePayment == false"
              >
                <div>
                  <h5>WeChat Pay</h5>
                  <img src="https://picsum.photos/300/200" class="img-fluid">
                  <p>This is a paid feature, some examples, images and links</p>
                  <div class="flex-container">
                    <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                    <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                  </div>
                </div>
                <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
              </el-popover>
            </label>
            <el-switch v-model="settingsForm.enablePayment" disabled></el-switch>
          </div>
          -->

          <div v-if="options.enablePayment">
            <!--
            <el-form-item label="Payment Vendor Code">
              <el-input v-model="settingsForm.paymentVendorCode"></el-input>
            </el-form-item>
            -->
            <el-input v-model="settingsForm.paymentVendorCode"></el-input>

          </div>

        </div>
      </div>
    </div>

    <!-- Company Details -->
    <div class="col-lg-3 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5><i class="fas fa-building mr-2"></i> Company Details</h5>
          <hr>
          <el-input placeholder="Company Name" class="mb-2" v-model="settingsForm.company.name" :disabled="user.role.isOwner == false"></el-input>
          <el-input placeholder="Telephone #1" class="mb-2" v-model="settingsForm.company.telephone1" :disabled="user.role.isOwner == false"></el-input>
          <el-input placeholder="Telephone #2" class="mb-2" v-model="settingsForm.company.telephone2" :disabled="user.role.isOwner == false"></el-input>
          <el-input placeholder="Address" class="mb-2" v-model="settingsForm.company.address" :disabled="user.role.isOwner == false"></el-input>
          <el-input placeholder="Additional" class="mb-2" v-model="settingsForm.company.additional" :disabled="user.role.isOwner == false"></el-input>
          <el-input placeholder="Zipcode" class="mb-2" v-model="settingsForm.company.zip" :disabled="user.role.isOwner == false"></el-input>
        </div>
      </div>
    </div>

    <!-- Business hours -->
    <div class="col-lg-3 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5><i class="fas fa-clock mr-2"></i> Set Business hours</h5>
          <hr>

            <div class="row mb-3" v-for="(day,index) in options.weekdays" :key="index">
              <div class="col-8 mb-1">
                <p class="labelDay">{{ day }}</p>
              </div>
              <div class="col-4 mb-1">
                <el-switch v-model="options.days[index]"></el-switch>
              </div>

              <transition name="el-fade-in">
              <div class="col-6" v-if="options.days[index]">
                <el-time-select
                    placeholder="Start"
                    v-model="settingsForm.hours[day][0]"
                    size="small"
                    class="overwriteHours"
                    :disabled="options.days[index] == false"
                    :picker-options="{
                      start: '08:00',
                      step: '00:15',
                      end: '23:45',
                    }
                ">
                </el-time-select>
              </div>
              </transition>
              <transition name="el-fade-in">
              <div class="col-6" v-if="options.days[index]">
                <el-time-select
                    placeholder="End"
                    v-model="settingsForm.hours[day][1]"
                    size="small"
                    class="overwriteHours"
                    :disabled="options.days[index] == false"
                    :picker-options="{
                      start: '08:00',
                      step: '00:15',
                      end: '23:45',
                      minTime: settingsForm.hours[day][0],
                    }
                ">
                </el-time-select>
              </div>
              </transition>
            </div>

        </div>
      </div>
    </div>

    <!-- Booking settings -->
    <div class="col-lg-3 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5><i class="fas fa-file-alt mr-2"></i> Booking Settings</h5>
          <hr>
          <p>Booking Type (timeslots, open, specific)</p>
          <p>Set timeslots</p>
        </div>
      </div>
    </div>

    <!-- style settings -->
    <div class="col-lg-3 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5><i class="fas fa-palette mr-2"></i> Styling Settings</h5>
          <hr>
          <p>Logo</p>
          <el-upload
              class="upload-demo"
              style="width: 100%"
              drag
              :action="settingsForm.uploadUriLogo"
              multiple
          >
            <i class="fas fa-5x fa-plus-circle text-gray-300"></i>
            <div class="el-upload__text text-gray-400 my-1">
              {{ $t("common.upload") }}
            </div>
          </el-upload>

          <p class="legal-comment text-center my-2">.PNG or JPEG images, no larger than 1MB</p>

          <hr>
          <p>Color Sheme</p>

          <div class="row">
            <div class="col-4 text-center">
              <p class="color-title">Color 1</p>
              <el-color-picker v-model="settingsForm.color1" show-alpha size="medium"></el-color-picker>
            </div>
            <div class="col-4 text-center">
              <p class="color-title">Color 2</p>
              <el-color-picker v-model="settingsForm.color2" show-alpha size="medium"></el-color-picker>
            </div>
            <div class="col-4 text-center">
              <p class="color-title">Color 3</p>
              <el-color-picker v-model="settingsForm.color3" show-alpha size="medium"></el-color-picker>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- notification settings -->
    <div class="col-lg-3 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5><i class="fas fa-bell mr-2"></i> Notification Settings</h5>
          <hr>
          <label style="width:100%;">
            Email alerts
            <el-switch v-model="settingsForm.receiveEmail" class="mb-2 float-right"></el-switch>
          </label>
          <el-input placeholder="Email" class="mb-2" v-model="settingsForm.user.email" :disabled="user.role.isOwner == false"></el-input>
          <hr>
          <div v-if="options.receiveSMS">
            <label style="width:100%;">
              SMS Alerts
              <el-popover
                  placement="bottom"
                  title=""
                  width="300"
                  trigger="hover"
                  v-if="purchased.receiveSMS == false"
              >
                <div>
                  <h5>SMS</h5>
                  <img src="https://picsum.photos/300/200" class="img-fluid">
                  <p>This is a paid feature, some examples, images and links</p>
                  <div class="flex-container">
                    <router-link to="/upgrades/modules" class="btn btn-info btn-sm">view modules</router-link>
                    <router-link to="/upgrades/packages" class="btn btn-primary btn-sm">view packages</router-link>
                  </div>
                </div>
                <span slot="reference" class="paid">(<i class="fas fa-star"></i>)</span>
              </el-popover>
              <el-switch v-model="settingsForm.enableSMSNotification" :disabled="!options.receiveSMS" class="mb-2 float-right"></el-switch>
            </label>
          </div>
          <el-input placeholder="Phone" class="mb-2" v-model="settingsForm.user.mobile" :disabled="(user.role.isOwner  == false) || (settingsForm.enableSMSNotification  === false)"></el-input>
        </div>
      </div>
    </div>


    <hr>

    <div class="col-12 text-right">
      <button class="btn btn-success btn-sm mt-4" @click="onFormSubmit">
        <i class="fas fa-save fa-sm mr-2"></i> {{ $t('pages.editor.common.btnSave') }}
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'General',
  components: {
  },
  data() {
    return {
      options:{
        enableMP:true,
        multilingual:true,
        autoTranslate: true,
        enablePayment:true,
        receiveSMS:true,
        weekdays:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        days:[true,true,true,true,true,false,false]
      },
      purchased:{
        enableMP: false,
        multilingual:false,
        autoTranslate: false,
        enablePayment:false,
        receiveSMS:false
      },
      userSettings:{},
      settingsForm:{
        enableWebpage:false,
        url:'',
        enableMP:false,
        appID: '',
        mpTitle:'',
        uploadUriLogo:'',
        multilingual:false,
        autoTranslate:false,
        enablePayment:false,
        enableSMSNotification:false,
        paymentVendorCode:'',
        company:{
          name:'',
          telephone1:'',
          telephone2:'',
          address:'',
          additional:'',
          zip:''
        },
        hours:{
          monday:[],
          tuesday:[],
          wednesday:[],
          thursday:[],
          friday:[],
          saturday:[],
          sunday:[]
        },
        color1:'rgba(19, 206, 102, 0.8)',
        color2:'rgba(19, 206, 102, 0.8)',
        color3:'rgba(19, 206, 102, 0.8)',
        user:{
          email:'mail@vincentbrand.com',
          mobile:15026751094
        }
      },
      user:{
        role:{
          isOwner:true
        }
      }
    }
  },
  watch:{
    // add url to watch
  },
  methods:{
    onFormSubmit(){
      if(this.dataIndentical()){
        this.$message({
          type: 'warning',
          message: 'No saving needed, Data Identical'
        });
      }else{

        // post to API and return error or success message

        this.$message({
          type: 'success',
          message: 'Settings Succesfully Stored'
        });
      }

    },
    dataIndentical(){
      if(JSON.stringify(this.userSettings) === JSON.stringify(this.settingsForm)){
        return true;
      }else{
        return false;
      }
    },
    async copyUrl(){
      try {
        await navigator.clipboard.writeText(this.settingsForm.url);
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
    // grab data object from database
    this.userSettings ={
      enableWebpage:true,
      url:'http://www.ripple.com/ripple',
      enableMP:false,
      appID: 'RippleAPPID',
      mpTitle:'Fuck Yeah',
      uploadUriLogo:'',
      multilingual:true,
      autoTranslate:true,
      enablePayment:true,
      enableSMSNotification:true,
      paymentVendorCode:'HelloVendor',
      company:{
      name:'ripple',
        telephone1:'15026751094',
        telephone2:'',
        address:'Huashan Road 1615',
        additional:'Apt 2210',
        zip:'211111'
      },
      hours:{
        monday:[],
            tuesday:[],
            wednesday:[],
            thursday:[],
            friday:[],
            saturday:[],
            sunday:[]
      },
      color1:'rgba(56, 107, 231, 1)',
      color2:'rgba(29, 106, 102, 1)',
      color3:'rgba(19, 206, 98, 1)',
      user:{
        email:'mail@vincentbrand.com',
        mobile:15026751094
      }
    };
    Object.assign(this.settingsForm, this.userSettings);
    this.url = 'http://www.ripple.com/'+this.companyName
  }
}
</script>

<style>
label{
  width:200px;
}
.example-url{
  padding:10px 20px;
  border:1px dotted #ccc;
  background: rgba(0,0,0,0.02);
  font-style: italic;
  color:#666;
  margin:10px 0;
}
.example-url-disabled{
  padding:10px 20px;
  border:1px dotted #ccc;
  background: rgba(0,0,0,0.02);
  font-style: italic;
  color:#ccc;
  text-align: center;
  margin:10px 0;
}


.legal-comment{
  font-size: 0.8em;
  font-style: italic;
  color:#ccc;
}


.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 220px;
}

.overwriteHours{
  width:100% !important;
}

.labelDay{
  font-size: 0.9em;
  color:#666;
  margin:0;
  padding:0;
}
.color-title{
  text-align: center;
  font-size: 0.8em;
  font-weight: bold;
  color:#666;
}
.paid{
  color:goldenrod;
}
.el-color-picker__trigger{
  width: 40px !important;
}

.flex-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .flex-item{
    flex: 1 0 20%;
    margin: 5px;
  }
}
</style>
