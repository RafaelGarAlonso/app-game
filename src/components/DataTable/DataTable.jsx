import { Row, Col, Table } from 'react-bootstrap';
import './DataTable.css';

export const DataTable = (props) => {
    return(
        <Row>
            <Col>
                <Table className="table" size="sm" striped bordered>     
                    <thead>
                        <tr>
                        {
                            props.headers.map( (head, index) => {
                                return <th key = { index } >{head}</th>
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.rows.length ? props.rows.map( (row, index) => {
                                return <tr id={row.uid} key = { index }>
                                    <td>{ index + 1 }</td>
                                    <td>{ row.userName }</td>
                                    <td>{ row.points }</td>
                                </tr>
                            })
                            : 
                            <tr>
                                <td>EMPTY LIST</td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}