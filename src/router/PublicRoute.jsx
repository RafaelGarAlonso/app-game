import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../auth/context/UserContext';

export const PublicRoute = ({ children }) => {
    const { getAppLoaded } = useContext(UserContext);

    if (!getAppLoaded()) return <Navigate to="/loading" />

    return children;
}