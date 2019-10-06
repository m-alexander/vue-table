import faker from 'faker';

export default {

	tabs: Array(10)
		.fill(true)
		.map(() => {
			return {
				title: faker.commerce.productName(),
				text: faker.lorem.text()
			}
		}),

	rows: Array(10000)
		.fill(true)
		.map((_, i) => {
			const price = faker.commerce.price()
			const amount = faker.random.number(5) + 1
			return {
				_id: i + 1,
				title: faker.commerce.productName(),
				price,
				amount,
				sum: price * amount
			}
		}),

	columns: [
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
}
