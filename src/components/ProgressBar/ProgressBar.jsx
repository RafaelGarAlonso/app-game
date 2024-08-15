import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

export const AnimatedProgressBar = ({ onComplete, timeToComplete = 25, variant }) => {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const counter = setInterval(() => {
            setLoadingProgress((c) => {
                const newValue = c + 1;
                if (newValue <= 100) return newValue;
                if (newValue > 100) {
                    clearInterval(counter);
                    onComplete();
                }
            });
        }, timeToComplete);
        return () => {
            clearInterval(counter);
            setLoadingProgress(0);
        }
    }, [onComplete, timeToComplete]);

    return (
        <>
            <ProgressBar variant={variant} animated now={loadingProgress} />
        </>
    )
}