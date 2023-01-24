<template>
    <div class="modal-footer">
        <AtomButton type="button" classname="btn btn-secondary" content="Close" data-bs-dismiss="modal" @click="deleteErrorMessage(errorType)"/>
    </div>
</template>

<script>
import AtomButton from '@/components/atoms/AtomButton.vue';
import { mapActions } from 'vuex';
export default {
    name: "MoleculeModalFooter",
    props:['errorType'],
    components: { AtomButton },
    method:{
        ...mapActions('userModule', {
            setRequestErrorUser: 'setRequestError'
        }),
        ...mapActions('itemsModule', {
            setRequestErrorItem: 'setRequestError'
        }),
        ...mapActions('auctionModule', {
            setRequestErrorAuction: 'setRequestError'
        }),
        ...mapActions('bidModule', {
            setRequestErrorBid: 'setRequestError'
        }),
        deleteErrorMessage(errorType){
            switch(errorType){
                case 'user':
                    this.setRequestErrorUser('')
                    break;
                case 'item':
                    this.setRequestErrorItem('')
                    break;
                case 'auction': 
                    this.setRequestErrorAuction('')
                    break;
                case 'bid': 
                    this.setRequestErrorBid('')
            }

        }

    }
}
</script>