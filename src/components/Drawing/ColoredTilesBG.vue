<script>
	export default {
		name: "coloredTilesBG",
		data() {
			return{
				iconArray:[]
			}
		},
		beforeMount() {
			for (let i=0; i<500; i++){
				this.iconArray.push(Math.floor(Math.random() * 30) + 1)
			}
		}
	}
</script>

<template>
<section>
	<i
			v-for="item in 500"
	    :key="item"
			:style="'--i:'+item">
	</i>
</section>

</template>

<style scoped>
	section{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #111;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		padding: 0;
		margin-left: 0;
		margin-right: 0;
		gap:10px
	}
	section i{
		position: relative;
		width: 80px;
		height: 80px;
		background: #222;
	}
	section i:nth-child(5n+1){
		animation: animate 2s linear infinite, animateBg 5s linear infinite;
		animation-delay: calc(-1s * var(--i));
	}
	section i:nth-child(5n+2){
		animation: animate 3s linear infinite, animateBg 5s linear infinite;
		animation-delay: calc(-1.5s * var(--i));
	}
	section i:nth-child(5n+3){
		animation: animate 4s linear infinite, animateBg 5s linear infinite;
		animation-delay: calc(-2s * var(--i));
	}
	section i:nth-child(5n+4){
		animation: animate 5s linear infinite, animateBg 5s linear infinite;
		animation-delay: calc(-2.5s * var(--i));
	}
	section i:nth-child(5n+5){
		animation: animate 6s linear infinite, animateBg 5s linear infinite;
		animation-delay: calc(-3s * var(--i));
	}
	@keyframes animate {
		0%{
			background: #222;
		}
		60%{
			background: lime;
		}
		80%,100%{
			background: #222;
		}
	}
	@keyframes animateBg {
		0%{
			filter: hue-rotate(0deg);
		}
		100%{
			filter: hue-rotate(360deg);
		}

	}

</style>