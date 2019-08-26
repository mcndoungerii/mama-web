<template>
    <b-row class="mt-5">
        <b-colxx xxs="12" sm="6" lg="3" class="mb-5" v-for="(item,index) in data" :key="index" :data="item">
            <b-card  no-body>
                <div class="position-relative">
                    <router-link tag="a" :to="item.url" class="video-play-icon"><span></span></router-link>
                    <img class="card-img-top" :src="item.img" :alt="item.title" />
                    <b-badge pill :variant="item.badgeColor" class="position-absolute badge-top-left">{{item.badge}}</b-badge>
                </div>
                <b-card-body>
                    <router-link tag="a" :to="item.url">
                        <h6 class="mb-4 video-heading ellipsis">
                        {{item.title}}
                        </h6>
                    </router-link>
                   <footer>
                        <p class="text-muted text-small mb-0 font-weight-light">{{item.date}}</p>
                    </footer>
                </b-card-body>
            </b-card>
        </b-colxx>
    </b-row>
</template>
<script>
export default {
    props:['data']
}
</script>
