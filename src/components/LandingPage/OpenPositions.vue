<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" offset-xxs="0" lg="8" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p class="mb-0">{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row class="mt-5">
            <b-colxx xxs="12">
                <b-card class="d-flex flex-row mb-3" no-body v-for="(item,index) in data" :key="index">
                    <div class="d-flex flex-grow-1 min-width-zero">
                        <b-card-body class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <router-link tag="a" :to="item.url" class="list-item-heading mb-1 w-60 w-xs-100">{{item.title}}</router-link>
                            <p class="mb-1 text-muted text-small w-15 w-xs-100">{{item.location}}</p>
                            <div class="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                                <b-badge :variant="item.badgeColor" pill>{{item.badge}}</b-badge>
                            </div>
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