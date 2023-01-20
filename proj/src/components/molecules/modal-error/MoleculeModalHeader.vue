<template>
    <div class="modal-header">
        <AtomText class="modal-title" :content="title" />

        <AtomButton type="button" classname="btn-close" data-bs-dismiss="modal"/>
    </div>
</template>

<script>
import AtomButton from '@/components/atoms/AtomButton.vue';
import AtomText from '@/components/atoms/AtomText.vue';

export default {
    name: 'MoleculeModalHeader', 
    props: ['title'], 
    components: {
        AtomButton, 
        AtomText
    }
}
</script>