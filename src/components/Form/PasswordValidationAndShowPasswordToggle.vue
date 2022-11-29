<script>
export default {
	name: 'PasswordValidationAndShowPasswordToggle',
	data() {
		return {
			passContent: '',
			passVisible: true,
			validationIs: {
				lower: false,
				upper: false,
				number: false,
				special: false,
				length: false
			}
		};
	},
	methods: {
		validationPass() {
			let lower = new RegExp('(?=.*[a-z])');
			let upper = new RegExp('(?=.*[A-Z])');
			let number = new RegExp('(?=.*[0-9])');
			let special = new RegExp('(?=.*[!@#\$%\^&\*])');
			let length = new RegExp('(?=.{8,})');
			// Validation
      this.validationIs.lower=lower.test(this.passContent);
      this.validationIs.upper=upper.test(this.passContent);
      this.validationIs.number=number.test(this.passContent);
      this.validationIs.special=special.test(this.passContent);
      this.validationIs.length=length.test(this.passContent);
		}
	}
};
</script>
<template>
	<section title="Проверка пароля на соответствие условиям">
		<div class="box">
			<div class="inputBox">
				<input
					:type="passVisible ? 'text' : 'password'"
					:value="passContent"
					@keyup="validationPass"
					v-model="passContent"
				/>
				<span
					id="toggleBtn"
					:class="{ hide: passVisible }"
					@click="passVisible = !passVisible"
				></span>
			</div>
			<div class="validation">
				<ul>
					<li :class="{ valid: validationIs.lower }">
						At least one lowercase character
					</li>
					<li :class="{ valid: validationIs.upper }">
						At least one uppercase character
					</li>
					<li :class="{ valid: validationIs.number }">
						At least one number
					</li>
					<li :class="{ valid: validationIs.special }">
						At least one special character
					</li>
					<li :class="{ valid: validationIs.length }">
						At least one 8 character
					</li>
				</ul>
			</div>
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
	background: #8cccff;
}
.box {
	position: relative;
	width: 300px;
}
.box .inputBox {
	position: relative;
	width: 300px;
	background: #fff;
	padding: 5px;
	border-radius: 8px;
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
}
.box .inputBox input {
	position: relative;
	width: 100%;
	outline: none;
	border: none;
	padding: 10px 5px;
}
.box .inputBox #toggleBtn {
	position: absolute;
	top: 8px;
	right: 10px;
	width: 34px;
	height: 34px;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
}
.box .inputBox #toggleBtn::before {
	content: '👁';
	filter: none;
}
.box .inputBox #toggleBtn.hide::before {
	filter: opacity(0.3);
}
.validation {
	background: #376488;
	padding: 10px;
	margin-top: 30px;
	border-radius: 8px;
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
}
.validation ul {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.validation ul li {
	position: relative;
	list-style: none;
	text-align: start;
	color: #fff;
	font-size: 0.85em;
	transition: 0.5s;
}
.validation ul li.valid {
	color: rgba(255, 255, 255, 0.5);
}
.validation ul li::before {
	content: '⨀';
	width: 20px;
	height: 20px;
	display: inline-block;
}
.validation ul li.valid::before {
	content: '⩗';
	color: #00ff00;
  font-weight: bold;
}
</style>
