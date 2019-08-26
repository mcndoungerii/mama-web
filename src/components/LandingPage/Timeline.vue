<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row class="mt-5">
            <ul class="timeline">
                <li v-for="(item,index) in data" :key="index" :class="{'timeline-inverted':index%2==1, 'mb-0':index>=data.length-1}">
                    <div class="timeline-badge">{{item.year}}</div>
                    <b-card class="timeline-panel">
                        <h3>{{item.title}}</h3>
                        <p class="text-muted text-small mb-5">{{item.subtitle}}</p>
                        <p>{{item.detail}}</p>
                    </b-card>
                </li>
            </ul>
        </b-row>
    </b-container>
</template>
<script>
export default {
    props:['title','detail','data']
}
</script>

