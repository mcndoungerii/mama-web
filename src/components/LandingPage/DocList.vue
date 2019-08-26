<template>
    <b-row class="mt-5">
        <b-colxx xxs="12">
            <b-card class="d-flex flex-row mb-3" no-body v-for="(item,index) in data" :key="index" :data="item">
                <div class="d-flex flex-grow-1 min-width-zero">
                    <b-card-body class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <router-link tag="a" :to="item.url" class="list-item-heading mb-1 w-60 w-xs-100">{{item.title}}</router-link>
                        <p class="mb-1 text-muted text-small w-15 w-xs-100">{{item.date}}</p>
                        <div class="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                            <b-badge pill :variant="item.badgeColor">{{item.badge}}</b-badge>
                        </div>
                    </b-card-body>
                </div>
            </b-card>
        </b-colxx>
    </b-row>
</template>
<script>
export default {
    props:['data']
}
</script>
