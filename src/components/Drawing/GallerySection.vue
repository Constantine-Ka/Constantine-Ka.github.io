<script>
import img1 from '@/assets/galerysection/img1.jpg';
import img2 from '@/assets/galerysection/img2.jpg';
import img3 from '@/assets/galerysection/img3.jpg';
import img4 from '@/assets/galerysection/img4.jpg';
import img5 from '@/assets/galerysection/img5.jpg';
import img6 from '@/assets/galerysection/img6.jpg';
import img7 from '@/assets/galerysection/img7.jpg';
import img8 from '@/assets/galerysection/img8.jpg';
import img9 from '@/assets/galerysection/img9.jpg';

export default {
  name: "GalerySection",
  data(){
    return{
      imgArray:[
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
      ]
    }
  }
};
</script>

<template>
  <section>
      <div class="imgScroll">
        <div>
          <img
            v-for="img in imgArray"
            :key="img"
            :src="img"
            alt="">
        </div>
        <div>
          <img
            v-for="img in imgArray"
            :key="img"
            :src="img"
            alt="">
        </div>
      </div>
      <ul class="navigation">
        <li>
          <button><ion-icon name="home"></ion-icon></button>
        </li>
        <li>
          <button><ion-icon name="flame"></ion-icon></button>
        </li>
        <li>
          <button><ion-icon name="game-controller"></ion-icon></button>
        </li>
        <li>
          <button><ion-icon name="person"></ion-icon></button>
        </li>
      </ul>
  </section>
</template>

<style scoped>
  section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  ul.navigation{
    position: absolute;
    bottom: 70px;
    display: flex;
    gap:30px;
  }
  ul.navigation li{
    position: relative;
    list-style: none;
  }
  ul.navigation li button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: #fff;
    outline: none;
    border: none;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-radius: 50%;
    font-size: 1.5em;
    text-decoration: none;
  }
  ul.navigation li.active button{
    background: #f00;
    color:#fff;
  }
  ul.navigation li button:hover{
    background: #f00;
    color:#fff;
  }
  .imgScroll{
    position: absolute;
    left: 0;
    padding: 60px 0;
    width: 100%;
    display: flex;
    overflow-x: hidden;
  }
  .imgScroll div{
    display: flex;
    animation: animate 40s linear infinite;
    animation-delay: -40s;
  }
  .imgScroll div:nth-child(2){
    animation: animate2 40s linear infinite;
    animation-delay: -20s;
  }
  .imgScroll div img{
    margin: 0 25px;
    max-width: 300px;
    border: 10px solid transparent;
  }
  .imgScroll div img:hover{
    border: 10px solid #fff;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  .imgScroll:hover div img{
    opacity: 0.05;
    filter: blur(5px);
  }
  .imgScroll div img:hover{
    opacity: 1;
    filter: blur(0px);
  }
  .imgScroll:hover div,
  .imgScroll:hover div:nth-child(2){
    animation-play-state: paused;
  }

  @keyframes animate {
    0%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(-100%);
    }
  }
  @keyframes animate2 {
    0%{
      transform: translateX(0%);
    }
    100%{
      transform: translateX(-200%);
    }
  }


</style>