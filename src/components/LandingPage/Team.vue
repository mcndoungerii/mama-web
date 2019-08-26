<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="4" class="mb-4">
                <h1 v-html="title"/>
                <p v-html="detail"/>
            </b-colxx>
      
           <b-colxx xxs="12" offset-xxs="0" lg="7" offset-lg="1" class="pl-0 pr-0 team-carousel">
            <swiper :options="swiperIconsOption" ref="swiperIcons" >
                <swiper-slide  v-for="(item,index) in data" :key="index" class="pr-3 pl-3 d-flex">
                    <b-card no-body>
                        <div class="position-relative">
                            <img class="card-img-top" :src="item.img" :alt="item.title" />
                            <b-badge :variant="item.badgeColor" pill class="position-absolute badge-top-left">{{item.badge}}</b-badge>
                        </div>
                        <b-card-body>
                           <h6 class="mb-4">{{item.title}}</h6>
                            <footer>
                                <p class="text-muted text-small mb-0 font-weight-light">{{item.job}}</p>
                            </footer>
                        </b-card-body>
                    </b-card>
                </swiper-slide>
            </swiper>
             <div class="text-center slider-nav">
                <button class="left-arrow btn btn-link swiper-team-prev"><i class="simple-icon-arrow-left"></i></button>
                <div class="slider-dot-container swiper-team-nav"></div>
                <button class="left-arrow btn btn-link swiper-team-next"><i class="simple-icon-arrow-right"></i></button>
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
            slidesPerView: 3,
            breakpoints: {
                    0: {slidesPerView:1},
                    576: {slidesPerView:1},
                    1440: {slidesPerView:2},
            },
            pagination: {
                el: '.swiper-team-nav',
                clickable: true,
                bulletClass :'slider-dot',
                bulletActiveClass :'active',
                dynamicBullets: true,
                renderBullet(index, className) {
                return `<button class="${className}"></button>`
                }
            },
            navigation: {
                nextEl: '.swiper-team-next',
                prevEl: '.swiper-team-prev'
            }
        }
        }
    }
}
</script>

