<script>
import Navigation from '@/components/NavBars/ResponsiveNavigationBar.vue';
import BankCard from '@/components/Form/BankCard.vue'
import ColorSwitchAnimatedLoginPage from "@/components/Form/ColorSwitchAnimatedLoginPage.vue";
import PasswordValidationAndShowPasswordToggle from "@/components/Form/PasswordValidationAndShowPasswordToggle.vue";
import SimpleEmailValidationCheck from "@/components/Form/SimpleEmailValidationCheck.vue";
import LiquidDropLoginPage from "@/components/Form/LiquidDropLoginPage.vue";
import responsiveLogin from "@/components/Form/responsiveLogin.vue"
import LoginGlassmorph from "@/components/Form/LoginGlassmorph.vue"

export default {
  name: "forms",
  components: {
    Navigation,
    BankCard,
    ColorSwitchAnimatedLoginPage,
    PasswordValidationAndShowPasswordToggle,
    SimpleEmailValidationCheck,
	  LiquidDropLoginPage,
    responsiveLogin,
    LoginGlassmorph
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
  <responsive-login />
  <LoginGlassmorph />
</template>

<style scoped>

</style>