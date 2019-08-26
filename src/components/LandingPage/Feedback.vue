<template>
    <b-row class="mt-5 pt-5 feedback-container">
        <b-colxx xxs="12" class="text-center">
            <p>{{message}}</p>
              <b-btn class="m-1 p-1" variant="link" v-b-tooltip.hover :title="like"><i class="simple-icon-dislike"></i></b-btn>
              <b-btn class="m-1 p-1" variant="link" v-b-tooltip.hover :title="dislike"><i class="simple-icon-like"></i></b-btn>
        </b-colxx>
    </b-row>
</template>

<script>
export default {
    props:['message','like','dislike']
}
</script>