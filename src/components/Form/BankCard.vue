<script>
import contrast from 'contrast';
import banksDB from 'banks-db';

export default {
	name: 'BankCard',
	data() {
		return {
			cardNum: "0000 0000 0000 0000",
      color:"lime",
      localTitle:"NoName"


		};
	},
	methods: {
		checkbank() {

			var matches = this.cardNum.toString().replace(/\s+/g, '').match(/\d{4,16}/g);
			var match = matches ? matches[0] : '';
			var parts = [];
			for (var i = 0, len = match.length; i < len; i += 4) {
				parts.push(match.substring(i, i + 4));
			}
			this.cardNum = parts.length ? parts.join(' ') : this.cardNum;

			console.log('this.cardnameTxt', this.cardNum.replace(/\D/g, ''));
			if (this.cardNum.length > 5) {
				const bank = banksDB(this.cardNum.replace(/\D/g, ''));
				console.log(bank);
        this.color=bank.color||"lime"
        this.localTitle=bank.localTitle
			}
		}
	}
};
</script>
<template>
	<section title="Guesses bank name and corporate color by card number|По номеру карты угадывает название банка и фирменный цвет">
		<div class="card-wrapper">
			<div class="card-back">
				<div class="card-back-line"></div>
				<input type="text" id="cvv" />
			</div>
			<div class="card-front" :style="'--frontColor:'+color">
        <h3 class="card-image">{{localTitle}}</h3>
<!--				<img src="" alt="" class="card-image" />-->
<!--				<img src="" alt="" class="card-logo" />-->
				<input
					type="text"
					name=""
					id="card-number"
					v-model="cardNum"
					@change="checkbank"
					placeholder="0000 000 0000 000"
				/>
				<input type="text" name="" id="card-to-month" />
				<input type="text" name="" id="card-to-year" />
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background: #d9cd91ff;
}
.card-wrapper {
	width: 751px;
	height: 381px;
	border: 0px solid #808080;
	position: relative;
}
.card-back,
.card-front {
	width: 535px;
	height: 343px;
	border: 1px solid #808080;
	border-radius: 15px;
	position: absolute;
}
.card-back {
	right: 0;
	bottom: 0;
	background: #808080;
}
.card-front {
	background: var(--frontColor);
}
.card-back .card-back-line {
	width: 100%;
	height: 80px;
	background: #c0c0c0;
	position: absolute;
	top: 50px;
}
.card-back #cvv {
	position: absolute;
	right: 40px;
	bottom: 112px;
	width: 100px;
	padding: 5px;
	font-size: 40px;
	text-align: center;
}
.card-front .card-image {
	height: 60px;
	width: 100px;
	position: absolute;
	top: 40px;
	left: 30px;
	/*background: #fb0094;*/
}
.card-front .card-logo {
	height: 50px;
	width: 70px;
	position: absolute;
	bottom: 40px;
	right: 30px;
	background: tomato;
}
.card-front #card-number {
	position: absolute;
	width: 90%;
	margin: 0 5%;
	background: #f1f1f1;
	font-size: 40px;
	padding: 5px 10px;
	border: none;
	top: 145px;
	left: 0;
	outline: none;
}
.card-front #card-to-month,
.card-front #card-to-year {
	position: absolute;
	background: #f1f1f1;
	font-size: 40px;
	padding: 5px;
	outline: none;
	border: none;
	width: 60px;
	text-align: center;
	bottom: 40px;
	left: 5%;
}
.card-front #card-to-year {
	left: 20%;
}
</style>
