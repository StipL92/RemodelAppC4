import React, { useEffect, useState } from 'react';
import DashTitle from '../components/DashTitle';
import NavDashboard from '../components/NavDashboard';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as ProveedorsServer from '../pages/ProveedorsServer';
import { useNavigate, useParams } from 'react-router-dom';


export default function FormProveedor() {

    const navigate = useNavigate();

    const params = useParams();

    const initialState = {proveedor: '', ciudad: '', direccion: '', telefono: '', whatsapp: '', correo: ''};

    const [proveedor, setProveedor] = useState(initialState);

    const handleInputChange = (e) => {
        setProveedor({ ...proveedor, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if(!params.id){
                res = await ProveedorsServer.registerProveedor(proveedor);
                const data = await res.json();
                if (data.proveedor === proveedor.proveedor) {
                setProveedor(initialState);
            }
            }else(
                await ProveedorsServer.updateProveedor(params.id, proveedor)
            )
            navigate('/dashboardproveedors')
        } catch (error) {
            console.log(error);
        }
    }

    const getProveedor = async (proveedorId) => {
        try {
            const res = await ProveedorsServer.getProveedor(proveedorId);
            const data = await res.json();
            const {proveedor,ciudad,direccion,telefono,whatsapp,correo} = data;
            setProveedor({proveedor,ciudad,direccion,telefono,whatsapp,correo})
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(params.id){
            getProveedor(params.id);
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="dashboard">
            <Container fluid>
                <Row>
                    <NavDashboard />
                    <Col xl={9} className='der'>
                        <DashTitle />
                        <div className="container-fluid">
                            <div className="centrar">
                                <h2 className="mt-4 mb-2">REGISTRAR NUEVO PROVEEDOR</h2>
                                <Form onSubmit={handleSubmit} className="mb-4">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>NOMBRE</Form.Label>
                                        <Form.Control value={proveedor.proveedor} onChange={handleInputChange} name='proveedor' type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>CIUDAD</Form.Label>
                                        <Form.Control value={proveedor.ciudad} onChange={handleInputChange} name='ciudad' type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>DIRECCION</Form.Label>
                                        <Form.Control value={proveedor.direccion} onChange={handleInputChange} name='direccion' type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>TELÉFONO</Form.Label>
                                        <Form.Control value={proveedor.telefono} onChange={handleInputChange} name='telefono' type="tel" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>WHATSAPP</Form.Label>
                                        <Form.Control value={proveedor.whatsapp} onChange={handleInputChange} name='whatsapp' type="tel" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>CORREO ELECTRONICO</Form.Label>
                                        <Form.Control value={proveedor.correo} onChange={handleInputChange} name='correo' type="email" />
                                    </Form.Group>
                                    {
                                        params.id?(
                                            <button type="submit" className="pl-4 pr-4">ACTUALIZAR PROVEEDOR</button>
                                        ):(
                                            <button type="submit" className="pl-4 pr-4">REGISTRAR PROVEEDOR</button>
                                        )
                                    }
                                    
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
