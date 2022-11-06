<template>
<form>
    <MoleculeLabelledInput id="test" inputType="email" label="E-Mail" placeholder="email@example.com" />
    <MoleculeLabelledInput id="test" inputType="password" label="Password" placeholder="" />
    <AtomButton type="submit" buttonText="Submit"/>
</form>

</template>

<script>
import MoleculeLabelledInput from '../molecules/MoleculeLabelledInput.vue';
import AtomButton from '../atoms/AtomButton.vue';

export default {
    name: 'OrganismFormEmailPassword',
    components: { MoleculeLabelledInput, AtomButton}
}
</script>