<script>
	import img1 from "@/assets/SectionLayerAnimation/img1.jpg"
	import img2 from "@/assets/SectionLayerAnimation/img2.jpg"
	import img3 from "@/assets/SectionLayerAnimation/img3.jpg"
	import img4 from "@/assets/SectionLayerAnimation/img4.jpg"
	import img5 from "@/assets/SectionLayerAnimation/img5.jpg"

	export default {
		name: "SectionLayerAnimation",
		description:"If you click on a particular section the section will expand and show the content that is hidden inside it. This type of layer animation is very much useful when it comes to showcasing awesome animation effects on your website. It not only gives a good impression but it also makes your website look good.",
		data(){
			return{
				imgLink1:'url("'+img1+'");',
				imgLink2:'url("'+img2+'");',
				imgLink3:'url("'+img3+'");',
				imgLink4:'url("'+img4+'");',
				imgLink5:'url("'+img5+'");',
				// imgLink1:'url("https://loremflickr.com/1200/1000");',
				// imgLink2:'url("https://loremflickr.com/1200/1000");',
				// imgLink3:'url("https://loremflickr.com/1200/1000");',
				// imgLink4:'url("https://loremflickr.com/1200/1000");',
				// imgLink5:'url("https://loremflickr.com/1200/1000");',
			}
		},
		methods:{
			activateElement(elem){


				if(elem.classList.contains('sActive')) return;
				this.$refs.container.classList.add('sElActive');
				elem.classList.add('sActive');
			},
			closeElem(e){
				console.log('close', e)
				e.stopPropagation();
				this.$refs.container.classList.remove('sElActive');
				document.querySelector('.el.sActive').classList.remove('sActive');
			}
		}
	}
</script>

<template>
<div>
	<component :is="`style`">
		:root{
			--img1:{{ imgLink1 }};
			--img2:{{ imgLink2 }};
			--img3:{{ imgLink3 }};
			--img4:{{ imgLink4 }};
			--img5:{{ imgLink5 }};
		}
	</component>
	<section>
		<div class="container" ref="container">
			<div class="inner">
				<!--1 Block-->
				<div class="el" ref="el1" @click="activateElement($refs.el1)">
					<div class="overflow">
						<div class="inner">
							<div class="bg"></div>
							<div class="previewContainer">
								<h2 class="heading">Section 1</h2>
							</div>
							<div class="content">
								<div class="text">Whatever</div>
								<div class="closeBtn" @click="closeElem"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- el end -->

				<!--2 Block-->
				<div class="el" ref="el2" @click="activateElement($refs.el2)">
					<div class="overflow">
						<div class="inner">
							<div class="bg"></div>
							<div class="previewContainer">
								<h2 class="heading">Section 2</h2>
							</div>
							<div class="content">
								<div class="text">Whatever</div>
								<div class="closeBtn" @click="closeElem"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- el end -->

				<!--3 Block-->
				<div class="el" ref="el3" @click="activateElement($refs.el3)">
					<div class="overflow">
						<div class="inner">
							<div class="bg"></div>
							<div class="previewContainer">
								<h2 class="heading">Section 3</h2>
							</div>
							<div class="content">
								<div class="text">Whatever</div>
								<div class="closeBtn" @click="closeElem"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- el end -->

				<!--4 Block-->
				<div class="el" ref="el4" @click="activateElement($refs.el4)">
					<div class="overflow">
						<div class="inner">
							<div class="bg"></div>
							<div class="previewContainer">
								<h2 class="heading">Section 4</h2>
							</div>
							<div class="content">
								<div class="text">Whatever</div>
								<div class="closeBtn" @click="closeElem"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- el end -->

				<!--5 Block-->
				<div class="el" ref="el5" @click="activateElement($refs.el5)">
					<div class="overflow">
						<div class="inner">
							<div class="bg"></div>
							<div class="previewContainer">
								<h2 class="heading">Section 5</h2>
							</div>
							<div class="content">
								<div class="text">Whatever</div>
								<div class="closeBtn" @click="closeElem"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- el end -->

			</div>

		</div>
	</section>
</div>
</template>

