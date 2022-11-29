<script>
	// TODO:Иконки искать на сайте:
	// ! https://ionic.io/ionicons
export default {
	name: 'RoundedBottomNavigationBar',
	data() {
		return {
			menu: [
				{
					title: 'Home',
					link: '#',
					icon: '<ion-icon name="home-outline"></ion-icon>',
					delay: '0.1s'
				},
				{
					title: 'Person',
					link: '#',
					icon: '<ion-icon name="person-outline"></ion-icon>',
					delay: '0.2s'
				},
				{
					title: null,
					link: '#',
					icon: '',
					delay: '0'
				},
				{
					title: 'Heart',
					link: '#',
					icon: '<ion-icon name="heart-outline"></ion-icon>',
					delay: '0.2s'
				},
				{
					title: 'Notifications',
					link: '#',
					icon: '<ion-icon name="notifications-outline"></ion-icon>',
					delay: '0.1s'
				}
			],
			colorBg: '#20415c',
			toggleStatus: false
		};
	}
};
</script>
<template>
	<section :style="'--clr:' + colorBg">
		<div class="navigation">
			<div
				class="menuToggle"
				:class="{ active: toggleStatus }"
				@click="toggleStatus = !toggleStatus"
			>
				<i></i>
			</div>
			<div class="menu" :style="'--lenght:'+menu.length*72+'px'">
				<ul>
					<li
						v-for="itemMenu in menu"
				    :key="itemMenu"
				    :class="{ empty: itemMenu.title==null }"
				    :style="'--iDelay:'+itemMenu.delay"
					>
						<router-link
							v-if="itemMenu.title"
							:to="itemMenu.link"
							v-html="itemMenu.icon"
							class="link"
						></router-link>
						<div v-else></div>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--clr);
}
.navigation {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
.menuToggle {
	position: relative;
	width: 65px;
	height: 65px;
	background: #ff4886;
	border: 5px solid var(--clr);
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	transform: translateY(-30px);
}
.menuToggle::before {
	content: '+';
	position: absolute;
	font-size: 3em;
	color: #ffffff;
	transition: 1.5s;
}
.menuToggle.active::before {
	transform: rotate(225deg);
}
.menuToggle i{
	position: absolute;
	inset: 0;
}
.menuToggle i:before{
	content: '';
	position: absolute;
	top:23px;
	left:-23px;
	width: 20px;
	height: 20px;
	background: transparent;
	border-top-right-radius: 20px;
	box-shadow: 3px -6px var(--clr);
}
.menuToggle i::after{
	content: '';
	position: absolute;
	top:22px;
	right:-23px;
	width: 20px;
	height: 20px;
	background: transparent;
	border-top-left-radius: 20px;
	box-shadow: -3px -6px var(--clr);
}
.menu{
	position: absolute;
	width: 60px;
	/*width: var(--lenght); !*Количество элементов меню, умноженное на 72пикс *!*/
	height: 60px;
	background: #fff;
	border-radius: 70px;
	transform: translateY(-30px);
	transition: transform 0.5s, width 0.5s, height 0.5s;
	transition-delay: 1s, 0.5s, 0.5s;
}
.menuToggle.active ~ .menu{
	width: var(--lenght); /*Количество элементов меню, умноженное на 72пикс */
	height: 70px;
	transform: translateY(0);
	transition-delay: 0s, 0.5s, 0.5s;

}
.menu ul{
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap:35px;
	line-height: 80px;
}
.menu ul li{
	list-style: none;
	cursor: pointer;
	opacity: 0;
	visibility: hidden;
	transition: 0.25s;
	transition-delay: calc(0s + var(--iDelay));
	transform: translateY(-30px);

}
.menuToggle.active ~ .menu ul li{
	opacity: 1;
	visibility: visible;
	transition-delay: calc(0.75s + var(--iDelay));
	transform: translateY(0);
}
.menu ul li.empty{
	width: 30px;
}
.menu ul li a,
.menu ul li .link{
	display: block;
	font-size: 2em;
	text-decoration: none;
	color:#555;
}
.menu ul li:hover a,
.menu ul li:hover .link{
	color: #ff4886;
}

</style>
