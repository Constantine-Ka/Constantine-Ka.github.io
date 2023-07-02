<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "responsiveLogin"
})
</script>

<template>
  <section>
    <div class="imgBx"><img src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614778130_21-p-ochen-krasivii-fon-25.jpg" alt=""></div>
    <div class="contentBx">
      <div class="formBx">
        <h2>Login</h2>
        <form action="">
          <div class="inputBx"><span>Username</span><input type="text"></div>
          <div class="inputBx"><span>Password</span><input type="password"></div>
          <div class="remember"><label for=""><input type="checkbox" name="" id="">Remember me</label></div>
          <div class="inputBx"><input type="submit" value="Sing In"></div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section{
    display: flex;
    width: 100%;
    height: 100VH;
  }
  section .imgBx{
    position: relative;
    width: 50%;
    height: 100%;
  }
  section .imgBx:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg, #e93e63, #03a9f4 );
    z-index: 1;
    mix-blend-mode: screen;
  }
  section .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  section .contentBx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  section .contentBx .formBx{
    width: 50%;
    text-align: left;
  }
  section .contentBx .formBx h2{
    color: #607d8b;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid #ff4584;
    display: inline-block;
    letter-spacing: 1px;
  }
  section .contentBx .formBx .inputBx{
    margin-bottom: 20px;

  }
  section .contentBx .formBx .inputBx span{
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: #607d8b;
    font-weight: 300;
    letter-spacing: 1px;
  }
  section .contentBx .formBx .inputBx input{
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid #607d8b;
    font-size: 16px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
  }
  section .contentBx .formBx .inputBx input[type="submit"]{
    background: #ff4584;
    color: #fff;
    outline: none;
    border:none;
    font-weight: 500;
    cursor: pointer;
  }
  section .contentBx .formBx .inputBx input[type="submit"]:hover{
    background: #f53677;
  }

</style>