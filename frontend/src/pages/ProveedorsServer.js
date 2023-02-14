const API_URL = 'http://localhost:30000/proveedors';

export const listProveedors = async () => {
    return await fetch(API_URL);
}

export const getProveedor = async (proveedorId) => {
    return await fetch(`${API_URL}/${proveedorId}`);
}

export const registerProveedor = async (newProveedor) => {
    return await fetch('http://localhost:30000/proveedors/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "proveedor": String(newProveedor.proveedor).trim(),
            "ciudad": String(newProveedor.ciudad).trim(),
            "direccion": String(newProveedor.direccion).trim(),
            "telefono": String(newProveedor.telefono).trim(),
            "whatsapp": String(newProveedor.whatsapp).trim(),
            "correo": String(newProveedor.correo).trim()
        })
    });
}

export const updateProveedor = async (proveedorId, updatepProveedor) => {
    return await fetch(`${API_URL}/${proveedorId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "proveedor": String(updatepProveedor.proveedor).trim(),
            "ciudad": String(updatepProveedor.ciudad).trim(),
            "direccion": String(updatepProveedor.direccion).trim(),
            "telefono": String(updatepProveedor.telefono).trim(),
            "whatsapp": String(updatepProveedor.whatsapp).trim(),
            "correo": String(updatepProveedor.correo).trim()
        })
    });
} 

export const deleteProveedor = async (proveedorId) => {
    return await fetch(`${API_URL}/${proveedorId}`,{
        method:'DELETE' 
    });
}