<template>
  <form method="post">
    <div class="mt-3 text-start">
      <div class="col">
        <AtomHeader is="h3" content="General" />
        <div class="row">
          <MoleculeLabelledInput
            id="fname"
            inputType="text"
            label="First name"
            placeholder="Max"
          />
        </div>
        <div class="row">
          <MoleculeLabelledInput
            id="lname"
            inputType="text"
            label="Last name"
            placeholder="Mustermann"
          />
        </div>
        <div class="row">
          <MoleculeLabelledInput
            id="email"
            inputType="email"
            label="E-Mail"
            placeholder="email@example.com"
          />
        </div>
        <hr />
        <AtomHeader is="h3" content="Login Data" />
        <div class="row">
          <MoleculeLabelledInput
            id="uname"
            inputType="text"
            label="Username"
            placeholder="Mustermax99"
          />
        </div>
        <div class="row">
          <MoleculeLabelledInput
            id="pw"
            inputType="password"
            label="Password"
          />
        </div>
        <div class="row">
          <MoleculeLabelledInput
            id="pw_confirm"
            inputType="password"
            label="Confirm your password"
            placeholder=""
          />
        </div>
        <hr />
        <AtomHeader is="h3" content="Address" />
        <div class="row">
          <div class="col">
            <MoleculeLabelledInput
              id="street"
              inputType="text"
              label="Street"
              placeholder="Höchstädtplatz"
            />
          </div>
          <div class="col-3">
            <MoleculeLabelledInput
              id="streetnr"
              inputType="text"
              label="Streetnumber"
              placeholder="6"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <MoleculeLabelledInput
              id="zip"
              inputType="text"
              label="ZIP-Code"
              placeholder="1200"
            />
          </div>
          <div class="col">
            <MoleculeLabelledInput
              id="city"
              inputType="text"
              label="City"
              placeholder="Vienna"
            />
          </div>
        </div>
        <div class="text-end">
          <AtomButton
            type="submit"
            classname="btn btn-primary"
            content="Submit"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import MoleculeLabelledInput from "../molecules/MoleculeLabelledInput.vue";
import AtomButton from "../atoms/AtomButton.vue";
import AtomHeader from "../atoms/AtomHeader.vue";

export default {
  name: "OrganismFormUserData",
  components: { MoleculeLabelledInput, AtomButton, AtomHeader },
};
</script>
