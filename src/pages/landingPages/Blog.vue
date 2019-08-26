<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.blogsection.title')" :detail="$t('lp.blogsection.detail')"/>
        </div>
        <div class="section" id="firstContent">
            <b-container>
                <b-row class="mt-5">
                    <piaf-blog-thumb v-for="(item,index) in blogsItems" :key="index" :data="item"/>
                </b-row>
                <b-row>
                    <b-colxx xxs="12" class="text-center mt-5 mb-5">
                        <b-pagination-nav align="center" :number-of-pages="3"  :link-gen="linkGen" v-model="currentPage" :per-page="5"
                            next-text="<i class='simple-icon-arrow-right' />"
                            prev-text="<i class='simple-icon-arrow-left' />"
                            first-text="<i class='simple-icon-control-start' />"
                            last-text="<i class='simple-icon-control-end' />"
                        />
                    </b-colxx>
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
import PiafBlogThumb from 'components/LandingPage/BlogThumb'
import PiafNewsletter from 'containers/LandingPage/Newsletter'
import PiafFooter from 'containers/LandingPage/Footer'

import blogsItems from 'data/lp.blogs'

export default {
    components:{
        PiafHeroSub,
        PiafBlogThumb,
        PiafNewsletter,
        PiafFooter
    },
    data(){
        return{
            blogsItems,
            currentPage:1
        }
    },
    methods: {
        linkGen(pageNum) {
        return "#page/" + pageNum + "/foobar";
        }
    }
}
</script>


