<template>
<div :class="{'landing-page':true, 'show-mobile-menu':isMobileMenuOpen}">
    <menu-multi-page-mobile @close-mobile-menu="isMobileMenuOpen=false" :is-open="isMobileMenuOpen"/>
    <div class="main-container">
        <div class="landing-page-nav">
            <menu-multi-page @toggle-mobile-menu="mobileMenuToggle"/>
        </div>
        <div class="content-container">
            <router-view/>
        </div>
    </div>
</div>
</template>
<script>

import MenuMultiPage from 'containers/LandingPage/MenuMultiPage'
import MenuMultiPageMobile from 'containers/LandingPage/MenuMultiPageMobile'
export default {
    components:{
        MenuMultiPage,
        MenuMultiPageMobile
    },
    data(){
        return{
            isMobileMenuOpen:false
        }
    },
    methods:{
        mobileMenuToggle(){
            this.isMobileMenuOpen=!this.isMobileMenuOpen
        }
    }
    
}
</script>

