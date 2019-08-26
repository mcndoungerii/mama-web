<template>
<headroom>
<b-container class="d-flex align-items-center justify-content-between">
        <router-link tag="a" class="navbar-logo pull-left" to="/multipage-home">
            <span class="white" />
            <span class="dark" />
        </router-link>
        <b-nav class="navbar-nav d-none d-lg-flex flex-row">
            <b-nav-item :class="{'active':currentPath=='/features'}" to="/features">{{ $t("lp.menu.features") }}</b-nav-item>
            <b-nav-item-dropdown :class="{'active':currentPath=='/docs' || currentPath=='/videos' || currentPath=='/contact'}"
                 :text="$t('lp.menu.learn')"  right ref="haveSubMenu" v-if="showSubMenus">
                <b-dropdown-item to="/docs">{{ $t("lp.menu.docs") }}</b-dropdown-item>
                <b-dropdown-item to="/videos">{{ $t("lp.menu.videos") }}</b-dropdown-item>
                <b-dropdown-item to="/contact">{{ $t("lp.menu.help") }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item :class="{'active':currentPath=='/prices'}" to="/prices">{{ $t("lp.menu.pricing") }}</b-nav-item>
            <b-nav-item :class="{'active':currentPath=='/blog'}" to="/blog">{{ $t("lp.menu.blog") }}</b-nav-item>
            <b-nav-item :class="{'active':currentPath=='/auth-login'}" to="/auth-login">{{ $t("lp.menu.signin") }}</b-nav-item>
            <router-link tag="li"  to="/auth-register" class="nav-item" active-class="">
                <a class="btn btn-outline-semi-light btn-sm pr-4 pl-4">{{ $t("lp.menu.signup") }}</a>
            </router-link>
           
        </b-nav>
         <a href="#" @click.prevent="openMobileMenu" class="mobile-menu-button">
                <i class="simple-icon-menu" />
            </a>
    </b-container>
</headroom>
</template>
<script>
import {scroller} from 'vue-scrollto/src/scrollTo'
const scrollTo = scroller()
import { headroom } from 'vue-headroom'

export default {
    components:{
        headroom,
    },
    data(){
        return{
            currentPath:"",
            showSubMenus:true,
        }
    },
    methods:{
        openMobileMenu(){
            this.$emit('toggle-mobile-menu')
        }
    },
    mounted(){
        this.currentPath=this.$route.path;
    },
    
    watch: {
    '$route' (to, from) {
        if(to.path!==from.path)
        {
            this.showSubMenus=false;
            setTimeout(()=>{
                    this.showSubMenus=true
                },1)
          this.currentPath =to.path;
          scrollTo('body')
        }
    }
  }
}
</script>
