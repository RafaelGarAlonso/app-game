import { AnimatedProgressBar } from '../ProgressBar/ProgressBar';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../auth/context/UserContext';
import "./LoadingPage.css"

export const LoadingPage = () => {
    const navigate = useNavigate();
    const { setAppLoaded } = useContext(UserContext);

    useEffect(() => {
        setAppLoaded(false);
    }, [setAppLoaded]);

    const redirectToHome = () => {
        setAppLoaded(true);
        setTimeout(() => {
            navigate('/home', { replace: true });
        }, 1000);
    }

    return (
        <div className="container-loading">
            <div className="row p-4">
                <h1 className="title">Welcome to <br />¡Rock Paper Scissors Shoot!</h1>
                <Image className="loading-image" src="assets/loading-background.png" roundedCircle />
                <AnimatedProgressBar onComplete={redirectToHome} timeToComplete={25} />
            </div>
        </div>
    )
}