<script>
import giphy from "@/assets/page404terminal/giphy.webp";

export default {
  name: "404TerminalStyle",
  data(){
    return{
      giphy
    }
  }
};
</script>

<template>
  <section>
    <div class="noise-bg" :style="'background-image: url('+giphy+')'"></div>
    <div class="overlay-bg"></div>
    <div class="terminal-container">
      <h1>Error <span class="error-code">404</span></h1>
      <p class="terminal-text">
        &gt; The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
      </p>
      <p class="terminal-text">
        &gt; Please try to <a href="#back"
        class="page-link">[go back]</a> or <a href="#home"
        class="page-link">[return to the homepage]</a>.
      </p>
      <p class="terminal-text">&gt; Good luck.</p>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  background-color: #000000;
  width: 100vw;
  background-image: radial-gradient(#005022, #001012);
  background-repeat: no-repeat;
  background-size: cover;
  color: #28ad22bf;
  font-family: 'Inconsolata', monospace;
  letter-spacing: 2.5px;
  font-size: 24px;
  text-shadow: 0 0 10px #28ad22bf, 0 0 2px #ffffffbf;
}

.noise-bg {
  position: absolute;
  height: 100%;
  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 0.05;
  pointer-events: none;
}

.overlay-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  background: repeating-linear-gradient(180deg, #00000000 0%, #00000080 50%, #00000000 100%);
  background-size: auto 4px;
  z-index: 1;
  pointer-events: none;
}

.overlay-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(0deg, transparent 0%, #22da2840 2%, #22da28bf 3%, #22da2840 3%, transparent 100%);
  background-repeat: no-repeat;
  animation: scanEffectAnim 5s linear infinite;
}

@keyframes scanEffectAnim {
  0% {
    background-position: 0 -100vh;
  }

  25%, 100% {
    background-position: 0 100vh;
  }
}

.terminal-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50vh;
  width: 75%;
  text-transform: uppercase;
}

.error-code, .page-link {
  text-decoration: none;
  color: #ffffff;
  letter-spacing: 5px;
}

.terminal-text {
  color: #28ad22;
  text-shadow: 0 0 1px #28ad22bf, 0 0 2px #ffffffbf;
  margin: 5% 0;
}


</style>