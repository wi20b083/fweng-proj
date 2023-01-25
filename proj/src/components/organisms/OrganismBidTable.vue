<template>
    <div class="row pt-3 pb-3 border-bottom" v-for="bid in bids" v-bind:key="bid.id">
        <!--<div class="col">{{ bid.title }}</div>-->
        <div class="col">{{ bid.user.username }}</div>
        <div class="col">{{ bid.deliveryDate }}</div>
        <!--<div class="col">{{ bid.end }}</div>-->
        <div class="col">{{ bid.total.toFixed(2) }}€</div>
        <div class="col colorOpen" v-show="bid.status === 'open'">{{ bid.status }}</div>
        <div class="col colorAcc" v-show="bid.status === 'accepted'">{{ bid.status }}</div>
        <div class="col colorDecl" v-show="bid.status === 'declined'">{{ bid.status }}</div>
    </div>
</template>

<script>
export default{
    name:'OrganismBidTable',
    props:['bids'],
}
</script>

<style scoped>

.colorOpen{
    color: #0303a6
}

.colorAcc{
    color: #42b983;
}

.colorDecl{
    color: #d70000;
}

</style>