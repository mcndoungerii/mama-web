<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md=6  class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
          <div class="form-center">
            <router-link tag="a" to="/"><span class="logo-single"/></router-link>
            <h6 class="mb-4">{{ $t('user.register')}}</h6>
            <b-form @submit.prevent="formSubmit">
               <label class="form-group has-float-label mb-4">
                <input type="text" class="form-control" v-model="fullname">
                <span>{{ $t('user.fullname') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="phone" class="form-control" v-model="phone">
                <span>{{ $t('user.phone') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="password" class="form-control" v-model="password">
                <span>{{ $t('user.password') }}</span>
              </label>
              <div class="d-flex justify-content-between align-items-center">
                  <router-link tag="a" to="/user/login">{{ $t('user.already-register-question')}}</router-link>
                  <b-button type="submit" variant="primary" :disabled="processing" size="lg" class="btn-shadow">  <i v-if="processing" class="loader"></i> <span  v-if="!processing">{{ $t('user.register-button')}}</span></b-button>
              </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import { mapGetters, mapMutations,mapActions } from "vuex";
export default {
  data(){
    return{
      fullname:"",
      phone:"",
      password:""
    }
  },
    computed: {
        ...mapGetters(['currentUser','processing','loginError']),
    },
  methods:{
      ...mapActions(["register"]),
    formSubmit() {
        let user = {
            fullName:this.fullname,
            phone: 255 +this.phone.substr(this.phone.length - 9),
            password:this.password,
        }
        this.register(user)

    }
  },
    watch:{
        currentUser(val){
            console.log(val)
            if(val&& val.user){
                setTimeout(()=>{
                    this.$router.push('/')
                },500)
            }
        },
        loginError(val){
            if(val!=null){
                this.$notify('error', 'Registration Error', val, { duration: 3000, permanent: false });
            }
        }
    }
};
</script>
