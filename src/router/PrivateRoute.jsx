import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../auth/context/UserContext';

export const PrivateRoute = ({ children }) => {
    const { getUser } = useContext(UserContext);
    const { userName } = getUser();

    if (!userName || userName === "") return <Navigate to="/home" />

    return children;
}