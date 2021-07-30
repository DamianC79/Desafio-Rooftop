import React, {useEffect,useState} from 'react'
import {getCatalogo} from './Componentes'

function Catalogo() {
    
    const [catalogo, obtenerCatalogo] = useState([]);

    useEffect(() => {
      getCatalogo
      .then(catalogo =>{
        console.log(catalogo)
        obtenerCatalogo(catalogo)
      })   
    }, [])

    return ( 
        <h1>{catalogo}</h1>
     );
}
 
export default Catalogo;