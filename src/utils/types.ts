export type Drink = {
	id: string;
	name: string;
	options: string;
};

export type UserOrder = {
	name: string;
	drink: string;
	options: { [key: string]: string };
	cart: Drink[];
};
