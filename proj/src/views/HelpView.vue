<template>
  <div class="centered container-fluid mt-3">
    <AtomHeader tag="h1" content="FAQ" />
    <div class="mt-3">
      <div id="accordion">
        <MoleculeCard
          hlink="#collapseOne"
          htext="Item One"
          bid="collapseOne"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
        <MoleculeCard
          hlink="#collapseTwo"
          htext="Item Two"
          bid="collapseTwo"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
        <MoleculeCard
          hlink="#collapseThree"
          htext="Item Three"
          bid="collapseThree"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
        <MoleculeCard
          hlink="#collapseFour"
          htext="Item Four"
          bid="collapseFour"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
        <MoleculeCard
          hlink="#collapseFive"
          htext="Item Five"
          bid="collapseFive"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
        <MoleculeCard
          hlink="#collapseSix"
          htext="Item Six"
          bid="collapseSix"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
        <MoleculeCard
          hlink="#collapseSeven"
          htext="Item Seven"
          bid="collapseSeven"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
        <MoleculeCard
          hlink="#collapseEight"
          htext="Item Eight"
          bid="collapseEight"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
        <MoleculeCard
          hlink="#collapseNine"
          htext="Item Nine"
          bid="collapseNine"
          btext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  </div>
</template>
<script>
import MoleculeCard from "@/components/molecules/accordion-card/MoleculeCard.vue";
import AtomHeader from "@/components/atoms/AtomHeader.vue";

export default {
  name: "HelpView",
  components: {
    MoleculeCard,
    AtomHeader,
  },
};
</script>
