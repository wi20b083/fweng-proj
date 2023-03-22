<template>
    <tr>
        <td class="align-middle"><AtomThumbnail :src="imgLink" :alt="alttext"/></td>
        <td class="align-middle"><AtomText :content="name" /></td>
        <td class="align-middle"><AtomText :content="description" /></td>
        <td class="align-middle">Amount: <input class="form-control priceAmountInput" type="number" min="0" v-model="form.qty" step="1"/></td>
        <td class="align-middle">Price: <input class="form-control priceAmountInput" type="number" v-model="form.price" min="0"/></td>
        
        <td class="align-middle">
            <div class="form-check">
                <label class="form-check-label" for="addProduct">
                    Add
                </label>
                <input class="form-check-input" type="checkbox" value="" @click="$emit('addProduct', pid, qty, price, $event.target.checked)" id="addProduct">
            </div>
        </td>
    </tr>
</template>

<script>
import AtomText from '../../atoms/AtomText.vue'
import AtomThumbnail from '../../atoms/AtomThumbnail.vue'
export default {
    name:'MoleculeEditProductRow',
    props:[
        'pid', 'name', 'imgLink', 'alttext', 'description', 'qty', 'price'
    ],
    components: {
        AtomText,
        AtomThumbnail,
    },
    data(){
        return{
            form:{
                qty: this.qty,
                price: this.price,
                description: this.description
            }
        }
    }

}
</script>