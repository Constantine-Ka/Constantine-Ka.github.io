<script lang="ts">
	export default {
		name: "ColorsLineButton" as string,
		data(){
			return{
				btns:[
					{title:"button", link:"#", color:"#1e9bff"},
					{title:"button", link:"#", color:"#ff1867"},
					{title:"button", link:"#", color:"#6eff3e"},
				] as Array<Object>
			}
		}
	}
</script>

<template>
<section>
	<router-link
			v-for="item in btns"
			:key="item"
			:to="item.link"
			:style="'--colr:'+item.color"
	>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		{{ item.title }}
	</router-link>
</section>
</template>

<style scoped>
	section{
		background: #27282c;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 120px;
	}
	section a{
		position: relative;
		padding: 16px 30px;
		font-size: 1.5em;
		color: var(--colr);
		text-decoration: none;
		text-transform: uppercase;
		text-shadow: 0 0 15px var(--colr);
		letter-spacing: 0.1em;
		background: transparent;
		transition: 0.5s;
		border:2px solid rgba(0,0,0,0.5);
	}
	section a:hover{
		color: #fff;
		border:2px solid rgba(0,0,0,0.0);
		text-shadow: 0 0 0 var(--colr);
		background: var(--colr);
		box-shadow: 0 0 10px var(--colr),
								0 0 30px var(--colr),
								0 0 60px var(--colr);
	}
	section router-link::before,
	section a::before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--colr);
		z-index: -1;
		transform: scale(1);
		transition: 0.5s;
	}
	section a:hover::before{
		transition-delay: 0.5s;
		transform: scale(1);
		box-shadow: 0 0 10px var(--colr),
								0 0 30px var(--colr),
								0 0 60px var(--colr);
	}
	section a span{
		position: absolute;
		background: var(--colr);
		pointer-events: none;
		box-shadow: 0 0 20px var(--colr),
								0 0 30px var(--colr),
								0 0 50px var(--colr),
								0 0 100px var(--colr);
	}
	section a span:nth-child(1),
	section a span:nth-child(3){
		width: 40px;
		height: 4px;
	}
	section a span:nth-child(2),
	section a span:nth-child(4){
		width: 4px;
		height: 40px;
	}
	section a span:nth-child(1){
		top: calc(50% - 2px);
		left: -50px;
		transform-origin: left;
		transition: 0.5s ease-in-out;
		transition-delay: 0.25s;
	}
	section a:hover span:nth-child(1){
		left: 50%;
		transform: scaleX(0);
		opacity: 0;
		transition-delay: 0s;
	}
	section a span:nth-child(3){
		top: calc(50% - 2px);
		right: -50px;
		transform-origin: right;
		transition: 0.5s ease-in-out;
		transition-delay: 0.25s;
	}
	section a:hover span:nth-child(3){
		right: 50%;
		transform: scaleX(0);
		opacity: 0;
		transition-delay: 0s;
	}
	section a span:nth-child(2){
		left: calc(50% - 2px);
		top: -50px;
		transform-origin: left;
		transition: 0.5s ease-in-out;
		transition-delay: 0.25s;
	}
	section a:hover span:nth-child(2){
		top: 50%;
		transform: scaleY(0);
		opacity: 0;
		transition-delay: 0s;
	}
	section a span:nth-child(4){
		left: calc(50% - 2px);
		bottom: -50px;
		transform-origin: right;
		transition: 0.5s ease-in-out;
		transition-delay: 0.25s;
	}
	section a:hover span:nth-child(4){
		bottom: 50%;
		transform: scaleY(0);
		opacity: 0;
		transition-delay: 0s;
	}

</style>