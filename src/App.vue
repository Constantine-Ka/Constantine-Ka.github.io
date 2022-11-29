<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from "@/components/NavBars/ResponsiveNavigationBar.vue";
import ExploreButtonHoverEffects from "@/components/Btn/ExploreButtonHoverEffects.vue"
import GlowingGradientLoadingBar from "@/components/Loader/GlowingGradientLoadingBar.vue"
import CubesHoverEffects from "@/components/Drawing/CubesHoverEffects.vue"
</script>

<template>
  <Navigation/>
  <router-view/>



<!--  <div>-->
<!--&lt;!&ndash;    <a href="https://vitejs.dev" target="_blank">&ndash;&gt;-->
<!--&lt;!&ndash;      <img src="/vite.svg" class="logo" alt="Vite logo" />&ndash;&gt;-->
<!--&lt;!&ndash;    </a>&ndash;&gt;-->
<!--&lt;!&ndash;    <a href="https://vuejs.org/" target="_blank">&ndash;&gt;-->
<!--&lt;!&ndash;      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />&ndash;&gt;-->
<!--&lt;!&ndash;    </a>&ndash;&gt;-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue"  style="display:none"/>-->
</template>

<style scoped>
body{
  background: #dee1e2;
  min-height: 100vh;
  overflow-x: hidden;
}

</style>
