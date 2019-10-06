# Vue Table

Vue table is a datatable designed to handle thousands of rows of data without sacrificing performance.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

Features of Table component:
 * fixed header;
 * handling huge amounts of data;
 * selecting of rows;
 * column resizing.

Required browser features:
 * custom css properties;
 * css grid. 

Usage:
```html
<template>
    <Table
    :rows="rows"
    :columns="columns"
    />
</template>

<script>
import Table from '@/components/Table/Table.vue'

export default {
  components: {
    Table
  },

  data: () => ({
    rows: [
        {
            _id: 1,
            amount: 5,
            price: "617.00",
            sum: 3085,
            title: "Intelligent Cotton Pants"
        }
    ],
    columns: columns: [
		{
			title: 'ID',
			field: '_id',
			width: 50,
			align: 'right'
		},
		{
			title: 'Наименование',
			field: 'title',
			width: 250,
			align: 'left'
		},
		{
			title: 'Цена',
			field: 'price',
			width: 100,
			align: 'right'
		},
		{
			title: 'Количество',
			field: 'amount',
			width: 100,
			align: 'right'
		},
		{
			title: 'Сумма',
			field: 'sum',
			width: 100,
			align: 'right'
		}
	]
  })
}
</script>
```
