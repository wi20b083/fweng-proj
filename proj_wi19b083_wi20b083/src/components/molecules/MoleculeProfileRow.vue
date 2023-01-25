<template>
    <div class="row">
        <div class="col">{{ fieldName }}</div>
        <div class="col">{{ fieldContent }}</div>
    </div>
</template>

<script>


export default{
    name:'MoleculeProfileRow',
    props:['fieldName', 'fieldContent'],
}

</script>