<template>
    <div>
        <div class="section home">
            <piaf-hero-home :title="$t('lp.hero.title')" :detail="$t('lp.hero.detail')" :data="homeIcons" :button-text="$t('lp.hero.register')" url="/auth-register" img="/assets/img/landing-page/home-hero.png"/>
        </div>
        <div class="section" id="firstContent">
            <piaf-features :title="$t('lp.featuressection.title')" :detail="$t('lp.featuressection.detail')" :data="features"/>
        </div>

        <div class="section background">
            <piaf-client-reviews :title="$t('lp.reviews.title')" :detail="$t('lp.reviews.detail')" :data="reviews"/>
        </div>

        <div class="section">
            <piaf-team :title="$t('lp.team.title')" :detail="$t('lp.team.detail')" :data="team"/>
        </div>
        
         <div class="section background background-no-bottom mb-0">
            <piaf-clients :title="$t('lp.clients.title')" :detail="$t('lp.clients.detail')" :data="clients"/>
        </div>

        <div class="section footer mb-0">
            <piaf-footer />
        </div>
    </div>
</template>
<script>
import PiafHeroHome from 'components/LandingPage/HeroHome'
import PiafFeatures from 'components/LandingPage/Features'
import PiafClientReviews from 'components/LandingPage/ClientReviews'
import PiafTeam from 'components/LandingPage/Team'
import PiafClients from 'components/LandingPage/Clients'
import PiafFooter from 'containers/LandingPage/Footer'

import homeIcons from 'data/lp.homeIcons'
import features from 'data/lp.features'
import reviews from 'data/lp.reviews'
import team from 'data/lp.team'
import clients from 'data/lp.clients'

export default {
    components:{
        PiafHeroHome,
        PiafFeatures,
        PiafClientReviews,
        PiafTeam,
        PiafClients,
        PiafFooter
    },
    data(){
        return{
            homeIcons,
            features,
            reviews,
            team,
            clients
        }
    },
    methods: {
        
    }
}
</script>