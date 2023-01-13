<template>
    <div class="row pt-3 pb-3 border-bottom" v-for="bid in bids" v-bind:key="bid.id">
        <div class="col">{{ bid.title }}</div>
        <div class="col">{{ bid.user }}</div>
        <div class="col">{{ bid.start }}</div>
        <div class="col">{{ bid.end }}</div>
        <div class="col">{{ bid.details.total.toFixed(2) }}€</div>
    </div>
</template>

<script>

export default{
    name:'OrganismBidTable',
    props:['bids']
}

</script>