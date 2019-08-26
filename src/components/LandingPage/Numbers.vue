<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row class="mt-5">
           <b-colxx xxs="12" class="pl-0 pr-0 mb-5 home-carousel">
            <swiper :options="swiperIconsOption" ref="swiperIcons" >
                <swiper-slide  v-for="(item,index) in data" :key="index">
                    <div class="pr-3 pl-3">
                        <b-card  class="text-center">
                            <div>
                                <i :class="`${item.icon} large-icon`"></i>
                                <h5 class="mb-3">{{item.title}}</h5>
                            </div>
                        </b-card>
                    </div>
                </swiper-slide>
            </swiper>
           </b-colxx>
        </b-row>
    </b-container>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    props:['title','detail','data'],
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
        }
    }
}
</script>

