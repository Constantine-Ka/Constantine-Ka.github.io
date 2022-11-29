<script>
	export default {
		name: "OutsideSidebarColors",
		data(){
			return{
				menuList:[
					{
						title:"Home",
						icon:"home-outline",
						color:"#f44336",
						link:"#",
						isActive:false
					},
					{
						title:"About",
						icon:"person-outline",
						color:"#ffa117",
						link:"#",
						isActive:false
					},
					{
						title:"Message",
						icon:"chatbubbles-outline",
						color:"#0fc70f",
						link:"#",
						isActive:false
					},
					{
						title:"Photos",
						icon:"camera-outline",
						color:"#2196f3",
						link:"#",
						isActive:false
					},
					{
						title:"Settings",
						icon:"settings-outline",
						color:"#b145e9",
						link:"#",
						isActive:false
					},
				],
				isSidebar:true,

			}
		},

	}
</script>

<template>
<section style="--bg:#2f323f">
	<div
			class="navigation"
			:class="{active:isSidebar}"
	>
		<div
				class="menuToggle"
				@click="isSidebar=!isSidebar"
		></div>
		<ul>
			<li
				class="list"
				v-for="(menuItem, k) in menuList"
				:key="k"
				:class="{active:menuItem.isActive}"
				@click="menuList.forEach((e,i) =>{menuList[i].isActive=(i==k)?true:false})"
			>
				<router-link
						:to="menuItem.link"
						:style="'--clr:'+menuItem.color"
				>
					<span class="icon"><ion-icon :name="menuItem.icon"></ion-icon></span>
					<span class="text">{{menuItem.title}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</section>
</template>

<style scoped>

section{
	min-height: 100vh;
	background: var(--bg);
	justify-content: flex-start;
}
.navigation{
	/*position: fixed;*/  /*TODO unblock for used*/
	position: relative;
	margin: 0;
	inset: 40px 0 40px 20px;
	background: #fff;
	width: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	min-height: 100vh;
}
.navigation.active{
	width: 250px;
}

.menuToggle{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	padding: 0 23px;
	border-bottom: 1px solid rgba(0,0,0,0.25);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
}
.menuToggle::before{
	content: '';
	position: absolute;
	width: 30px;
	height: 2px;
	background: #333;
	transform: translateY(-8px);
	transition: 0.5s;
}
.navigation.active .menuToggle::before{
	transform: translateY(0) rotate(45deg);
}
.menuToggle::after{
	content: '';
	position: absolute;
	width: 30px;
	height: 2px;
	background: #333;
	box-shadow: 0 -8px 0 #333;
	transform: translateY(8px);
	transition: 0.5s;
}
.navigation.active .menuToggle::after{
	transform: translateY(0) rotate(-45deg);
	box-shadow: none;
}
.navigation ul{
	display: flex;
	flex-direction: column;
	width: 100%;
}
.navigation ul li{
	list-style: none;
	position: relative;
	width: 100%;
	height: 76px;
	border-radius: 12px;
	border: 8px solid transparent;
	transition: 0.5s;
}

.navigation ul li::before{
	content: '';
	position: absolute;
	top: -28px;
	right: -10px;
	width: 20px;
	height: 20px;
	background: transparent;
	border-bottom-right-radius: 20px;
	box-shadow: 6px 5px 0 5px var(--bg);
	transform: scale(0);
	transform-origin: bottom right;
	transition: 0.5s;
}
.navigation ul li::after{
	content: '';
	position: absolute;
	bottom: -28px;
	right: -10px;
	width: 20px;
	height: 20px;
	background: transparent;
	border-top-right-radius: 20px;
	box-shadow: 6px -3px 0 3px var(--bg);
	transform: scale(0);
	transform-origin: bottom right;
	transition: 0.5s;
}
.navigation ul li.active{
	transform: translateX(30px);
	background: var(--bg);
}
.navigation ul li.active::before{
	right: 22px;
	transform: scale(1);
}
.navigation ul li.active::after{
	right: 22px;
	transform: scale(1);
}
.navigation ul li a{
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	text-align: center;
	text-decoration: none;
	z-index: 1000;
}
.navigation ul li a .icon{

	position: relative;
	display: block;
	min-width: 60px;
	height: 60px;
	border-radius: 10px;
	color: #333333;
	font-size: 1.75em;
	line-height: 60px;
	border: 6px solid transparent;
	transition: 0.5s;

}
.navigation ul li.active a .icon{
	background: var(--clr);
	color: #fff;
}
.navigation ul li a .icon::before{
	content: '';
	position: absolute;
	top: 12px;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--clr);
	filter: blur(8px);
	opacity: 0;
	transition: 0.5s;
}
.navigation ul li.active a .icon::before{
	opacity: 0.5;
}
.navigation ul li a .icon::after{
	content: '';
	position: absolute;
	top: 10px;
	left: -60px;
	width: 15px;
	height: 15px;
	background: var(--clr);
	border: 8px solid var(--bg);
	border-radius: 80%;
}
.navigation ul li a .text{
	position: relative;
	padding: 0 15px;
	color: #333333;
	display: flex;
	align-items: center;
	height: 60px;
	opacity: 0;
	visibility: hidden;
	transition: 0.5s;
}
.navigation.active ul li a .text{
	visibility: visible;
	opacity: 1;
}
.navigation.active ul li.active a .text{
	color: #fff;
}

</style>