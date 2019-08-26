<template>
    <div  class="mb-3">
        <div :style="colorCode">
            <b-row>
                <b-col>
                    <p class="text-muted mb-1 text-small ">Association</p>
                    <p class="list-item-heading m-0">{{ association.association.name }}</p>
                </b-col>
                <b-col class="text-right">
                    <p class="text-muted mb-1 text-small">Total Amount</p>
                    <p class="list-item-heading m-0">Tsh {{ association.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
export default {
    props:['association','detailPath'],
    computed: {
        colorCode(){
            let percentage = (this.association.amount/this.association.association.quantityThreshold)*100
            if(percentage<40){
                return 'border-left:3px solid red; padding-left:10px'
            }else if(percentage>60 && percentage<99){
                return 'border-left:3px solid orange; padding-left:10px'
            }else if(percentage>99){
                return 'border-left:3px solid green; padding-left:10px'
            }
        }
    }
}
</script>
