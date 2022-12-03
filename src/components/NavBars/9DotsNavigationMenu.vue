<script>
	export default {
		name: "9DotsNavigationMenu",
		data(){
			return{
				isOpen:false
			}
		}
	}
</script>

<template>
<section>
	<div class="DotsNavigationMenu">
		<div
				class="navigation"
				:class="{active:isOpen}"

		>
			<router-link to="#" style="--i:0; --x:-1; --y:0" ><ion-icon name="camera-outline"></ion-icon></router-link>
			<router-link to="#" style="--i:1; --x:1; --y:0" ><ion-icon name="finger-print-outline"></ion-icon></router-link>
			<router-link to="#" style="--i:2; --x:0; --y:-1" ><ion-icon name="chatbubble-outline"></ion-icon></router-link>
			<router-link to="#" style="--i:3; --x:0; --y:1" ><ion-icon name="alarm-outline"></ion-icon></router-link>
			<router-link to="#" style="--i:4; --x:-1; --y:1" ><ion-icon name="game-controller-outline"></ion-icon></router-link>
			<router-link to="#" style="--i:5; --x:-1; --y:-1" ><ion-icon name="moon-outline"></ion-icon></router-link>
			<router-link to="#" style="--i:6; --x:1; --y:-1" ><ion-icon name="water-outline"></ion-icon></router-link>
			<router-link to="#" style="--i:7; --x:1; --y:1" ><ion-icon name="time-outline"></ion-icon></router-link>
		</div>
		<div
				class="close"
				@click="isOpen=!isOpen"
		>
			<ion-icon name="close-outline"></ion-icon>
		</div>
	</div>
</section>
</template>

<style scoped>
	section{
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: #161a23;
	}
	section .DotsNavigationMenu{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 170px;
		height: 170px;
		/*background: rgba(255,255,255,0.1);*/
	}
	.navigation{
		position: relative;
		width: 40px;
		height: 40px;
		/*background: rgba(255,255,255,0.2);*/
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.5s;
	}
	.navigation.active{
		position: relative;
		width: 40px;
		height: 40px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;

	}
	.navigation a{
		position: absolute;
		width: 7px;
		height: 7px;
		background: #fff;
		transform: translate(calc(14px*var(--x)), calc(14px * var(--y)));
		transition: transform 0.5s, width 0.5s, height 0.5s, background 0.5s;
		transition-delay: calc(0.1s * var(--i));
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
	}
	.navigation.active a{
		width: 45px;
		height: 45px;
		background: #1f2536;
		transform: translate(calc(60px*var(--x)), calc(60px * var(--y)));
	}
	.navigation a ion-icon{
		transition: 0.5s;
		font-size: 0em;
	}
	.navigation.active a ion-icon{
		font-size: 1.35em;
		color: #fff;
	}
	.navigation.active a:hover ion-icon{
		color: #2dfc52;
		filter: drop-shadow(0 0 2px #2dfc52) drop-shadow(0 0 5px #2dfc52) drop-shadow(0 0 15px #2dfc52);
	}
	.close{
		position: absolute;
		width: 7px;
		height: 7px;
		background: #fff;
		transition: 0.5s;
		transition-delay: 0.4s;
		/*pointer-events: none;*/
	}
	.navigation.active ~ .close{
		display: grid;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		/*pointer-events: initial;*/
		transition-delay: 0.8s;
		background: #2dfc52;
	}
	.navigation ~ .close ion-icon{
		font-size: 2em;
		scale: 0;
		color: #10131c;
		transition: 0.5s;
	}
	.navigation.active ~ .close ion-icon{
		scale: 1;
		transition-delay: 1s;
	}

</style>