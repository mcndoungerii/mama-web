<template>
    <b-colxx xxs="12" lg="4" offset-lg="1" class="side-bar">
        <div class="side-bar-content">
            <h2>{{$t('lp.blogsection.title')}}</h2>
            <piaf-sidebar-latest-from-blog v-for="(item,index) in latestBlogPosts" :key="index" :data="item"/>
        </div>
        <div class="side-bar-content">
            <h2>{{ $t('lp.sidebar.tour-title')}}</h2>
            <b-card no-body>
                <b-card-body class="p-0">
                    <div class="position-relative">
                        <piaf-video-player :options="videoJsOptions"/>
                    </div>
                </b-card-body>
            </b-card>
        </div>
        <piaf-recent-review :title="$t('lp.sidebar.review-title')" :data="recentReview"/>
    </b-colxx>
</template>
<script>
import PiafSidebarLatestFromBlog from 'components/LandingPage/SidebarLatestFromBlog'
import PiafVideoPlayer from 'components/Common/VideoPlayer'
import PiafRecentReview from 'components/LandingPage/RecentReview'


import latestBlogPosts from 'data/lp.latestBlogs'
import reviews from 'data/lp.reviews'

export default {
    components:{
        PiafSidebarLatestFromBlog,
        PiafVideoPlayer,
        PiafRecentReview
    },
    data(){
        return{
            latestBlogPosts,
            videoJsOptions: {
                class:'side-bar-video',
                poster: "/assets/img/landing-page/subpage-video-poster.jpg",
                autoplay: false,
                controls: true,
                sources: [{
                    src: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
                    type: 'video/mp4'
                }]
            },
            recentReview:reviews[0]
        }
    }
}
</script>
