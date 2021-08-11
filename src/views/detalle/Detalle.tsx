import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import ImageGallery from 'react-image-gallery'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import Header from '../../components/Header/Header'
import Questions from '../../components/Questions/Questions'
import Footer from '../../components/Footer/Footer'

import { getQuestionsAction, saveQuestionAction } from "../../actions/productActions";

import './detalle.css'

dayjs.extend(relativeTime)

const Detalle = () => {
  const dispatch = useDispatch()
  const params:any = useParams()

  const product:any = useSelector((state:any) =>  state.products.products.find((product:any) => product.id === parseInt(params.id)))
  const questions:any = useSelector((state:any) => state.products.questions)

  const [images, setImages] = useState([])
  const [timeOffer, setTimeOffer] = useState()

  useEffect(() => {
    const images = product.images.map((img:string) => ({original: img, thumbnail:img}))
    setImages(images)
  }, [product])

  useEffect(() => {
    dispatch(getQuestionsAction(params.id))
  }, [])
  
  useEffect(() => {
    if(product.offer){
      const currentDate = dayjs(new Date())
      const endDate = dayjs(product.offer.expires_at)
      const result:any = endDate.diff(currentDate, 'day')

      setTimeOffer(result)
    }
  }, [])

  const handleOnSubmit = (e:any) => {
    e.preventDefault()

    const message = e.target.message.value
    const email = e.target.email.value

    const data = new FormData()
    data.append('message', message)
    data.append('email', email)

    dispatch(saveQuestionAction(data))
  }

  return (
    <>
      <Header/>
      <div>
        <h1>{product.title}</h1>

        { product.offer ?
        <div>
          <div>Este producto está en oferta! </div>
          <div>{product.currency} {product.offer.price}</div>
          <div>y termina en {timeOffer} dias</div>
        </div>
        : null
        }
        <h2>Galería</h2>
        <ImageGallery items={images}/>

        <h2>Preguntas</h2>

        <Questions questions={questions}/>

        <h2>Deje su consulta</h2>

        <form className="formulario" onSubmit={handleOnSubmit}>
          <textarea
            className="formulario__input"
            name="message"
            minLength={10}
            maxLength={500}
            rows={10}
          />
          <input
            className="formulario__input"
            name="email"
            type="email"
          />
          <input
            className="formulario__btnEnviar"
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Detalle