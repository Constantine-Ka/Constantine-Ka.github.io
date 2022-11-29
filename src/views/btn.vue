<script>
import ExploreButtonHoverEffects from '@/components/Btn/ExploreButtonHoverEffects.vue';
import RadioButtonsYesNo from "@/components/Btn/RadioButtonsYesNo.vue"
import PriceRadioButtons from "@/components/Btn/PriceRadioButtons.vue"
import ColorsLineButton from "@/components/Btn/ColorsLineButton.vue"

export default {
  name: "btn",
  components: {
	  PriceRadioButtons,
	  ExploreButtonHoverEffects,
	  RadioButtonsYesNo,
	  ColorsLineButton
  }
}
</script>

<template>
	<ColorsLineButton />
	<PriceRadioButtons />
	<RadioButtonsYesNo />
	<ExploreButtonHoverEffects></ExploreButtonHoverEffects>
</template>

<style scoped>

</style>