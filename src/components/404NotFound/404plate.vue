<script>
import plateBg from '@/assets/page404plate/bg.png';
import plateCover from '@/assets/page404plate/cover.svg';
import plate from '@/assets/page404plate/plate.svg';

export default {
	name: '404plate',
	data() {
		return {
			plateBg,
			plateCover,
			plate
		};
	}
};
</script>
<template>
	<section :style="'--plateBG:url(' + plateBg + ')'">
		<img class="cover" :src="plateCover" alt="" />
		<img class="plate" :src="plate" alt="plate" />
		<div class="text">
			<h1>Oops....</h1>
			<p>The page you are looking for doesn't exists</p>
		</div>
	</section>
</template>

<style scoped lang="stylus">
section
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--plateBG);
  img.plate
    height: 120px;
    filter: drop-shadow(14px 20px 32px rgba(0, 0, 0, 0.25));
  img.cover
    z-index: 1;
    height: 180px;
    margin-bottom: -108px;
    animation: animate 4s linear infinite;

  .text
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 470px;
    margin-top: 30px;
    align-items: center;
  h1
    font-size: 80px;
  p
    font-size: 20px;
    margin-top: 23px;
    margin-left: 5px;
@keyframes animate{
  15%{
    transform: rotate(45deg) translateY(-226px) ;
  }
  40%{
    transform: rotate(45deg) translateY(-228px) ;
  }
  50%{
    transform: rotate(45deg) translateY(-230px);
  }
  75%{
    transform: rotate(0deg) translateY(0px);
  }
  90%{
    transform: rotate(0deg) translateY(0px);
  }
  100%{
    transform: rotate(0deg) translateY(0px);
  }
}
</style>
