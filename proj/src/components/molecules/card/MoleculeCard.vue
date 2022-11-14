<template>
  <div class="card">
    <MoleculeCardHeader :link=hlink :text=htext />
    <MoleculeCardBody :id=bid :text=btext />
  </div>
</template>
<script>
import MoleculeCardBody from './MoleculeCardBody.vue';
import MoleculeCardHeader from './MoleculeCardHeader.vue';

export default {
  name: "MoleculeCard",
  props: ['hlink', 'htext', 'bid', 'btext'], 
  components: { MoleculeCardHeader, MoleculeCardBody },
};
</script>
