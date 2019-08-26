<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.about.title')" :detail="$t('lp.about.detail')"/>
        </div>
        <div class="section" id="firstContent">
            <piaf-timeline :title="$t('lp.timeline.title')" :detail="$t('lp.timeline.detail')" :data="timelineItems"/>
        </div>
        <div class="section background">
            <piaf-values :title="$t('lp.values.title')" :detail="$t('lp.values.detail')" :data="valuesItems"/>
        </div>
        <div class="section">
            <piaf-numbers :title="$t('lp.numbers.title')" :detail="$t('lp.numbers.detail')" :data="numbersItems"/>
        </div>
        <div class="section background background-no-bottom mb-0">
            <piaf-newsletter />
        </div>
        <div class="section footer mb-0">
            <piaf-footer />
        </div>
    </div>
</template>
<script>
import PiafHeroSub from 'components/LandingPage/HeroSub'
import PiafTimeline from 'components/LandingPage/Timeline'
import PiafValues from 'components/LandingPage/Values'
import PiafNumbers from 'components/LandingPage/Numbers'
import PiafNewsletter from 'containers/LandingPage/Newsletter'
import PiafFooter from 'containers/LandingPage/Footer'

import timelineItems from 'data/lp.timeline'
import valuesItems from 'data/lp.values'
import numbersItems from 'data/lp.numbers'

export default {
    components:{
        PiafHeroSub,
        PiafTimeline,
        PiafValues,
        PiafNumbers,
        PiafNewsletter,
        PiafFooter
    },
    data(){
        return{
            timelineItems,
            valuesItems,
            numbersItems
        }
    }

}
</script>

