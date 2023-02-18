<script>
export default {
  name: "404Bookshelf"
};
</script>

<template>
  <section>
    <div class="container">
      <a href="#home"
        class="book book-home">Home</a> <a href="#about"
      class="book book-about">About</a> <a href="#contact"
      class="book book-contact">Contact</a> <a href="#faq"
      class="book book-faq">F. A. Q.</a> <span class="book book-not-found"></span>
      <div class="door door-left"></div>
      <div class="door door-right"></div>
    </div>
    <h1>Error 404</h1>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  width: 100vw;
  background-color: #8b5a2b;
  color: #ffffff;
  font-family: monospace;
  padding: 32px;
  overflow: hidden;
}

.container {
  position: relative;
  height: 240px;
  width: 480px;
  display: flex;
  background-color: #ffffff40;
  margin: 150px auto 0;
  border: 8px solid #966f33;
  border-radius: 8px;
  perspective: 2000px;
  box-shadow: inset 0 0 32px #00000080;
}

.door {
  position: absolute;
  height: 224px;
  width: 236px;
  display: flex;
  align-items: center;
  background-color: #966f33;
  padding: 16px;
  box-shadow: 0 1px 1px #00000040;
  outline: 1px solid transparent;
  box-sizing: border-box;
}

.door::before {
  content: "";
  height: 24px;
  width: 24px;
  background-color: #00000040;
  border-radius: 50%;
}

.door.door-left {
  justify-content: flex-end;
  border-radius: 0 12px 12px 0;
  transform-origin: 0 0 0;
  animation: openLeftDoorAnim 3.5s ease-out forwards 1s, movingLeftDoorAnim 15s linear infinite forwards 9s;
}

.door.door-right {
  right: 0;
  border-radius: 12px 0 0 12px;
  transform-origin: 100% 0 0;
  animation: openRightDoorAnim 3s ease-out forwards 1.5s, movingRightDoorAnim 10s linear infinite forwards 8s;
}

@keyframes openLeftDoorAnim {
  60% {
    transform: rotateY(-115deg);
  }

  100% {
    transform: rotateY(-110deg);
  }
}

@keyframes openRightDoorAnim {
  60% {
    transform: rotateY(125deg);
  }

  100% {
    transform: rotateY(120deg);
  }
}

@keyframes movingLeftDoorAnim {
  0%, 30%, 100% {
    transform: rotateY(-110deg);
  }

  5% {
    transform: rotateY(-115deg);
  }

  15% {
    transform: rotateY(-107deg);
  }

  25% {
    transform: rotateY(-113deg);
  }
}

@keyframes movingRightDoorAnim {
  0%, 30%, 100% {
    transform: rotateY(120deg);
  }

  5% {
    transform: rotateY(125deg);
  }

  15% {
    transform: rotateY(117deg);
  }

  25% {
    transform: rotateY(123deg);
  }
}

.book {
  position: absolute;
  background-color: #ffffff40;
  color: #ffffff;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 12px 64px 12px 32px;
  border-radius: 4px;
  box-shadow: inset 0 0 12px #ffffff40;
  box-sizing: border-box;
  cursor: pointer;
}

.book.book-home {
  transform: rotate(-90deg) translate(-198px, 48px);
  transform-origin: 0;
}

.book.book-about {
  transform: rotate(-100deg) translate(-214px, 98px);
  transform-origin: 0;
  outline: 1px solid transparent;
}

.book.book-contact {
  right: 32px;
  bottom: 4px;
}

.book.book-faq {
  right: 12px;
  bottom: 52px;
}

a {
  text-decoration: none;
}

.book.book-not-found {
  width: 192px;
  height: 56px;
  background-color: transparent;
  transform: rotate(-90deg) translate(-192px, 208px);
  border: 1px dashed #ffffff80;
  transform-origin: 0;
  cursor: default;
  animation: bookFadeAnim 1s 2.5s infinite forwards;
}

.book.book-not-found::after {
  content: "This page cannot be found.";
  width: 160px;
  display: block;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='30'><path fill='rgb(255, 255, 255)' d='M7.688,3.737C6.1,10.409,4.624,16.982,2.475,23.517c-0.424,1.29,0.724,2.338,1.957,1.916 c5.879-2.021,11.743-4.107,17.409-6.696c1.246-0.572,0.443-2.366-0.815-1.932c-3.856,1.333-7.695,2.69-11.565,3.959 c2.879-2.526,5.485-5.215,9.013-7.17c4.441-2.459,9.299-4.109,14.281-4.915c10.903-1.772,22.052,0.562,31.979,5.04 c9.241,4.162,12.895,8.725,13.164,4.942c0.121-1.69-5.57-4.953-14.125-8.714C53.19,5.292,41.094,3.539,29.636,6.058 c-7.122,1.567-16.708,5.374-22.064,11.544c1.359-4.455,2.461-9.028,3.032-13.563C10.852,2.091,8.12,1.927,7.688,3.737z'/></svg>");
  background-repeat: no-repeat;
  background-size: 64px;
  background-position: left center;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  text-transform: initial;
  transform: rotate(90deg) translate(96px, -16px);
  padding-left: 80px;
  opacity: 0.5;
}

.book:hover:not(.book-not-found) {
  background-color: #ffffff80;
}

@keyframes bookFadeAnim {
  50% {
    border: 1px dashed #ffffff40;
  }
}

h1 {
  font-size: 48px;
  text-align: center;
  margin-top: 60px;
}

</style>