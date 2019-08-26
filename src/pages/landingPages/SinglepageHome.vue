<template>
<div :class="{'landing-page':true, 'show-mobile-menu':isMobileMenuOpen}">
    <menu-single-page-mobile @close-mobile-menu="isMobileMenuOpen=false" :is-open="isMobileMenuOpen"/>
    <div class="main-container">
        <div class="landing-page-nav">
            <menu-single-page @toggle-mobile-menu="mobileMenuToggle"/>
        </div>
        <div class="content-container">
        <div class="section home">
            <piaf-hero-home :title="$t('lp.hero.title')" :detail="$t('lp.hero.detail')" :data="homeIcons" :button-text="$t('lp.hero.register')" url="/auth-register" img="/assets/img/landing-page/home-hero.png"/>
        </div>
        <div class="section" id="firstContent">
            <piaf-features :title="$t('lp.featuressection.title')" :detail="$t('lp.featuressection.detail')" :data="features"/>
        </div>

        <div class="section background" id="reviews">
            <piaf-client-reviews :title="$t('lp.reviews.title')" :detail="$t('lp.reviews.detail')" :data="reviews"/>
        </div>

        <div class="section" id="pricing">
            <piaf-pricing-table :title="$t('lp.pricetable.title')" :detail="$t('lp.pricetable.detail')" :data="pricingOptions"/>
        </div>
        
         <div class="section background background-no-bottom mb-0"  id="blog">
            <piaf-latest-from-blog :title="$t('lp.blogsection.title')" :detail="$t('lp.blogsection.detail')" :data="blogs"/>
        </div>

        <div class="section footer mb-0">
            <piaf-footer />
        </div>
    </div>
  </div>
</div>
</template>
<script>
import MenuSinglePage from 'containers/LandingPage/MenuSinglePage'
import MenuSinglePageMobile from 'containers/LandingPage/MenuSinglePageMobile'

import PiafHeroHome from 'components/LandingPage/HeroHome'
import PiafFeatures from 'components/LandingPage/Features'
import PiafClientReviews from 'components/LandingPage/ClientReviews'
import PiafPricingTable from 'components/LandingPage/PricingTable'
import PiafLatestFromBlog from 'components/LandingPage/LatestFromBlog'
import PiafFooter from 'containers/LandingPage/Footer'

import homeIcons from 'data/lp.homeIcons'
import features from 'data/lp.features'
import reviews from 'data/lp.reviews'
import pricingOptions from 'data/lp.pricingOptions'
import blogs from 'data/lp.blogs'

export default {
    components:{
        MenuSinglePage,
        MenuSinglePageMobile,
        PiafHeroHome,
        PiafFeatures,
        PiafClientReviews,
        PiafPricingTable,
        PiafLatestFromBlog,
        PiafFooter
    },
    data(){
        return{
            isMobileMenuOpen:false,
            homeIcons,
            features,
            reviews,
            pricingOptions,
            blogs:blogs.slice(0,4)
        }
    },
    methods: {
          mobileMenuToggle(){
            this.isMobileMenuOpen=!this.isMobileMenuOpen
        }
    }
}
</script>