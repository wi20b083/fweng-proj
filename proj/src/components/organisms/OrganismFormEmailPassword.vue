<template>
  <form>
    <div class="mb-3">
      <MoleculeLabelledInput
        id="test"
        inputType="email"
        label="E-Mail"
        placeholder="email@example.com"
      />
      <MoleculeLabelledInput
        id="test"
        inputType="password"
        label="Password"
        placeholder=""
      />
      <AtomButton type="submit" classname="btn btn-primary" content="Submit" />
    </div>
  </form>
</template>

<script>
import MoleculeLabelledInput from "../molecules/MoleculeLabelledInput.vue";
import AtomButton from "../atoms/AtomButton.vue";

export default {
  name: "OrganismFormEmailPassword",
  components: { MoleculeLabelledInput, AtomButton },
};
</script>
