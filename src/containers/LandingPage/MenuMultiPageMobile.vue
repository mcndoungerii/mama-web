<template>
    <div class="mobile-menu" @mouseenter="isMenuOver=true" @mouseleave="isMenuOver=false"  @touchend="isMenuOver=true">
        <router-link tag="a" class="logo-mobile" to="/multipage-home">
             <span />
        </router-link>
        <b-nav class="navbar-nav">
            <b-nav-item :class="{'active':currentPath=='/features'}" to="/features">{{ $t("lp.menu.features") }}</b-nav-item>
            <b-nav-item-dropdown :class="{'active':currentPath=='/docs' || currentPath=='/videos' || currentPath=='/contact'}"
                 :text="$t('lp.menu.learn')"  right>
                <b-dropdown-item to="/docs">{{ $t("lp.menu.docs") }}</b-dropdown-item>
                <b-dropdown-item to="/videos">{{ $t("lp.menu.videos") }}</b-dropdown-item>
                <b-dropdown-item to="/contact">{{ $t("lp.menu.help") }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item :class="{'active':currentPath=='/prices'}" to="/prices">{{ $t("lp.menu.pricing") }}</b-nav-item>
            <b-nav-item :class="{'active':currentPath=='/blog'}" to="/blog">{{ $t("lp.menu.blog") }}</b-nav-item>
            <b-nav-item>
                <div class="separator" />
            </b-nav-item>
            <b-nav-item :class="{'active':currentPath=='/auth-login'}" to="/auth-login">{{ $t("lp.menu.signin") }}</b-nav-item>
            <b-nav-item :class="{'active':currentPath=='/auth-register'}" to="/auth-register">{{ $t("lp.menu.signup") }}</b-nav-item>
        </b-nav>
    </div>
</template>
<script>
import {scroller} from 'vue-scrollto/src/scrollTo'
const scrollTo = scroller()
export default {
    props:['isOpen'],
    data(){
        return{
            currentPath:"",
            isMenuOver:false
        }
    },
    methods:{
        closeMobileMenu(){
            if(!this.isMenuOver)
            {
                this.$emit('close-mobile-menu')
            }
        },
        addEventListener(){
            document.addEventListener("click",this.closeMobileMenu)
        },
        removeEventListener(){
            document.removeEventListener("click",this.closeMobileMenu)
        }
    },
    mounted(){
        this.currentPath=this.$route.path;
    },
    beforeDestroy(){
        this.removeEventListener()
    },
    watch: {
    '$route' (to, from) {
        if(to.path!==from.path)
        {
            this.currentPath =to.path;
            scrollTo('body')
            this.isMenuOver=false;
            this.closeMobileMenu()
        }
    },
    isOpen(val){
        if(val){
            this.addEventListener()
        }else{
            this.removeEventListener()
        }
    }
  }
    
}
</script>
