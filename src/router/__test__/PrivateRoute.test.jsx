import { render } from '@testing-library/react';
import { UserProvider } from '../../auth/context/UserProvider';
import { PrivateRoute } from '../PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Test <PrivateRoute />', () => {

    const renderTemplate = () => {
        return render(
            <UserProvider>
                <MemoryRouter>
                    <PrivateRoute />
                </MemoryRouter>
            </UserProvider>
        );
    }

    test('Check snapshot component', () => {
        const { container } = renderTemplate();
        expect(container).toMatchSnapshot();
    });
});