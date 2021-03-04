import React, {useState} from 'react';
import Formulario from './Formulario';
import './menu.css';

const Menu = ({guardarBusqueda,guardarCantidadimagenes,guardarPrincipal}) => {    
    const [shownav, guardarShownav] = useState(false);
    
    return (
        <div className="Cont_nav">
            <div><h1>Background</h1></div>
            <div className="form">
                <Formulario 
                    guardarBusqueda={guardarBusqueda}
                    guardarCantidadimagenes={guardarCantidadimagenes}
                    guardarPrincipal={guardarPrincipal}
                />
            </div>            
            <div className="cont_menu">
                <span className="icoNav" onClick={() => { (!shownav)?guardarShownav(true):guardarShownav(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" viewBox="0 0 512 512">
                        <g>
                            <circle cx="256" cy="256" r="64"/>
                            <circle cx="256" cy="448" r="64"/>
                            <circle cx="256" cy="64" r="64"/>
                        </g>
                    </svg>
                </span>
                <ul className={shownav ? 'header_menu' : 'menu_hidden'}>
                    <li onClick={() => {guardarCantidadimagenes(20); guardarPrincipal(true);}}>Inicio</li>
                    <li onClick={() => {guardarCantidadimagenes(40); guardarPrincipal(false);}}>Explora</li>
                    <li className="login">Iniciar sesion</li>
                    <li className="button">Registrarse</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Menu;