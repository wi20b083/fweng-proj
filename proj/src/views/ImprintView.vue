<template>
  <div class="centered">
    <div class="container-fluid p-3">
      <AtomHeader tag="h1" content="Imprint" />
      <AtomText content="PubsBid GmbH - Company with limited liability" />
      <hr />
      <AtomText classname="lh-1" content="UID-Nr: ATU12345678" />
      <AtomText classname="lh-1" content="FN: 123456a" />
      <AtomText classname="lh-1" content="FB-Gericht: Wien" />
      <br />
      <AtomText classname="lh-1" content="Address: 1130 Wien" />
      <AtomText classname="lh-1" content="Testarellogasse 4" />
      <AtomText classname="lh-1" content="AUSTRIA" />
      <br />
      <AtomText classname="lh-1" content="Tel: +43 660 123 45 67" />
      <AtomText classname="lh-1" content="Fax: +43 660 123 45 89" />
      <hr />
      <AtomText content="Member of WKÖ, WKNÖ" />

      <AtomLink link="https://www.ris.bka.gv.at/" content="Trade Regulations" />
      <AtomText classname="lh-1" content="Dirstrict Office: 1130 Wien" />

      <AtomLink
        link="http://ec.europa.eu/odr"
        content="http://ec.europa.eu/odr"
      />
      <AtomText
        classname="lh-1"
        content="Consumers have the option of submitting complaints to the EU's online dispute resolution platform"
      />
      
    </div>
  </div>
</template>

<script>
import AtomHeader from "@/components/atoms/AtomHeader.vue";
import AtomText from "@/components/atoms/AtomText.vue";
import AtomLink from "@/components/atoms/AtomLink.vue";

export default {
  name: "ImpintView",
  components: {
    AtomHeader,
    AtomText,
    AtomLink,
  },
};
</script>
