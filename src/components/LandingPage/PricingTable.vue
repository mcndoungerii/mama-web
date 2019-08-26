<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" offset-xxs="0" lg="8" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row class="row-eq-height price-container mt-5">
            <b-colxx md="12" lg="4" class="mb-4 price-item" v-for="(pack,index) in data.packages" :key="index">
                <b-card no-body>
                    <b-card-body class="pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column">
                        <div class="price-top-part">
                            <i :class="`${pack.icon} large-icon`"></i>
                            <h5 class="mb-0 font-weight-semibold color-theme-1 mb-4">{{pack.title}}</h5>
                            <p class="text-large mb-2 text-default">{{pack.price}}</p>
                            <p class="text-muted text-small">{{pack.detail}}</p>
                        </div>
                        <div class="pl-3 pr-3 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1">
                            <ul class="list-unstyled">
                                <li v-for="(feature,i) in data.features" :key="i">
                                    <p class="mb-0 " v-if="pack.features[i]">{{feature}}</p>
                                </li>
                            </ul>
                            <div>
                                <router-link tag="a" :to="pack.url" class="btn btn-link btn-empty btn-lg">
                                    {{$t('lp.pricetable.purchase')}} <i class="simple-icon-arrow-right"></i>
                                </router-link>
                            </div>
                        </div>
                    </b-card-body>
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