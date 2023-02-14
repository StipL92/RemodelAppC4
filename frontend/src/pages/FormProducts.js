import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavDashboard from "../components/NavDashboard"
import DashTitle from "../components/DashTitle"
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './dashboard.css'
import * as ProductsServer from '../pages/ProductsServer';
import * as ProveedorsServer from '../pages/ProveedorsServer';


export default function FormProducts() {

    const navigate = useNavigate();

    const params = useParams();

    const [proveedors, setProveedors] = useState([]);

    const listProveedors = async () => {
        try {
            const res = await ProveedorsServer.listProveedors();
            const data = await res.json();
            setProveedors(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listProveedors();
    }, [])

    const initialState = {producto: '', slug: '', categoria: '', proveedor: '', valor:'', color:'', material:'', urlI: ''}

    const [product, setProduct] = useState(initialState);

    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await ProductsServer.createProduct(product);
                const data = await res.json();
                if (data.Producto === product.producto) {
                    setProduct(initialState);
                }
            } else {
                await ProductsServer.updateProduct(params.id, product);
            }
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    const getProduct = async (productId) => {
        try {
            const res = await ProductsServer.getProduct(productId);
            const data = await res.json();
            const {Producto,Slug,Categoria,Proveedor,Color,Valor,Tipo_Material,URL} = data;
            setProduct({producto: Producto,slug: Slug,categoria: Categoria,proveedor: Proveedor,color: Color,valor: Valor,material: Tipo_Material,urlI: URL})
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(params.id){
            getProduct(params.id);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="dashboard">
            <Container fluid>
                <Row>
                    <NavDashboard />
                    <Col xl={9} className='der'>
                        <DashTitle />
                        <div className="container-fluid">
                            <div className="centrar">
                                <h2 className="mt-4 mb-2">CREAR NUEVO PRODUCTO</h2>
                                <Form onSubmit={handleSubmit} className="mb-4">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>NOMBRE</Form.Label>
                                        <Form.Control value={product.producto} onChange={handleInputChange} name='producto' type="text"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>SLUG</Form.Label>
                                        <Form.Control value={product.slug} onChange={handleInputChange} name='slug' type="text"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>CATEGORIA</Form.Label>
                                        <Form.Select value={product.categoria} onChange={handleInputChange} name='categoria' aria-label="Default select example">
                                            <option>SELECCIONA UNA CATEGORIA</option>
                                            <option value="Baño">BAÑOS</option>
                                            <option value="Carpintería">CARPINTERIA</option>
                                            <option value="Cocina">COCINA</option>
                                            <option value="Pintura">PINTURA</option>
                                            <option value="Piso">PISOS</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>PROVEEDOR</Form.Label>
                                        <Form.Select value={product.proveedor} onChange={handleInputChange} name='proveedor' aria-label="Default select example">
                                            <option>SELECCIONE EL PROVEEDOR</option>
                                            {proveedors.map((proveedor) => (
                                                <option value={proveedor._id}>{proveedor.proveedor}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>VALOR</Form.Label>
                                        <Form.Control value={product.valor} onChange={handleInputChange} name='valor' type="number"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>COLOR</Form.Label>
                                        <Form.Control value={product.color} onChange={handleInputChange} name='color' type="text"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>TIPO DE MATERIAL</Form.Label>
                                        <Form.Control value={product.material} onChange={handleInputChange} name='material' type="text"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>URL IMAGEN</Form.Label>
                                        <Form.Control value={product.urlI} onChange={handleInputChange} name='urlI' type="url"/>
                                    </Form.Group>
                                    {
                                        params.id?(
                                            <button type="submit" className="pl-4 pr-4">ACTUALIZAR PRODUCTO</button> 
                                        ):(
                                            <button type="submit" className="pl-4 pr-4">CREAR PRODUCTO</button> 
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
