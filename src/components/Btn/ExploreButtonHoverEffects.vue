<script>
export default {
  name: "ExploreButtonHoverEffects ",
  data(){
    return{
      buttonText1:"Explore",
      buttonText2:"Button"
    }
  }
};

</script>

<template>
  <section>
    <a href="#"><i></i><span>{{buttonText1}}</span></a>
    <a href="#"><i></i><span>{{buttonText2}}</span></a>
  </section>
</template>



<style scoped>
  section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #28272a;
    gap:15px;
  }
  a{
    position: relative;
    width: 200px;
    height: 60px;
    background: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 1.25em;
    text-transform: uppercase;
    font-weight: 500;
  }
  a::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #359ad8;
    transform: scale(0);
    transition: 0.5s ease-in-out;

  }
  a:hover::before{
    transform: scaleX(1);
    transform-origin: left;
  }
  a span{
    display:  inline-block;
    z-index: 2;
    transition: 0.5s ease-in-out;
  }
  a:hover span{
    color: #333333;
  }
  a i{
    position: relative;
    display: inline-block;
    width: 2px;
    height: 30px;
    background: #d3d636;
    transition: 0.5s width 0.5s, height 0.5s;
    transition-delay: 0s, 0.5s, 1s;
  }
  a:hover i{
    width: 30px;
    height: 2px;
    background: #333333;
    transition-delay:0s, 0.5s, 0.5s ;
  }
  a i::before{
    content: "";
    position: absolute;
    top: 0.5px;
    right: 0;
    width: 50%;
    height: 2px;
    background: transparent;
    rotate: 0;
    transform-origin: right;
    transition: 1s;
  }
  a:hover i::before{
    background: #333333;
    rotate: 45deg;
    transition-delay: 1.5s;

  }
  a i::after{
    content: "";
    position: absolute;
    top: -0.5px;
    right: 0;
    width: 50%;
    height: 2px;
    background: transparent;
    rotate: 0;
    transform-origin: right;
    transition: 1s;
  }
  a:hover i::after{
    background: #333333;
    rotate: -45deg;
    transition-delay: 1.5s;

  }


</style>