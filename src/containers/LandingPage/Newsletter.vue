<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{$t('lp.newsletter.title')}}</h1>
                <p>{{$t('lp.newsletter.detail')}}</p>
            </b-colxx>
            <b-colxx xxs="12" lg="6" offset-xxs="0" offset-lg="3" class="newsletter-input-container">
                <b-input-group class="mb-3">
                    <b-form-input type="email" :placeholder="$t('lp.newsletter.placeholder')" v-model="email"/>
                    <b-input-group-append>
                        <b-button variant="secondary" size="xl"  @click="joinNewsletter">{{$t('lp.newsletter.button')}}</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-colxx>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data(){
        return{
            email:""
        }
    },
    methods:{
        joinNewsletter(){
            console.log("joinNewsletter :"+ this.email);
        }
    }
}
</script>

