import React from 'react';

const Footer = () => {
    const fecha = new Date();
    return ( 
        <footer>
            <p>Diseño y desarrollo por <a href="https://github.com/lAntraXxXl">|AntraXxX|</a> © {fecha.getFullYear()}, datos de <a href="https://pixabay.com">Pixabay</a>.</p>
        </footer>
    );
}
 
export default Footer;