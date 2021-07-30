import React, {useEffect,useState} from 'react'
import {getHome} from './Componentes'

const Home = () => {
    
    const [home, obtenerHome] = useState([]);

    useEffect(() => {
      getHome
      .then(home =>{
        console.log(home)
        obtenerHome(home)
      })   
    }, [])

    return ( 
        <h1>{home}</h1>
     );
}
 
export default Home;