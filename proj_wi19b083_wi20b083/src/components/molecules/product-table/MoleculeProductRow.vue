<template>
    <tr>
        <th scope="col" class="align-middle"><AtomText :content=id /></th>
        <td class="align-middle"><AtomThumbnail :src="imagesource" :alt="alttext"/></td>
        <td class="align-middle"><AtomText :content=productname /></td>
        <td class="align-middle">Amount: <input class="form-control" type="number" min="0" :value="amount" step="1"/></td>
        <td class="align-middle">Price: <input class="form-control" type="number" :value="price" min="0"/></td>
        <td class="align-middle">
            <div class="form-check">
                <label class="form-check-label" for="addProduct">
                    Add
                </label>
                <input class="form-check-input" type="checkbox" value="" id="addProduct">
            </div>
        </td>
    </tr>
</template>

<script>
import AtomText from '../../atoms/AtomText.vue'
import AtomThumbnail from '../../atoms/AtomThumbnail.vue'

export default {
    name:'MoleculeProductRow',
    props:[
        'id', 'productname', 'imagesource', 'alttext', 'amount', 'price'
    ],
    components: {
        AtomText,
        AtomThumbnail,
    }
}
</script>

<style scoped>

.imageSizeSmall{
    height: 50%;
}

</style>