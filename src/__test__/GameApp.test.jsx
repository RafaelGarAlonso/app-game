import { render } from '@testing-library/react';
import { GameApp } from '../GameApp';

describe('Test <GameApp />', () => {

    const renderTemplate = () => {
        return render(
            <GameApp />
        );
    }

    test('Check snapshot component', () => {
        const { container } = renderTemplate();
        expect(container).toMatchSnapshot();
    });
});