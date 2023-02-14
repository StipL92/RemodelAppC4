import NavDashboard from "../components/NavDashboard"
import DashTitle from "../components/DashTitle"
import TableCategories from "../components/TableCategories"
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './dashboard.css'
import { Link } from "react-router-dom"

function DashProducts(){
    return (
        <div className="dashboard">
            <Container fluid>
                <Row>
                    <NavDashboard />
                    <Col xl={9} className='der'>
                        <DashTitle />
                        <div className="container-fluid">
                            <div className="centrar">
                                <h2 className="mt-4 mb-2">LISTAR PRODUCTOS POR CATEGORIA</h2>
                                <TableCategories />
                                <Link to='/dashboard/createproduct'><button className="pl-4 pr-4">CREAR PRODUCTO</button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashProducts;