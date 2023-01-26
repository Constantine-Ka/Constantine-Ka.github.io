<script>
export default {
  name: "PolicevsTaxi"
};
</script>

<template>
  <section>
    <div class="road">
      <div class="police">
        <div class="light_beam"></div>
        <h4>Police</h4>
        <h3>Police</h3>
        <div class="side_mirror"></div>
        <span>
          <b></b>
          <i></i>
        </span>
      </div>
      <div class="police">
        <div class="light_beam"></div>
        <h4>Police</h4>
        <h3>Police</h3>
        <div class="side_mirror"></div>
        <span>
          <b></b>
          <i></i>
        </span>
      </div>
      <div class="taxi">
        <div class="light_beam"></div>
        <div class="side_mirror"></div>
        <span>
          <b></b>
          <i></i>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #355463;
    overflow: hidden;
  }
  .road{
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotate(-15deg);
  }
  .road::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #fff, #fff 50%, transparent 50%, transparent 100%);
    background-size: 50px;
    animation: animate_road 0.125s linear infinite;
  }
  
  @keyframes animate_road {
    0%{
      background-position:  50px 0;
    }
    100%{
      background-position: 0px 0px;
    }
  }
  .police{
    position: absolute;
    width: 200px;
    height: 80px;
    left: 50px;
    background: #3f4c54;
    border-radius: 10px;
    box-shadow: -10px 10px rgba(0,0,0,0.05);
    perspective: 800px;
    z-index:10;
    animation: animate_police_car 5s linear infinite;
  }
  .police:nth-child(2){
    left:400px;
    animation-delay: -2.5s;
  }
  @keyframes animate_police_car {
    0%{
      transform: translateX(20px) translateY(-50px);
    }
    25%{
      transform: translateX(-10px) translateY(0px);
    }
    50%{
      transform: translateX(20px) translateY(50px);
    }
    100%{
      transform: translateX(20px) translateY(-50px);
    }
  }
  
  .police::before{
    content: '';
    position: absolute;
    top: 12px;
    left: 2px;
    width: 5px;
    height: 15px;
    border-radius: 2px;
    background: #fc3c25;
    box-shadow: 0 42px #fc3c25;
  }
  .police::after{
    content: '';
    position: absolute;
    top: 10px;
    right: 2px;
    width: 6px;
    height: 16px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 44px #fff;
  }
  .police span{
    position: absolute;
    inset: 5px 10px;
    background: #475b66;
    border-radius: 10px;
    overflow: hidden;
    animation: none;
  }
  .police span::before{
    content: '911';
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%,-50%) rotate(90deg);
    color: #333;
    font-size: 1.15em;
    font-weight: 1000;
    letter-spacing: 0.1em;
    z-index: 200;
  }
  .police span::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 6px;
    height: 10px;
    background: #29282b;
    box-shadow: 0 -10px #1f5fff, 0 10px #df1b25;
    z-index: 195;
  }
  .police span b{
    position: absolute;
    inset: 0 30px;
    background: #344650;
    border-radius: 10px;
  }
  .police span b::before{
    content: '';
    position: absolute;
    inset:6px 25px;
    background: #ebebeb;
    border-radius: 5px;
    z-index: 190;
  }
  .police span b::after{
    content: '';
    position: absolute;
    inset: 0 58px;
    background: #ebebeb;


  }
  .police span i{
    position: absolute;
    inset: 0;
  }
  .police span i::before{
    content: '';
    position: absolute;
    top: 7px;
    left: 20px;
    width: 40px;
    height: 5px;
    background: #ebebeb;
    transform-origin: right;
    transform: rotate(15deg);
    box-shadow: 100px 34px #ebebeb;
  }
  .police span i::after{
    content: '';
    position: absolute;
    bottom: 7px;
    left: 20px;
    width: 40px;
    height: 5px;
    background: #ebebeb;
    transform-origin: right;
    transform: rotate(-15deg);
    box-shadow: 100px -34px #ebebeb;
  }
  .light_beam{
    position: absolute;
    top: 5px;
    right: -2px;
    width: 10px;
    height: 70px;
    background: #0002;
    border-radius: 15px;
    transform-style: preserve-3d;
  }
  .light_beam::before{
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 150px;
    height: 16px;
    background: linear-gradient(90deg, #fff6, transparent);
    transform-origin: left;
    transform: perspective(500px) rotateY(-50deg);
  }
  .light_beam::after{
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 150px;
    height: 16px;
    background: linear-gradient(90deg, #fff6, transparent);
    transform-origin: left;
    transform: perspective(500px) rotateY(-50deg);
  }
  .police h4{
    position: absolute;
    top: 100%;
    left: 0;
    color: #fff;
    text-transform: uppercase;
    z-index: 10;
    transform: translateY(-50px) rotate(90deg) scale(0.75);
  }
  .police h3{
    position: absolute;
    top: 100%;
    right: -2%;
    color: #fff;
    text-transform: uppercase;
    z-index: 10;
    transform: translateY(-50px) rotate(270deg)scale(0.75);
  }
  .police .side_mirror{
    position: absolute;
    inset: 0;
  }
  .police .side_mirror::before{
    content: '';
    position: absolute;
    top: -8px;
    right: 40px;
    width: 5px;
    height: 10px;
    background: #ebebeb;
    border-top-right-radius: 10px;
  }
  .police .side_mirror::after{
    content: '';
    position: absolute;
    bottom: -8px;
    right: 40px;
    width: 5px;
    height: 10px;
    background: #ebebeb;
    border-bottom-right-radius: 10px;
  }
  .taxi{
    position: absolute;
    width: 200px;
    height: 80px;
    left: 700px;
    background: #f4b603;
    border-radius: 10px;
    box-shadow: -10px 10px rgba(0,0,0,0.1);
    perspective: 800px;
    z-index:10;
    animation: animate_taxi_car 5s linear infinite;
    animation-delay: -5s;
  }
  @keyframes animate_taxi_car {
    0%{
      transform: translateX(20px) translateY(20px);
    }
    25%{
      transform: translateX(-50px) translateY(0px);
    }
    50%{
      transform: translateX(20px) translateY(-20px);
    }
    100%{
      transform: translateX(20px) translateY(20px);
    }
  }
  .taxi::before{
    content: '';
    position: absolute;
    top: 12px;
    left: 2px;
    width: 5px;
    height: 15px;
    border-radius: 2px;
    background: #fc3c25;
    box-shadow: 0 42px #fc3c25;
  }
  .taxi::after{
    content: '';
    position: absolute;
    top: 10px;
    right: 2px;
    width: 6px;
    height: 16px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 44px #fff;
  }
  .taxi span{
    position: absolute;
    inset: 5px 10px;
    background: #fdd206;
    border-radius: 10px;
    overflow: hidden;
    animation: none;
  }
  .taxi span::before{
    content: 'Taxi';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotate(90deg);
    background: #fff;
    padding: 2px;
    font-size: 0.75em;
    font-weight: 1000;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 2px;
    box-shadow: 0 0 0 1px #0005;
    z-index: 1000;
  }
  .taxi span b{
    position: absolute;
    inset: 0 30px;
    background: #111;
    border-radius: 10px;
  }
  .taxi span b::before{
    content: '';
    position: absolute;
    inset:6px 25px;
    background: #fdd206;
    border-radius: 5px;
    z-index: 190;
  }
  .taxi span b::after{
    content: '';
    position: absolute;
    inset: 0 58px;
    background: #fdd206;


  }
  .taxi span i{
    position: absolute;
    inset: 0;
  }
  .taxi span i::before{
    content: '';
    position: absolute;
    top: 7px;
    left: 20px;
    width: 40px;
    height: 5px;
    background: #fdd206;
    transform-origin: right;
    transform: rotate(15deg);
    box-shadow: 100px 34px #fdd206;
  }
  .taxi span i::after{
    content: '';
    position: absolute;
    bottom: 7px;
    left: 20px;
    width: 40px;
    height: 5px;
    background: #fdd206;
    transform-origin: right;
    transform: rotate(-15deg);
    box-shadow: 100px -34px #fdd206;
  }
  .taxi .side_mirror{
    position: absolute;
    inset: 0;
  }
  .taxi .side_mirror::before{
    content: '';
    position: absolute;
    top: -8px;
    right: 40px;
    width: 5px;
    height: 10px;
    background: #fdd206;
    border-top-right-radius: 10px;
  }
  .taxi .side_mirror::after{
    content: '';
    position: absolute;
    bottom: -8px;
    right: 40px;
    width: 5px;
    height: 10px;
    background: #fdd206;
    border-bottom-right-radius: 10px;
  }

</style>