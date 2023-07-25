import getAllProducts from '@/utils/getAllProducts';
import React from 'react';
import SingleProduct from './SingleProduct';

const ProductsPage = async  ({searchParams}) => {
    const products = await getAllProducts(searchParams.categoryId)
    return (
        <div>
            {
                products.map((product)=> <SingleProduct  product={product} key={product.id}   />)
            }
        </div>
    );
};

export default ProductsPage;