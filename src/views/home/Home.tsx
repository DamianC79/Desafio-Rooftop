import {useEffect, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ListProducts from '../../components/ListProducts/ListProducts';

import { getProductsAction } from '../../actions/productActions';

import './home.css';
import banner_1 from '../images/banner_1.jpg'
import banner_2 from '../images/banner_2.jpg'
import banner_3 from '../images/banner_3.jpg'

const Home = () => {
  const dispatch = useDispatch()
  const products:object[] =useSelector((state:any) =>  state.products.products)

  const [images, setImages] = useState([
    banner_1,
    banner_2,
    banner_3
  ]);
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage=() => {
    setInterval(function(){ 
      if(currentImage < images.length){
      setCurrentImage(currentImage+1)
      console.log(1)
      }else{
        setCurrentImage(0)
        console.log(12)
      }

     }, 3000);

    
  }

  useEffect(() => {
    dispatch(getProductsAction(4))
    changeImage()
  }, [])

    return ( 
        <>
        <Header/>
          <div className="home">
            <img className="home__banner" src={images[currentImage]}/>
            <ListProducts products={products}/>
          </div>
        <Footer/>
        </>
     );
}
 
export default Home;