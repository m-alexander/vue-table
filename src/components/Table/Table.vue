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
