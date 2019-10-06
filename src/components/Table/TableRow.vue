<template lang="pug">
.datagrid__row(
	@click="$emit('click', $event)"
	@dblclick="$emit('dblclick', $event)"
	:class="classes"
)
	slot
</template>

<script>
	export default {
		props: {
			selected: {
				type: Boolean,
				default: false
			}
		},

		computed: {
			classes() {
				return {
					'datagrid__row--selected': this.selected,
				}
			}
		}
	}
</script>

<style lang="stylus">
.datagrid
	&__row
		height: var(--row-height)
		width: max-content
		min-width: 100%
		display: grid
		grid-template-columns: var(--columns-width)
		&--selected
			//
</style>
