<template>
  <tr>
    <th scope="col" class="align-middle"><AtomText :content="id" /></th>
    <td class="align-middle">
      <AtomThumbnail :src=imagesource :alt=alttext />
    </td>
    <td class="align-middle"><AtomText :content="title" /></td>
    <td class="align-middle"><AtomText :content="user" /></td>
    <td class="align-middle"><AtomText :content="start" /></td>
    <td class="align-middle">
      <AtomText :content=categories.join() />
    </td>
    <td class="align-middle">
      <AtomButton content="Details" type="submit" classname="btn btn-success" />
    </td>
  </tr>
</template>

<script>
import AtomText from "../../atoms/AtomText.vue";
import AtomThumbnail from "../../atoms/AtomThumbnail.vue";
import AtomButton from "../../atoms/AtomButton.vue";

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
  ],
  components: {
    AtomText,
    AtomThumbnail,
    AtomButton,
  },
};
</script>
