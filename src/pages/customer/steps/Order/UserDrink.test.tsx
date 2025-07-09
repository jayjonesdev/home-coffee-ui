// import { jest } from '@jest/globals';
import { render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TestProvider } from '../../../../testUtils/helper';
import { userOrder } from '../../../../utils/atom';
import { useAtom } from 'jotai';
import userEvent from '@testing-library/user-event';
import { UserDrink } from './UserDrink';

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

describe('User Drink', () => {
	beforeEach(() => {
		renderHook(() => useAtom(userOrder));
		renderComponent(
			[
				[
					userOrder,
					{
						name: 'John Doe',
						drink: 'Latte',
						options: { Milk: 'Oat' },
						cart: [
							{
								id: 'nufvalqztr8mcwjd5nf',
								name: 'Latte',
								options: 'Milk: Oat, Flavor: Vanilla, Temperature: Iced',
							},
						],
					},
				],
			],
			<UserDrink
				drink={{
					id: 'nufvalqztr8mcwjd5nf',
					name: 'Latte',
					options: 'Milk: Oat, Flavor: Vanilla, Temperature: Iced',
				}}
			/>,
		);
	});

	it('should render', async () => {
		const userDrink = screen.getByTestId('user-drink-nufvalqztr8mcwjd5nf');

		expect(userDrink).toBeInTheDocument();
		expect(userDrink.textContent).toContain('Latte');
		expect(userDrink.textContent).toContain(
			'Milk: Oat, Flavor: Vanilla, Temperature: Iced',
		);
	});

	it('should delete', async () => {
		const mockDeletefn = vi.fn();

		const userDrinkDeleteBtn = screen.getByTestId(
			'user-drink-nufvalqztr8mcwjd5nf-delete',
		);
		userDrinkDeleteBtn.onclick = mockDeletefn;

		expect(screen.getByTestId('user-drink-nufvalqztr8mcwjd5nf')).toBeTruthy();
		expect(userDrinkDeleteBtn).toBeInTheDocument();

		await userEvent.click(userDrinkDeleteBtn);
		expect(mockDeletefn).toHaveBeenCalledTimes(1);
	});
});
