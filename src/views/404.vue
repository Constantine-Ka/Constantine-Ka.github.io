<script>
import Navigation from '@/components/NavBars/ResponsiveNavigationBar.vue';
import NotFoundParallax from '@/components/404NotFound/404parallax.vue';
import InsideText from '@/components/404NotFound/404insideText.vue';
import Plane from '@/components/404NotFound/404plane.vue';
import Ufo from '@/components/404NotFound/404ufo.vue';
import Miami from '@/components/404NotFound/404miami.vue';
import Nadegda from '@/components/404NotFound/404nadegda.vue';
import Opeka365 from '@/components/404NotFound/404opeka.vue';
import CaveMan from '@/components/404NotFound/404caveManAnim.vue';
import Plate from '@/components/404NotFound/404plate.vue';
import RollingCube from '@/components/404NotFound/404rollingCube.vue';
import Bookshelf from '@/components/404NotFound/404Bookshelf.vue';
import Scary from '@/components/404NotFound/404Scary.vue';
import Blinking from '@/components/404NotFound/404Blinking.vue';
import Burger from '@/components/404NotFound/404Burger.vue';
import Terminal from '@/components/404NotFound/404TerminalStyle.vue';
import CyberPunkInspired from '@/components/404NotFound/404CyberPunkInspired.vue';


// import Navigation from "@/App.vue";

export default {
	name: '404',
	components: {
    Navigation,
    NotFoundParallax,
    InsideText,
    Plane,
    Ufo,
    Miami,
    Nadegda,
    Opeka365,
    CaveMan,
    Plate,
    RollingCube,
    Bookshelf,
    Scary,
    Blinking,
    Burger,
    Terminal,
    CyberPunkInspired
  }
};
</script>
<template>
<!--  <Navigation />-->
  <CyberPunkInspired />
  <terminal />
  <Burger />
  <Blinking />
  <Scary />
  <Bookshelf />
  <RollingCube />
  <Plate />
  <CaveMan />
  <Opeka365 />
  <Nadegda />
  <Miami />
  <Ufo />
  <Plane />
  <InsideText />
	<NotFoundParallax />
</template>

<style>
section:nth-child(2) {
	top: 50px;
	position: relative;
}
</style>
