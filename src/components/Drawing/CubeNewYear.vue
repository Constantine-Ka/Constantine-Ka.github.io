<script>
	export default {
		name: "CubeNewYear"
	}
</script>

<template>
<section>
	<div class="box">
		<div class="block">
			<span style="--i:0"></span>
			<span style="--i:1"></span>
			<span style="--i:2"></span>
			<span style="--i:3"></span>
		</div>
		<div class="text">
			<span style="--i:0" data-text="Happy">Happy</span>
			<span style="--i:1" data-text="new">new</span>
			<span style="--i:2" data-text="year">year</span>
			<span style="--i:3" data-text="2023">2023</span>
		</div>

	</div>
</section>
</template>

<style scoped>
	section{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #333;
		width: 100vw;
		height: 100vh;
	}
	.box{
		position: relative;
		height: 200px;
		transform-style: preserve-3d;
		animation: animate 16s linear infinite;
	}
	@keyframes animate {
		0%{
			transform: rotateX(-20deg) rotateY(360deg);
		}
		100%{
			transform: rotateX(-20deg) rotateY(0deg);
		}
	}
	.box div{
		position: absolute;
		inset: 0;
		transform-style: preserve-3d;
	}
	.box div.block span{
		position: absolute;
		width: 200px;
		height: 100px;
		background: #444;
		left: calc(50% - 100px);
		transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
		animation: none;
		transition: 0.5s;
	}
	.box:hover div.block span{
		background: #f00;
		filter: drop-shadow(0 0 50px #f00);
	}
	.box div.text span{
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
		cursor: pointer;
		color: #fff;
		font-size: 8em;
		font-weight: bold;
		text-transform: uppercase;
		z-index: 10;
		line-height: 1em;
		animation: none;
		-webkit-text-stroke: 3px #000;
		transform-style: preserve-3d;
	}
	.box div.text span:nth-child(1){
		font-size: 6em;

	}
	.box div.text span::before{
		content: attr(data-text);
		position: absolute;
		bottom: 7px;
		transform-origin: bottom;
		transform: rotateX(-90deg);
		color:rgba(0,0,0,0.1);
		-webkit-text-stroke: 0px #000;
		filter: blur(5px);
	}
	.box div.text span::after{
		content: '';
		position: absolute;
		top: 100px;
		width: 400px;
		height: 100px;
		background: #444;
		transform: rotateX(-90deg);
		transition: 0.5s;
	}
	.box:hover div.text span::after{
		background: #f00;
		filter: drop-shadow(0 0 50px #f00);
	}

</style>