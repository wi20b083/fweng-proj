<template>
    <div class="footer p-4 centered mt-5">
        <div class="row">
            <div class="col text-end border-end"><router-link class="nav-link" to="/help">Help</router-link></div>
            <div class="col text-start"><router-link class="nav-link" to="/imprint">Imprint</router-link></div>
        </div>
    </div>
</template>

<script>

export default{
    name:'OrganismFooter'
}

</script>

<style>

.footer{
    background-color:  #1c4f38; 
    color: white;
    height: auto;
}



</style>