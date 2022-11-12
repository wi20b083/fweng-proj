<template>
    <div class="modal-footer">
        <AtomButton type="button" classname="btn btn-secondary" content="Close" data-bs-dismiss="modal"/>
    </div>
</template>

<script>
import AtomButton from '@/components/atoms/AtomButton.vue';
export default {
    name: "MoleculeModalFooter",
    components: { AtomButton }
}
</script>