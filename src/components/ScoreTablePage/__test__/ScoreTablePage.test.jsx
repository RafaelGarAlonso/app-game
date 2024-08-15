import { render, fireEvent } from '@testing-library/react';
import { ScoreTablePage } from '../ScoreTablePage';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../../auth/context/UserProvider';
import { INIT_USERS_TABLE } from '../../../constants/users'

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Test <ScoreTablePage />', () => {

    const renderTemplate = (INIT_USERS_TABLE) => {
        return render(
            <UserProvider getListOfUsers={INIT_USERS_TABLE}>
                <MemoryRouter>
                    <ScoreTablePage />
                </MemoryRouter>
            </UserProvider>
        );
    }

    test('Check snapshot component', () => {
        const { container } = renderTemplate(INIT_USERS_TABLE);
        expect(container).toMatchSnapshot();
    });


    test('It should click on button back and navigate to /home', () => {
        const { container } = renderTemplate();
        const backButton = container.querySelector(".button-back");

        fireEvent.click(backButton);
        expect(mockedUsedNavigate).toBeCalled();
    });

});