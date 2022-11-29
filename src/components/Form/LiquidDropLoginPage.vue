<script>
	export default {
		name: "LiquidDropLoginPage",
		data(){
			return{
				screenType:'login',
				login:'',
				password:'',
				passwordRepeat:'',
				isErrorPass:false
			}
		},
		methods:{
			//TODO Read here is CSS border-radius-slash-syntax
			//TODO link https://medium.com/9elements/css-border-radius-can-do-that-d46df1d013ae
			//Todo Demo https://9elements.github.io/fancy-border-radius/
			random(){
				const randomValue = () => Math.floor(Math.random() * (80 - 40)) + 40;
				let str = randomValue() + "% " + randomValue() + "% " + randomValue() + "% " + randomValue() + "% / " + randomValue() + "% " + randomValue() + "% " + randomValue() + "% " + randomValue() + "% "
				return str
			},
			sendForm(){
				var dataForSend, url
				switch (this.screenType){
					case 'login':
						url='';
						dataForSend={
							login:this.login,
							password:this.password
						};
						break;
					case 'register':
						url='';
						this.isErrorPass = this.password!=this.passwordRepeat;
						if (this.isErrorPass) return;
						dataForSend={
							login:this.login,
							password:this.password
						};
						break;
					case 'forget':
						url='';
						dataForSend={
							login:this.login,
						};
						break;
					default:
						console.warn('Error: screentype is ', this.screenType);
						alert('Error: screentype is '+ this.screenType)
						break;
				}
				//send data of RESTAPI
			}
		},
		computed: {
			fancyBorderRadiusDrop() {return this.random()},
			fancyBorderRadiusBtnRegister() {return this.random()},
			fancyBorderRadiusBtnLogin() {return this.random()},
			fancyBorderRadiusBtnForget() {return this.random()},
		}
	}
</script>

<template>
	<section>
		<div class="container">


		<div class="drop" :style="'--b-radius:'+ this.fancyBorderRadiusDrop">
			<div
					class="content"
					id="singIn"
			>
				<h2>{{ screenType }}</h2>
				<form @submit.prevent="sendForm()">
					<div class="inputBox">
						<input
								type="text"
								v-model="login"
								placeholder="Email"
						>
					</div>
					<div
							class="inputBox"
							:class="[{errorPass:isErrorPass}]"
							v-show="screenType!='forget'"
					>
						<input
								type="password"
								placeholder="Password"
								v-model="password"
						>
					</div>
					<div
							class="inputBox"
							:class="[{errorPass:isErrorPass}]"
							v-show="screenType=='register'"
					>
						<input
								type="password"
								placeholder="Confirm Password"
								v-model="passwordRepeat"
						>
					</div>
					<div class="inputBox">
						<input type="submit" :value="this.screenType">
					</div>
				</form>
			</div>
		</div>
		<button
				class="btns forget"
				:style="'--b-radius:'+ this.fancyBorderRadiusBtnForget"

				v-show="screenType!='forget'"
				@click="this.screenType = 'forget'"
		>Forget Password</button>
		<button
				class="btns register"
				:style="'--b-radius:'+ this.fancyBorderRadiusBtnRegister"
				v-show="screenType!='register'"
				@click="this.screenType = 'register'"
		>SingUp</button>
		<button
				class="btns login"
				:style="'--b-radius:'+ this.fancyBorderRadiusBtnLogin"
				v-show="screenType!='login'"
				@click="this.screenType = 'login'"

		>SingIn</button>
		</div>
	</section>
</template>

