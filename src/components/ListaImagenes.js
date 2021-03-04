import React from 'react';
import Imagen from './Imagen';
import './imagenes.css';

const ListaImagenes = ({imagenes}) => {
    
    const existResult = (imagenes.length > 0)? true : false;
    return ( 
        <div className="cont_gral">
            { existResult
                ? imagenes.map(imagen => (
                    <Imagen
                        key={imagen.id}
                        imagen={imagen}
                    />
                ))
                : <p>Lo sentimos, no hay aciertos.</p> 
            }             
        </div>
    );
}
 
export default ListaImagenes;