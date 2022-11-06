<template>
    <div class="modal-header">
        <AtomHeader tag="h5" classname="modal-title" :content="title" />
        <AtomButton type="button" classname="btn-close" data-bs-dismiss="modal"/>
    </div>
</template>

<script>
import AtomHeader from '@/components/atoms/AtomHeader.vue';
import AtomButton from '@/components/atoms/AtomButton.vue';

export default {
    name: 'MoleculeModalHeader', 
    props: ['title'], 
    components: {
        AtomButton, 
        AtomHeader
    }
}
</script>