import React from 'react'
import Rating from './Rating'

export default function products({product}) {
  return (
        <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td><img className='img-fluid' src={product.image} alt={product.title} /></td>
              {/* <td>{product.creationAt}</td>
              <td>{product.updatedAt}</td> */}
              <td ><Rating rate={product.rating.rate} count={product.rating.count} /></td>

        </tr>
  )
}
