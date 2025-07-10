import { render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MenuDrinkOption } from './MenuDrinkOption';
import { TestProvider } from '../../../../testUtils/helper';
import { userOrder } from '../../../../utils/atom';
import { useAtom } from 'jotai';
import userEvent from '@testing-library/user-event';

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

const renderComponent = (initialValues: any, children: React.ReactNode) =>
	render(<TestProvider children={children} initialValues={initialValues} />);

describe('Menu Drink Option', () => {
	beforeEach(() => {
		renderHook(() => useAtom(userOrder));
		renderComponent(
			[
				[
					userOrder,
					{
						name: 'John Doe',
						drink: 'Latte',
						options: { Milk: '' },
						cart: [],
					},
				],
			],
			<MenuDrinkOption optionKey='Milk' name='Oat' />,
		);
	});
	it('should render', async () => {
		const menuOption = screen.getByTestId('Oat-menu-drink-option');

		expect(screen.findByText('Select a drink')).toBeTruthy();
		expect(menuOption).toBeInTheDocument();
		expect(menuOption).toHaveTextContent('Oat');
	});

	it('should select option', async () => {
		const menuOption = screen.getByTestId('Oat-menu-drink-option');

		expect(menuOption.className).toContain('MuiButton-outlined');
		await userEvent.click(menuOption);
		expect(menuOption.className).toContain('MuiButton-contained');
	});
});
