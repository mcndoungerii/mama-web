<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.careers.title')" :detail="$t('lp.careers.detail')"/>
        </div>
        <div class="section" id="firstContent">
           <piaf-career-herd :title="$t('lp.careers-herd.title')" :detail="$t('lp.careers-herd.detail')"/>
        </div>
        
        <div class="section background background-no-bottom mb-0">
           <piaf-open-positions :title="$t('lp.careers-positions.title')" :detail="$t('lp.careers-positions.detail')" :data="openPositions"/>
        </div>
        <div class="section footer mb-0">
            <piaf-footer />
        </div>
    </div>
</template>
<script>
import PiafHeroSub from 'components/LandingPage/HeroSub'
import PiafCareerHerd from 'components/LandingPage/CareerHerd'
import PiafOpenPositions from 'components/LandingPage/OpenPositions'
import PiafFooter from 'containers/LandingPage/Footer'

import openPositions from 'data/lp.openPositions'

export default {
    components:{
        PiafHeroSub,
        PiafCareerHerd,
        PiafOpenPositions,
        PiafFooter
    },
    data(){
        return{
            openPositions
        }
    }
}
</script>


