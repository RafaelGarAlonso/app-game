import { render, waitFor } from '@testing-library/react';
import { AnimatedProgressBar } from '../ProgressBar';
import { act } from 'react';

describe('Test <ProgressBar />', () => {

    const onComplete = jest.fn();

    beforeEach(() => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setInterval');
        jest.spyOn(global, 'clearInterval');
    });

    test('Check snapshot component', () => {
        const { container } = render(<AnimatedProgressBar />);
        expect(container).toMatchSnapshot();
        ;
    });

    test('Check ProgressBar fills in time', async () => {
        const { container } = render(<AnimatedProgressBar />);
        const delay = 1000;

        act(() => {
            jest.advanceTimersByTime(delay - 500);
        });

        await waitFor(() => {
            const progressBar = container.querySelector(".progress-bar");
            expect(progressBar.getAttribute("style")).toBe("width: 58%;");
        });
    });

    test('Check ProgressBar when finished time', async () => {
        render(<AnimatedProgressBar onComplete={onComplete} />);
        const delay = 3000;

        act(() => {
            jest.advanceTimersByTime(delay);
        });

        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        });
    });

});