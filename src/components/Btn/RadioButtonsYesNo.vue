<script>
	export default {
		name: "RadioButtonsYesNo"
	}
</script>

<template>
	<section>
		<div class="box">
			<p>Do you like me</p>
			<label>
				<input type="radio" name="like" >
				<span class="yes">Yes</span>
			</label>
			<label>
				<input type="radio" name="like" >
				<span class="no">No</span>
			</label>
		</div>
	</section>
</template>

<style scoped>
	section{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		background: #262626;
	}
	.box{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 200px;
		padding: 20px;
		background: #000;
		color: #fff;
		box-shadow: 0 10px 30px rgba(0,0,0,1);
		border-radius: 5px;
		overflow: hidden;
	}
	.box::before{
		content: '';
		position: absolute;
		top: 0;
		left: -50%;
		width: 100%;
		height: 100%;
		background: rgba(255,255,255,0.05);
		transform: skewX(-3deg);
		pointer-events: none;
	}
	.box p{
		margin: 0;
		padding: 0;
		color: #fff;
		font-size: 24px;
	}
	.box label{
		position: relative;
		cursor: pointer;
	}
	.box label input{
		display: none;
	}
	.box label span{
		position: relative;
		display: inline-block;
		margin: 20px 10px;
		padding: 5px;
		width: 50px;
		background: #000;
		border: 1px solid #444;
		color: #444;
		border-radius: 4px;
	}
	.box label input:checked ~span{
		color: #fff;
		border: 1px solid #008eff;
	}
	.box label input:checked ~span::before{
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #008eff;
		z-index: -1;
		filter: blur(10px);
	}
	.box label input:checked ~span::after{
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #008eff;
		z-index: -1;
		filter: blur(15px);
	}
	.box label input:checked ~span.yes{
		color: #62ff00;
		border-color: #62ff00;
		box-shadow: inset 0 0 10px #62ff00;
	}
	.box label input:checked ~span.yes::before,
	.box label input:checked ~span.yes::after{
		background-color: #62ff00;
	}
	.box label input:checked ~span.no{
		color: #f00;
		border-color: #f00;
		box-shadow: inset 0 0 10px #f00;
	}
	.box label input:checked ~span.no::before,
	.box label input:checked ~span.no::after{
		background-color: #f00;
	}

</style>