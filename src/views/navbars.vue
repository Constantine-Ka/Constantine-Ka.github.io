<script>
import ResponsiveMenu from '@/components/NavBars/ResponsiveMenu.vue';
import NavigationSearchBar from '@/components/NavBars/NavigationSearchBar.vue';
import RoundedBottomNavigationBar from '@/components/NavBars/RoundedBottomNavigationBar.vue';
import OutsideSidebarColors from '@/components/NavBars/OutsideSidebarColors.vue';
import UserbarAndToggleTheme from'@/components/NavBars/UserbarAndToggleTheme.vue';
import NineDotsNavigationMenu from'@/components/NavBars/9DotsNavigationMenu.vue';
import GlassmorphismSidebarMenu from'@/components/NavBars/GlassmorphismSidebarMenu.vue';



export default {
  name: "btn",
  components: {
	  ResponsiveMenu,
	  NavigationSearchBar,
	  RoundedBottomNavigationBar,
	  OutsideSidebarColors,
	  UserbarAndToggleTheme,
	  NineDotsNavigationMenu,
    GlassmorphismSidebarMenu
  }
}
</script>

<template>
	<div class="content">
		<NineDotsNavigationMenu />
		<UserbarAndToggleTheme />
		<ResponsiveMenu s1tyle="background-color: #b6e79a"/>
		<NavigationSearchBar />
		<RoundedBottomNavigationBar />
		<OutsideSidebarColors />
    <GlassmorphismSidebarMenu />
	</div>

</template>
<style scoped>
	.content{
		top:50px;
		position: relative;
	}
	.content> *{
		position: relative;
		width: 100vw;
		height: 70px;
		display: flex;

		align-items: center;
	}

</style>