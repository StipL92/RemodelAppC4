import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'
import * as ProveedorsServer from '../pages/ProveedorsServer';

const pesoCop = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

function ProductCard(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const producto = props;

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

    return (
        <div className="productos mt-4 mb-4 homeF">
            <img src={producto.producto.URL} alt="Imagen del producto" />
            <h6 className="proveedor mt-1">
                {proveedors.filter(proveedor => proveedor._id === producto.producto.Proveedor).map(filtrado => (
                    filtrado.proveedor
                )
                )}
            </h6>
            <h4 className="tituloproducto">{producto.producto.Producto}</h4>
            <h4 className="descripcionproducto">{pesoCop.format(producto.producto.Valor)}</h4>
            <h4 className="descripcionproducto">Color: {producto.producto.Color}</h4>
            <h4 className="descripcionproducto">Material: {producto.producto.Tipo_Material}</h4>
            <button type="button" onClick={handleShow} className="contactoproveedor">CONTACTAR PROVEEDOR</button>

            <Modal className="homeF" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><strong>
                        {proveedors.filter(proveedor => proveedor._id === producto.producto.Proveedor).map(filtrado => (
                            filtrado.proveedor.toUpperCase()
                        )
                        )}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>DIRECCIÓN: </strong>
                        {proveedors.filter(proveedor => proveedor._id === producto.producto.Proveedor).map(filtrado => (
                            filtrado.direccion.toUpperCase()
                        )
                        )}
                    </p>
                    <p><strong>CIUDAD: </strong>
                        {proveedors.filter(proveedor => proveedor._id === producto.producto.Proveedor).map(filtrado => (
                            filtrado.ciudad.toUpperCase()
                        )
                        )}
                    </p>
                    <p><strong>CORREO: </strong>
                        {proveedors.filter(proveedor => proveedor._id === producto.producto.Proveedor).map(filtrado => (
                            filtrado.correo
                        )
                        )}
                    </p>
                    <p><strong>TELÉFONO: </strong>
                        {proveedors.filter(proveedor => proveedor._id === producto.producto.Proveedor).map(filtrado => (
                            filtrado.telefono.toUpperCase()
                        )
                        )}
                    </p>
                    <p><strong>WHATSAPP: </strong>
                        {proveedors.filter(proveedor => proveedor._id === producto.producto.Proveedor).map(filtrado => (
                            filtrado.whatsapp.toUpperCase()
                        )
                        )}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary">
                        <AiOutlineMail />
                    </Button>
                    <Button variant="success">
                        <FaWhatsapp />
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductCard;