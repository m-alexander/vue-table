<template lang="pug">
.datagrid-header-cell
	TableCell.datagrid-header-cell__title(:index="index") {{ title }}
	.datagrid-header-cell__grip(
		v-if="resizable"
		@mousedown="$emit('startResize', $event)"
	)
</template>

<script>
import TableCell from './TableCell.vue'

export default {
	components: {
		TableCell
	},

	props: ['title', 'resizable', 'index'],
}
</script>

<style lang="stylus">
.datagrid-header-cell
	display: flex
	&__title
		flex: 1
	&__grip
		width: 8px
		cursor: col-resize
		margin: 8px 0
</style>
