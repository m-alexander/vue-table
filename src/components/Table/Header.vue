<template lang="pug">
.datagrid__header(
	@mousemove="onResize"
	@mouseup="onStopResize"
	@mouseleave="onStopResize"
)
	TableRow
		HeaderCell(
			v-for="(column, i) in columns"
			:key="column.field"
			:index="i"
			:title="column.title"
			:resizable="isResizable(i)"
			@startResize="onStartResize($event, i)"
		)
</template>

<script>
import HeaderCell from './HeaderCell.vue'
import TableRow from './TableRow.vue'

export default {
	components: {
		HeaderCell,
		TableRow
	},

	props: ['columns'],

	data: () => ({
		startOffset: 0,
		startWidth: 0,
		resizingIndex: -1,
		columnsWidth: []
	}),

	mounted() {
		this.columnsWidth = this.columns.map(_ => _.width || 100)

		const parentStyles = this.$parent.$el.style
		this.columns.forEach((column, i) => {
			const align = column.align || 'left'
			parentStyles.setProperty(`--column-align-${i}`, align)
		})
	},

	methods: {
		onStartResize(ev, index) {
			this.startOffset = ev.pageX
			this.startWidth = this.columnsWidth[index]
			this.resizingIndex = index
		},

		onResize(ev) {
			if (this.resizingIndex > -1) {
				const width = Math.max(this.startWidth + (ev.pageX - this.startOffset), 48)
				this.$set(this.columnsWidth, this.resizingIndex, width)
			}
		},

		onStopResize() {
			this.resizingIndex = -1
		},

		isResizable(i) {
			// return (i !== this.columns.length - 1)
			// 	&& this.columns[i].width.indexOf('px') > 0
			return this.columns[i].width
		}
	},

	watch: {
		columnsWidth(val) {
			const value = val.map(_ => `${_}px`).join(' ')
			this.$parent.$el.style.setProperty('--columns-width', value)
		}
	}
}
</script>

<style lang="stylus">
.datagrid__header
	position: sticky
	top: 0
	min-width: 100%
</style>
