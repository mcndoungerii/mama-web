<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.pricing.title')" :detail="$t('lp.pricing.detail')"/>
        </div>
        <div class="section" id="firstContent">
         <piaf-feature-icons :title="$t('lp.icons.title')" :detail="$t('lp.icons.detail')" :data="featureIcons"/>
        </div>
        <div class="section background">
         <piaf-feature-screens :title="$t('lp.screens.title')" :detail="$t('lp.screens.detail')" :data="featureScreens"/>
        </div>
        <div class="section">
            <piaf-features :title="$t('lp.featuressection.title')" :detail="$t('lp.featuressection.detail')" :data="features"/>
        </div>
        <div class="section background background-no-bottom mb-0">
            <piaf-offer />
        </div>
        <div class="section footer mb-0">
            <piaf-footer />
        </div>
    </div>
</template>
<script>
import PiafHeroSub from 'components/LandingPage/HeroSub'
import PiafFeatureIcons from 'components/LandingPage/FeatureIcons'
import PiafFeatureScreens from 'components/LandingPage/FeatureScreens'
import PiafFeatures from 'components/LandingPage/Features'
import PiafOffer from 'containers/LandingPage/Offer'
import PiafFooter from 'containers/LandingPage/Footer'

import featureIcons from 'data/lp.featureIcons'
import featureScreens from 'data/lp.featureScreens'
import features from 'data/lp.features'

export default {
    components:{
        PiafHeroSub,
        PiafFeatureIcons,
        PiafFeatureScreens,
        PiafFeatures,
        PiafOffer,
        PiafFooter
    },
    data(){
        return{
            featureIcons,
            featureScreens,
            features
        }
    },
    methods: {
        
    }
}
</script>