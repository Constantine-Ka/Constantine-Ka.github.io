<script>
import ufoUrl from '@/assets/page404UFO/ufo.png';
export default {
	name: '404ufo',
	data() {
		return {
			ufoUrl
		};
	}
};
</script>

<template>
	<section>
		<div class="content">
			<div class="img">
				<img :src="ufoUrl" alt="UFO" />
				<p class="number">404</p>
			</div>
			<div class="description">
				<p class="error">Opps...looks like you got lost.</p>
				<router-link to="/" class="linkHome">Go back Home</router-link>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	background-color: #1a1a1a;
}
.content {
	position: absolute;
	top: 4em;
	width: 100%;
	text-align: center;
}
.content .img {
	width: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}
.content .img img {
	width: 300px;
	display: block;
	-webkit-animation: animates 2s linear infinite alternate;
	animation: animates 2s linear infinite alternate;
}
.content .img .number {
	position: absolute;
	font-size: 5.5rem;
	font-family: 'Gill Sans', sans-serif;
	font-weight: 600;
	top: 9rem;
	color: rgba(255, 255, 255, 0.5);
	-webkit-animation: animatestext 2s linear infinite alternate;
	animation: animatestext 2s linear infinite alternate;
}
.content .error {
	color: #ffffff;
	width: 50%;
	margin: 2em auto;
	font-family: 'Gill Sans', sans-serif;
}
.content .linkHome {
	background-color: #0077d8f4;
	color: #ffffff;
	font-weight: 600;
	font-family: 'Gill Sans', sans-serif;
	padding: 0.8em 1em;
	border-radius: 50px;
	text-decoration: none;
}

@-webkit-keyframes animates {
	0% {
		-webkit-transform: translateX(5%);
		transform: translateX(5%);
	}
	100% {
		-webkit-transform: translateX(-5%);
		transform: translateX(-5%);
	}
}

@keyframes animates {
	0% {
		-webkit-transform: translateX(5%);
		transform: translateX(5%);
	}
	100% {
		-webkit-transform: translateX(-5%);
		transform: translateX(-5%);
	}
}

@-webkit-keyframes animatestext {
	0% {
		-webkit-transform: rotate(5deg);
		transform: rotate(5deg);
	}
	100% {
		-webkit-transform: rotate(-5deg);
		transform: rotate(-5deg);
	}
}

@keyframes animatestext {
	0% {
		-webkit-transform: rotate(5deg);
		transform: rotate(5deg);
	}
	100% {
		-webkit-transform: rotate(-5deg);
		transform: rotate(-5deg);
	}
}
</style>
