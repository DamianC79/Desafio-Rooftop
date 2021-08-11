import { memo, useMemo } from 'react';

import _ from 'underscore';

import Product from '../Product/Product'

import './listProducts.css'

const ListProducts = ({products}:any) => {

  const listProducts = useMemo(() => _.shuffle(products), [products]);

  return (
    <div className="listProducts">
      {listProducts.map((product:any) => <Product key={product.id} product={product}/>)}
    </div>
  )
}

export default ListProducts
