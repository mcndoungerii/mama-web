<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row class="mt-5">
           <b-colxx xxs="12" md="6" lg="3" class="text-center" v-for="(item,index) in data" :key="index">
               <b-card class="bg-dark text-white mb-5" no-body>
                   <img class="card-img" :src="item.img" :alt="item.title" />
                    <div class="card-img-overlay d-flex justify-content-center">
                        <p class="card-text white text-center mb-0 align-self-center">{{item.title}}</p>
                    </div>
               </b-card>
           </b-colxx>
        </b-row>
    </b-container>
</template>
<script>
export default {
    props:['title','detail','data']
}
</script>

