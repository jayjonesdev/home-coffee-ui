import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { CustomerOrder } from '.';

describe('Customer Order', () => {
	it('should render', () => {
		render(<CustomerOrder />);

		expect(screen.findByText('Order Screen')).toBeTruthy();
	});
});
