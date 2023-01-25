<template>
    <tr>
        <th scope="col" class="align-middle"><AtomText :content=id /></th>
        <td class="align-middle"><AtomThumbnail :src="imagesource" :alt="alttext"/></td>
        <td class="align-middle"><AtomText :content=productname /></td>
        <td class="align-middle"><AtomButton content="Edit" type="link" classname="btn btnColor" @click="loadEditProduct(id)"/></td>
    </tr>
</template>

<script>
import AtomText from '../../atoms/AtomText.vue'
import AtomButton from '../../atoms/AtomButton.vue'
import AtomThumbnail from '../../atoms/AtomThumbnail.vue'
import router from '@/router'
import { mapActions } from 'vuex'
export default {
    name:'MoleculeEditProductRow',
    props:[
        'id', 'productname', 'imagesource', 'alttext'
    ],
    components: {
        AtomText,
        AtomThumbnail,
        AtomButton
    },
    methods:{
        ...mapActions('itemsModule', { setProductToEdit : 'setProductToEdit' }),
        loadEditProduct(id){
            this.setProductToEdit(id)
            router.push('editProduct')
        }
    }
}
</script>