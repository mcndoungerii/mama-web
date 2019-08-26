<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md="6" class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
        <div class="form-center">
          <router-link tag="a" to="/">
            <span class="logo-single"/>
          </router-link>
          <h6 class="mb-4">{{ $t('user.login-title')}}</h6>
          <b-form @submit.prevent="formSubmit">
            <label class="form-group has-float-label mb-4">
              <input type="phone" class="form-control" v-model="phone">
              <span>{{ $t('user.phone') }}</span>
            </label>
            <label class="form-group has-float-label mb-4">
              <input type="password" class="form-control" v-model="password">
              <span>{{ $t('user.password') }}</span>
            </label>
            <div class="d-flex justify-content-between align-items-center">
              <b-row>
                <b-col>
                  <router-link tag="a" to="/user/register">{{ $t('user.register')}}</router-link>
                </b-col>
                <b-col>
                  <router-link
                    tag="a"
                    to="/user/forgot-password"
                  >{{ $t('user.forgot-password-question')}}</router-link>
                </b-col>
              </b-row>
              <b-button
                type="submit"
                variant="primary"
                size="lg"
                class="btn-shadow"
                :disabled="processing"
              >
                <i v-if="processing" class="loader"></i>
                <span v-if="!processing">{{ $t('user.login-button')}}</span>
              </b-button>
            </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["currentUser", "processing", "loginError"])
  },
  methods: {
    ...mapActions(["login"]),
    formSubmit() {
      this.phone = 255 + this.phone.substr(this.phone.length - 9);
      this.login({ phone: this.phone, password: this.password });
    }
  },
  watch: {
    currentUser(val) {
      if (val && val.user) {
        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      }
    },
    loginError(val) {
      if (val != null) {
        this.$notify("error", "Login Error", val, {
          duration: 3000,
          permanent: false
        });
      }
    }
  }
};
</script>
<style>
.loader {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border-top-color: rgba(0, 0, 0, 0.4);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  left: calc(50%);
  top: calc(50%);
  z-index: 1;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>

