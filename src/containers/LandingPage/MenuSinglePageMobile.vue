<template>
    <div class="mobile-menu" @mouseenter="isMenuOver=true" @mouseleave="isMenuOver=false"  @touchstart="isMenuOver=true">
        <a class="logo-mobile" href="/singlepage-home" @click.prevent="scrollToContent('body')">
             <span />
        </a>
        <b-nav class="navbar-nav">
            <b-nav-item @click.prevent="scrollToContent('#firstContent')">{{ $t("lp.menu.features") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#reviews')">{{ $t("lp.menu.reviews") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#pricing')">{{ $t("lp.menu.pricing") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#blog')">{{ $t("lp.menu.blog") }}</b-nav-item>
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
        scrollToContent(el){
            scrollTo(el,{offset:-25})
            this.isMenuOver=false;
            this.closeMobileMenu()
        },
        closeMobileMenu(){
            if(!this.isMenuOver)
            {
                this.$emit('close-mobile-menu')
            }
        },
        addEventListener(){
            document.addEventListener("click",this.closeMobileMenu)
            document.addEventListener("touchstart",this.closeMobileMenu)
        },
        removeEventListener(){
            document.removeEventListener("click",this.closeMobileMenu)
            document.removeEventListener("touchstart",this.closeMobileMenu)
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
            window.scrollTo(0, top);
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
