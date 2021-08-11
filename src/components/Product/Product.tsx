import { useHistory } from "react-router-dom"
import './product.css'

const Product = ({product}:any) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/detalle/${product.id}`)
  }

  return (
    <div className="product" onClick={handleClick}>
      <img className="product" src={product.images[0]}/>
      <div className="product__title">{product.title}</div>
      { product.offer ?
      <div className="product__price product__price--offer">{product.currency}{product.offer.price}</div>
      :
      <div className="product__price"> {product.currency}{product.price}</div>
    }
    </div>
    )
}

export default Product;