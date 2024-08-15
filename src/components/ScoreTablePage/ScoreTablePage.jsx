
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { DataTable } from '../DataTable/DataTable';
import { useContext } from 'react';
import { UserContext } from '../../auth/context/UserContext';
import './ScoreTablePage.css'

const DATA_TABLE_HEADERS = ['#', 'Username', 'Points'];

export const ScoreTablePage = () => {
    const navigate = useNavigate();
    const { getListOfUsers } = useContext(UserContext);

    const onBack = () => {
        navigate('/home');
    };

    const loadRows = () => {
        return getListOfUsers() ? getListOfUsers().sort((a, b) => b.points - a.points) : [];
    }

    return (
        <>
            <h1 className="score-table-page-title">Hall of Fame</h1>
            <div className="table">
                <DataTable headers={DATA_TABLE_HEADERS} rows={loadRows()} />
            </div>
            <Button onClick={onBack} className="button-back" size="lg" variant="dark">Exit</Button>
        </>
    )
}
