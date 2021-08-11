import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ListProducts from "../components/ListProducts/ListProducts";

import { getProductsAction } from '../actions/productActions';


const Catalogo = () => {
    const dispatch = useDispatch();
    const products:object[] = useSelector((state:any) => state.products.products)

    useEffect(() => {
      dispatch(getProductsAction())
    }, [])
    
    return ( 
        <>
        <Header/>
          <h1>Catálogo</h1>
          <ListProducts products={products}/>
        <Footer/>
        </>
     );
}
export default Catalogo;