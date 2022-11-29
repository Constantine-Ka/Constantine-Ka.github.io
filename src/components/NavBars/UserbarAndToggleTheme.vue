<script>
	export default {
		name: "UserbarAndToggleTheme",
		data(){
			return{
				theme:'light-theme',
				color:"#72c5ee"
			}
		},
		methods:{
			saveResult(result){
				window.localStorage.setItem('theme', result);
			},
			changeTheme(event){
				console.log(event)

				this.theme=event.target.id
				this.$refs.section.className = event.target.id;
				this.saveResult(event.target.id)
			}
		},
		mounted() {
			this.theme=window.localStorage.getItem('theme');
			if (this.theme == null) {
				this.theme = 'light-theme'
			}
			this.$refs.section.className = this.theme;
			this.saveResult(this.theme)
		}
	}

</script>

<template>
	<section ref="section" :style="'background:'+ this.color ">
		<input
				type="color"
				v-model="color"
		>
		<div class="menu">

			<div class="menu-header">
				<h2 class="menu-header-title">Theme</h2>
				<div class="theme-switcher">
					<input type="radio" id="light-theme" name="themes"  @click ="changeTheme" checked />
					<label for="light-theme" >
						<span>
							<ion-icon name="sunny-outline"></ion-icon>Light
						</span>
					</label>
					<input type="radio" id="dark-theme" name="themes" @click ="changeTheme"/>
					<label for="dark-theme" >
				<span>
					<ion-icon name="moon-outline"></ion-icon>Dark
				</span>
					</label>
					<input type="radio" id="black-theme" name="themes" @click ="changeTheme"  />
					<label for="black-theme" >
				<span>
					<ion-icon name="cloud"></ion-icon>Black
				</span>
					</label>
					<span class="slider"></span>
				</div>
			</div>
			<div class="menu-body">
				<router-link to="#"><ion-icon name="person-outline"></ion-icon> Settings</router-link>
				<router-link to="#"><ion-icon name="file-tray-full-outline"></ion-icon>Give Feedback</router-link>
				<router-link to="#"><ion-icon name="information-circle-outline"></ion-icon>About</router-link>
				<router-link to="#"><ion-icon name="nuclear-outline"></ion-icon>Support</router-link>
			</div>

		</div>
	</section>
</template>

<style scoped>
input[type=color]{
	position: absolute;
	right: 5%;
	top: 10%;
;
}
section.light-theme{
	--c-text-primary: #191919;
	--c-text-secondary: #737374;
	--c-border-primary: #ccc;
	--c-bg-body: #ccc;
	--c-bg-primary: #fff;
	--c-bg-secondary: #d4d8dd;
	--c-bg-button:#fff;
	--slider-shadow: inset 0 1px 1px #ddd , 0 2px 3px #ccc;
	filter: brightness(100%);
}

section.dark-theme{
	--c-text-primary: #eee;
	--c-text-secondary: #d3d5db;
	--c-border-primary: #454545;
	--c-bg-primary: #323339;
	--c-bg-secondary: #222128;
	--c-bg-button:#494a50;
	--slider-shadow: inset 0 1px 1px #767676;
	filter: brightness(80%);

}

section.black-theme{
	--c-text-primary: #edeeef;
	--c-text-secondary: #d4d7e1;
	--c-border-primary: #323232;
	--c-bg-primary: #1b1d23;
	--c-bg-secondary: #000001;
	--c-bg-button:#343844;
	--slider-shadow: inset 0 1px 1px #555;
	filter: brightness(60%);
}
	section{
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
.menu{
	width: 90%;
	max-width: 320px;
	background-color: var(--c-bg-primary);
	transition: background-color .15s ease;
	border-radius: 10px 10px 0 0;
	box-shadow:  0 0 2px rgba(0 , 0, 0 , 0.05) , 0 -4px 16px rgba(0 , 0, 0 , 0.1);
}

.menu-header{
	padding: 1rem;
}
.menu-header-title{
	font-size: 0.8rem;
	color: var(--c-text-secondary);
	margin-bottom: 0.3rem;
	font-weight: bold;
}

.theme-switcher{
	background-color: var(--c-bg-secondary);
	border-radius: 10px;
	display: flex;
	padding: 0 3px;
	align-items: center;
	position: relative;
	overflow: hidden;
}

.theme-switcher .slider{
	display: block;
	position: absolute;
	z-index: 1;
	width: calc((100% - 6px)/3);
	top: 3px;
	transform: translateX(-110%);
	bottom: 3px;
	border-radius: 6px;
	transition: 0.15s ease , transform 0.25s ease-out;
	background-color: var(--c-bg-button);
	box-shadow: var(--slider-shadow);
}

.theme-switcher input{
	display: none;
}

.theme-switcher input:nth-of-type(1):checked ~ .slider{
	transform: translateX(0);
}
.theme-switcher input:nth-of-type(2):checked ~ .slider{
	transform: translateX(100%);
}
.theme-switcher input:nth-of-type(3):checked ~ .slider{
	transform: translateX(200%);
}

.theme-switcher label {
	position: relative;
	z-index: 2;
	width: calc(100%/3);
	color: var(--c-text-secondary);
}

.theme-switcher label span{
	padding: 8px 0;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}

.theme-switcher label svg {
	display: inline-block;
	margin-right: 0.5rem;
	width: 20px;
}

.menu-body{
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	border-top: 1px solid var(--c-border-primary);
	transition: border-color 0.15s ease;

}

.menu-body a{
	text-decoration: none;
	color: inherit;
	display: flex;
	align-items: center;
	padding: 0.62rem 0.5rem;
	border-radius: 4px;
	font-weight: bold;
	transition: 0.15s ease;
	color: var(--c-text-secondary);
}

.menu-body a svg{
	margin-right: 1rem;
	color: var(--c-text-secondary);
	transition: color 0.15s ease;
}

.menu-body a:hover{
	background-color: var(--c-bg-secondary);
}

</style>