<template>
    <div>
        <h2>{{title}}</h2>
        <b-card no-body>
            <b-card-body class="text-center pt-5 pb-5">
                <div>
                    <img :alt="data.name" class="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail mx-auto" :src="data.img" />
                    <h5 class="mb-0 font-weight-semibold color-theme-1 mb-3">{{data.name}}</h5>
                    <stars :value="data.rate" :disabled=true></stars>
                    <p class="text-muted text-small">{{data.type}}</p>
                </div>
                <div class="pl-3 pr-3 pt-3 pb-0 flex-grow-1 d-flex align-items-center">
                    <p class="mb-0 detail-text">{{data.detail}}</p>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
import Stars from 'components/Common/Stars';

export default {
    props:['title','data'],
    components:{
        Stars
    }  
}
</script>