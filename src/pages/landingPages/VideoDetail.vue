<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.videodetails.title')" :detail="$t('lp.videodetails.detail')"/>
        </div>
        <div class="section" id="firstContent">
            <b-container>
                <b-row>
                    <b-colxx xxs="12" lg="7">
                        <b-card no-body>
                            <b-card-body class="p-0">
                                <piaf-video-player :options="videoJsOptions"/>
                            </b-card-body>
                        </b-card>
                        <p class="mt-5 mb-0" v-html="$t('lp.blogdetail.content')"></p>
                    </b-colxx>
                    <piaf-sidebar/>                    
                </b-row>
            </b-container>
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
import PiafVideoPlayer from 'components/Common/VideoPlayer'
import PiafNewsletter from 'containers/LandingPage/Newsletter'
import PiafFooter from 'containers/LandingPage/Footer'
import PiafSidebar from 'containers/LandingPage/Sidebar'

export default {
    components:{
        PiafHeroSub,
        PiafVideoPlayer,
        PiafSidebar,
        PiafNewsletter,
        PiafFooter
    },
    data(){
        return{
            videoJsOptions : {
                autoplay: false,
                controls: true,
                class: "blog-video",
                poster: "/assets/img/landing-page/subpage-video-poster.jpg",
                sources: [{
                    src: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
                    type: 'video/mp4'
                }]
            }
        }
    },
    methods: {
        
    }
}
</script>