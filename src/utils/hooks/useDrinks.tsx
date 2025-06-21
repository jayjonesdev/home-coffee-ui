type Drink = {
	name: string;
	options: { [key: string]: string[] };
};

export const useDrinks = (): Drink[] => {
	return [
		{
			name: 'Latte',
			options: {
				Milk: ['Oat', 'Whole'],
				Flavor: ['None', 'Vanilla', 'Cardomom', 'Pistachio'],
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
				Type: ['Ethopia', 'Kenya'],
			},
		},
	];
};

export default useDrinks;
