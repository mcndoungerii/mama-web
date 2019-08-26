<template>
    <div id="root">
        <div class="_fixed-background" style="padding-top: 5vh">
        <main>
            <div class="container">
                <router-view/>
            </div>
        </main>  
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        document.body.classList.add("background");
    },
    beforeDestroy(){
        document.body.classList.remove("background");
    }
};
</script>
