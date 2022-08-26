import '../styles/ContactoPage.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
    
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    
    return (
        <main className="form">

            <div className="form">
                <h2>Complete el siguiente formulario</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label>Nombre:</label><br/>
                        <input className="formul" type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email:</label><br/>
                        <input className="formul" type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Teléfono:</label><br/>
                        <input className="formul" type="text" name="telefono" value={formData.telefono} onChange={handleChange}  />
                    </p>
                    <p>
                        <label>Comentario:</label><br/>
                        <textarea className="formul" name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>                    
                    </p>
                    <input className="submit-btn" type="submit" value="Enviar" />
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}


            </div>

            </main>


    )
}

export default ContactoPage;
