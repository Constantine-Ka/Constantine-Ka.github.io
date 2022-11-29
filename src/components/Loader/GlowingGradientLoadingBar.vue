<script>
export default {
  name: "GlowingGradientLoadingBar"
}
</script>
<template>
  <section>
    <div class="loader"></div>
  </section>
</template>



<style scoped>
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
  }
  .loader{
    position: relative;
    width: 300px;
    height: 10px;
    border-radius: 5px;
    background: #fff;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
  .loader::before{
    content: "";
    position: absolute;
    border-radius: 5px;
    inset: 0;
    background: linear-gradient(90deg, #fb0094, #0000ff,#00ff00, #ffff00, #fb0094,#00ff00, #ffff00, #fb0094);
    animation: glowingLinear 20s infinite;
    background-size: 500%;

  }
  .loader::after{
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 5px;
    background: linear-gradient(90deg, #fb0094, #0000ff,#00ff00, #ffff00, #fb0094,#00ff00, #ffff00, #fb0094);
    animation: glowingLinear 15s infinite;
    background-size: 500%;
    filter: blur(20px);
  }
  @keyframes glowingLinear {
    0%{
      background-position: 0 0;
    }
    100%{
      background-position: 500% 0;
    }
  }
</style>