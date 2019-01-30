<template  lang="pug">
	v-toolbar.defaultHeader(fixed scroll-off-screen prominent app)
		v-menu.hidden-md-and-up(offset-y transition="scale-transition")
			v-btn(slot="activator" icon)
				v-icon menu
			
			v-list.hidden-md-and-up.pa-2
				v-list-tile(to="/games/")
					v-list-tile-action.pl-2
						v-icon videogame_asset
					v-list-tile-content.pr-4
						v-list-tile-title Games
				v-list-tile(to="/leaderboard/")
					v-list-tile-action.pl-2
						v-icon poll
					v-list-tile-content.pr-4
						v-list-tile-title Leaderboard
				v-list-tile(to="/rules/")
					v-list-tile-action.pl-2
						v-icon import_contacts
					v-list-tile-content.pr-4
						v-list-tile-title Rules
				v-list-tile.green--text(href="https://profile.anthive.io/login/")
					v-list-tile-action.pl-2
						v-icon.green--text person
					v-list-tile-content.pr-4
						v-list-tile-title Login
				
		v-toolbar-title.ml-0
			v-btn.px-0.grey.lighten-4(to="/" color="grey lighten-4" flat)
				Logo

		v-spacer

		v-toolbar-items.hidden-sm-and-down.mr-2
			v-btn(to="/games/" flat) Games
			v-btn(to="/leaderboard/" flat) Leaderboard
			v-btn(to="/rules/" flat) Rules
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
