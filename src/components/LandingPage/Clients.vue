<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
      
           <b-colxx xxs="12" class="p-0 clients-carousel">
            <swiper :options="swiperIconsOption" ref="swiperIcons" >
                <swiper-slide  v-for="(item,index) in data" :key="index" class="pr-3 pl-3 d-flex">
                    <div class="pr-3 pl-3 text-center m-auto">
                        <img :alt="item.title" class="img-fluid" :src="item.img" />
                    </div>
                </swiper-slide>
            </swiper>
           </b-colxx>
        </b-row>
    </b-container>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Stars from 'components/Common/Stars';

import 'swiper/dist/css/swiper.css'
export default {
    props:['title','detail','data'],
    components:{
        swiper,
        swiperSlide,
        Stars
    },
    data(){
        return{
            swiperIconsOption: {
            slidesPerView: 6,
            breakpoints: {
                    0: {slidesPerView:1},
                    576: {slidesPerView:1},
                    768: {slidesPerView:2},
                    992: {slidesPerView:4},
                    1440: {slidesPerView:5},
                },
            },
        }
    }
}
</script>

