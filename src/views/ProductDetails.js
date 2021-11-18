import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct, setProduct } from '../store/actions/productCatalogActions';
import { addToCart } from '../store/actions/cartActions';


const ProductDetails = () => {

    const id = useParams().id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneProduct(id))

        return () => {
            dispatch(setProduct(null))
        }
    }, [dispatch, id])

    const product = useSelector(state => state.productCatalog.product);

    return (

        <div className="container product-details">
            { product ?
            <div className="card border-0 shadow-0">
                <div className="bg-image hover-zoom text-center">
                    <img src={ product.imgUrl } alt="..." className="img-fluid z-depth-0"/>
                </div>
                <div className="card-body shadow-1 text-center p-3">
                    <div className="detailsText">
                        <div className="font-weight-bold mb-1">{ product.name }</div>
                          { product.longDescription }
                    </div>
                    <div className="font-weight-bold mt-3">
                        { product.price } SEK
                    </div>
                </div>
                <div className="AddToBag text-center mt-2">
                    <button className="btn btn-white" onClick={() => {
                    dispatch(addToCart(product))
                }}>ADD TO BAG</button>
                </div>
            </div>
            : ''
            }
        </div>
    )
}

export default ProductDetails
