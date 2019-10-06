<template lang="pug">
.datagrid(
	@keydown="onKeyDown"
	:tabindex="tabindex"
)
	Header(
		:columns="columns"
		ref="header"
	)
	Body(
		:rows="rows"
		:columns="columns"
		@scroll="onBodyScroll()"
		ref="body"
	)
</template>

<script>
import Header from './Header.vue'
import Body from './Body.vue'

export default {
	components: {
		Header,
		Body
	},

	props: {
		rows: Array,
		columns: Array,
		tabindex: {
			type: Number,
			default: 0
		}
	},

	mounted() {
		this.observeResize()
	},

	methods: {
		onBodyScroll() {
			if (this.$refs.body) {
				const body = this.$refs.body.$el
				this.$refs.header.$el.style.marginLeft =
					'-' + body.scrollLeft + 'px'
			}
		},

		onKeyDown(ev) {
			this.$refs.body.onKeyDown(ev)
		},

		observeResize() {
			return
			var ro = new ResizeObserver( entries => {
				for (let entry of entries) {
					const cr = entry.contentRect;
					console.log('Element:', entry.target);
					console.log(`Element size: ${cr.width}px x ${cr.height}px`);
					console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
				}
			});

			// Observe one or multiple elements
			ro.observe(this.$el);
		}
	}
}
</script>

<style lang="stylus">
.datagrid
	overflow hidden
	display flex
	flex-direction column

	--row-height: 31px
</style>
