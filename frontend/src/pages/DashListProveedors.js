import React, { useEffect, useState } from 'react';
import DashTitle from '../components/DashTitle';
import NavDashboard from '../components/NavDashboard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import * as ProveedorsServer from '../pages/ProveedorsServer';


export default function DashListProveedors() {

    const navigate = useNavigate();

    const [proveedors, setProveedors] = useState([]);

    const listProveedors = async () => {
        try {
            const res = await ProveedorsServer.listProveedors();
            const data = await res.json();
            setProveedors(data);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        listProveedors();
    }, [])

    const handleDelete = async (proveedorId) => {
        await ProveedorsServer.deleteProveedor(proveedorId);
        listProveedors();
    }

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
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>NOMBRE</th>
                                            <th>CIUDAD</th>
                                            <th>DIRECCIÓN</th>
                                            <th>TELÉFONO</th>
                                            <th>WHATSAPP</th>
                                            <th>CORREO</th>
                                            <th>EDITAR</th>
                                            <th>ELIMINAR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {proveedors.map((proveedor) => (
                                            <tr>
                                                <td>{proveedor.proveedor}</td>
                                                <td>{proveedor.ciudad}</td>
                                                <td>{proveedor.direccion}</td>
                                                <td>{proveedor.telefono}</td>
                                                <td>{proveedor.whatsapp}</td>
                                                <td>{proveedor.correo}</td>
                                                <td><span className='edit' onClick={()=>navigate(`/dashboard/updateproveedor/${proveedor._id}`)}><FaEdit /></span></td>
                                                <td><span className='delete'onClick={()=> proveedor._id && handleDelete(proveedor._id)}><AiFillDelete /></span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Link to='/dashboard/createproveedor'><button className="pl-4 pr-4">REGISTRAR PROVEEDOR</button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
