<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" offset-xxs="0" lg="8" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row>
            <b-colxx xxs="12" class="d-none d-md-block">

                <b-card class="d-flex flex-row mb-3 table-heading" no-body>
                    <div class="d-flex flex-grow-1 min-width-zero">
                        <b-card-body class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <p class="list-item-heading mb-0  w-40 w-xs-100"></p>
                            <p  v-for="(pack,index) in data.packages" :key="index" class="mb-0 text-primary w-20 w-xs-100 text-center" >{{pack.title}}</p>
                        </b-card-body>
                    </div>
                </b-card>

                <b-card class="d-flex flex-row mb-3" no-body v-for="(feature,i) in data.features" :key="i" >
                    <div class="d-flex flex-grow-1 min-width-zero">
                        <b-card-body class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <p class="list-item-heading mb-0  w-40 w-xs-100">{{feature}}</p>
                            <p v-for="(pack,index) in data.packages" :key="index" class="mb-0 text-primary w-20 w-xs-100 text-center">
                                <i class="simple-icon-check" v-if="pack.features[i]"></i>
                            </p>
                        </b-card-body>
                    </div>
                </b-card>                
            </b-colxx>
            <b-colxx xxs="12" class="d-block d-md-none" v-for="(feature,i) in data.features" :key="i">
                <b-card class="d-flex flex-row mb-3 table-heading" no-body>
                    <div class="d-flex flex-grow-1 min-width-zero">
                        <b-card-body class="pl-0 pb-0">
                            <p class="list-item-heading mb-0 text-primary">{{feature}}</p>
                        </b-card-body>
                    </div>
                </b-card>

                <b-card class="d-flex flex-row mb-3"  no-body v-for="(pack,index) in data.packages" :key="index">
                    <div class="d-flex flex-grow-1 min-width-zero">
                        <b-card-body class="align-self-center d-flex flex-row">
                            <p class="list-item-heading mb-0  w-70">{{pack.title}}</p>
                            <p class="text-primary text-right mb-0 w-30 text-one">
                                <i class="simple-icon-check" v-if="pack.features[i]"></i>
                            </p>
                        </b-card-body>
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