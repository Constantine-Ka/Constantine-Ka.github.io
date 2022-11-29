<script>
export default {
	name: 'SimpleEmailValidationCheck',
	data() {
		return {
			EmailText: '',
			BooleanAnswer: false,
		};
	},
	methods: {
		simpleValidationEmail() {
			console.log('func');
			let pattern =/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
			this.BooleanAnswer = this.EmailText.match(pattern) ;
		}
	}
};
</script>

<template>
	<section title="Проверка Email на правильность написания">
		<div class="box">
			<h3>Email Validation Check</h3>
			<form
				action="#"
				id="form"
				:class="{ invalid: !BooleanAnswer, valid: BooleanAnswer }"
			>
				<div class="inputBox">
					<input
						type="text"
						id="email"
						placeholder="Enter Email Address"
						v-model="EmailText"
						@keyup="simpleValidationEmail"
					/>
					<span
						id="text"
						:style="
							BooleanAnswer
								? '--colorAnswer:#0f0'
								: '--colorAnswer:#f00'
						"
						>{{
							BooleanAnswer
								? 'Your Email Address is Valid'
								: 'Please Enter Valid Email Address'
						}}</span
					>
				</div>
			</form>
		</div>
	</section>
</template>

<style scoped>
section {
	position: relative;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(45deg, #4e65ee, #92effd);
}
section .box {
	background: #fff;
	padding: 15px 40px;
	box-shadow: 15px 15px rgba(0, 0, 0, 0.1);
}
.box h3 {
	position: relative;
	font-size: 1.25em;
	color: #ccc;
	letter-spacing: 0.1em;
	font-weight: 500;
	margin-bottom: 5px;
}
.box #form {
	position: relative;
}
.box #form #email {
	width: 400px;
	position: relative;
	outline: none;
	border: none;
	border-bottom: 2px solid #333;
	color: #333333;
	padding: 10px 0;
	font-weight: 500;
	font-size: 1.2em;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	background-color: #fff !important;
}
.box #form #text {
	position: relative;
	display: block;
	color: var(--colorAnswer);
	font-weight: 500;
	text-align: left;
	padding: 5px 0;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	font-size: 0.75em;
}
.box #form.invalid .inputBox::after {
	content: 'x';
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	font-weight: bold;
	color: #fff;
	right: 0;
	top: 12px;
	width: 24px;
	height: 24px;
	border-radius: 50px;
	background: #f00;
}
.box #form.valid .inputBox::after {
	content: '⩗';
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	font-weight: bold;
	color: #fff;
	right: 5px;
	top: 12px;
	width: 24px;
	height: 24px;
	border-radius: 50px;
	background-color: lime;
	z-index: 1000;
}
</style>
