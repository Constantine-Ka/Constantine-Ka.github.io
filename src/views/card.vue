<script>
import CardBlockCircularProgressBar from '@/components/Card/CardBlockCircularProgressBar.vue';
import PricingCard from '@/components/Card/PricingCard.vue'
import ResponsiveServicesSection from '@/components/Card/ResponsiveServicesSection.vue'
import WaterDropCards from '@/components/Card/LiquidDropCards.vue'

export default {
  name: "card",
  components: {
	  CardBlockCircularProgressBar,
	  PricingCard,
	  ResponsiveServicesSection,
	  WaterDropCards
  }
}
</script>

<template>
	<section style="background: #eff0f4; gap:40px 60px">
		<WaterDropCards title="01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." basicColor = "#ff0f5b" />
		<WaterDropCards title="02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." basicColor = "#be01fe" />
		<WaterDropCards title="03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." basicColor = "#01b4ff" />
	</section>
	<section style="background: #222; gap:40px">
		<ResponsiveServicesSection
			:content="{icon:'brush-outline', title:'Designing', description:'There are many variations of passages of Lorem Ipsum available, '}"
			colorStyle="#89ec5b"
		>
		</ResponsiveServicesSection>
		<ResponsiveServicesSection
				:content="{icon:'code-slash-outline', title:'Developers', description:'There are many variations of passages of Lorem Ipsum available, '}"
				colorStyle="#eb5ae5"
		>
		</ResponsiveServicesSection>
		<ResponsiveServicesSection
				:content="{icon:'search-outline', title:'SEO', description:'There are many variations of passages of Lorem Ipsum available, '}"
				colorStyle="#5b98eb"
		>
		</ResponsiveServicesSection>
	</section>
	<section class="CardBlockCircularProgressBar" style="background: #cfd1e1">
		<CardBlockCircularProgressBar
			:item = "{text:'Html',value:85}"
		>

		</CardBlockCircularProgressBar>
		<CardBlockCircularProgressBar
				:item = "{text:'Css',value:90}"
		>

		</CardBlockCircularProgressBar>
		<CardBlockCircularProgressBar
				:item = "{text:'jS',value:90}"
		>

		</CardBlockCircularProgressBar>
	</section>
	<section class="">
		<pricing-card
				:content = "{title:'Basic',price:500,description:['2 Team members', '2GB Storage', '1000 Requests per day', '2000 Users']}"
				:gradient = "['cyan', '#06c766']"
				:isBtn="true"
		>
		</pricing-card>
		<pricing-card
				:content = "{title:'Standart',price:1000,description:['5 Team members', '5GB Storage', '3000 Requests per day', '4000 Users']}"
				:gradient = "['#b202c9', '#cf087c']"
				:isBtn="true"
		>
		</pricing-card>
		<pricing-card
				:content = "{title:'Premium',price:2000,description:['unlimited team members', '10GB Storage', '5000 Requests per day', 'unlimited Users']}"
				:gradient = "['#eea300', '#ee5700']"
				:isBtn="false"
		>
		</pricing-card>
	</section>
</template>

<style scoped>
section:nth-child(2) {
	top: 50px;
}
section{

	height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	/*font-size: 20px;*/
}
</style>