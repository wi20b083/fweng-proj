<template>
  <div :id="id" class="collapse" data-bs-parent="#accordion">
    <div class="card-body">
      {{text}}
    </div>
  </div>
</template>
<script>
export default {
  name: "MoleculeCardBody",
  props: ["id", "text"],
};
</script>
