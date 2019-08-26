<template>
    <b-colxx xxs="12" lg="6" class="mb-4">
        <b-card class="flex-row mb-5 listing-card-container" no-body>
            <div class="w-40 position-relative">
                <router-link :to="data.url" tag="a" :class="{'video-play-icon':data.includeVideo}">
                    <span v-if="data.includeVideo"> </span>
                    <img  class="card-img-left" :src="data.img" :alt="data.title" />
                </router-link>
            </div>
            <div class="w-60 d-flex align-items-center">
                <b-card-body>
                    <router-link :to="data.url" tag="a">
                        <h3 class="mb-4 listing-heading" v-line-clamp="2">{{ data.title }}</h3>
                    </router-link>
                    <p class="listing-desc" v-line-clamp="3" >{{ data.detail }}</p>
                    <footer>
                        <p class="text-muted text-small mb-0 font-weight-light">{{data.date}}</p>
                    </footer>
                </b-card-body>
            </div>
        </b-card>
    </b-colxx>
</template>
<script>
export default {
    props:['data']
}
</script>
