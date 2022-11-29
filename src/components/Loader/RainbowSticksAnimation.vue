<script lang="ts">
	export default {
		name: "RainbowSticksAnimation",
		data() {
			return {
				count:16 as Number
			}
		}
	}
</script>

<template>
<section>
	<div class="box" :style="'--count:'+count+';'">
		<span
				v-for="item in count"
				:key="item"
				:style = "'--i:'+(item-1)+';'"
		>
			<i></i>
		</span>
	</div>
</section>
</template>

<style scoped>
	section{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #222;
	}
	.box{
		position: relative;
		width: 500px;
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box span{
		position: absolute;
		width: 10px;
		height: 250px;
		/*background: #333;*/
		border-bottom: 40px solid #222;
		transform-origin: bottom;
		transform: rotate(calc(360deg / var(--count) * var(--i)) );
	}
	.box span::before{
		content: '';
		position: absolute;
		height: 50px;
		width: 100%;
		background: #03a9f4;
		box-shadow: 0 0 20px #03a9f4;
		border-radius: 10px;
		left: 0;
		animation: animate 1.5s linear infinite;
		animation-delay: calc(0.1s * var(--i));
	}
	@keyframes animate {
		0%{
			transform: translateY(160px) rotate(0deg);
			filter: hue-rotate(0);
		}
		50%{
			transform: translateY(0px);
		}
		100%{
			transform: translateY(160px) rotate(360deg);
			filter:hue-rotate(360deg);
		}
	}
	.box span::after{
		content: '';
		position: absolute;
		bottom: 0;
		width: 20px;
		height: 10px;
		left: 0;
		background: #03a9f4;
		/*transform-origin: bottom;*/
		transform: rotate(8deg);
		animation: animateColor 1.5s linear infinite;
	}
	@keyframes animateColor {
		0%{
			filter: hue-rotate(0);
		}
		100%{
			filter: hue-rotate(360deg);
		}
	}
	.box span i{
		position: absolute;
		width: 15px;
		height: 100px;
		background: #222;
		border-left: 2px solid #03a9f4;
		border-right: 2px solid #03a9f4;
		transform-origin: top;
		transform: rotate(80deg);
		animation: animateColor 1.5s linear infinite, animationSide 1.5s linear infinite;
		animation-delay: calc(0.1s * var(--i));
	}
	@keyframes animationSide {
		0%, 40%, 65.1%, 100%{
			background: #222;
		}
		40.1%, 65% {
			background: #03a9f4;
		}

	}

</style>