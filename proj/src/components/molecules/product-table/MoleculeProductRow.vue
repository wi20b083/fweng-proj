<template>
    <tr>
        <td class=""><AtomThumbnail :src="imgLink" :alt="alttext"/></td>
        <td class="align-middle"><AtomText :content="name" /></td>
        <td class="align-middle"><AtomText :content="description" /></td>
        <td class="align-middle">Amount:<input class="form-control priceAmountInput" type="number" min="0" v-model="qty" step="1"/></td>
        <td class="align-middle">Price:<input class="form-control priceAmountInput" type="number" v-model="price" min="0"/></td>
        <td class="align-middle">
            <div class="form-check">
                <label class="form-check-label" for="addProduct">
                    Add
                </label>
                <div>
                    <input class="form-check-input" type="checkbox" name="addProduct" value="" @click="$emit('addProduct', {pid, qty, price, name, description, imgLink}, $event.target)">
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
import AtomText from '../../atoms/AtomText.vue'
import AtomThumbnail from '../../atoms/AtomThumbnail.vue'

export default {
    name:'MoleculeProductRow',
    emits:['addProduct'],
    props:[
        'pid', 'name', 'imgLink', 'alttext', 'description'
    ],
    components: {
        AtomText,
        AtomThumbnail,
    },
    data(){
        return{
            qty: '',
            price: ''
        }
    }
}
</script>

<style scoped>

.imageSizeSmall{
    height: 50%;
}

.priceAmountInput{
    width: 70%;
}

</style>