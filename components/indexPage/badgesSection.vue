<template lang="pug">
	section
		v-layout.my-5(column, wrap, align-center, pa-0)
			v-flex.md8.video_filter(xs12)
				v-container(grid-list-xl)
					v-layout(align-center, justify-center, row, wrap, fill-height)
						v-flex(xs12, md12, lg12, ma-0, pa-0)
							v-layout(align-center, justify-space-around, row, wrap, fill-height, ma-0, pa-0)
								v-flex.align-center.justify-center(xs12, md12, lg5, my-0)
									v-card.elevation-3.white.pa-2.pl-4.ant-card-scientist
										v-card-title.layout.justify-start(primary-title)
											.headline.brown--text.text-xs-left.px-3 Badges and Ranking
										v-card-text
											| Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien velit, sodales in elementum sed, facilisis suscipit massa.
										v-card-text
											| Maecenas efficitur lectus non ligula accumsan euismod in a quam. Vivamus finibus tincidunt tellus vitae aliquet. Suspendisse justo ipsum, pharetra non pretium ut, scelerisque ac mi.
										v-card-text
											| Pellentesque hendrerit sodales tortor, in faucibus diam tempus ac. Donec convallis fringilla mauris vitae tristique.
								v-flex(xs10, sm6, md5, lg3, my-0, justify-center)
									v-img(src='/img/badges_trinity.png', aspect-ratio='1', contain)
</template>

<script>
export default {
	data: () => ({
	}),
	mounted() {
	},
	components: {
	}
}
</script>

<style>

</style>