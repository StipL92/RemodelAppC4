const API_URL = 'http://localhost:30000/products';

export const listProducts = async () => {
    return await fetch(API_URL);
}

export const getProduct = async (productId) => {
    return await fetch(`${API_URL}/${productId}`);
}

export const createProduct = async (newProduct) => {
    return await fetch('http://localhost:30000/products/create',{
        method:'POST',
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify({
            "Producto": String(newProduct.producto).trim(),
            "Slug": String(newProduct.slug).trim(),
            "Categoria": String(newProduct.categoria).trim(),
            "Proveedor": String(newProduct.proveedor).trim(),
            "Valor": parseInt(newProduct.valor),
            "Color": String(newProduct.color).trim(),
            "Tipo_Material": String(newProduct.material).trim(),
            "URL": String(newProduct.urlI).trim()
        })
    });
}

export const updateProduct = async (productId,updatedProduct) => {
    return await fetch(`${API_URL}/${productId}`,{
        method:'PATCH',
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify({
            "Producto": String(updatedProduct.producto).trim(),
            "Slug": String(updatedProduct.slug).trim(),
            "Categoria": String(updatedProduct.categoria).trim(),
            "Proveedor": String(updatedProduct.proveedor).trim(),
            "Valor": parseInt(updatedProduct.valor),
            "Color": String(updatedProduct.color).trim(),
            "Tipo_Material": String(updatedProduct.material).trim(),
            "URL": String(updatedProduct.urlI).trim()
        })
    });
}

export const deleteProduct = async (productId) => {
    return await fetch(`${API_URL}/${productId}`,{
        method:'DELETE' 
    });
}