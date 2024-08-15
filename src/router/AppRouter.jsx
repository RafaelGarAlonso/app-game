import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { HomePage } from '../components/HomePage/HomePage';
import { GamePage } from '../components/GamePage/GamePage';
import { LoadingPage } from '../components/LoadingPage/LoadingPage';
import { ScoreTablePage } from '../components/ScoreTablePage/ScoreTablePage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={
                    <PublicRoute><Navigate to="/home" replace={true} /><HomePage /></PublicRoute>} />
                <Route path="/game" element={<PrivateRoute><GamePage /></PrivateRoute>} />
                <Route path="/loading" element={<LoadingPage />} />
                <Route path="/score-table" element={<ScoreTablePage />} />
            </Routes>
        </BrowserRouter>
    )
}