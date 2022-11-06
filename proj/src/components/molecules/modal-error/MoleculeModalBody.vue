<template>
    <div class="modal-body">
        <AtomText :content="text"/>
    </div>
</template>

<script>
import AtomText from '@/components/atoms/AtomText.vue';

export default {
    name: "MoleculeModalBody",
    props: ["text"],
    components: { AtomText }
}
</script>