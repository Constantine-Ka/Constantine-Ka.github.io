<script>

const data = {
	name: 'ResponsiveNavigationBar',
	data() {
		return {
			menuList: [
				{
					title: 'Home',
					route: '/'
				},
        {
          title: 'Form',
          route: '/forms'
        },
				{
					title: 'Buttons',
					route: '/btn'
				},
				{
					title: 'Cards',
					route: '/card'
				},
				{
					title: 'Loaders',
					route: '/loaders'
				},
				{
					title: 'Navbars & Sidebars',
					route: '/nav'
				},

				// {
				// 	title: 'About',
				// 	route: '/',
				// 	sub: [
				// 		{
				// 			title: 'link1',
				// 			route: '/'
				// 		},
				// 		{
				// 			title: 'link2',
				// 			route: '/'
				// 		},
				// 		{
				// 			title: 'link3',
				// 			route: '/'
				// 		}
				// 	]
				// },

				{
					title: '404',
					route: '/404'
				},

			]
		};
	},
	methods: {
		openAdaptiveMenu() {
			document
				.getElementById('ResponsiveNavigationBar')
				.classList.toggle('active');
		},
		dropDownMenu(id) {
			document.querySelectorAll('.sub-menu').forEach(e => {
				if (e.getAttribute('id') != 'link' + id) {
					e.classList.remove('open');
				}
			});
			document.getElementById('link' + id).classList.toggle('open');
		}
	}
};
export default data;
</script>
<template>
	<header>
		<div class="logo">Logo</div>
		<nav id="0ResponsiveNavigationBar">
			<ul id="ResponsiveNavigationBar">
				<div v-for="(item, indx) in menuList" :key="item">
					<li
						v-if="item.sub"
						class="sub-menu"
						:id="'link' + indx"
						@click="dropDownMenu(indx)"
					>
            <router-link :to="item.route" class="link">{{ item.title }} </router-link>

						<ul class="sub">
							<li v-for="sub in item.sub" :key="sub">
								<a :href="sub.route" class="link">{{
									sub.title
								}}</a>
							</li>
						</ul>
					</li>
					<li v-else :id="'link' + index">
            <router-link :to="item.route" class="link">{{ item.title }}  </router-link>
					</li>
				</div>
			</ul>
		</nav>
		<div class="menuToggle" @click="openAdaptiveMenu">
			<font-awesome-icon icon="fa-solid fa-bars" />
		</div>
	</header>
</template>

<style scoped>
header {
	position: absolute;
	padding: 0 100px;
	width: 100vw;
	min-height: 50px;
	background: #000;
	box-sizing: border-box;
	background: #262626;
	z-index: 10000;
}
header .logo {
	color: #fff;
	height: 50px;
	line-height: 50px;
	font-size: 24px;
	float: left;
	font-weight: bold;
}
header nav {
	float: right;
}
header nav ul {
	margin: 0;
	padding: 0;
	display: flex;
}
header nav ul li {
	list-style: none;
	position: relative;
}
header nav ul li.sub-menu:before {
	content: '▼';
	position: absolute;
	right: 5px;
	line-height: 50px;
	color: #fff;
}
header nav ul li.open.sub-menu:before {
	content: '▲';
}
header nav ul li .link {
	display: inline-block;
	height: 50px;
	line-height: 50px;
	margin: 0;
	padding: 0 20px;
	color: #fff;
	text-decoration: none;
}
header nav ul li.sub-menu .link {
	min-width: 180px;
}
header nav ul li .link:hover,
header nav ul li .link.active {
	color: #fff;
	background: #2196f3;
}
header nav ul li ul {
	position: absolute;
	left: 0;
	background: #333;
	display: none;
}
header nav ul li.open ul {
	display: block;
}
header nav ul li ul li {
	display: block;
	width: 200px;
}

.menuToggle {
	color: #fff;
	float: right;
	line-height: 50px;
	font-size: 24px;
	cursor: pointer;
	display: none;
}
@media (max-width: 990px) {
	header {
		padding: 0 20px;
		/*background: transparent;*/
		/*height: -webkit-fill-available;*/
	}
	.menuToggle {
		display: block;
	}
	header nav ul {
		position: absolute;
		width: 100vw;
		height: calc(100vh - 50px);
		background: #333;
		/*left: calc(-100% - 20px);*/
		left: 0;
		top: 50px;
		margin: 0 0 0 0%;
		padding: 0 20px;
		z-index: 100;
		overflow: hidden;
		transition: 0.5s;
	}
	header nav ul.active {
		/*left: 0;*/
		display: block;
		overflow: hidden;
	}
	header nav ul {
		display: none;
		width: 100vw;
		text-align: center;
	}
	header nav ul li .link {
		width: 100vw;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	header nav ul li ul.sub {
		padding: 0;
		margin: 0;
		height: auto;
		position: relative;
		top: 0;
		background: #003e6f;
	}
}
</style>
