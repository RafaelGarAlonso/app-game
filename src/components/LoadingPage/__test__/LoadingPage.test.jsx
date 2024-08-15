import { render, act } from '@testing-library/react';
import { LoadingPage } from '../LoadingPage';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../../auth/context/UserProvider';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Test <LoadingPage />', () => {

    beforeEach(() => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setInterval');
        jest.spyOn(global, 'clearInterval');
    });

    const renderTemplate = () => {
        return render(
            <UserProvider>
                <MemoryRouter>
                    <LoadingPage />
                </MemoryRouter>
            </UserProvider>
        );
    }

    test('Check snapshot component', () => {
        const { container } = renderTemplate();
        expect(container).toMatchSnapshot();
    });

    // TODO: Fix Callback complete
    test('It should redirect to /home when progress bar finished', async () => {
        const delay = 2500;

        act(() => {
            jest.advanceTimersByTime(delay);
        });
    });

});