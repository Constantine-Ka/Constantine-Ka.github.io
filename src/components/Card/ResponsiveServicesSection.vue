<script>
	export default {
		name: "ResponsiveServicesSection",
		props:{
			content:{
				type:Object,
				default(){
					return {icon:'happy-outline', title:'Default', description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'}
				}
			},
			colorStyle:{
				type:String,
				default:'lime'
			}
		}
	}
</script>

<template>
<div class="box" :style="'--clr:'+this.colorStyle">
	<div class="content">
		<div class="icon">
			<ion-icon :name="this.content.icon"></ion-icon>
		</div>
		<div class="text">
			<h3>{{content.title}}</h3>
			<p>{{content.description}}</p>
			<router-link to="#">Read More</router-link>
		</div>
	</div>
</div>
</template>

<style scoped>
	.box{
		position: relative;
		width: 300px;
		height: 350px;
		background: #2e2e2e;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;

	}
	.box .content{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		gap: 20px;
		padding: 0 20px;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.box .content .icon{
		color: var(--clr);
		transition: 0.5s ease-in-out;
		box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 6px var(--clr);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2.8em;
		padding: 0.25em 0.25em;
	}
	.box:hover .content .icon{
		background: var(--clr);
		color: #2e2e2e;
		box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 300px var(--clr);
	}
	.box .content .text h3{
		font-size: 2em;
		color: #fff;
		font-weight: 500;
		transition: 0.5s ease-in-out;
	}
	.box:hover .content .text h3{
		color: #2e2e2e;
	}
	.box .content .text p{
		font-size: 1.5rem;
		color: #777;
		transition: 0.5s ease-in-out;
	}
	.box:hover .content .text p{
		color: #2e2e2e;
	}
	.box .content .text a{
		position: relative;
		background: var(--clr);
		color: #2e2e2e;
		padding: 8px 15px;
		display: inline-block;
		text-decoration: none;
		margin-top: 10px;
		transition: 0.5s ease-in-out;
	}
	.box:hover .content .text a{
		background: #2e2e2e;
		color: var(--clr);
	}
	.box::before{
		 content: '';
		 position: absolute;
		 inset: -10px 50px;
		 border-top: 4px solid var(--clr);
		 border-bottom: 4px solid var(--clr);
		 z-index: 1;
		 transform: skewY(15deg);
		 transition: 0.5s ease-in-out;
	 }
	.box:hover::before{
		transform: skewY(0deg);
		inset: -10px 40px;
	}
	.box::after{
		content: '';
		position: absolute;
		inset: 60px -10px;
		border-left: 4px solid var(--clr);
		border-right: 4px solid var(--clr);
		z-index: 1;
		transform: skew(15deg);
		transition: 0.5s ease-in-out;
	}
	.box:hover::after{
		transform: skew(0deg);
		inset: 40px -10px;
	}



</style>