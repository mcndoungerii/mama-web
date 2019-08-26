<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.docs.title')" :detail="$t('lp.docs.detail')">
                <div class="doc-search">
                    <input :placeholder="$t('lp.docs.search')" />
                    <span class="search-icon"><i class="simple-icon-magnifier"></i></span>
                </div>
            </piaf-hero-sub>
        </div>
        <div class="section" id="firstContent">
            <b-container>
                <piaf-doc-list :data="docItems"/>
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
import PiafDocList from 'components/LandingPage/DocList'
import PiafNewsletter from 'containers/LandingPage/Newsletter'
import PiafFooter from 'containers/LandingPage/Footer'

import docItems from 'data/lp.docs'

export default {
    components:{
        PiafHeroSub,
        PiafDocList,
        PiafNewsletter,
        PiafFooter
    },
    data(){
        return{
            docItems,
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


