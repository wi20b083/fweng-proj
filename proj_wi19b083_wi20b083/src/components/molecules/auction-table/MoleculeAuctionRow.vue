<template>
  <tr>
    <th scope="col" class="align-middle"><AtomText :content="id" /></th>
    <td class="align-middle">
      <AtomThumbnail :src=imagesource :alt=alttext />
    </td>
    <td class="align-middle"><AtomText :content="title" /></td>
    <td class="align-middle"><AtomText :content="user" /></td>
    <td class="align-middle"><AtomText :content="start" /></td>
    <td class="align-middle"><AtomText :content=categories.join() /></td>
    <td class="align-middle">
      <AtomButton content="Details" type="button" classname="btn btnColor" @click="loadDetailsPage(id)"/>
    </td>
    <td class="align-middle" v-if=" (isLogin ===true && isAdmin === true) || (isLogin === true && auctionUserID === userID)">
      <AtomButton content="Edit" type="button" classname="btn btn-secondary" @click="loadEditAuction(id)"/>
    </td>
    <td class="align-middle" v-if=" isLogin ===true && isAdmin === true">
      <AtomButton content="Delete" type="button" classname="btn btn-danger" @click="deleteAuction(id)"/>
    </td>
    <td class="align-middle" v-if=" isLogin ===true && isAdmin === false && userID === auctionUserID" > <!--&& userID === auctionUserID-->
      <AtomButton content="Close" type="button" classname="btn btn-danger" @click="deleteAuction(id)"/>
    </td>


  </tr>
</template>

<script>
import AtomText from "../../atoms/AtomText.vue";
import AtomThumbnail from "../../atoms/AtomThumbnail.vue";
import AtomButton from "../../atoms/AtomButton.vue";
import { mapActions, mapState } from "vuex";
import router from "@/router";

export default {
  name: "MoleculeAuctionRow",
  props: [
    "id",
    "imagesource",
    "alttext",
    "title",
    "user",
    "start",
    "categories",
    "auctionUserID"
  ],
  components: {
    AtomText,
    AtomThumbnail,
    AtomButton,
  },
  methods:{
    ...mapActions('auctionModule', {showDetails : 'showDetails', delete: 'delete'}),

    loadDetailsPage(id){
      console.log('id from auction row:' +id)
      this.showDetails(id)
      //this.getAuctionBids(id)
      router.push("auctionDetails")
    },
    loadEditAuction(id){
      this.showDetails(id)
      router.push('editAuction')
    },
    deleteAuction(id){
      this.delete(id)
    }

  },
  computed:{
      ...mapState('userModule', {
        isAdmin: state => state.isAdmin,
        isLogin: state => state.isLogin,
        userID: state => state.user.id
      })
  }
  
};
</script>
