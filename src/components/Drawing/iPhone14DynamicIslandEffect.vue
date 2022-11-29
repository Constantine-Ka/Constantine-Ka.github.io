<script>
import imgUrlPng from '@/assets/iphone14/iPhone-14-Pro-Wallpaper-purple.png';
import imgUrlWebp from '@/assets/iphone14/iPhone-14-Pro-Wallpaper-purple.webp';
import userAvatar from '@/assets/iphone14/userAvatar.jpg';

export default {
	name: 'iPhone14DynamicIslandEffect',
	data() {
		return {
			island: false,
      styleInnerBlock:`--imgUrlWebp:url("${imgUrlWebp}");--imgUrlPng:url("${imgUrlPng}")`,

      imgUrlPng,
      imgUrlWebp,
      userAvatar
		};
	}
};
</script>
<template>
	<section
		title="1)Наведите на смартфон; 2)Потом на островок; 3)Затем кликните по нему"
	>
		<div class="box">
			<div class="inner" :style="styleInnerBlock">
				<div
					class="island_popup"
					:class="{ active: island }"
					@click="island = !island"
				>
					<div class="content">
						<div class="details">
							<div class="imgBx">
								<img
									:src="userAvatar"
									alt="UserPicture"
								/>
							</div>
							<p>Constantine Calling</p>
						</div>
						<div class="action">
							<font-awesome-icon
								icon="fa-solid fa-phone"
								class="red"
							/>
							<font-awesome-icon
								icon="fa-solid fa-phone"
								class="green"
							/>
						</div>
					</div>
				</div>
			</div>
			<i class="btn btn1"></i>
			<i class="btn btn2"></i>
			<i class="btn btn3"></i>
			<i class="rightSideBtn"></i>
		</div>
	</section>
</template>

<style scoped lang="stylus">
section
  position relative
  display flex
  align-items center
  justify-content center
  min-height 100vh
  background #4f6b6c
  & .box
    position relative
    width 300px
    height 600px
    background #666
    border-radius 50px
    &::before
      content ''
      position absolute
      inset 3px
      background #000
      border-radius 48px
      opacity 1
      z-index 1
    & .inner
      position absolute
      inset 3px
      background var(--imgUrlWebp), var(--imgUrlPng)
      background-size cover
      background-position center
      border-radius 48px
      border 10px solid #000
      display flex
      justify-content center
      opacity 0
      transition 0.3s
      z-index 100
      ^[1]:hover ^[2..2]
        opacity 1
      .island_popup
        position absolute
        top 10px
        width 90px
        height 25px
        background #000000
        border-radius 25px
        transition  0.5s ease-in-out
        display flex
        justify-content space-between
        align-items center
        .content
          position relative
          display flex
          width 100%
          justify-content space-between
          padding 10px
          line-height 25px
          .details
            position relative
            display flex
            align-items center
            .imgBx
              position relative
              width 0
              height 0
              background #000000
              border-radius 50%
              overflow hidden
              transition 0.5s
              img
                position absolute
                top 0
                left 0
                width 100%
                height 100%
                object-fit cover
            p
              color #ffffff
              font-size 0.3em
              cursor default
              visibility hidden
              opacity 0
              transition 0.5s
          .action
            position relative
            top 5px
            color #ffffff
            display flex
            gap 12px
            transition 0.5s
            visibility hidden
            opacity 0
            .red
              color #fd443b
              transform rotate(135deg)
              cursor pointer
              transition 0.5s
            .green
              color #31d059
              cursor pointer
              transition 0.5s

        &:hover
          width 200px
          height 25px
          .details>p
          .action
            visibility visible
            opacity 1
        &.active
          width 250px
          height 60px
          border-radius 50px
          .details>p
          .action
            visibility visible
            opacity 1
          .details>p
            font-size 0.7em
          .details>.imgBx
            width 40px
            height 40px
            margin-right 8px
          .action
            top 12px
            .red
              background #fd443b
              color #ffffff
              border-radius 50%
              box-shadow 0 0 0 8px #fd443b
              margin-right 12px
            .green
              background #31d059
              color #ffffff
              border-radius 50%
              box-shadow 0 0 0 8px #31d059
              margin-right 8px


    .btn
      position absolute
      left -2px
      width 3px
      height 40px
      border-top-left-radius 4px
      border-bottom-left-radius 4px
      background radial-gradient(#ccc, #666, #222)
      z-index 10
      &.btn1
        top 110px
        height 26px
      &.btn2
        top 160px
      &.btn3
        top 220px
    .rightSideBtn
      position absolute
      top 110px
      right -2px
      width 3px
      height 70px
      border-top-right-radius 4px
      border-bottom-right-radius 4px
      background radial-gradient(#ccc, #666, #222)
      z-index 10
</style>
