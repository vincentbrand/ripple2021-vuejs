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

                <form @submit.prevent="goLogin">
                  <div class="form-label-group">
                    <input type="email" v-model="formData.username" id="inputEmail" class="form-control" :placeholder="$t('login.name')" required="" autofocus="">
                    <label for="inputEmail">{{$t('login.name')}}</label>
                  </div>

                  <div class="form-label-group">
                    <input v-model="formData.password" type="password" id="inputPassword" class="form-control" :placeholder="$t('login.password')" required="">
                    <label for="inputPassword">{{$t('login.password')}}</label>
                  </div>

                  <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">{{$t('login.remember')}}</label>
                  </div>
                  <button :disabled='disabled' class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" >
                    <b-spinner v-if="disabled" style="color: #fff" small label="Spinning"></b-spinner>
                    {{$t('login.login')}}</button>

                  <div class="">
                    <router-link class="small a-ripple" to="/forgot">{{$t('login.forgot')}}</router-link>
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
  name: 'login',
  data: () => ({
    formData: {
      username: '',
      password: '',
      text: ''
    },
    disabled: false
  }),
  
  methods: {
    tabEN () {
      this.$i18n.locale = 'en'
      this.$cookie.set('lang', 'en')
    },
    tabZH () {
      this.$i18n.locale = 'zh'
      this.$cookie.set('lang', 'zh')
    },
    goLogin () {
      this.disabled = true
      if (this.formData.username=='root@ripple.cn'&&this.formData.password=='123456') {
        setTimeout(() => {
          this.disabled = false
          this.$router.push('/')
        }, 1000)
      } else {
        this.disabled = false
      }

    }
  },
}
</script>
