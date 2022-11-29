<script>
	import GlowingGradientLoadingBar from '@/components/Loader/GlowingGradientLoadingBar.vue';
	import NeumorphismGradientLoadingAnimationCircleTextEffects from "@/components/Loader/NeumorphismGradientLoadingAnimation.vue";
	import RainbowSticksAnimation from "@/components/Loader/RainbowSticksAnimation.vue"


export default {
	name: 'loader',
	components: {
		NeumorphismGradientLoadingAnimationCircleTextEffects,
		GlowingGradientLoadingBar,
		RainbowSticksAnimation
	}
};
</script>
<template>
	<NeumorphismGradientLoadingAnimationCircleTextEffects />
	<GlowingGradientLoadingBar />
	<RainbowSticksAnimation />
</template>

<style>
section:nth-child(2) {
	top: 50px;
	position: relative;
}
</style>
