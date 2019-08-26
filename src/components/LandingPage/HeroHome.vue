<template>
    <b-container>
        <b-row class="home-row">
            <b-colxx xxs="12" class="d-block d-md-none">
               <img alt="mobile hero" class="mobile-hero" src="/assets/img/landing-page/home-hero-mobile.png"/>
            </b-colxx>
            <b-colxx xxs="12" xl="4" lg="5" md="6">
                <div class="home-text">
                    <div class="display-1" v-html="title"/>
                    <p class="white mb-5" v-html="detail"/>
                    <router-link tag="a" :to="url" class="btn btn-outline-semi-light btn-xl">
                        {{buttonText}}
                    </router-link>
                </div>
            </b-colxx>
            <b-colxx xxs="12" xl="7" offset-xl="1" md="6" lg="7" class="d-none d-md-block">
                <img :alt="buttonText" :src="img" />
            </b-colxx>
        </b-row>
        <b-row>
            <b-colxx xxs="12" class="pl-0 pr-0 mb-5 home-carousel">
                <swiper :options="swiperIconsOption" ref="swiperIcons" >
                    <swiper-slide  v-for="(item,index) in data" :key="index">
                        <div class="pr-3 pl-3">
                            <b-card  class="text-center">
                                <div class="mb-4">
                                    <i :class="`${item.icon} large-icon`"></i>
                                    <h5 class="mb-0 font-weight-semibold">{{item.title}}</h5>
                                </div>
                                <div><p class="detail-text">{{item.detail}}</p></div>
                                <router-link tag="a" :to="item.url" class="btn btn-link font-weight-semibold">{{$t('lp.featurecarousel.view')}}</router-link>
                            </b-card>
                        </div>
                    </swiper-slide>
                </swiper>
            </b-colxx>
        </b-row>
        <b-row>
            <a class="btn btn-circle btn-outline-semi-light hero-circle-button" href="#"  v-scroll-to="scrollOptions">
                <i class="simple-icon-arrow-down"></i>
            </a>
        </b-row>
    </b-container>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    props:['title','detail','img','buttonText','url','data'],
    components:{
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperIconsOption: {
            slidesPerView: 4,
            breakpoints: {
                0: {slidesPerView:1},
                768: {slidesPerView:1},
                1200: {slidesPerView:2},
                1440: {slidesPerView:3},
            }
            },
            scrollOptions: {
                el: '#firstContent',
                container: "body",
                duration: 500,
                easing: "ease-in",
                offset: 55,
                force: true,
                cancelable: true,
                onStart: false,
                onDone: false,
                onCancel: false,
                x: false,
                y: true
            }
        }
    },
      methods:{
        onResizeLandingPage() {
            var rowOffestHome = document.querySelector(".home-row").offsetLeft;
            document.querySelector(".landing-page .section.home").style.backgroundPositionX=rowOffestHome - 252 + "px";
        }
    },
    mounted(){
        this.onResizeLandingPage();
        window.addEventListener("resize", this.onResizeLandingPage);
    },
    beforeDestroy(){
        window.removeEventListener("resize", this.onResizeLandingPage);
    }
}
</script>

