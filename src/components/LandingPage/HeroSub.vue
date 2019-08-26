<template>
    <b-container>
        <b-row class="home-row">
            <b-colxx xxs="12" xl="5" lg="12">
                <div class="home-text">
                    <div class="display-1">{{title}}</div>
                    <p class="white mb-5">{{detail}}</p>
                    <slot></slot>
                </div>
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
export default {
    props:['title','detail'],
    data(){
        return{
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

