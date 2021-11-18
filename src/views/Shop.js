import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { getProductCatalog } from '../store/actions/productCatalogActions';
import shopTitle from '../assets/images/shopProducts.png';


const Shop = () => {

    const dispatch = useDispatch();
    const productCatalog = useSelector(state => state.productCatalog.products)

    useEffect(() => {
        dispatch(getProductCatalog())
    }, [dispatch])

    return (
<div className="text-center mt-4">
    <img className="shopping-bag-title" src={shopTitle} alt="..." />
    <div className="d-flex justify-content-center p-5">
        <div className="container row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
            {
                productCatalog && productCatalog.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </div>
</div>
    )
}

export default Shop

