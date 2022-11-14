<template>
  <div class="centered container-fluid mt-3">
    <AtomHeader tag="h1" content="Auctions" />
    <div class="m-3">
      <OrganismAuctionTable :auctions="auctions" :colnames="colnames" />
    </div>
  </div>
</template>

<script>
import OrganismAuctionTable from "@/components/organisms/OrganismAuctionTable.vue";
import AtomHeader from "@/components/atoms/AtomHeader.vue";

export default {
  name: "AuctionList",
  data() {
    return {
      auctions: [
        {
          id: 1,
          title: "Auction 1",
          imagesource: require("../assets/dummyImg.png"),
          alttext: "dummy image",
          start: "16.11.2022",
          user: "MusterMaxi1",
          categories: ["beverage", "beer"],
        },
        {
          id: 2,
          title: "Auction 2",
          imagesource: require("../assets/dummyImg.png"),
          alttext: "dummy image",
          start: "15.11.2022",
          user: "MusterMaxi2",
          categories: ["beverage", "wine"],
        },
      ],
      colnames: [
        "ID",
        "Image",
        "Title",
        "User",
        "Start-Date",
        "Categories",
        "Details",
      ],
    };
  },
  components: {
    OrganismAuctionTable,
    AtomHeader,
  },
};
</script>
