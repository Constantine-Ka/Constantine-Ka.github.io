<script lang="ts">
	export default {
		name: "WaterDropCards",
		props: {
			title: {
				type: String || Number,
				default: 0
			},
			description: {
				type: String,
				default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			},
			basicColor: {
				type: String, //Color of the Format |#ABCDEF| or name,
				default: "lime"
			},
		},
		data() {
			return {
			}
		},
		computed: {
				//TODO Read here is CSS border-radius-slash-syntax
				//TODO link https://medium.com/9elements/css-border-radius-can-do-that-d46df1d013ae
				//Todo Demo https://9elements.github.io/fancy-border-radius/
			fancyBorderRadius() {
				const randomValue = ()=>Math.floor(Math.random() * (90-40) ) + 40;
				let str = randomValue() + "% "+ randomValue() + "% "+randomValue() + "% "+ randomValue() + "% / "+ randomValue() + "% "+randomValue() + "% "+randomValue() + "% "+randomValue() + "% "
				return str
			}



		}
	}
</script>

<template>
<div class="drop" :style="'--b-radius:'+ this.fancyBorderRadius">
	<div class="content" :style="'--clr:'+this.basicColor">
		<h2>{{title}}</h2>
		<p>{{description}}</p>
		<router-link to="#">Read More</router-link>
	</div>
</div>
</template>

<style scoped>
.drop{
	position: relative;
	width: 350px;
	height: 350px;
	box-shadow: inset 20px 20px 20px rgba(0,0,0,0.05),
										25px 35px 20px rgba(0,0,0,0.05),
										25px 30px 30px rgba(0,0,0,0.05),
							inset -25px -20px 25px rgba(255,255,255,0.9);
	border-radius: var(--b-radius);
	transition: 0.5s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;
}
.drop:hover{
	border-radius: 50%;
}
.drop::before{
	content: '';
	position: absolute;
	top: 50px;
	left: 85px;
	width: 35px;
	height: 35px;
	background: #fff;
	border-radius: 50%;
	opacity: 0.9;
}
.drop::after{
	content: '';
	position: absolute;
	top: 90px;
	left: 110px;
	width: 15px;
	height: 15px;
	background: #fff;
	border-radius: 50%;
	opacity: 0.9;
}
.drop .content{
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	padding: 40px;
	gap:15px
}
.drop .content h2{
	position: relative;
	width: 80px;
	height: 80px;
	background: #eff0f4;
	border-radius: 50%;
	box-shadow: inset 2px 5px 10px rgba(0,0,0,0.1),
							inset -2px -5px 10px rgba(255,255,255,1),
										15px 15px 10px rgba(0,0,0,0.05),
										15px 10px 15px rgba(0,0,0,0.025);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2em;
	color: var(--clr);
}
.drop .content a{
	position: relative;
	padding: 10px 25px;
	background: var(--clr);
	text-decoration: none;
	color: #fff;
	border-radius: 25px;
	font-weight: 500;
	text-shadow: 0 2px 2px rgba(0,0,0,0.25);
	opacity: 0.75;
	transition: 0.5s;
}
.drop .content a:hover{
	opacity: 1;
}
.drop .content a::before{
	content: '';
	position: absolute;
	top: 8px;
	left: 50%;
	transform: translateX(-50%);
	width: 65%;
	height: 5px;
	border-radius: 5px;
	background: rgba(255,255,255,0.5);
}

</style>