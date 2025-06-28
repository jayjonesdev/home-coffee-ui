import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MenuDrinkOption } from './MenuDrinkOption';

const mockedUseNavigate = vi.fn();

vi.mock('react-router', async () => {
	const mod = await vi.importActual<typeof import('react-router')>(
		'react-router',
	);
	return {
		...mod,
		useNavigate: () => mockedUseNavigate,
	};
});

const renderComponent = () => {
    
}

describe('Menu Drink Option', () => {
	it('should render', () => {
		render(<MenuDrinkOption optionKey='Oat' name='Milk'  />);

		expect(screen.findByText('Select a drink')).toBeTruthy();
	});
});
