<template>
<div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
          
          <!--<div id="waterHolder"></div> -->
          <div id="frontpage-logo"></div>

      </div>
      <div class="col-md-8 col-lg-6">

        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                
                 <div class="logo-holder">
                    <img src="../../assets/img/full-logo.png" class="img-fluid"> 
                 </div>
                 <h3 class="login-heading mb-4">{{$t('login.msg')}}</h3>

                 <hr>

                 <h1 class="h4 mb-2">{{$t('login.forgotMsg.hint')}}</h1>

                 <p class="mb-4">
                   {{$t('login.forgotMsg.start')}}
                 </p>

                 <form @submit.prevent="goForgot">
                  <div class="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Username" required="" autofocus="">
                    <label for="inputEmail">Email</label>
                  </div>

                  <button :disabled='disabled' class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" >
                    <b-spinner v-if="disabled" style="color: #fff" small label="Spinning"></b-spinner>
                    {{$t('login.forgotMsg.btn')}}</button>

                  <hr>
                  <div class="text-center">
                    <router-link class="small a-ripple" to="/login">{{$t('login.forgotMsg.already')}}</router-link>
                    
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lang-login">
        <i class="fas fa-globe-asia"></i>
        <span @click="tabZH">中文</span>/
        <span @click="tabEN">English</span>
      </div>

      
</div>

</template>

<script>

export default {
  name: 'forgot',
  data () {
    return {
      formData: {
        username: '',
        password: '',
        text: ''
      },
      disabled: false
    }
  },
  components: {
  },
  methods: {
    tabEN () {
      this.$i18n.locale = 'en'
      this.$cookie.set('lang', 'en')
    },
    tabZH () {
      this.$i18n.locale = 'zh'
      this.$cookie.set('lang', 'zh')
    },
    goForgot () {

    }
  },
}
</script>
<style lang="less" >

</style>
