<template>
    <table class="table">
        <MoleculeTableHead :colnames=colnames />
        <tbody>
          <MoleculeAdminProductRow
              v-for="product in products"
              v-bind:key="product.pid"
              :pid = product.pid
              :productname = product.name
              :imagesource = product.imgLink
              :description = product.description
              @editProduct="loadEditProduct"
              @deleteProduct="deleteProduct"
          />
        </tbody>
    </table>
</template>

<script>
import { mapActions } from "vuex";
import MoleculeTableHead from "../molecules/MoleculeTableHead.vue";
import MoleculeAdminProductRow from "../molecules/product-table/MoleculeAdminProductRow.vue";
import router from "@/router";
export default {
  name: "OrganismEditProductTable",
  props:['products'],
  data() {
    return {
      colnames: ["ID", "Image", "Name", "Description", "Edit", "Delete"],
    }
  },
  components: {
    MoleculeTableHead,
    MoleculeAdminProductRow
  },
  methods:{
    ...mapActions('itemsModule', { setProductToEdit : 'setProductToEdit' , delete: 'delete'}),
        loadEditProduct(id){
            this.setProductToEdit(id)
            router.push('editProduct')
        },
        deleteProduct(id){
            this.delete(id)
            .then(res => {
                res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
            })

        }
  }
};



</script>