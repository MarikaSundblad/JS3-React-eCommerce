import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';

const ProductCard = ({product, details}) => {

  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card">
        {details && <h1 className="text-center">{product.title}</h1>}
        <img src={product.image} alt="..." className="card-img-top" />
        <div className="card-body">
          {!details && <h5 className="card-title">{product.title}</h5>}
          <div className="card-text">
            {details 
              ? <p>{product.description}</p>
              : <p>{product.short}</p>
            }
            <p className="h5">Price: <span className="text-danger">{product.price}</span></p>
          </div>
          <div className={`row row-cols-1 ${!details && 'row-cols-lg-2'} g-2 mt-3`}>
            <div className="col">
              <button className="btn greenish-color btn-block" onClick={() => {
                dispatch(addToCart(product))
              }}>Add To Cart</button>
            </div>
            {
              !details && 
              <div className="col">
                <Link className="btn greenish-color btn-block" to={`/products/${product.id}`} >Read more</Link>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  details: false
}

export default ProductCard
