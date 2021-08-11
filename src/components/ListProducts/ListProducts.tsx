import _ from 'underscore';

import Product from '../Product/Product'

import './listProducts.css'

const ListProducts = ({products}:any) => {
  return (
    <div className="listProducts">
      {_.shuffle(products).map((product:any) => <Product key={product.id} product={product}/>)}
    </div>
  )
}

export default ListProducts
