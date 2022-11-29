<script>
import imgUrl1 from '@/assets/MarioGames/01.jpg';
import imgUrl2 from '@/assets/MarioGames/02.jpg';
import imgUrl3 from '@/assets/MarioGames/03.jpg';
export default {
	name: 'MarioMatchingGame',
	data() {
		return {
			chk: [
				{
					disabled: false,
					checked: false
				},
				{
					disabled: false,
					checked: false
				},
				{
					disabled: false,
					checked: false
				}
			],
			result: '',
      imgUrlVar:`--imgUrl1:url("${imgUrl1}");--imgUrl2:url("${imgUrl2}");--imgUrl3:url("${imgUrl3}")`

		};
	},
	methods: {
		stopRow(event) {
			if (event.target.checked) {
				this.chk[event.target.name - 1].disabled = true;
			}
			console.log('event.target.name', event.target.name);

			if (
				this.chk[0].disabled &&
				this.chk[1].disabled &&
				this.chk[2].disabled
			) {
				var pos1 = getComputedStyle(
					document.querySelector('#chk1 ~ i')
				).backgroundPosition;
				var pos2 = getComputedStyle(
					document.querySelector('#chk2 ~ i')
				).backgroundPosition;
				var pos3 = getComputedStyle(
					document.querySelector('#chk3 ~ i')
				).backgroundPosition;

				console.log('Остановлен');
				this.result =
					pos1 == pos2 && pos1 == pos3
						? 'You WINNER 🎆'
						: 'You lose 🙁';
				console.log(this.result);
			}
		},
		resetMarioGames() {
			document.getElementById('chk1').disabled = false;
			document.getElementById('chk1').checked = false;
			document.getElementById('chk2').disabled = false;
			document.getElementById('chk2').checked = false;
			document.getElementById('chk3').disabled = false;
			document.getElementById('chk3').checked = false;
			this.chk.forEach(e => {
				e.disabled = false;
				e.checked = false;
			});
		}
	}
};
</script>

<template>
	<section>
		<h2>Mario Matching Game</h2>
		<div class="box">
			<label for="chk1" :style="imgUrlVar">
				<input
					type="checkbox"
					name="1"
					id="chk1"
					:disabled="chk[0].disabled"
					@click="stopRow"
					v-model="chk[0].disabled"
				/>
				<i></i>
			</label>
			<label for="chk2" :style="imgUrlVar">
				<input
					type="checkbox"
					name="2"
					id="chk2"
					:disabled="chk[1].disabled"
					@click="stopRow"
					v-model="chk[1].disabled"
				/>
				<i></i>
			</label>
			<label for="chk3" :style="imgUrlVar">
				<input
					type="checkbox"
					name="3"
					id="chk3"
					:disabled="chk[2].disabled"
					@click="stopRow"
					v-model="chk[2].disabled"
				/>
				<i></i>
			</label>
		</div>
		<p class="resultMario">{{ result }}</p>
		<button class="reset" @click="resetMarioGames">ResetGames</button>
	</section>
</template>

<style scoped>
section {
	position: relative;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
section h2 {
	margin-bottom: 30px;
	font-size: 2.5em;
}
section .box {
	position: relative;
	width: 600px;
	height: 200px;
	border-bottom: 2px solid #555;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.box label {
	position: relative;
	width: 100%;
	height: 33.333%;
	border: 2px solid #555;
	border-bottom: none;
}
.box label input {
	position: relative;
	appearance: none;
	z-index: 10;
}
.box label i {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: 600px;
}
.box label:nth-child(1) i {
	background-image: var(--imgUrl1);
	animation: animateMarioMatchingGame 0.5s steps(3) infinite;
}
.box label:nth-child(2) i {
	background-image: var(--imgUrl2);
	animation: animateMarioMatchingGame 0.6s steps(3) infinite;
}
.box label:nth-child(3) i {
	background-image: var(--imgUrl3 );
	animation: animateMarioMatchingGame 0.7s steps(3) infinite;
}
@keyframes animateMarioMatchingGame {
	0% {
		background-position: 0;
	}
	100% {
		background-position: 600px;
	}
}
.box label input:checked ~ i {
	animation-play-state: paused;
}
section .reset {
	margin-top: 40px;
	border: none;
	font-size: 1.25em;
	padding: 10px 25px;
	background: #333;
	color: #fff;
}
section .reset:active {
	background: #d63c3c;
	transform: scale(0.9);
}
.resultMario {
	font-size: 1.5rem;
	margin-top: 10px;
}
</style>
