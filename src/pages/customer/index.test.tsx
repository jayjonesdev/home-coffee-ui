import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Customer } from '.';

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

describe('Customer Order', () => {
	it('should render', () => {
		render(<Customer />);

		expect(screen.findByText('Select a drink')).toBeTruthy();
	});
});
