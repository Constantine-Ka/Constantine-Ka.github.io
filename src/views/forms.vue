<script>
import Navigation from '@/components/NavBars/ResponsiveNavigationBar.vue';
import BankCard from '@/components/Form/BankCard.vue'
import ColorSwitchAnimatedLoginPage from "@/components/Form/ColorSwitchAnimatedLoginPage.vue";
import PasswordValidationAndShowPasswordToggle from "@/components/Form/PasswordValidationAndShowPasswordToggle.vue";
import SimpleEmailValidationCheck from "@/components/Form/SimpleEmailValidationCheck.vue";
import LiquidDropLoginPage from "@/components/Form/LiquidDropLoginPage.vue";

export default {
  name: "forms",
  components: {
    Navigation,
    BankCard,
    ColorSwitchAnimatedLoginPage,
    PasswordValidationAndShowPasswordToggle,
    SimpleEmailValidationCheck,
	  LiquidDropLoginPage
  }
}
</script>

<template>
<!--  <Navigation />-->
	<LiquidDropLoginPage />
  <SimpleEmailValidationCheck />
  <PasswordValidationAndShowPasswordToggle />
  <ColorSwitchAnimatedLoginPage />
  <BankCard />
</template>

<style scoped>

</style>