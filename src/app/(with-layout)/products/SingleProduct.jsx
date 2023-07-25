import Link from 'next/link';
import React from 'react';

const SingleProduct = ({product}) => {
    const {id, title}=product;
    return (
        <div>
         
           <Link href={`/products/${id}`}><h2>{title}</h2> </Link>
        </div>
    );
};

export default SingleProduct;