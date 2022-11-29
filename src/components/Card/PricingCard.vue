<script lang="ts">
	export default {
		name: "PricingCard",
		props: {
			content: {
				type: Object,
				default() {
					return {
						title: 'Basic',
						price: 0,
						description: ['0 Team members', '0GB Storage', '0 Requests per day', '0 Users']
					}
				}
			},
			gradient: {
				type: Array,
				default() {
					return ['cyan', '#06c766']
				}
			},
			isBtn: {
				type: Boolean,
				required: true,
				default: true
			}
		},
		data() {
			return {
				// linearGradient: null as string||null
			}
		},
		computed: {
			linearGradient() {
				let str = 'linear-gradient(135deg';
				this.gradient.forEach(color => {
					str = str + ', ' + color;
					console.log(str)
				})
				str = str + ')'
				console.log("str", str)
				return str
			}
		}
	}
</script>

<template>
<div class="card" :style="'--gradient:'+this.linearGradient">
	<div class="cardHeader">
		<h1>{{ content.title }}</h1>
	</div>
	<div class="cardBody">
			<p>
				<h2> &#8381; {{ content.price }} / mo </h2>
			</p>
			<div class="hiddenBasic">
				<ul>
					<li
							v-for="item in content.description"
					>
						{{ item }}
					</li>
				</ul>
				<button v-if="isBtn==true" @click="">Order Now</button>
				<router-link to="#" v-else>Order Now</router-link>
			</div>
		</div>

</div>
</template>

<style scoped>
.card {
	margin: 0 2rem 1rem 0;
	padding: 0 0 0.5rem 0;
	width: 15rem;
	background: #fff;
	color: #444;
	text-align: center;
	border-radius: 1rem;
	box-shadow: 0.5rem 0.5rem 1rem rgba(51, 51, 51, 0.2);
	overflow: hidden;
}

.card:hover {
	transform: scale(1.02);
}

.cardHeader{
	position: relative;
	height: 5rem;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 0.8rem;
	padding: 1rem 0;
	color:#fff;
	clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
	display: flex;
	justify-content: center;
	align-items: center;
}
.cardHeader, button, a {
	background-size: 100%;
	background-repeat: repeat;
	background-image: var(--gradient);
}
.cardBody{
	padding: 0.5rem 0;
}
.cardBody h2{
	font-size: 2rem;
	font-weight: bold;
}
.cardBody ul{
	color: #444;
	list-style: none;
	line-height: 1.2rem;
	margin: 10px 3px;
	position: relative;
	display: flex;
	flex-direction: column;
}
.cardBody ul li{
	font-size: 1.2rem;
	line-height: 1.5rem;
}
.card button, .card a{
	position: relative;
	display: inline-block !important;
	text-decoration: none;
	color:#fff;
	margin: 0.5rem 0;
	padding: 0.7rem 1rem;
	outline: none;
	border-radius: 1rem;
	font-weight: bold;
	font-size: 1rem;
	border: none;
	cursor: pointer;
	transition: all 0.1ms ease-in-out;
	width: auto;
}
.card button:hover, .card a:hover{
	-webkit-background-clip: text;
	-moz-background-clip:unset;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	transform: scale(0.95);

}

</style>