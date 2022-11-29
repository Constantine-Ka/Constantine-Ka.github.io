<script>
import miamiBg from '@/assets/page404Miami/miami-night.jpg';
export default {
	name: '404miami',
  data(){
    return{
      miamiBg
    }
  }
};
</script>

<template>
  <section :style="'--miamiBg:url('+miamiBg+')'">
    <div class="error">
      <div class="four">
        <div class="one line shadow">
          <div class="up circule shaow"></div>
          <div class="down circule shaow"></div>
        </div>
        <div class="two line shadow"></div>
        <div class="three line shadow">
          <div class="up circule shadow"></div>
          <div class="down circule shadow"></div>
        </div>
      </div>
      <div class="zero">
        <div class="circule shadow"></div>
        <div class="vertical">
          <div class="circule shadow"></div>
          <div class="circule_max shadow"></div>
          <div class="circule shadow"></div>
        </div>
        <div class="circule shadow"></div>
      </div>
      <div class="four">
        <div class="one line shadow">
          <div class="up circule shadow"></div>
          <div class="down circule shadow"></div>
        </div>
        <div class="two line shadow"></div>
        <div class="three line shadow">
          <div class="up circule shadow"></div>
          <div class="down circule shadow"></div>
        </div>
      </div>
    </div>
    <h1>Everything you were looking for was lost deep in the night city</h1>
    <router-link to="/" class="linkHome shadow">Go back Home</router-link>

  </section>
</template>

<style scoped>
  section{
    background: var(--miamiBg);
    display: grid;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }
  section:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.7;
    z-index: 1;
  }
  .error {
    width: 90%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .shadow {
    box-shadow: 0px 0px 30px 30px #c938DA25;
  }

  .four {
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .four .line {
    border: 8px solid #c938DA;
    border-radius: 100px;
    background: transparent;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .four .circule {
    width: 100px;
    height: 100px;
    border: 8px solid #c938DA;
    border-radius: 100px;
    background: transparent;
    z-index: 5;

  }

  .four .one {
    position: absolute;
    width: 100px;
    height: 500px;
  }

  .four .one .up {
    align-self: start;
    margin-top: -10px;
  }

  .four .one .down {
    align-self: end;
    margin-bottom: -10px;
  }

  .four .two {
    transform: skew(-39deg, 39deg);
    z-index: 4;
    position: absolute;
    width: 65px;
    height: 315px;
    align-self: right;
    margin-top: 10px;
    margin-left: -95px;
  }

  .four .three {
    z-index: 3;
    position: static;
    width: 400px;
    height: 75px;
    align-self: flex-end;
    margin-bottom: 150px;
    margin-right: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .four .three .up {
    width: 75px;
    height: 75px;
    margin-right: 20px;
  }

  .four .three .down {
    width: 75px;
    height: 75px;
    margin-left: 20px;
  }

  .zero {
    width: 475px;
    height: 475px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 8px solid #c938DA;
    border-radius: 475px;
    background: transparent;
    padding: 10px;
    margin-right: 50px;
  }

  .zero .circule {
    width: 75px;
    height: 75px;
    border: 8px solid #c938DA;
    border-radius: 75px;
    background: transparent;
  }

  .zero .vertical {
    display: grid;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
  }


  .zero .circule_max {
    width: 250px;
    height: 250px;
    border: 8px solid #c938DA;
    border-radius: 250px;
    background: transparent;
  }

  .zero .vertical .circule {
    justify-self: center;
    margin: 10px;
  }

  h1 {
    text-align: center;
    font-size: 36pt;
    color: #c938DA;
    text-shadow: 7px 5px 5px #c938DA85;
    z-index: 3;
  }

  a {
    text-align: center;
    font-size: 36pt;
    color: #c938DA;
    border: 4px solid #c938DA;
    border-radius: 75px;
    background: transparent;
    width: 50%;
    padding: 10px;
    text-decoration: none;
    margin: auto;
    z-index: 3;
  }
  a:hover{
    background: #c938DA;
    color: #fff;
  }

</style>
