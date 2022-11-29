<script>
import ImgOpeka from '@/assets/page404opeka/404.png';

export default {
  name: "404opeka",
  data(){
    return{
      ImgOpeka

    }
  }
}
</script>
<template>
  <section>
    <div class="container er404">
      <div class="bg">
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
      </div>
      <div class="row">
        <span>4</span>
        <img :src="ImgOpeka" alt="Дедушка, пытается с биноклем найти страницу">
        <span>4</span>
      </div>
      <div class="row">
        <p>Страница не найдена </p>
      </div>
    </div>
  </section>
</template>



<style scoped>
section{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cdd8d9;
}
.container.er404{
  position:relative;
  margin-top:144px;
  justify-content: center;
}
.container.er404 .bg{
  position:absolute;
  display:block;
  width:1140px;
  height:100%;
}
@media(max-width:1140px){
  .container.er404 .bg{
    display:none;
  }
}
.container.er404 .bg .round{
  position:absolute;
  background: rgba(52, 169, 187, 0.6);
  border-radius:50%;
}
.container.er404 .bg .round:nth-child(1){
  width: 117px;
  height: 117px;
  opacity:0.22;
  left:123px
}
.container.er404 .bg .round:nth-child(2){
  width: 92px;
  height: 92px;
  left: 674px;
  top:11px;
}
.container.er404 .bg .round:nth-child(3){
  width: 34px;
  height: 34px;
  left: 786px;
  top: 109px;
  opacity:0.22
}
.container.er404 .bg .round:nth-child(4){
  width: 103px;
  height: 103px;
  left: 997px;
  top: 169px;
  opacity:0.3;
}
.container.er404 .bg .round:nth-child(5){
  width: 27px;
  height: 27px;
  left: 120px;
  top:267px;
  opacity:0.6;
}
.container.er404 .bg .round:nth-child(6){
  width: 81px;
  height: 81px;
  left: 40px;
  top:444px;
  opacity:0.3
}
.container.er404 .bg .round:nth-child(6){
  width: 27px;
  height: 27px;
  left: 942px;
  top:484px;
  opacity:1
}

/** ------------- **/
.container.er404 .row{
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.container.er404 .row span{
  font-style: normal;
  font-weight: 700;
  font-size: 422px;
  line-height: 610px;
  color: #34A9BB;
}
.container.er404 .row img{
  max-width: 627px;
  margin:0 -172px;
  z-index:1000;
}
.container.er404 .row:nth-child(3){
  margin:-91px 0 0 0
}
.container.er404 .row p{
  font-style: normal;
  font-weight: 400;
  font-size: 64.7472px;
  text-align:center;
  line-height: 94px;
  color: #34A9BB;
  margin:0 0 0 0;
}
</style>