<template>
  <div id="app-container" :class="getMenuType">
    <top-nav/>
    <sidebar/>
    <main>
      <div class="container-fluid">
        <router-view/>
      </div>
    </main>
  </div>
</template>
<script>
import Sidebar from "containers/Sidebar";
import TopNav from "containers/TopNav";
import { mapGetters } from "vuex";

export default {
  data() {
    return { show: false };
  },
  components: {
    TopNav,
    Sidebar
  },
  computed: {
    ...mapGetters(["getMenuType", 'loginError'])
  },
    watch:{
        loginError(val){
            if(val!=null){
                this.$notify('error', 'Authentication', val, { duration: 3000, permanent: false });
            }
        }
    }
};
</script>

