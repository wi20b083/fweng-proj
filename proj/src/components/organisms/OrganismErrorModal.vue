<template>
  <div class="modal" tabindex="-1" id="errorModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <MoleculeModalHeader title="Error"/>
        <MoleculeModalBody text="This is an error!"/>
        <MoleculeModalFooter/>
      </div>
    </div>
  </div>
</template>

<script>
import MoleculeModalBody from '@/components/molecules/modal-error/MoleculeModalBody.vue';
import MoleculeModalHeader from '@/components/molecules/modal-error/MoleculeModalHeader.vue';
import MoleculeModalFooter from '@/components/molecules/modal-error/MoleculeModalFooter.vue';

export default {
    name: 'OrganismErrorModal',
    components: {
        MoleculeModalHeader, 
        MoleculeModalBody, 
        MoleculeModalFooter
    }
}
</script>
