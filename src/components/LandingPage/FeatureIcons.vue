<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row>
            <b-row class="mt-5 feature-icon-container">
           <b-colxx xxs="12" md="6" lg="6" xl="3" class="mb-4" v-for="(item,index) in data" :key="index">
               <b-card no-body>
                   <b-card-body class="text-center">
                       <div>
                            <i :class="`${item.icon} large-icon`"></i>
                            <h5 class="mb-4 font-weight-semibold">{{item.title}}</h5>
                        </div>
                        <div>
                            <p class="detail-text">{{item.detail}}</p>
                        </div>
                   </b-card-body>
               </b-card>
           </b-colxx>
           </b-row>
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