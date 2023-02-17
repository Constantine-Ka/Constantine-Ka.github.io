<script>

import CubesHoverEffects from '@/components/Drawing/CubesHoverEffects.vue';
import Iphone14Island from '@/components/Drawing/iPhone14DynamicIslandEffect.vue';
import MarioMatchingGame from "@/components/Drawing/MarioMatchingGame.vue";

import RoundedBottomNavigationBar from "@/components/NavBars/RoundedBottomNavigationBar.vue";
import ColoredTilesBG from "@/components/Drawing/ColoredTilesBG.vue";
import GlowingCube from "@/components/Drawing/GlowingCube.vue";
import Unfold3DImage from "@/components/Drawing/Unfold3DImage.vue";
import MouseEmojies from "@/components/Drawing/MouseEmojies.vue"
import SectionLayerAnimation from "@/components/Drawing/SectionLayerAnimation.vue"
import CubeNewYear from "@/components/Drawing/CubeNewYear.vue"
import PolicevsTaxi from "@/components/Drawing/PolicevsTaxi.vue"
import GallerySection from "@/components/Drawing/GallerySection.vue"



export default {
	name: 'index',
	data(){
		return{
			hueR:50
		}
	},
	components: {

		CubesHoverEffects,
		Iphone14Island,
    MarioMatchingGame,
		RoundedBottomNavigationBar,
		ColoredTilesBG,
		GlowingCube,
		Unfold3DImage,
		SectionLayerAnimation,
		MouseEmojies,
		CubeNewYear,
    PolicevsTaxi,
    GallerySection,
	}
};
</script>

<template>
  <GallerySection />
  <PolicevsTaxi />
	<CubeNewYear />
	<MouseEmojies />
	<SectionLayerAnimation />
	<Unfold3DImage imgUrl = "https://loremflickr.com/640/360"/>
	<GlowingCube />
<!--	<ColoredTilesBG />-->
	<RoundedBottomNavigationBar />

  <MarioMatchingGame />
	<Iphone14Island />
	<CubesHoverEffects />
</template>

<style scoped>
section:nth-child(2) {
	top: 50px;
}
section.cards{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	font-size: 20px;
}
</style>
