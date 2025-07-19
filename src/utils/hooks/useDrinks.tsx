type Drink = {
	name: string;
	options: { [key: string]: string[] };
};

export const useDrinks = (): Drink[] => {
	return [
		{
			name: 'Latte',
			options: {
				Milk: ['Oat', 'Whole', 'Almond'],
				Flavor: [
					'None',
					'Vanilla',
					'Cardomom',
					'Pistachio',
					'Caramel',
					'Hazelnut',
					'Cane Sugar',
				],
				Temperature: ['Hot', 'Iced'],
			},
		},
		{
			name: 'Espresso',
			options: {
				Size: ['Single', 'Double'],
			},
		},
		{
			name: 'Pour Over',
			options: {
				Type: ['Ethopia', 'Kenya', 'China'],
			},
		},
		{
			name: 'Thai Tea',
			options: {
				Temperature: ['Hot', 'Iced'],
			},
		},
		{
			name: 'Tea',
			options: {
				Type: ['Green Tea', 'Black Tea'],
				Temperature: ['Hot', 'Iced'],
			},
		},
	];
};

export default useDrinks;
