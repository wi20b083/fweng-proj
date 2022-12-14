<template>
  <form @submit.prevent="login">
    <div class="mt-3 text-start">
      <MoleculeLabelledInput
        id="email"
        inputType="email"
        label="E-Mail"
        placeholder="email@example.com"
        v-model:modelValue="form.values.email"
      />
      <MoleculeLabelledInput
        id="pw"
        inputType="password"
        label="Password"
        placeholder=""
        v-model:modelValue="form.values.pw"
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
  data:()=>({
    form:{
      values:{
        email: '',
        pw:''
      },
      errors:{
        email: '',
        pw: ''
      }
    }
  }),
  methods:{
    async login(){
      console.log(this.form.values.email)
    }
  }
};
</script>
