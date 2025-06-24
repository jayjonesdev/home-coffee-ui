import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Customer } from '.';

describe('Customer Order', () => {
	it('should render', () => {
		render(<Customer />);

		expect(screen.findByText('Order Screen')).toBeTruthy();
	});
});
