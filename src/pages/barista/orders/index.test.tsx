import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Orders } from '.';

describe('Barista Orders', () => {
	it('should render', () => {
		render(<Orders />);

		expect(screen.findByText('Orders Screen')).toBeTruthy();
	});
});
