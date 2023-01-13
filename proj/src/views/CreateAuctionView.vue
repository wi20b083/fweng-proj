<template>
    <div class="centered container-fluid mt-4">
    <AtomHeader tag="h1" content="Create Auction" />
    <div class="m-3">
      <OrganismCreateAuctionForm />
    </div>
  </div>
</template>

<script>
import OrganismCreateAuctionForm from '@/components/organisms/OrganismCreateAuctionForm.vue';

export default{
    name:'CreateAuctionView',
    components:{
        OrganismCreateAuctionForm
    }
}

</script>