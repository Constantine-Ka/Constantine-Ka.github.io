<script>
export default {
	name: '404nadegda'
};
</script>
<template>
	<section>
		<div class="notFound-blc">
			<div class="row notFound">
				<div class="Rubik" style="background: #bfcece">4</div>
				<div class="Rubik" style="background: #ce9a98">0</div>
				<div class="Rubik" style="background: #e1cecb">4</div>
			</div>
			<div class="row notFound text">
				Страница<br />
				не доступна
			</div>
			<router-link to="/" class="linkHome notFound"
				>Перейдите на главную страницу</router-link
			>
		</div>
	</section>
</template>

<style scoped>
section{
  display: flex;
  justify-content: center;
  align-items: center;
}
.notFound-blc{
  max-width: 1140px;
  display: flex;
  top:50px;
  flex-direction: column;
  position: relative;
}
.notFound {
  position: relative;
	display: flex;
	font-family: Rubik Mono One;
	font-style: normal;
	font-weight: bold;
}
.notFound:nth-child(1) {
	justify-content: flex-end;
	position: absolute;
	top: -280px;
	right: 0;
	flex-wrap: wrap;
	width: 580px;
}
.notFound:nth-child(3) {
	width: 580px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70px;
	background: #ce9a98;
	border-radius: 70px;
	padding: 15px 50px;
	text-decoration: none;
	font-family: Rubik Mono One;
	font-style: normal;
	font-weight: bold;
	font-size: 33px;
	line-height: 41px;
	font-size: 19px;
	line-height: 41px;
	color: #fff;
	margin-bottom: 10px;
}
@media (max-width: 850px) {
	.notFound:nth-child(3) {
		width: 341px;
		height: 35px;
		border-radius: 40px;
		font-size: 18px;
		line-height: 22px;
		padding: 6px 12px;
	}
}
.notFound .Rubik {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 270px;
	height: 270px;
	margin: 10px;
	font-size: 288px;
	line-height: 357px;
	border-radius: 50px;
	color: #fff;
	/* background: #ff6347; */
}
@media (max-width: 850px) {
	.notFound .Rubik {
		width: 105px;
		height: 105px;
		font-size: 96px;
		border-radius: 25px;
	}
}
.notFound.text {
	width: 844px;
	height: 400px;
	font-family: Rubik Mono One;
	font-style: normal;
	font-size: 90px;
	line-height: 111px;
	margin-top: 0px;
	color: #42466d;
}
@media (max-width: 850px) {
	.notFound.text {
		margin-top: 130px;
		text-align: center;
		font-size: 36px;
		line-height: 45px;
		width: 99vw;
		height: 100px;
	}
}
</style>