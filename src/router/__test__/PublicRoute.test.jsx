import { render } from '@testing-library/react';
import { UserProvider } from '../../auth/context/UserProvider';
import { PublicRoute } from '../PublicRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Test <PublicRoute />', () => {

    const renderTemplate = () => {
        return render(
            <UserProvider>
                <MemoryRouter>
                    <PublicRoute />
                </MemoryRouter>
            </UserProvider>
        );
    }

    test('Check snapshot component', () => {
        const { container } = renderTemplate();
        expect(container).toMatchSnapshot();
    });
});