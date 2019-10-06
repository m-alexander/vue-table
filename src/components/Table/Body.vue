<template lang="pug">
.datagrid__body(
	@scroll.passive="onScroll"
)
	div(:style="containerStyles")
		TableRow(
			v-for="row in visibleRows" :key="row._id"
			@click="selectRow($event, row)"
			@dblclick="onOpen(row)"
			:selected="isSelected(row)"
		)
			TableCell(
				v-for="(column, index) in columns"
				:key="column.field"
				:index="index"
			) {{ row[column.field] }}
</template>

<script>
import TableRow from './TableRow.vue'
import TableCell from './TableCell.vue'

export default {
	components: {
		TableRow,
		TableCell
	},

	props: {
		rows: Array,
		columns: Array
	},

	data: () => ({
		selectedRows: [],
		visibleRows: [],
		firstVisible: 0
	}),

	mounted() {
		this.updateVidibleRows()
	},

	methods: {
		onOpen(row) {
			console.log(row)
		},

		selectRow(ev, row) {
			if (ev.ctrlKey) {
				this.selectedRows.push(row)
			} else {
				this.selectedRows = [row]
			}
		},

		isSelected(row) {
			return this.selectedRows.indexOf(row) !== -1
		},

		onScroll() {
			this.$emit('scroll')
			this.updateVidibleRows()
		},

		onKeyDown(ev) {
			const rowHeight = parseFloat(getComputedStyle(this.$el)
				.getPropertyValue('--row-height'))
			const bodyHeight = this.$el.getBoundingClientRect().height
			const step = ~~(bodyHeight / rowHeight)

			switch(ev.key) {
				case 'ArrowUp':
					this.selectNearRow(false)
					break;

				case 'ArrowDown':
					this.selectNearRow(true)
					break;

				case 'PageUp':
					this.selectNearRow(false, step)
					break;

				case 'PageDown':
					this.selectNearRow(true, step)
					break;

				case 'Home':
					this.selectNearRow(false, this.rows.length)
					break;

				case 'End':
					this.selectNearRow(true, this.rows.length)
					break;
			}
		},

		selectNearRow(down = true, step = 1) {
			const offset = down ? step : -step
			const last = down ? this.rows.length - 1 : 0

			const selectedRow = this.selectedRows[this.selectedRows.length - 1]
			const index = this.rows.indexOf(selectedRow)
			const newIndex = this.rows[index + offset] ? index + offset : last
			this.selectedRows = [this.rows[newIndex]]

			this.showRow(newIndex, down)
		},

		showRow(index, down = true) {
			const rowHeight = parseFloat(getComputedStyle(this.$el)
				.getPropertyValue('--row-height'))

			const itemOffset = index * rowHeight

			const bodyHeight = this.$el.getBoundingClientRect().height

			const bodyStart = this.$el.scrollTop
			const bodyEnd = bodyStart + bodyHeight

			const visible = itemOffset >= bodyStart && (itemOffset + rowHeight) <= bodyEnd
			if (!visible) {
				this.$nextTick(() => {
					this.$el.scrollTop = down ? (itemOffset - bodyHeight + rowHeight) : itemOffset
				})
			}
		},

		updateVidibleRows() {
			const rowHeight = parseFloat(getComputedStyle(this.$el)
				.getPropertyValue('--row-height'))
			const itemsToShow = this.$el ? ~~(this.$el.getBoundingClientRect().height / rowHeight) : 20
			const firstVisible = Math.max(0, ~~(this.$el.scrollTop / rowHeight) - itemsToShow / 2)
			const lastVisible = Math.min(firstVisible + itemsToShow * 2, this.rows.length)

			this.visibleRows = this.rows.slice(firstVisible, lastVisible)

			this.firstVisible = firstVisible
		}
	},

	computed: {
		containerStyles() {
			return {
				height: `calc(var(--row-height) * ${ (this.rows || []).length })`,
				paddingTop: `calc(var(--row-height) * ${ this.firstVisible })`
			}
		}
	}
}
</script>

<style lang="stylus">
.datagrid
	&__body
		overflow auto
</style>
