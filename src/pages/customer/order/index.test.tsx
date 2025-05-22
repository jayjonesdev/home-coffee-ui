import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Order } from '.';

describe('Customer Order', () => {
	it('should render', () => {
		render(<Order />);

		expect(screen.findByText('Order Screen')).toBeTruthy();
	});
});
