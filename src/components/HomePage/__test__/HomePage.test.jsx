import { render, fireEvent, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../../auth/context/UserProvider';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Test <HomePage />', () => {
    const renderTemplate = () => {
        return render(
            <UserProvider>
                <MemoryRouter>
                    <HomePage />
                </MemoryRouter>
            </UserProvider>
        );
    }

    test('Check snapshot component page', () => {
        const { container } = renderTemplate();
        expect(container).toMatchSnapshot();
    });

    test('It should click on button score table and navigate to /score-table', () => {
        const { container } = renderTemplate();
        const scoreTableButton = container.querySelector(".button-score-table");

        fireEvent.click(scoreTableButton);
        expect(mockedUsedNavigate).toBeCalled();
    });

    test('It should click on form when is a invalid name', () => {
        const { container } = renderTemplate();
        const formButton = container.querySelector(".form-button");

        fireEvent.click(formButton);
        const fieldInvalid = container.querySelector(".invalid-feedback");
        expect(fieldInvalid.innerHTML).toBe("Please enter a valid name");
    });

    test('It should click on form when is a valid name', () => {
        const { container } = renderTemplate();

        const input = screen.getByPlaceholderText("Name");
        const formButton = container.querySelector(".form-button");
        const value = "Manolo";

        fireEvent.change(input, { target: { value } });
        fireEvent.click(formButton);

        // TODO: Spy metho onFormSubmit to confirm callback code executed
    });
});