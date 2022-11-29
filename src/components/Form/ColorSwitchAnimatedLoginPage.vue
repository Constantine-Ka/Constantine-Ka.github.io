<script>
export default {
  name: "ColorSwitchAnimatedLoginPage",
  data(){
    return{
      colorIs:"1dd1a1",
      colorArr:["1dd1a1","ff6b6b","2e86de", "f368e0", "ff9f43"]
    }
  },
  // methods:{
  //
  // }
}
</script>

<template>
  <section :style="'--bgColor: #'+colorIs" title="Меняет цвет фона и элементов">
    <div class="login">
      <h2 id="txt">Login</h2>
      <div class="inputBox">
        <input type="text" name="Username" id="Username" placeholder="Username">
      </div>
      <div class="inputBox">
        <input type="password" name="Password" id="Password" placeholder="Password">
      </div>
      <div class="inputBox">
        <input type="submit" name="Login" id="btnLogin" value="Login" >
      </div>
      <div class="group">
        <a href="#">Forget Password</a>
        <a href="#">Singup</a>
      </div>
    </div>
    <div class="colorsGroup">
      <label  v-for="color in colorArr" :key="color"  :style="'--itemColor: #'+color" :for="color" :class="[(color==colorIs)?'active':'']">
        <input type="radio"  :id="color" :value="color" v-model="colorIs" />
      </label>
    </div>
  </section>
</template>

<style scoped>
  section{
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bgColor);
  }
  .login{
    position: relative;
    padding: 50px;
    background: #fff;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
    text-align: left;
  }
  .login h2{
    font-weight: 500;
    border-left: 15px solid var(--bgColor);
    line-height: 1em;
    padding-left: 10px;
    transition: 0.5s;
    color: #333;
  }
  .login .inputBox{
    position: relative;
  }
  .login .inputBox input{
    position: relative;
    width: 100%;
    padding: 10px 15px;
    outline: none;
    border: 2px solid #555;
    font-size: 1em;
    color: #333;
  }
  .login .inputBox input#btnLogin{
    border: none;
    background: var(--bgColor);
    color: #fff;
    transition: 0.5s;
    font-size: 1.1em;
    font-weight: 500;
    cursor: pointer;
  }
  .login .group{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .login .group a{
    color: #333;
    text-decoration: none;
  }
  .login .group a:nth-child(2){
    font-weight: 500;
    text-decoration: underline;
  }
  .colorsGroup{
    position: absolute;
    right: 0;
    padding: 10px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .colorsGroup label{
    position: relative;
    width: 20px;
    height: 20px;
    background: var(--itemColor);
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .colorsGroup label input{display: none}
  .colorsGroup label.active{
    border: 2px solid #333;
    scale: 1.5;
  }

</style>