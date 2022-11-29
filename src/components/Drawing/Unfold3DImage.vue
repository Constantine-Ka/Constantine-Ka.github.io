<script>
	export default {
		name: "Unfold3DImage",
		props:{
			imgUrl:{
				type: String,
				required: false,
				default: 'https://picsum.photos/640/360',

			}
		}
	}
</script>

<template>
	<section>
		<div class="box" :style="'--image: url('+imgUrl+')'">
			<span style="--i:0"></span>
			<span style="--i:1"></span>
			<span style="--i:2"></span>
			<span style="--i:3"></span>
		</div>
	</section>
</template>

<style scoped>
	section{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #2f364f;
	}
	.box{
		width: 640px;
		height: 360px;
		transform: rotate(-25deg) skew(25deg);
		display: flex;


	}
	.box:hover{
		transform:rotate(-25deg) skew(-25deg) translateY(-20px);
	}
	.box span{
		width: 25%;
		height: 100%;
		background: var(--image);
		background-size: auto;
		background-position: calc(-160px * var(--i));
		display: block;
		transition: 0.5s;
		pointer-events: none;
		border-top:5px solid #fff;
		border-bottom: 5px solid #fff;
	}
	.box:hover span:nth-child(odd){
		transform: skewY(25deg);
		box-shadow: inset 20px 0 50px rgba(0,0,0,0.5);
	}
	.box:hover span:nth-child(even){
		transform: skewY(-25deg);
		box-shadow: inset 20px 0 50px rgba(0,0,0,0.5);
	}
	.box span:first-child{
		border-left: 5px solid #fff;
	}
	.box span:last-child{
		border-right: 5px solid #fff;
	}

</style>