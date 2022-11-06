<template>
    <div class="modal-header">
        <AtomHeader tag="h5" class="modal-title" :content="title" />
        <AtomButton type="button" class="btn-close" target="modal"/>
    </div>
</template>

<script>
import AtomHeader from '@/components/atoms/AtomHeader.vue';
import AtomButton from '@/components/atoms/AtomButton.vue';

export default {
    name: MoleculeModalHeader, 
    props: ['title']
}
</script>