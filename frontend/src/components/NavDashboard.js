import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import '../pages/dashboard.css'

function NavDashboard(){
    return (
        <Col xl={3} className="izq">
            <ul className="menulista">
                <li><Link to='/dashboard' className='aDashboard'>GESTIÓN PRODUCTOS</Link></li>
                <li><Link to='/dashboardproveedors' className='aDashboard'>GESTIÓN PROVEEDORES</Link></li>
            </ul>
        </Col>
    )
}

export default NavDashboard;