<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
      
           <b-colxx xxs="12" class="p-0 review-carousel">
            <swiper :options="swiperIconsOption" ref="swiperIcons" >
                <swiper-slide  v-for="(item,index) in data" :key="index" class="pr-3 pl-3 d-flex">
                    <b-card no-body>
                        <b-card-body class="text-center pt-5 pb-5">
                            <div>
                                <img :alt="item.name" class="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail mx-auto" :src="item.img" />
                                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-3">{{item.name}}</h5>
                                <stars :value="item.rate" :disabled=true></stars>
                                <p class="text-muted text-small">{{item.type}}</p>
                            </div>
                            <div class="pl-3 pr-3 pt-3 pb-0 flex-grow-1 d-flex align-items-center">
                                <p class="mb-0 detail-text">{{item.detail}}</p>
                            </div>
                        </b-card-body>
                    </b-card>
                </swiper-slide>
            </swiper>
             <div class="text-center slider-nav">
                <button class="left-arrow btn btn-link swiper-review-prev"><i class="simple-icon-arrow-left"></i></button>
                <div class="slider-dot-container swiper-review-nav"></div>
                <button class="left-arrow btn btn-link swiper-review-next"><i class="simple-icon-arrow-right"></i></button>
            </div>

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
            slidesPerView: 4,
          breakpoints: {
                0: {slidesPerView:1},
                768: {slidesPerView:1},
                1200: {slidesPerView:2},
                1440: {slidesPerView:3},
            },
                 pagination: {
            el: '.swiper-review-nav',
            clickable: true,
            bulletClass :'slider-dot',
            bulletActiveClass :'active',
            dynamicBullets: true,
            renderBullet(index, className) {
              return `<button class="${className}"></button>`
            }
          },
           navigation: {
            nextEl: '.swiper-review-next',
            prevEl: '.swiper-review-prev'
          },
            },
        }
    }
}
</script>

