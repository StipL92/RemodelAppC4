import NavDashboard from "../components/NavDashboard"
import DashTitle from "../components/DashTitle"
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from "react-bootstrap/esm/Table"
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import './dashboard.css'
import { Link, useParams, useNavigate } from "react-router-dom"
import React, {useEffect, useState} from 'react';
import * as ProductsServer from '../pages/ProductsServer'
import * as ProveedorsServer from '../pages/ProveedorsServer';

export default function DashListProducts() {
    const {id} = useParams();

    const navigate = useNavigate();

    let nomCategoria = ''

    switch (id) {
        case 'Baño':
            nomCategoria = 'BAÑOS';
            break;
        case 'Carpintería':
            nomCategoria = 'CARPINTERIA';
            break;
        case 'Cocina':
            nomCategoria = 'COCINA';
            break;
        case 'Pintura':
            nomCategoria = 'PINTURA';
            break;
        case 'Piso':
            nomCategoria = 'PISOS';
            break;
        default:
            nomCategoria = 'CATEGORIA NO DEFINIDA';
    }

    const [products, setProducts] = useState([]);

    const listProducts = async () => {
        try {
            const res = await ProductsServer.listProducts();
            const data = await res.json();
            setProducts(data);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        listProducts();
    }, [])

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

    const handleDelete = async (productId) => {
        await ProductsServer.deleteProduct(productId);
        listProducts();
    }

    let categoriaActiva = products.filter(producto => producto.Categoria === id);

    return (
        <div className="dashboard">
            <Container fluid>
                <Row>
                    <NavDashboard />
                    <Col xl={9} className='der'>
                        <DashTitle />
                        <div className="container-fluid">
                            <div className="centrar">
                                <h2 className="mt-4 mb-2">LISTAR PRODUCTOS POR CATEGORIA - {nomCategoria} </h2>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>NOMBRE</th>
                                            <th>PROVEEDOR</th>
                                            <th>PRECIO</th>
                                            <th>COLOR</th>
                                            <th>MATERIAL</th>
                                            <th>EDITAR</th>
                                            <th>ELIMINAR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categoriaActiva.map((producto) => (
                                            <tr>
                                                <td>{producto.Producto}</td>
                                                <td> {proveedors.filter(proveedor => proveedor._id === producto.Proveedor).map(filtrado => (
                                                    filtrado.proveedor
                                                )
                                                )} </td>
                                                <td>{producto.Valor}</td>
                                                <td>{producto.Color}</td>
                                                <td>{producto.Tipo_Material}</td>
                                                <td><span className="edit" onClick={()=>navigate(`/dashboard/updateproduct/${producto._id}`)}><FaEdit /></span></td>
                                                <td><span className="delete" onClick={()=> producto._id && handleDelete(producto._id)}><AiFillDelete /></span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Link to='/dashboard/createproduct'><button className="pl-4 pr-4">CREAR PRODUCTO</button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
