<template>
  <div class="card-header">
    <AtomLink class="btn" data-bs-toggle="collapse" :link=link :content=text />
  </div>
</template>
<script>
import AtomLink from '@/components/atoms/AtomLink.vue';

export default {
  name: "MoleculeCardHeader",
  props: ['link', 'text'],
  components: { AtomLink },
};
</script>
