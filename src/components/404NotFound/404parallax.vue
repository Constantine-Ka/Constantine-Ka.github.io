<script>
import imgUrl from '@/assets/page404parallax/p404.png'
window.onmousemove = function (e) {
	var x = e.clientX / 5,
		y = e.clientY / 5;
  var containerParallax = document.getElementById('containerParallax')
  if (!containerParallax){return}
	containerParallax.style.backgroundPositionX =x + 'px';
	containerParallax.style.backgroundPositionY =y + 'px';
};
export default {
	name: '404parallax',
  data(){
    return {
      image: imgUrl
    }
  }
};
</script>

<template>
	<section>
		<div class="container" id="containerParallax">
			<div class="content" :style="'background:url('+imgUrl+')'">
				<h2>404</h2>
				<h4>Opps! Page not Found</h4>
				<p>
					The page you were looking for doesn't exist. You may have
					mistyped the address or the page may have moved.
				</p>
				<router-link to="/" class="link">Back to MainPage</router-link>
			</div>
		</div>
	</section>
</template>

<style scoped lang="stylus">
section
  background linear-gradient(45deg, #8500ff, #5acaff)
  height  100vh
  .container
    position absolute
    top 10%
    left 10%
    right 10%
    bottom 10%
    border-radius 10px
    display flex
    justify-content center
    align-items center
    background url("@/assets/page404parallax/p404.png"), #151729
    box-shadow 0 15px 30px rgba(0,0,0,0.5)
    .content
      max-width 600px
      text-align center
      h2
        font-size 18vw
        color #fff
        line-height 1em
      h4
        position relative
        font-size 1.5em
        margin-bottom 20px
        color #111
        background #fff
        font-weight 300
      p
        color #fff
        font-size 1.2em
      .link
        position relative
        display inline-block
        padding 10px 25px
        background #ff0562
        color #ffffff
        text-decoration none
        margin-top 25px
        border-radius 25px
        border-bottom 4px solid #d00d56
</style>
