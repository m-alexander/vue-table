# Vue Table

Vue table is a datatable designed to handle thousands of rows of data without sacrificing performance.

[DEMO](https://m-alexander.github.io/vue-table/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
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
