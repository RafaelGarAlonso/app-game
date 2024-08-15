import { render, fireEvent, waitFor } from '@testing-library/react';
import { GamePage } from '../GamePage';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../../auth/context/UserProvider';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Test <GamePage />', () => {

    beforeEach(() => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setInterval');
        jest.spyOn(global, 'clearInterval');
    });

    const renderTemplate = () => {
        return render(
            <UserProvider>
                <MemoryRouter>
                    <GamePage />
                </MemoryRouter>
            </UserProvider>
        );
    }

    test('Check snapshot component page', () => {
        const { container } = renderTemplate();
        expect(container).toMatchSnapshot();
    });

    test('It should click on button back and navigate to /home', () => {
        const { container } = renderTemplate();
        const backButton = container.querySelector(".button-back");

        fireEvent.click(backButton);
        expect(mockedUsedNavigate).toBeCalled();
    });

    test('It should click on rock button option and load bot progress-bar', async () => {
        const { container } = renderTemplate();
        const rockButton = container.querySelector(".button-rock");

        fireEvent.click(rockButton);

        await waitFor(() => {
            const progressBar = container.querySelector(".progress-bot");
            expect(progressBar.innerHTML).not.toBe("");
        });
    });

    test('It should click on scissors button option and load bot progress-bar', async () => {
        const { container } = renderTemplate();
        const rockButton = container.querySelector(".button-scissors");

        fireEvent.click(rockButton);

        await waitFor(() => {
            const progressBar = container.querySelector(".progress-bot");
            expect(progressBar.innerHTML).not.toBe("");
        });
    });

    test('It should click on paper button option and load bot progress-bar', async () => {
        const { container } = renderTemplate();
        const rockButton = container.querySelector(".button-paper");

        fireEvent.click(rockButton);

        await waitFor(() => {
            const progressBar = container.querySelector(".progress-bot");
            expect(progressBar.innerHTML).not.toBe("");
        });
    });

    // TODO: Render result case when callback complete is executed
    // test('It should click on rock button option and show result of game', async () => {
    //     const { container } = renderTemplate();
    //     const rockButton = container.querySelector(".button-rock");
    //     const delay = 1500;
        
    //     fireEvent.click(rockButton);
        
    //     act(() => {
    //         jest.advanceTimersByTime(delay - 500);
    //     });
        
    //     await waitFor(() => {
    //         const progressBot = container.querySelector(".progress-bot");
    //         console.log(progressBot.props)
    //         screen.debug()
    //     });
    // });
});