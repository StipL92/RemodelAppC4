import '../pages/Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Login(){

    const [show, setShow] = useState(false);

    const initialState = {username: "", password: ""};

    const [user, setUser] = useState(initialState);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:30000/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": String(user.username).trim(),
                    "password": String(user.password).trim()
                })
            })
            const data = await res.json();
            if (data.username === "admin") {
                navigate('/dashboard')
            } else {
                console.log('Datos Incorrectos');
                setShow(true);
            }
        } catch (error) {
            console.log(error);
        };
    };

    if (show) {
        return (
            <div class="body-login">
                <Alert className='alertF' variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Datos Incorrectos.</Alert.Heading>
                </Alert>
                <form onSubmit={handleSubmit} className='container-login centrar'>
                    <h1>ADMIN</h1>
                    <div class="formgrupo centrar">
                        <label for="username">USUARIO</label>
                        <input onChange={handleInputChange} value={user.username} type="text" name="username" id="username" />
                    </div>
                    <div class="formgrupo centrar mb-4">
                        <label for="password">CONTRASEÑA</label>
                        <input onChange={handleInputChange} value={user.password} type="password" name="password" id="password" />
                    </div>
                    <div class="boton centrar mb-4">
                        <button type="submit" id="logear" class="mt-2">INGRESAR</button>
                    </div>
                </form>
                <h2 class="mt-5 mb-5">REMODEL<span class="bold">APP</span></h2>
            </div>
        );
    }

    return (
        <div class="body-login">
            <form onSubmit={handleSubmit} className='container-login centrar'>
                <h1>ADMIN</h1>
                <div class="formgrupo centrar">
                    <label for="username">USUARIO</label>
                    <input onChange={handleInputChange} value={user.username} type="text" name="username" id="username" />
                </div>
                <div class="formgrupo centrar mb-4">
                    <label for="password">CONTRASEÑA</label>
                    <input onChange={handleInputChange} value={user.password} type="password" name="password" id="password" />
                </div>
                <div class="boton centrar mb-4">
                <button type="submit" id="logear" class="mt-2">INGRESAR</button>
                </div>
            </form>
            <h2 class="mt-5 mb-5">REMODEL<span class="bold">APP</span></h2>
        </div>
    )
}