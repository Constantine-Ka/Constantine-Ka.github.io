<script>
export default {
  name: "GlowingCube",
};
</script>

<template>
  <section>
    <div class="container">
      <div class="box">
        <div class="cube">
          <div class="top"></div>
          <div>
            <span style="--i: 0"></span>
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
	padding-top: 50px;
	background: #1d0035;

}
section .container{
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform-style: preserve-3d;
	transform: perspective(700px);
}

.box {
  position: absolute;
  transform-style: preserve-3d;
  top: 200px;
}
.box .cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
	animation: animateCube 15s linear infinite;
}
@keyframes animateCube {
	0%{
		transform: rotateY(0deg);
	}
	100%{
		transform: rotateY(360deg);
	}
}
.box .cube div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}
.box .cube div span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
	background: radial-gradient(#fb6200, #fb6200, #c3300f);
  transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
}
.box .cube .top{
	position: absolute;
	top:0px;
	left: 0;
	width: 200px;
	height: 200px;
	background: #b22708;
	transform: rotateX(90deg) translateZ(100px);
	display: flex;
	align-items: center;
	justify-content: center;
}
.box .cube .top::before{
	content: '';
	position: absolute;
	width: 400px;
	height: 400px;
	background: #fb6200;
	transform: translateZ(-400px);
	filter: blur(50px);
	box-shadow: 0 0 120px rgba(251,98,0,0.2),
							0 0 200px rgba(251,98,0,0.4),
							0 0 300px rgba(251,98,0,0.6),
							0 0 400px rgba(251,98,0,0.8),
							0 0 500px rgba(251,98,0,1.0);
}

</style>