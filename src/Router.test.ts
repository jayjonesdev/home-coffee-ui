import { describe } from 'vitest';
import { router } from './Router';

describe('Router', () => {
	test('has the appropriate amount of routes', () => {
		expect(router.routes.length).toEqual(3);
	});
});
