<template  lang="pug">
	v-toolbar.defaultHeader.px-5(fixed scroll-off-screen prominent app)
		v-toolbar-title
			v-btn.grey.lighten-4(to="/" color="grey lighten-4" flat)
				Logo

		v-spacer

		v-toolbar-items(class="hidden-sm-and-down")
			v-btn(to="/games/" flat) Games
			v-btn(to="/leaderboard/" flat) Leaderboard
			v-btn(to="/rules/" flat) Rules
			v-btn(href="https://profile.anthive.io/login/" class="green darken-2 white--text" flat) Login

		v-menu.hidden-md-and-up
			v-toolbar-title(slot="activator")
				span.subheading Menu
				v-icon.ml-1 menu
  
			v-list.py-0.hidden-md-and-up
				v-list-tile.pl-0
					v-btn(to="/games/" flat) Games
				v-list-tile
					v-btn(to="/leaderboard/" flat) Leaderboard
				v-list-tile
					v-btn(to="/rules/" flat) Rules
				v-list-tile
					v-btn(href="https://profile.anthive.io/login/" class="green darken-2 white--text" flat) Login
</template>

<script>
import Logo from '@/components/logo';

export default {
  name: 'defaultHeader',
  data: () => ({
  }),
  mounted() {
  },
  components: {
  	Logo
  }
}
</script>

<style>
	.defaultHeader {
		z-index: 10;
	}
	.v-list__tile {
		padding: 0;
	}
</style>
