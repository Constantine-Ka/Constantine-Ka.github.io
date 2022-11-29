<script xmlns="http://www.w3.org/1999/html">
export default {
  name: "Navigation",

  data(){
    return{
      menuList:["Home", "About", "Services", "Blog", "Contact"]
    }
  },
  methods:{
    toggleSearcBox(){
      let searchBox = document.querySelector('.searchBox').classList;
      let searchBtn = document.querySelector('.searchBtn').classList;
      let closeBtn = document.querySelector('.closeBtn').classList;
      if (searchBox.contains('active')){
        searchBox.remove('active');
        searchBtn.remove('active');
        closeBtn.remove('active');
      }else{
        searchBox.add('active');
        searchBtn.add('active');
        closeBtn.add('active');
      }
    },
    responsiveMenu(){
      document.querySelector('header').classList.toggle('open')
    }
  }
};

</script>
<template>
  <div>
  <header title="Потом поменяю пункты меню">
    <a href="#" class="logo">Logo</a>
    <div class="group">
      <ul class="navigation" >
        <li v-for="item in menuList"><a href="#">{{item}}</a></li>
      </ul>
      <div class="search">
        <span class="icon" @click="toggleSearcBox">
          <ion-icon name="search-outline" class="searchBtn"></ion-icon>
          <ion-icon name="close-outline" class="closeBtn"></ion-icon>
        </span>
      </div>
      <ion-icon name="menu-outline" class = "menuToggle" @click="responsiveMenu"></ion-icon>
    </div>
    <div class="searchBox">
      <input type="text" name="searchbox" id="searchbox" placeholder="Search here...">
    </div>
    </header>
  </div>
</template>
<style scoped >
  header{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: #fff;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 15px 15px rgba(0,0,0,0.05 );
    overflow: hidden visible;
  }
  header .logo{
    color: #333;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  header .group{
    display: flex;
    align-items: center;
  }
  header ul{
    position: relative;
    display: flex;
    gap: 30px;
  }
  header ul li{
    list-style: none;
  }
  header ul li a{
    position: relative;
    text-decoration: none;
    font-size: 1em;
    color:#333333;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  header ul li a::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    background: #333333;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
  }
  header ul li a:hover::before{
    transform: scaleX(1);
    transform-origin: left;
  }
  header .group .search{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    z-index: 10;
    /*height: 80px;*/
    cursor: pointer;
  }
  header .searchBox{
    position: absolute;
    right: -100%;
    width: 100%;
    display: flex;
    background: #ffffff;
    align-items: center;
    padding: 0 30px;
    transition:  0.5s ease-in-out;
  }
  header .searchBox.active{
    right: 0;
  }
  header .searchBox input{
    width: 100%;
    border:none;
    outline: none;
    height: 50%;
    font-size: 1.25em;
    background: #fff;
    color: #333333;
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }
  .searchBtn{
    position: relative;
    left:30px;
    top:2.5px;
    transition: 0.5s ease-in-out;

  }
  .searchBtn.active{visibility: hidden;}
  .closeBtn{
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    scale: 0;
  }
  .closeBtn.active{
    opacity: 1;
    visibility: visible;
    scale: 1;
  }
  .menuToggle{
    position: relative;
    display: none;
  }
  @media (max-width: 800px) {
    header{
      display: flex;
      align-items: flex-start;
    }
    .menuToggle{
      position: absolute;
      display: block;
      font-size: 2em;
      cursor: pointer;
      transform: translateX(30px);
      z-index: 10;

    }
    header .navigation{
      position: absolute;
      opacity: 0;
      visibility: hidden;
      left: 100%;


    }
    .search{
      left:-30px;

    }
    header.open{
      height: 100%;
    }
    header.open .group{position: relative}
    header.open .navigation{
      opacity: 1;
      visibility: visible;
      left:-90vw;
      top: 92px;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      width: 100vw;
      height: calc(100vh - 80px);
      padding: 40px;
      overflow-x: visible;
      overflow-y: visible;
      border-top: 1px solid rgba(0,0,0,0.05);
    }
    header.open .navigation li a{
      font-size: 1.25em;
    }

  }
</style>