import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, deleteProduct, removeFromCart } from '../../store/actions/cartActions'

const CartProduct = ({product}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation()
    dispatch(addToCart(product))
  }

  const sub = e => {
    e.stopPropagation()
    dispatch(removeFromCart(product))
  }

  const del = e => {
    e.stopPropagation()
    dispatch(deleteProduct(product.id))
  }

  return (
    <div>
      <div className="row p-2">
        <div className="col">
          <img src={product.image} alt="product" className="img-fluid image-width" />
          <div>
            <div className="col"><strong>{product.name}</strong></div>
            <div className="col"><small>{product.quantity} x {product.price}</small></div>
          </div>
        </div>

        <div className="buttons col d-flex align-items-center justify-content-center">
          <button className="btn btn-sm px-3" onClick={sub}>-</button>
          <button className="btn btn-sm px-3" onClick={add}>+</button>
          <button className="btn btn-sm btn-danger px-3 ms-2" onClick={del}><i className="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
