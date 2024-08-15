import { render } from '@testing-library/react';
import { UserProvider } from '../../auth/context/UserProvider';
import { AppRouter } from '../AppRouter';

describe('Test <AppRouter />', () => {

    const renderTemplate = () => {
        return render(
            <UserProvider>
                <AppRouter />
            </UserProvider>
        );
    }

    test('It should load loading page', () => {
        const { container } = renderTemplate();

        const title = container.querySelector(".title").innerHTML;
        expect(title).toBe("Welcome to <br>¡Rock Paper Scissors Shoot!");
    });
});