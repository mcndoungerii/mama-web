<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.contact.title')" :detail="$t('lp.contact.detail')"/>
        </div>
        <div class="section" id="firstContent">
            <b-container>
                <b-row>
                    <b-colxx class="mb-5" xxs="12" lg="7">
                        <h2>{{$t('lp.contact.form-title')}}</h2>
                        <b-card :title="$t('lp.contact.reach-us')">
                            <b-form >
                                <label class="form-group has-top-label">
                                    <b-input type="text" class="form-control" v-model="name"/>
                                    <span>{{ $t('lp.contact.form-name') }}</span>
                                </label>
                                <label class="form-group has-top-label">
                                    <b-input type="email" class="form-control" v-model="email"/>
                                    <span>{{ $t('lp.contact.form-email') }}</span>
                                </label>
                                 <label class="form-group has-top-label">
                                    <b-textarea  class="form-control" v-model="message" :max-rows="4" :rows="4"/>
                                    <span>{{ $t('lp.contact.form-message') }}</span>
                                </label>
                                <state-button class="float-right" id="successButton" variant="primary" :click="contactFormSend">{{ $t('lp.contact.form-send') }}</state-button>
                            </b-form>
                        </b-card>
                    </b-colxx>
                    <b-colxx class="mb-5" xxs="12" lg="4" offset-lg="1">
                        <h2>{{$t('lp.contact.info-title')}}</h2>
                        <p class="text-primary mb-2">{{$t('lp.contact.info-address')}}</p>
                        <p class="mb-3 mb-md-5">35 Little Russell St Bloomsbury London<br />WC1A 2HH UK</p>
                        <p class="text-primary mb-2">{{$t('lp.contact.info-phone')}}</p>
                        <p class="mb-0">+00 42 287 2686</p>
                        <p class="mb-3 mb-md-5">+00 42 287 2685</p>
                        <p class="text-primary mb-2">{{$t('lp.contact.info-email')}}</p>
                        <p class="mb-0">info@woodentoys.com</p>
                    </b-colxx>
                </b-row>
            </b-container>
        </div>
        
        <div class="section background background-no-bottom mb-0">
            <piaf-connect-with-us :title="$t('lp.connect.title')" :detail="$t('lp.connect.detail')" :data="connectIcons"/>
        </div>
        <div class="section footer mb-0">
            <piaf-footer />
        </div>
    </div>
</template>
<script>
import PiafHeroSub from 'components/LandingPage/HeroSub'
import PiafFooter from 'containers/LandingPage/Footer'
import PiafConnectWithUs from 'components/LandingPage/ConnectWithUs'
import StateButton from "components/common/StateButton";

import connectIcons from 'data/lp.connectIcons'
export default {
    components:{
        PiafHeroSub,
        StateButton,
        PiafConnectWithUs,
        PiafFooter
    },
    data(){
        return{
            name:"",
            email:"",
            message:"",
            connectIcons
        }
    },
    methods:{
        contactFormSend() {
            return new Promise((success, fail) => {
                setTimeout(() => {
                success("Thank you! Your message has been successfully sent.");
                }, 2000);
            });
            },
    }
}
</script>


