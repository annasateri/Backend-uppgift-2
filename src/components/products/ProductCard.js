import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/actions/cartActions';

const ProductCard = ({product}) => {

    const dispatch = useDispatch();


    return (
        <div className="col">
            <div className="card shadow-0 mt-4">
            <Link to={`productdetails/${product.id}`}>
                <div className="bg-image hover-zoom pointer">
                    <img src={ product.imgUrl } className="card-img-top" alt="..." />
                </div>
             </Link>
                <div className="card-body shadow-1">
                    <div className="font-weight-bold mb-1">{ product.name }</div>
                    <p>{ product.shortDescription }</p>
                    <p className="product-title font-weight-bold">{ product.price } SEK</p>
                </div>
            </div>
            <div className="justify-content-center">
                <button className="btn btn-floating btn-lg font-weight-bold" onClick={() => {
                    dispatch(addToCart(product))
                }}><i className="text-white fas fa-plus"></i></button>
            </div>
        </div>
    )
}

export default ProductCard
