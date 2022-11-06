<template>
    <div class="modal-footer">
        <AtomButton type="button" classname="btn btn-secondary" dismiss="modal" content="Close"/>
    </div>
</template>

<script>
import AtomButton from '@/components/atoms/AtomButton.vue';
export default {
    name: "MoleculeModalFooter",
    components: { AtomButton }
}
</script>