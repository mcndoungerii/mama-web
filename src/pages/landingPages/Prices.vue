<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.pricing.title')" :detail="$t('lp.pricing.detail')"/>
        </div>
        <div class="section mb-0" id="firstContent">
            <piaf-pricing-table :title="$t('lp.pricetable.title')" :detail="$t('lp.pricetable.detail')" :data="pricingOptions"/>
        </div>
        <div class="section">
            <piaf-pricing-comparison :title="$t('lp.pricecomparison.title')" :detail="$t('lp.pricecomparison.detail')" :data="pricingOptions"/>
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
import PiafPricingTable from 'components/LandingPage/PricingTable'
import PiafPricingComparison from 'components/LandingPage/PricingComparison'
import PiafOffer from 'containers/LandingPage/Offer'
import PiafFooter from 'containers/LandingPage/Footer'

import pricingOptions from 'data/lp.pricingOptions'

export default {
    components:{
        PiafHeroSub,
        PiafPricingTable,
        PiafPricingComparison,
        PiafOffer,
        PiafFooter
    },
    data(){
        return{
            pricingOptions
        }
    },
    methods: {
        
    }
}
</script>