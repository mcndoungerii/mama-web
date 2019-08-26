<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row class="screenshots mt-4">
           <b-colxx xxs="12" class="text-center mb-4">
              <b-tabs nav-class="justify-content-center mb-4" >
                <b-tab  v-for="(item,index) in data" :key="index">
                    <template slot="title">
                        <p>{{item.title}}</p>
                    </template>

                    <img :alt="item.title" class="app-image" :src="item.img" />
                </b-tab>
            </b-tabs>
           </b-colxx>
        </b-row>
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