<template>
  <form>
    <div class="mt-3 text-start">
      <MoleculeLabelledInput
        id="email"
        inputType="email"
        label="E-Mail"
        placeholder="email@example.com"
      />
      <MoleculeLabelledInput
        id="pw"
        inputType="password"
        label="Password"
        placeholder=""
      />
      <div class="text-end">
        <AtomButton
          type="submit"
          classname="btn btn-primary"
          content="Submit"
        />
      </div>
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