<style scoped lang="stylus">
	section
		background: #1f1f1f
		width 100vw;
		position relative
		.container
			position: relative;
			overflow: hidden;
			height: 100vh;
			padding: 80px 70px;
			.inner
				position: relative;
				height: 100%;
				.el
					position: absolute;
					left: 0;
					top: 0;
					width: 19.2%;
					height: 100%;
					background: #252525;
					transition: transform 0.6s 0.7s, width 0.7s, opacity 0.6s 0.7s, z-index 0s 1.3s;
					will-change: transform, width, opacity;
					&:not(.sActive)
						cursor: pointer;
					.overflow
						overflow: hidden;
						position: relative;
						height: 100%;
						.inner
							overflow: hidden;
							position: relative;
							height: 100%;
							transition: transform 1s;
							.bg
								position: relative;
								width: calc(100vw - 140px);
								height: 100%;
								transition: transform 0.6s 0.7s;
								will-change: transform;
								&::before
									content: "";
									position: absolute;
									left: 0;
									top: -5%;
									width: 100%;
									height: 110%;
									background-size: cover;
									background-position: center center;
									transition: transform 1s;
									transform:  translate3d(0 , 0 ,0) scale(1);
								&::after
									content: '';
									z-index: 1;
									position: absolute;
									left: 0;
									top: 0;
									width: 100%;
									height: 100%;
									background: rgba(0, 0, 0, 0.3);
									opacity: 0;
									transition: opacity 0.5s;
							.previewContainer
								z-index: 2;
								display: flex;
								justify-content: center;
								align-items: center;
								position: absolute;
								left: 0;
								top: 0;
								width: 100%;
								height: 100%;
								transition: all 0.3s 1.2s;
								.heading
									color: #fff;
									text-transform: uppercase;
									font-size: 18px;


							.content
								z-index: -1;
								position: absolute;
								left: 0;
								top: 0;
								width: 100%;
								height: 100%;
								padding: 30px;
								opacity: 0;
								pointer-events: none;
								transition: all 0.1s;
								.text
									text-transform: uppercase;
									font-size: 40px;
									color: #fff;
								.closeBtn
									z-index: -1;
									position: absolute;
									right: 10px;
									top: 10px;
									width: 60px;
									height: 60px;
									opacity: 0;
									pointer-events: none;
									transition: all 0s 0.45s;
									cursor: pointer;
									&::before,
									&::after
										content: '';
										position: absolute;
										left: 0;
										top: 50%;
										width: 100%;
										height: 8px;
										margin-top: -4px;
										background: #fff;
										opacity: 0;
										transition: opacity 0s;
									&::before
										transform: rotate(45deg) translateX(100%);



					//При наведении на элемент
					&:hover
						.overflow .inner .bg
							&::before
								transform: translate3d(0, 0, 0) scale(1.1);
							&::after
								opacity: 0;
					&:nth-child(1) .overflow .inner
						transition-delay: 0s;
						.bg
							transform: translate3d(0%, 0 ,0);
							&::before
								transition-delay: 0s;
								background-image: var(--img1);
					&:nth-child(2)
						transform: translate3d(105.20% , 0 ,0);
						transform-origin: 155.20% , 50%;
						.overflow .inner
							transition-delay: 0.1s;
							.bg
								transform: translate3d(-19.2%, 0 ,0);
								&::before
									transition-delay: 0.1s;
									background-image: var(--img2);




					&:nth-child(3)
						transform: translate3d(210.20% , 0 ,0);
						transform-origin: 260.41%, 50%;
						.overflow .inner
							transition-delay: 0.2s;
							.bg
								transform: translate3d(-38.2%, 0 ,0);
								&::before
									transition-delay: 0.2s;
									background-image: var(--img3);

					&:nth-child(4)
						transform: translate3d(315.20% , 0 ,0);
						transform-origin: 365.20% , 50%;
						.overflow .inner
							transition-delay: 0.3s;
							.bg
								transform: translate3d(-57.2%, 0 ,0);
								&::before
									transition-delay: 0.3s;
									background-image: var(--img4);
					&:nth-child(5)
						transform: translate3d(420.20% , 0 ,0);
						transform-origin: 470.20% , 50%;
						.overflow .inner
							transition-delay: 0.4s;
							.bg
								transform: translate3d(-76.2%, 0 ,0);
								&::before
									transition-delay: 0.4s;
									background-image: var(--img5);





		.container.inActive .inner
			transform: translate3d(0, 100%, 0);
			.overflow .inner
				.bg::before
					transform: translate3d(0, -100%, 0) scale(1.2);
				.previewContainer
					opacity: 0;
					transform: translateY(10px);

		.container.sElActive .inner .el
			&::nth-child(1):not(.sActive)
				transform: scale(0.5) translate3d(0% , 0 , 0);
				opacity: 0;
				transition: transform 0.95s , opacity 0.95s;
			&::nth-child(2):not(.sActive)
				transform: scale(0.5) translate3d(105.20% , 0 , 0);
				opacity: 0;
				transition: transform 0.95s , opacity 0.95s;
			&::nth-child(3):not(.sActive)
				transform: scale(0.5) translate3d(210.20% , 0 , 0);
				opacity: 0;
				transition: transform 0.95s , opacity 0.95s;
			&::nth-child(4):not(.sActive)
				transform: scale(0.5) translate3d(315.20% , 0 , 0);
				opacity: 0;
				transition: transform 0.95s , opacity 0.95s;
			&::nth-child(5):not(.sActive)
				transform: scale(0.5) translate3d(420.20% , 0 , 0);
				opacity: 0;
				transition: transform 0.95s , opacity 0.95s;


		.container .inner .el.sActive
			z-index: 1;
			width: 100%;
			transform: translate3d(0, 0, 0);
			transition: transform 0.6s, width 0.7s 0.7s, z-index 0s;
			.overflow .inner
				.bg
					transform: translate3d(0, 0, 0);
					transition: transform 0.6s;
					&::before
						transition: transform 0.8s;
						transition-delay: 0.6s;
						transform: scale(1.1);
				.content
					z-index: 2;
					opacity: 1;
					pointer-events: auto;
					transition: all 0.5s 1.4s;
					.closeBtn
						z-index: 5;
						opacity: 1;
						pointer-events: auto;
						transition: all 0s 1.4s;
						&::before,
						&::after
							opacity: 1;
						&::before
							transition: all 0.3s 1.4s cubic-bezier(0.72, 0.09, 0.32, 1.57);
							transform: rotate(45deg) translateX(0);
						&::after
							transition: all 0.3s 1.55s cubic-bezier(0.72, 0.09, 0.32, 1.57);
							transform: rotate(-45deg) translateX(0);


.				// imgLink1:'url("'+img1+'");',
				// imgLink2:'url("'+img2+'");',
				// imgLink3:'url("'+img3+'");',
				// imgLink4:'url("'+img4+'");',
				// imgLink5:'url("'+img5+'");',


.				// imgLink1:'url("'+img1+'");',
				// imgLink2:'url("'+img2+'");',
				// imgLink3:'url("'+img3+'");',
				// imgLink4:'url("'+img4+'");',
				// imgLink5:'url("'+img5+'");',

</style>