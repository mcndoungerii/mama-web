<template>
    <div>
        <b-container>
        <b-row class="footer-row">
            <b-colxx xxs="12" class="text-right">
                <a class="btn btn-circle btn-outline-semi-light footer-circle-button" href="#"  v-scroll-to="scrollToTopOptions">
                    <i class="simple-icon-arrow-up"></i>
                </a>
            </b-colxx>
            <b-colxx xxs="12" class="text-center footer-content">
                <router-link tag="a" to="/multipage-home">
                    <img class="footer-logo" alt="footer logo" src="/assets/img/landing-page/logo-footer.svg" />    
                </router-link>
            </b-colxx>
        </b-row>
        <b-row>
            <b-colxx xxs="12" offset-xxs="0" xs="6" sm="3" lg="2" offset-lg="2" class="footer-menu mb-5">
                <div class="d-flex flex-column align-items-center">
                    <router-link to="#" class="d-inline-block d-xs-none collapse-button mb-1" v-b-toggle.accordion1>
                        {{ $t('lp.footer.menu-1') }} <i class="simple-icon-arrow-down"></i>
                    </router-link>
                    <b-collapse id="accordion1" accordion="my-accordion" tag="ul" :is-nav="true" class="list-unstyled footer-menu d-xs-block mb-0">
                        <li class="d-none d-xs-inline-block"><p>{{$t('lp.footer.menu-1')}}</p></li>
                        <router-link tag="li" to="/about"><a>{{$t('lp.footer.menu-1-1')}}</a></router-link>
                        <router-link tag="li" to="/blog"><a>{{$t('lp.footer.menu-1-2')}}</a></router-link>
                        <router-link tag="li" to="/careers"><a>{{$t('lp.footer.menu-1-3')}}</a></router-link>
                        <router-link tag="li" to="/contact"><a>{{$t('lp.footer.menu-1-4')}}</a></router-link>
                    </b-collapse>
                </div>
            </b-colxx>
            <b-colxx xxs="12" offset-xxs="0" xs="6" sm="3" lg="2" class="footer-menu mb-5">
                <div class="d-flex flex-column align-items-center">
                    <router-link to="#" class="d-inline-block d-xs-none collapse-button mb-1" v-b-toggle.accordion2>
                        {{ $t('lp.footer.menu-2') }} <i class="simple-icon-arrow-down"></i>
                    </router-link>
                    <b-collapse id="accordion2" accordion="my-accordion" tag="ul" :is-nav="true" class="list-unstyled footer-menu d-xs-block mb-0">
                        <li class="d-none d-xs-inline-block"><p>{{$t('lp.footer.menu-2')}}</p></li>
                        <router-link tag="li" to="/features"><a>{{$t('lp.footer.menu-2-1')}}</a></router-link>
                        <router-link tag="li" to="/prices"><a>{{$t('lp.footer.menu-2-2')}}</a></router-link>
                        <router-link tag="li" to="/docs"><a>{{$t('lp.footer.menu-2-3')}}</a></router-link>
                        <router-link tag="li" to="/docs-detail"><a>{{$t('lp.footer.menu-2-4')}}</a></router-link>
                    </b-collapse>
                </div>
            </b-colxx>
            <b-colxx xxs="12" offset-xxs="0" xs="6" sm="3" lg="2" class="footer-menu mb-5">
                <div class="d-flex flex-column align-items-center">
                    <router-link to="#" class="d-inline-block d-xs-none collapse-button mb-1" v-b-toggle.accordion3>
                        {{ $t('lp.footer.menu-3') }} <i class="simple-icon-arrow-down"></i>
                    </router-link>
                    <b-collapse id="accordion3" accordion="my-accordion" tag="ul" :is-nav="true" class="list-unstyled footer-menu d-xs-block mb-0">
                        <li class="d-none d-xs-inline-block"><p>{{$t('lp.footer.menu-3')}}</p></li>
                        <router-link tag="li" to="/contact"><a>{{$t('lp.footer.menu-3-1')}}</a></router-link>
                        <router-link tag="li" to="/docs-detail"><a>{{$t('lp.footer.menu-3-2')}}</a></router-link>
                        <router-link tag="li" to="/docs"><a>{{$t('lp.footer.menu-3-3')}}</a></router-link>
                        <router-link tag="li" to="/videos"><a>{{$t('lp.footer.menu-3-4')}}</a></router-link>
                    </b-collapse>
                </div>
            </b-colxx>
            <b-colxx xxs="12" offset-xxs="0" xs="6" sm="3" lg="2" class="footer-menu mb-5">
                <div class="d-flex flex-column align-items-center">
                    <router-link to="#" class="d-inline-block d-xs-none collapse-button mb-1" v-b-toggle.accordion4>
                        {{ $t('lp.footer.menu-4') }} <i class="simple-icon-arrow-down"></i>
                    </router-link>
                    <b-collapse id="accordion4" accordion="my-accordion" tag="ul" :is-nav="true" class="list-unstyled footer-menu d-xs-block mb-0">
                        <li class="d-none d-xs-inline-block"><p>{{$t('lp.footer.menu-4')}}</p></li>
                        <router-link tag="li" to="/content"><a>{{$t('lp.footer.menu-4-1')}}</a></router-link>
                        <router-link tag="li" to="/content"><a>{{$t('lp.footer.menu-4-2')}}</a></router-link>
                        <router-link tag="li" to="/content"><a>{{$t('lp.footer.menu-4-3')}}</a></router-link>
                    </b-collapse>
                </div>
            </b-colxx>


        </b-row>
    </b-container>
    <div class="separator mt-5"></div>
    <b-container class="copyright pt-5 pb-5">
        <b-row>
            <b-colxx xxs="6">
                <p class="mb-0">{{$t('lp.footer.copyright')}}</p>
            </b-colxx>
            <b-colxx xxs="6" class="text-right social-icons">
                <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                        <a href="#"><i class="simple-icon-social-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"><i class="simple-icon-social-twitter"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"><i class="simple-icon-social-instagram"></i></a>
                    </li>
                </ul>
            </b-colxx>
        </b-row>
    </b-container>
    </div>

</template>
<script>
export default {
    data(){
        return{
            scrollToTopOptions: {
                el: 'body',
                container: "body",
                duration: 500,
                easing: "ease-in",
                offset: 0,
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
            var rowOffestFooter = document.querySelector(".footer-row").offsetLeft;
            document.querySelector(".landing-page .section.footer").style.backgroundPositionX=(window.outerWidth - rowOffestFooter - 1668) + "px";
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
