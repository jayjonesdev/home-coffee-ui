import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from ".";
import { describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router';
import userEvent from '@testing-library/user-event'

const renderComponent = (children: React.ReactNode) => render(
    <BrowserRouter>{children}</BrowserRouter>
)
const mockedUseNavigate = vi.fn();

vi.mock("react-router", async () => {
    const mod = await vi.importActual<typeof import("react-router")>(
        "react-router"
    );
    return {
        ...mod,
        useNavigate: () => mockedUseNavigate,
    };
});

describe('Home Screen', () => {
    it('renders home screen', () => {
        renderComponent(<Home />);

        expect(screen.getByTestId('barista-button')).toBeInTheDocument();
        expect(screen.getByTestId('customer-button')).toBeInTheDocument();
        expect(screen.queryByTestId('password-field')).toBeInTheDocument();
    });

    it('shows password field and navigates to barista orders screen', async () => {
        renderComponent(<Home />);

        const baristaButton = screen.getByTestId('barista-button');

        expect(baristaButton).toBeInTheDocument();
        expect(screen.queryByTestId('password-field')).not.toBeInTheDocument();
        await userEvent.click(baristaButton);
        expect(screen.getByTestId('password-field')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('password-enter-button'));
        expect(mockedUseNavigate).toHaveBeenCalledWith('/orders');
    });

    it('navigates to customer order screen', async () => {
        renderComponent(<Home />);

        const customerButton = screen.getByTestId('customer-button');

        expect(customerButton).toBeInTheDocument();
        await userEvent.click(customerButton);
        expect(mockedUseNavigate).toHaveBeenCalledWith('/order');
    });
});
