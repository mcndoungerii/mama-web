<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <div v-for="(item,index) in data" :key="index">
            <b-row class="feature-row" v-if="index%2==0" :key="`left-${index}`">
                <b-colxx xxs="12" md="6" lg="5" class="d-flex align-items-center">
                    <div class="d-flex">
                        <div class="feature-text-container">
                            <h2>{{item.title}}</h2>
                            <p v-html="item.detail"></p>
                        </div>
                    </div>
                </b-colxx>
                <b-colxx xxs="12" md="6" offset-md="0" lg="6" offset-lg="1" class="position-relative">
                    <img :alt="item.title" class="feature-image-right feature-image-charts position-relative" :src="item.img" />
                </b-colxx>
            </b-row>
            <b-row class="feature-row" v-else :key="`right-${index}`">
                <b-colxx xxs="12" order-xxs="2" md="6" lg="6" order-md="1">
                    <img :alt="item.title" class="feature-image-left feature-image-charts" :src="item.img"/>
                </b-colxx>
                <b-colxx xxs="12" order-xxs="1" md="6" offset-md="0" order-md="2" lg="5" offset-lg="1" class="d-flex align-items-center">
                    <div class="d-flex">
                        <div class="feature-text-container">
                            <h2>{{item.title}}</h2>
                            <p v-html="item.detail"></p>
                        </div>
                    </div>               
             </b-colxx>
            </b-row>
        </div>
        
    </b-container>
</template>
<script>
export default {
    props:['title','detail','data'],
    
    data(){
        return{
        }
    }
}
</script>