<script>
export default {
  name: "404rollingCube"
};
</script>

<template>
  <section>
    <div class="title-container">
      <h1>Error</h1>
    </div>
    <div class="container">
      <div class="cube">
        <div class="cube-face front">4</div>
        <div class="cube-face back">0</div>
        <div class="cube-face right">4</div>
        <div class="cube-face left">0</div>
        <div class="cube-face top">0</div>
        <div class="cube-face bottom">0</div>
      </div>
      <div class="cube-shadow"></div>
    </div>
    <div class="description-container">
      <h2>Page not found!</h2>
    </div>
    <div class="button-container">
      <div>
        <router-link to="/"
          title="Home"></router-link>
        <a href="#home"
          title="Home"></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&display=swap');

section {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #7f53ac;
  background-image: radial-gradient(#7f53ac, #647dee);
  font-family: 'ABeeZee', sans-serif;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.title-container {
  margin-bottom: 5%;
}

.title-container h1 {
  font-size: 48px;
}

.container {
  perspective: 400px;
}

.cube {
  position: relative;
  height: 200px;
  width: 200px;
  transform: translateZ(-100px);
  transform-style: preserve-3d;
  transition: 0.5s;
  animation: rotatingCubeAnim 4s infinite;
}

.cube-face {
  position: absolute;
  height: 200px;
  width: 200px;
  color: #ffffff;
  font-size: 120px;
  line-height: 200px;
  text-align: center;
}

.cube-face.front {
  background-color: #282c35;
  transform: rotateY(0deg) translateZ(100px);
}

.cube-face.back {
  background-color: #36454f;
  transform: rotateY(90deg) translateZ(100px);
}

.cube-face.right {
  background-color: #16161d;
  transform: rotateY(180deg) translateZ(100px);
}

.cube-face.left {
  background-color: #1a1110;
  transform: rotateY(-90deg) translateZ(100px);
}

.cube-face.top {
  background-color: #0f0f0f;
  transform: rotateX(90deg) translateZ(100px);
}

.cube-face.bottom {
  background-color: #100c08;
  transform: rotateX(-90deg) translateZ(100px);
}

@keyframes rotatingCubeAnim {
  25% {
    transform: translateZ(-100px) rotateY(-90deg);
  }

  50% {
    transform: translateZ(-100px) rotateY(-180deg);
  }

  75%, 85% {
    transform: translateZ(-100px) rotateX(-90deg);
  }
}

.cube-shadow {
  position: absolute;
  top: calc(100% - 20px);
  left: -50px;
  height: 30px;
  width: calc(100% + 100px);
  background-color: #000000;
  border-radius: 50%;
  filter: blur(15px);
  z-index: -1;
}

.description-container {
  margin-top: 5%;
}

.description-container h2 {
  font-size: 32px;
}

.button-container {
  display: inline-flex;
  margin-top: 5%;
}

.button-container div {
  position: relative;
  height: 50px;
  width: 160px;
  margin: 0 15px;
  perspective: 1000px;
}

.button-container div a {
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translateZ(-25px);
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.button-container div a::after, .button-container div a::before {
  content: attr(title);
  position: absolute;
  display: flex;
  height: 50px;
  width: 160px;
  justify-content: center;
  align-items: center;
  border: 4px solid #000000;
}

.button-container div a::before {
  background-color: #000000;
  color: #ffffff;
  transform: rotateY(0deg) translateZ(25px);
}

.button-container div a::after {
  background-color: #7f53ac;
  background-image: linear-gradient(#7f53ac, #647dee);
  color: #000000;
  transform: rotateX(90deg) translateZ(25px);
}

.button-container div a:hover {
  transform: translateZ(-25px) rotateX(-90deg);
}

</style>