import { render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TestProvider } from '../../../../testUtils/helper';
import { userOrder } from '../../../../utils/atom';
import { useAtom } from 'jotai';
import userEvent from '@testing-library/user-event';
import { MenuDrink } from './MenuDrink';

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

describe('Menu Drink', () => {
	beforeEach(() => {
		renderHook(() => useAtom(userOrder));
		renderComponent(
			[
				[
					userOrder,
					{
						name: 'John Doe',
						drink: 'Espresso',
						options: { Milk: '' },
						cart: [],
					},
				],
			],
			<MenuDrink
				name={'Latte'}
				options={{
					Milk: ['Oat', 'Whole', 'Almond'],
				}}
			/>,
		);
	});
	it('should render', async () => {
		const menuDrink = screen.getByTestId('menu-drink-Latte');

		expect(menuDrink).toBeInTheDocument();
		expect(menuDrink).toHaveTextContent('Latte');
	});

	it('should select drink and show options', async () => {
		const menuDrink = screen.getByTestId('menu-drink-Latte');

		expect(menuDrink).toBeInTheDocument();
		expect(
			screen.queryByTestId('drink-option-label-Milk'),
		).not.toBeInTheDocument();

		await userEvent.click(menuDrink);
		expect(screen.getByTestId('drink-option-label-Milk')).toBeInTheDocument();
	});
});
