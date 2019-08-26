<template>
<div class="section home subpage-long">
<b-container>
    <b-row class="home-row mb-0">
        <b-colxx xxs="12" lg="6" xl="4" md="12">
            <div class="home-text">
                <div class="display-1">{{ $t('lp.confirmation.title') }}</div>
                <p class="white ">{{ $t('lp.confirmation.detail-1') }}<br /><br/>{{ $t('lp.confirmation.detail-2') }}
                    <router-link tag="a" to="/docs"  class="white-underline-link">{{ $t('lp.confirmation.link') }}</router-link>.
                </p>
                <p class=" mb-5">
                    <b-button variant="empty" href="/multipage-home" class="btn-outline-semi-light mt-4" size="xl">{{ $t('lp.confirmation.home') }}</b-button>
                </p>
            </div>
        </b-colxx>
    </b-row>
</b-container>
</div>
</template>
<script>
export default {
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

