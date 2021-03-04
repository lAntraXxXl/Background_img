import React, {Fragment, useState, useEffect} from 'react';
import ListaImagenes from './components/ListaImagenes';
import Menu from './components/Menu';
import Filtros from './components/Filtros';
import Footer from './components/Footer';

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [totalpagina, guardarTotalPagina] = useState(1);
  const [pagina, guardarPagina] = useState(1);
  const [cantidadimagenes, guardarCantidadimagenes] =useState(20);
  const [principal, guardarPrincipal] = useState(true);

  useEffect(() => {
    
    const consultarAPI = async () => {
      
      const key = "17684869-ef5d44741fac1900cae13a01f";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&image_type=all&per_page=${cantidadimagenes}&page=${pagina}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);
      const totalPaginas = Math.ceil(resultado.totalHits / cantidadimagenes);
      guardarTotalPagina(totalPaginas);
    };
    consultarAPI();
  }, [busqueda, totalpagina, cantidadimagenes, pagina]);


  const funcionesPage = () => {
    guardarPrincipal(false); 
    guardarCantidadimagenes(40);
    window.scrollTo(0,0);
  }

  const paginaAnterior = () => {
    const paginaInicial = pagina - 1;
    if(paginaInicial === 0) return;
    guardarPagina(paginaInicial);
    window.scrollTo(0,0);
  }

  const paginaSiguiente = () => {
    const paginaInicial = pagina + 1;
    if(paginaInicial > totalpagina) return;
    guardarPagina(paginaInicial);
    window.scrollTo(0,0);
  }

  
  return (
    <Fragment>
      <Menu 
        guardarBusqueda={guardarBusqueda}
        guardarCantidadimagenes={guardarCantidadimagenes}
        guardarPrincipal={guardarPrincipal} 
      />
      <Filtros />
      <ListaImagenes 
        imagenes={imagenes}
      />
      {principal || Object.keys(imagenes).length === 0
        ?
          <div className="footer_explore">
            <span className="explore" onClick={funcionesPage}>Descubre mas</span>
            <p>Imágenes gratuitas que puedes usar desde cualquier lugar y en cualquier dispositivo</p>
          </div>
        :
          <div className="button_pages">
          {(pagina === 1)
            ? null
            :
              <span onClick={paginaAnterior}>
                <svg className="rotate" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 46.02 46.02">
                  <path d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645
                    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872
                    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"/>
                </svg>{pagina-1}
              </span>
          }
          {(pagina === totalpagina)
            ? null
            :
              <span onClick={paginaSiguiente}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 46.02 46.02">
                  <path d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645
                    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872
                    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"/>
                </svg>{pagina}
              </span>
          }
          </div>
      }
      
      <Footer />
    </Fragment>
  );
} 

export default App;
