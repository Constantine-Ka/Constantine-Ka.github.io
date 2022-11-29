<script>
import imgUrl from '@/assets/page404insideText/bg.jpg';
export default {
	name: 'page404insideText',
	data() {
		return {
			image: imgUrl
		};
	}
};
</script>

<template>
	<section>
		<div class="container">
			<h2>OOps! Page not found.</h2>
			<h1 :style="'--imgUrl:url(' + image + ')'">404</h1>
			<p>We can't find the page you're looking for.</p>
			<router-link to="/" class="linkHome">Go back Home</router-link>
		</div>
	</section>
</template>

<style scoped>
section {
	position: relative;
	min-height: 100vh;
	background-image: linear-gradient(125deg, #6a89cc, #b8e994);
}
.container {
	width: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	text-align: center;
	color: #343434;
}

.container h1 {
	font-size: 160px;
	margin: 0;
	font-weight: 900;
	letter-spacing: 20px;
	background: var(--imgUrl) center no-repeat;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
}
.container p {
	font-size: 1.5em;
	margin-bottom: 1em;
}
.container a {
	text-decoration: none;
	background: #e55039aa;
	color: #fff;
	padding: 12px 24px;
	display: inline-block;
	border-radius: 25px;
	font-size: 14px;
	text-transform: uppercase;
	transition: 0.4s;
}

.container a:hover {
	background: #e55039;
}
</style>
