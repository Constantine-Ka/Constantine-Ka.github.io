<script>
export default {
  name: "NeumorphismGradientLoadingAnimation"
}
</script>
<template>
  <section>
    <div class="loader">
      <div class="text">

        <span><i></i></span></div>
    </div>
  </section>
</template>


<style scoped>
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eaeef0;
  }
  .loader{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader span{
    position: relative;
    display: block;
    width: 250px;
    height: 250px;
    background: #eaeef0;
    border: 6px solid #eaeef0;
    box-shadow: -8px -8px 15px rgba(255,255,255,1), 8px 8px 25px rgba(0,0,0,0.15);
    border-radius: 50%;
    overflow: hidden;

  }
  .loader span:before{
    content: '';
    position: absolute;
    inset: 40px;
    background:#eaeef0;
    border-radius: 50%;
    box-shadow: -8px -8px 15px rgba(255,255,255,1),
                8px 8px 25px rgba(0,0,0,0.15),
          inset 3px 3px 10px rgba(0,0,0,0.1),
          inset -1px -1px 15px rgba(255,255,255,1);
    border: 2px solid #eaeef0;
    z-index: 1;
  }
  .loader span i{
    position: absolute;
    inset: 0;
    /*background: linear-gradient(#42abff, #ff4f8b, #ffeb3b);*/
    background: conic-gradient(#42abff, #ff4f8b, #ffeb3b);

    border-radius: 50%;
    filter: blur(5px);
    animation: spinner 1s linear infinite;
  }
  @keyframes spinner {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform:rotate(360deg);
    }
  }


</style>