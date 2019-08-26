<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" offset-xxs="0" lg="8" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row class="mt-5">
            <piaf-blog-thumb v-for="(item,index) in data" :key="index" :data="item"/>
        </b-row>
    </b-container>
</template>

<script>
import PiafBlogThumb from 'components/LandingPage/BlogThumb'

export default {
    props:['title','detail','data'],
    components:{
        PiafBlogThumb
    }
}
</script>