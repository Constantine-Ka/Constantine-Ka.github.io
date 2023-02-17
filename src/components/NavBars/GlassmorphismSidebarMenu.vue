<script lang="ts" >
import logo from '@/assets/Glassmorphism-Sidebar-Menu-using-Only-HTML-and-CSS-AngularProject/logo.jpg';
import wallpaper from '@/assets/Glassmorphism-Sidebar-Menu-using-Only-HTML-and-CSS-AngularProject/wallpaper.jpg';

export default {
  name: "GlassmorphismSidebarMenu",
  data(){
    return{
      logo,
      wallpaper,
      menuList:[
        {
          title:"Dashboard",
          patch:"/nav",
          icon:"apps"
        },
        {
          title:"Analytics",
          patch:"/",
          icon:"analytics"
        },
        {
          title:"Orders",
          patch:"/",
          icon:"bag"
        },
        {
          title:"Calendar",
          patch:"/",
          icon:"calendar"
        },
        {
          title:"Favorites",
          patch:"/",
          icon:"star"
        }
    ],
    bottomList:[
        {
          title:"Setting",
          patch:"#",
          icon:"settings"
        },
        {
          title:"Contacts",
          patch:"/",
          icon:"call"
        },

      ]
    }
  }
};
</script>

<template>
  <section :style="'background: url('+wallpaper+')'">
    <nav>
      <div class="navBrand">
        <img :src="logo"
          alt="logo">
        <div class="info">
          <h2>Constantine</h2>
          <p>Web developer</p>
        </div>
      </div>
      <ul class="navListTop">
        <li
          class="navItem"
          v-for="(item, ind) of menuList"
          :key="ind"
        >
          <router-link
            :to="item.patch"
            class="navLink"
            active-class="activeLink"

          >
            <ion-icon :name="item.icon"></ion-icon>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="navListBottom">
        <li
          class="navItem"
          v-for="(item, ind) of bottomList"
          :key="ind"
        >
          <router-link
            :to="item.patch"
            class="navLink"
            active-class="active"

          >
            <ion-icon :name="item.icon"></ion-icon>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </section>



</template>

<style scoped>
  section{
    height: 100vh;
  }
  nav{
    width: 90px;
    height: 100%;
    text-align: center;
    overflow: hidden;
    background: rgba(255,255,255,0.06);
    box-shadow: 0 8px 32px rgba(0,0,0,.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255,255,255, .15);
    transition: .4s;
  }
  nav:hover{
    width: 300px;
  }
  nav .navListTop,
  nav .navListBottom{
    position: absolute;
    width: 100%;
  }
  nav .navListTop{
   top:32%
  }
  nav .navListBottom{
    bottom: 0;
  }
  nav .navBrand img{
    width: 50px;
    border-radius: 50%;
    margin-top: 15px;
    transition: .4s;
  }
  nav:hover .navBrand img{
    width: 120px;
    margin-top: 30px;
  }
  nav .navBrand .info{
   text-align: center;
    pointer-events: none;
    opacity: 0;
  }
  nav:hover .navBrand .info{
    opacity: 1;
    transition: .4s;
    transition-delay: .2s;
  }
  nav .navBrand .info h2{
    color: #fff;
    font-size: 30px;
  }
  nav .navBrand .info p{
    color: #f1f1f1;
    font-size: 14px;
  }
  nav .navItem{
    cursor: pointer;
    padding: 0 25px;
    height: 80px;
    line-height: 80px;
    text-align: left;
    transition: .4s;
  }
  nav .navItem:hover,
  nav .navItem:is(.activeLink){
    background: rgba(255,255,255,.1);
  }
  nav .navItem a,
  nav .navItem router-link{
    width: 100%;
    height: 100%;
    text-decoration:none;
    color: #dddddd;
  }
  nav .navItem ion-icon{
    margin: 0 6px;
    font-size: 26px;
    color: #dddddd;
    transform: translateY(5px);
    transition-delay: .4s;
  }
  nav:hover .navItem ion-icon{
    color:#f4c402;
  }
  nav .navItem span{
    color: #ffffff;
    font-size: 18px;
    pointer-events: none;
    opacity: 0;
  }
  nav:hover .navItem span{
    opacity: 1;
    transition: .4s;
    transition-delay: .2s;
  }


</style>