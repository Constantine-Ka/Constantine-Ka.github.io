<script>
export default {
  name: "404Scary"
};
</script>

<template>
  <section>
    <div class="container">
      <div class="bowl">
        <div class="spider-web-thread"></div>
        <div class="spider">
          <div class="leg left-1"></div>
          <div class="leg left-2"></div>
          <div class="leg left-3"></div>
          <div class="leg right-1"></div>
          <div class="leg right-2"></div>
          <div class="leg right-3"></div>
        </div>
      </div>
      <div class="ghost">
        <div class="eye eye-left"></div>
        <div class="eye eye-right"></div>
        <div class="mouth"></div>
      </div>
      <div class="wooden-pole"></div>
      <div class="board-text">
        <p>
          <span>Error 404</span> <span>Page not found</span>
        </p>
      </div>
      <div class="board-pin"></div>
    </div>
    <div class="btn-container">
      <button class="btn-to-home"
        type="button">Home
      </button>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #282c35;
  position: relative;
  z-index: 1;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  height: 59vh;
  width: 100vw;
  background-color: #5b3b8c;
  z-index: 2;
}

.bowl {
  position: absolute;
  top: calc(50vh + 19px);
  left: calc(50vw - 25px);
  height: 45px;
  width: 100px;
  background-color: #cfd8dc;
  border: 5px solid #000000;
  border-radius: 5px 5px 50px 50px;
  box-shadow: inset -5px 0 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.bowl:hover .spider {
  transform: translateY(5px);
}

.bowl:hover + .ghost {
  transform: translateY(-15px);
  opacity: 1;
}

.spider-web-thread {
  position: absolute;
  left: 30px;
  height: 20px;
  width: 1px;
  background-color: #161c1f;
}

.spider {
  position: absolute;
  top: 15px;
  left: 25px;
  height: 10px;
  width: 10px;
  background-color: #161c1f;
  border-radius: 100%;
  transition: transform 0.25s ease;
}

.leg {
  height: 1px;
  width: 5px;
  background-color: #161c1f;
}

.left-1 {
  margin-top: 1px;
  margin-left: -4px;
  transform: rotate(15deg);
}

.left-2 {
  margin-top: 2px;
  margin-left: -4px;
  transform: rotate(0deg);
}

.left-3 {
  margin-top: 2px;
  margin-left: -4px;
  transform: rotate(-15deg);
}

.right-1 {
  margin-top: -6px;
  margin-left: 8px;
  transform: rotate(-15deg);
}

.right-2 {
  margin-top: 2px;
  margin-left: 8px;
  transform: rotate(0deg);
}

.right-3 {
  margin-top: 2px;
  margin-left: 8px;
  transform: rotate(15deg);
}

.ghost {
  position: absolute;
  top: calc(50vh - 12px);
  left: calc(50vw + 17px);
  height: 60px;
  width: 50px;
  background-color: #ffffff80;
  border: 2px solid #ffffff40;
  border-radius: 100px 100px 5px 5px;
  box-shadow: inset -5px 0 0 rgba(0, 0, 0, 0.1);
  opacity: 0.25;
  z-index: -1;
  transition: opacity 0.5s ease, transform 0.25s ease;
}

.ghost:hover {
  transform: translateY(-15px);
  opacity: 1;
}

.eye {
  position: absolute;
  height: 10px;
  width: 7px;
  background-color: #ffffff80;
  border-radius: 100%;
}

.eye-left {
  top: 15px;
  left: 14px;
}

.eye-right {
  top: 15px;
  left: 28px;
}

.mouth {
  position: absolute;
  top: 21px;
  left: 14px;
  height: 13px;
  width: 20px;
  background-color: #ffffff00;
  border: 2px solid transparent;
  border-bottom: 2px solid #c9ccce;
  border-radius: 100%;
}

.wooden-pole {
  position: absolute;
  top: calc(50vh - 83px);
  left: calc(50vw - 80px);
  height: 150px;
  width: 17px;
  background-color: #5d4037;
  border: 4px solid #3e2723;
  border-bottom: 4px solid transparent;
  border-radius: 4px;
  box-shadow: inset -4px 0 0 #00000040;
  animation: blinkingPole 5s steps(5, start) infinite;
}

@keyframes blinkingPole {
  0%, 19%, 21%, 24%, 26%, 54%, 56%, 100% {
    opacity: 0;
  }

  20%, 25%, 55% {
    opacity: 1;
  }
}

.board-text {
  position: absolute;
  top: calc(50vh - 87px);
  left: calc(50vw - 147px);
  height: 60px;
  width: 125px;
  background-color: #8a6b47;
  transform-origin: 60% 0%;
  border: 4px solid #58442d;
  border-radius: 4px;
  transition: transform 0.25s ease;
  animation: movingBoard 2s ease infinite;
}

@keyframes movingBoard {
  0%, 100% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(-10deg);
  }
}

.board-text p {
  font-weight: bold;
  font-size: 12px;
  font-family: monospace;
  color: #000000bf;
  text-align: center;
  margin: 16px 0 0 0;
}

.board-text p span {
  display: block;
}

.board-pin {
  position: absolute;
  top: calc(50vh - 79px);
  left: calc(50vw - 70px);
  height: 5px;
  width: 5px;
  background-color: #9e9e9e;
  border: 1px solid #424242;
  border-radius: 100%;
}

.btn-container {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-to-home {
  font-size: 24px;
  font-family: monospace;
  background-color: #c0c0c0;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 16px 32px;
  border-radius: 8px;
  animation: btnAnim 4s infinite;
}

@keyframes btnAnim {
  5%, 50% {
    background-color: #c0c0c0;
    transform: scale(1);
  }

  10% {
    background-color: #778899;
    transform: scale(0.75);
  }

  15% {
    background-color: #a7a6ba;
    transform: scale(1.25);
  }

  20% {
    background-color: #dbd7d2;
    transform: scale(0.75) rotate(-5deg);
  }

  25% {
    background-color: #c0c0c0;
    transform: scale(1) rotate(5deg);
  }

  30% {
    background-color: #778899;
    transform: scale(1.25) rotate(-2.5deg);
  }

  35% {
    background-color: #a7a6ba;
    transform: scale(1) rotate(2.5deg);
  }

  40% {
    background-color: #dbd7d2;
    transform: scale(0.75) rotate(0deg);
  }
}

.btn-to-home:hover {
  animation: btnHoverAnim 1s;
}

@keyframes btnHoverAnim {
  0%, 100% {
    background-color: #778899;
  }

  25%, 75% {
    background-color: #a7a6ba;
    transform: scale(0.75, 1.25);
  }

  50% {
    background-color: #dbd7d2;
    transform: scale(1.25, 0.75);
  }
}

</style>