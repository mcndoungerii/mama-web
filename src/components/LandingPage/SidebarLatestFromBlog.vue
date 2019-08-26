<template>
    <b-card class="flex-row mb-4" no-body>
        <div class="w-30 position-relative">
            <img class="card-img-left" :src="data.img" :alt="data.title" />
            <b-badge v-if="data.badge" pill :variant="data.badgeColor" class="position-absolute badge-top-left">{{data.badge}}</b-badge>
        </div>
        <div class="w-70 d-flex align-items-center">
            <b-card-body>
                <router-link :to="data.url" tag="a">
                    <h6 class="mb-0">{{data.title}}</h6>
                </router-link>
            </b-card-body>
        </div>
    </b-card>
</template>
<script>
export default {
    props:['data']
}
</script>

