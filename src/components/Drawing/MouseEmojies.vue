<script>
	export default {
		name: "MouseEmojies",
		data(){
			return{
				images:["👽","🏆","🎲","🏠","🦜️","🦝️","🦉","🐤","🐵","🐸","🐶","🐭","🦞️","🥤","🍇","🍹","☕️","🌅💓","❤️","️🤩","🤭💖","💔","🥳️","😼","🤐","😈","😡","😺","🍀","🌷","😇","😄","🤢","😘","🌉","🍧"]
			}
		},
		methods:{
			emojihandler(e){
				let emojiElement = document.createElement('span')

        emojiElement.style='position: absolute;pointer-events: none;animation: animate 1s linear infinite;';
				let x = e.offsetX
				let y = e.offsetY

				emojiElement.style.left=x+'px'
				emojiElement.style.top=y+'px'
				let icon = this.images[Math.floor(Math.random()*this.images.length)]
				emojiElement.innerText = icon
				let size = Math.random()*50+10
				emojiElement.style.fontSize= 10+ size+'px'

				let min =0
				let max=200
				let randomValue = Math.floor((Math.random()*((max+1)-min))+min)

				emojiElement.style.transform='translateX('+randomValue+'px)'

				this.$refs.section.appendChild(emojiElement)

				// setTimeout(()=>emojiElement.remove(),1000)

			}
		}
	}
</script>

<template>
<section id = MouseEmojies @mousemove="emojihandler" ref="section"></section>
</template>

<style scoped>
	section#MouseEmojies{
		position: relative;
		min-height: 100vh;
		background: #111;
		overflow: hidden;
	}

	@keyframes animate {
		0%{
			translate: 0 0;
			opacity: 0;
		}
		10%{
			opacity: 1;
		}
		30%{
			translate: 0 100px;
			opacity: 1;
		}
		90%{
			opacity: 1;
		}
		100%{
			translate: 0 80px;
			opacity: 0;
		}
	}


</style>