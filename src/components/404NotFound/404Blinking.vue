<script>
export default {
  name: "404Blinking"
};
</script>

<template>
  <section>
    <div class="container">
      <div class="error">
        <div class="number-4">4</div>
        <div class="illustration">
          <div class="circle"></div>
          <div class="clip">
            <div class="paper">
              <div class="face">
                <div class="eyes">
                  <div class="eye eye-left"></div>
                  <div class="eye eye-right"></div>
                </div>
                <div class="blush-cheeks blush-cheek-left"></div>
                <div class="blush-cheeks blush-cheek-right"></div>
                <div class="mouth"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="number-4">4</div>
      </div>
      <div class="error-text">
        <h1>Oops. The page you're looking for doesn't exist.</h1>
      </div>
      <a href="#home"
        class="button">Home</a>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  width: 100vw;
  background-color: #e5e4e2;
  color: #343434;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

a {
  text-decoration: none;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}

.number-4 {
  font-weight: 900;
  font-size: 250px;
  line-height: 0.85;
}

.illustration {
  position: relative;
  width: 195px;
  margin: 0 32px;
}

.circle {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 182px;
  width: 195px;
  background-color: #343434;
  border-radius: 50%;
}

.clip {
  position: absolute;
  left: 50%;
  bottom: 4px;
  transform: translateX(-50%);
  height: 208px;
  width: 200px;
  border-radius: 0 0 50% 50%;
  overflow: hidden;
}

.paper {
  position: absolute;
  left: 50%;
  bottom: -4px;
  transform: translateX(-50%);
  height: 195px;
  width: 145px;
  background-color: #ffffff;
  border: 4px solid #343434;
  border-radius: 12px;
}

.paper::before {
  content: "";
  position: absolute;
  top: -11px;
  right: -11px;
  transform: rotate(45deg);
  height: 16px;
  width: 22px;
  background-color: #e5e4e2;
  border-bottom: 4px solid #343434;
}

.face {
  position: relative;
  margin-top: 36px;
}

.eyes {
  position: absolute;
  top: 0;
  left: 34px;
  height: 12px;
  width: 72px;
}

.eye {
  position: absolute;
  bottom: 0;
  height: 12px;
  width: 12px;
  background-color: #100c08;
  border-radius: 50%;
  animation: blinkingEye 4s ease-in-out infinite;
}

.eye-left {
  left: 0;
}

.eye-right {
  right: 0;
}

@keyframes blinkingEye {
  0%, 50%, 54%, 100% {
    height: 12px;
  }

  52% {
    height: 4px;
  }
}

.blush-cheeks {
  position: absolute;
  top: 18px;
  height: 4px;
  width: 16px;
  background-color: #fe828c;
  border-radius: 50%;
}

.blush-cheek-left {
  left: 16px;
}

.blush-cheek-right {
  right: 16px;
}

.mouth {
  position: absolute;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  height: 4px;
  width: 18px;
  background-color: #100c08;
  border-radius: 4px;
}

.error-text {
  margin-top: 60px;
}

.button {
  background-color: #50c878;
  color: #ffffff;
  margin-top: 48px;
  padding: 18px 36px;
  border-radius: 4px;
}

.button:hover {
  background-color: #009e60;
}
</style>