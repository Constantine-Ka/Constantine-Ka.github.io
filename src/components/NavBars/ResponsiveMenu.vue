<script>

export default {
  name: "ResponsiveMenu",
  data(){
    return{
      menuList:["Home", "About", "Services", "Blog", "Contact"]
    }
  },
  methods:{
    openAdaptiveMenu(){
      document.querySelector('ul#listMenu').classList.toggle('active')
    }
  }

}
</script>

<template>
  <nav>
    <div class="toggle">
      <div class="menu" @click="openAdaptiveMenu" >
        <font-awesome-icon icon="fa-solid fa-bars"  />
      </div>
    </div>
    <ul id="listMenu">
      <li v-for="item in menuList" :key="item"><a href="#">{{item}}</a></li>
    </ul>
  </nav>
</template>



<style scoped>
  nav{
    width: 100%;
    background: #00316b;
  }
  ul{
    width: 80%;
    margin: 0 auto;
    padding: 0;
  }
  ul li{
    list-style: none;
    display: inline-block;
    padding:20px
  }
  ul li:hover{
    background: #e91e63;
  }
  ul li a{
    color: #fff;
    text-decoration: none;
  }
  .toggle{
    width: 100%;
    padding: 10px 20px;
    background: #001f44;
    text-align: right;
    box-sizing: border-box;
    color: #fff;
    font-size: 30px;
    display: none;
  }

  @media (max-width: 768px) {
    .toggle{
      display: block;
    }
    ul{
      width: 100%;
      display: none;
    }
    ul li{
      display: block;
      text-align: center;
    }
    .active{
      display: block;
    }
  }

</style>