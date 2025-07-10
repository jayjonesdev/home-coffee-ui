import { describe, it } from 'vitest';
import {
	drinkOptionsToString,
	flattenDrinkOptions,
	generateID,
} from './helper';

describe('helper.ts', () => {
	it('drinkOptionsToString', () => {
		const drinkOptions = {
			Milk: 'Oat',
			Flavor: 'Vanilla',
		};
		const drinkOptionsString = drinkOptionsToString(drinkOptions);

		expect(drinkOptionsString).toEqual('Milk: Oat, Flavor: Vanilla');
	});

	it('flattenDrinkOptions', () => {
		const drinkOptions = {
			Milk: ['Oat', 'Whole'],
			Flavor: ['None', 'Vanilla', 'Cardomom', 'Pistachio'],
			Temperature: ['Hot', 'Iced'],
		};
		const flattenedDrinkOptions = flattenDrinkOptions(drinkOptions);

		expect(flattenedDrinkOptions).toEqual({
			Milk: '',
			Flavor: '',
			Temperature: '',
		});
	});

	it('generateID', () => {
		const randomId = generateID();

		expect(typeof randomId).toBe('string');
	});
});