<style scoped>
	section{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #eff0f4;
	}
	section .container{
		width:350px;
		height: 350px;
		position: relative;
	}
	.drop {
		position: relative;
		left: -50px;
		width: 350px;
		height: 350px;
		box-shadow: inset   20px 20px 20px rgba(0,0,0, 0.05),
												25px 35px 20px rgba(0,0,0, 0.05),
												25px 30px 30px rgba(0,0,0, 0.05),
								inset -20px -20px 35px rgba(255,255,255,0.9);
		transition: 0.5s;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: var(--b-radius);
	}
	.drop:hover{
		border-radius: 50%;
	}
	.drop::before{
		content: '';
		position: absolute;
		top: 50px;
		left: 50px;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background: #fff;
		opacity: 0.9
	}
	.drop::after{
		content: '';
		position: absolute;
		top: 90px;
		left: 110px;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: #fff;
		opacity: 0.9;
	}
	.drop .content{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		padding: 40px;
		gap: 15px;
	}
	.drop .content h2{
		position: relative;
		text-transform: capitalize;
		color: #333;
		font-size: 1.5em;
	}
	.drop .content form{
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: center;
		align-items: center;
	}
	.drop .content form .inputBox{
		position: relative;
		width: 225px;
		box-shadow: inset   2px 5px 10px rgba(0,0,0, 0.1),
								inset -2px -5px 10px rgba(255,255,255,1),
												15px 15px 10px rgba(0,0,0, 0.05),
												15px 10px 15px rgba(0,0,0, 0.025);
		border-radius: 25px;
	}
	.drop .content form .inputBox.errorPass input{
		border: #ef4149 solid 1px;
		border-radius: 50px;
	}
	.drop .content form .inputBox::before{
		content: '';
		position: absolute;
		top: 8px;
		left: 50%;
		transform: translateX(-50%);
		width: 65%;
		height: 5px;
		background: rgba(255,255,255,0.75);
		border-radius: 5px;
	}
	.drop .content form .inputBox input{
		border: none;
		outline: none;
		background: transparent;
		width: 100%;
		font-size: 1em;
		padding: 10px 15px;
	}
	.drop .content form .inputBox input[type="submit"]{
		color: #fff;
		text-transform: uppercase;
		font-size: 1em;
		cursor:pointer;
		letter-spacing: 0.1em;
		font-weight: 500;
	}
	.drop .content form .inputBox:last-child{
		width: 120px;
		background: #ff0f5b;
		box-shadow: inset  2px 5px 10px rgba(0,0,0, 0.1),
											15px 15px 10px rgba(0,0,0, 0.05),
											15px 10px 15px rgba(0,0,0, 0.025);
		transition: 0.5s;
	}
	.drop .content form .inputBox:last-child:hover{
		width: 150px;
	}
	.btns{
		position: absolute;
		width: 120px;
		height: 120px;
		cursor: pointer;
		text-decoration: none;
		outline: none;
		border: none;
		color: #fff;
		line-height: 1.2em;
		letter-spacing: 0.1em;
		font-size: 0.8em;
		transition: 0.25s;
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		box-shadow: inset   10px 10px 10px rgba(190,1,254, 0.05),
												15px 25px 10px rgba(190,1,254, 0.05),
												15px 20px 20px rgba(190,1,254, 0.05),
								inset -20px -20px 35px rgba(255,255,255,0.9);
		border-radius: var(--b-radius);
	}

	.btns:hover{
		border-radius: 50%;
	}
	.btns::before{
		content: '';
		position: absolute;
		top: 15px;
		left: 30px;
		width: 20px;
		height: 20px;
		background: #fff;
		opacity: 0.5;
		border-radius: 50%;
	}
	.btns.forget{
		width: 120px;
		height: 120px;
		right: -120px;
		bottom: 0;
		background: #c61dff;
	}
	.btns.register {
		bottom: 150px;
		right: -120px;
		width: 80px;
		height: 80px;
		background: #01b4ff;
		box-shadow: inset 10px 10px 10px rgba(1, 180, 255, 0.05),
		15px 25px 10px rgba(1, 180, 255, 0.05),
		15px 20px 20px rgba(1, 180, 255, 0.05),
		inset -20px -20px 35px rgba(255, 255, 255, 0.9);
	}
	.btns.login{
		top: 0;
		right: -100px;
		background: #ff0f5b;
	}

</style>