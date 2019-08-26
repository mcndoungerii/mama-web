<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" offset-xxs="0" lg="8" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>
                <p>{{detail}}</p>
            </b-colxx>
        </b-row>
        <b-row class="mt-5">
            <b-colxx xxs="12" xl="4" lg="6" md="6" class="mb-5">
                <img alt="careers" class="img-fluid" src="/assets/img/landing-page/careers-1.jpg" />
            </b-colxx>
            <b-colxx xxs="12" xl="4" lg="6" sm="6" class="mb-5">
                <img alt="careers" class="img-fluid" src="/assets/img/landing-page/careers-2.jpg" />
            </b-colxx>
            <b-colxx xxs="12" xl="4" lg="4" sm="6" class="mb-5">
                <img alt="careers" class="img-fluid" src="/assets/img/landing-page/careers-3.jpg" />
            </b-colxx>
            <b-colxx xxs="12" xl="3" lg="4" sm="6" class="mb-5">
                <img alt="careers" class="img-fluid" src="/assets/img/landing-page/careers-4.jpg" />
            </b-colxx>
            <b-colxx xxs="12" xl="3" lg="4" sm="6" class="mb-5">
                <img alt="careers" class="img-fluid" src="/assets/img/landing-page/careers-5.jpg" />
            </b-colxx>
            <b-colxx xxs="12" xl="3" lg="6" md="6" class="mb-5">
                <img alt="careers" class="img-fluid" src="/assets/img/landing-page/careers-6.jpg" />
            </b-colxx>
            <b-colxx xxs="12" xl="3" lg="6" md="6" class="mb-5 d-none d-lg-block">
                <img alt="careers" class="img-fluid" src="/assets/img/landing-page/careers-7.jpg" />
            </b-colxx>
        </b-row>
    </b-container>
</template>

<script>
export default {
props:['title','detail']
}
</script>