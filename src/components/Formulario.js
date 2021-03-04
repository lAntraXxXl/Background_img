import React, {useState} from 'react';
import Error from './Error';
import './menu.css';

const Formulario = ({guardarBusqueda, guardarCantidadimagenes, guardarPrincipal}) => {

    const [palabra , guardarPalabra] = useState('');
    const [existText, guardarText] = useState(true);

    const validarBusqueda = (e) => {
        e.preventDefault();
        if(palabra.trim() === ''){
            guardarText(false);
            return;
        }
        guardarText(true);
        guardarBusqueda(palabra);
        //le pasamos el numero de imagenes a mostrar
        guardarCantidadimagenes(40);
        guardarPrincipal(false);
        document.getElementsByName('buscar_txt').value = '';
    };

    return ( 
        <form
            onSubmit={validarBusqueda}
            className={existText ? null : 'errorText'}
        >
            <input 
                type="text"
                name="buscar_txt"
                autoComplete="off"
                placeholder="Busca fotos, videos y mas..."
                onChange={e => {
                    guardarPalabra(e.target.value); 
                    guardarText(true);
                }}
            />
            {existText ? null : <Error mensaje="*Por favor, llena el campo."/>}
            <button>
                <svg className="svg-icon" viewBox="0 0 515.558 515.558" width="512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                </svg>
            </button>
        </form>
    );
}
 
export default Formulario;