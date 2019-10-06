<template lang="pug">
.datagrid__cell(
	:style="styles"
)
	slot
</template>

<script>
	export default {
		props: {
			index: Number
		},

		computed: {
			styles() {
				return {
					textAlign: `var(--column-align-${this.index})`
				}
			}
		}
	}
</script>

<style lang="stylus">
.datagrid
	&__cell
		white-space: nowrap
		text-overflow: ellipsis
		overflow: hidden
</style>

