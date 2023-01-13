<template>
    <div class="row text-end">
        <div class="col"><i class="bi bi-funnel" style="color: black; font-size: 130%; font-style: normal;">Filter Auctions</i></div>
        <div class="col-auto">
            <select class="form-select" >
                <option selected>by category</option>
                <option value="beverage">Beverage</option>
                <option value="beer">Beer</option>
                <option value="wine">Wine</option>
            </select>
        </div>
        <div class="col-auto">
            <select class="form-select" >
                <option selected>by start date</option>
                <option value="beverage">Beverage</option>
                <option value="beer">Beer</option>
                <option value="wine">Wine</option>
            </select>
        </div>
    </div>
</template>

<script>


export default{
    name:'MoleculeFilterAuctions',
    
}
</script>