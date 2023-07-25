
"use client"
import  { useRef, useState, } from 'react';

import Modal from '@/components/HomePage/Modal';
import useProducts from '@/hooks/useProducts';
import ManageSingleProduct from '../manage-product/ManageSingleProduct';


const AllProducts = () => {
    const { products,isLoading, mutate,error,isValidating}= useProducts();
    const modalRef = useRef(null);
    const [updateData, setUpateData] = useState(null)
  
    const openModal = (product) => {
        setUpateData(product)
        modalRef.current.showModal();
    }
    const closeModal = () => {
        setUpateData(null)
        modalRef.current.close();
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const data = {
            title, price
        }
        if (title && price) {
         
            try {
                const res = await fetch(
                    `http://localhost:5000/products/${updateData?.id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
                );
                const result = await res.json();
                console.log(result)
                mutate()
                form.reset();
                closeModal()
                
              
            } catch (error) {
                console.log(error)
              
            }
        }
    }

    const handleDelete = async (id) => {
      
            try {
                const res = await fetch(
                    `http://localhost:5000/products/${id}`, {
                    method: "DELETE",
                
                }
                );
                const result = await res.json();
                console.log(result)
                mutate()
                
            } catch (error) {
                console.log(error)
             
            }
       
    }

    return (
        <div>
            {
             isLoading && 
             <h1 className=' text-center text-2xl'> Loading....</h1>   
            }
{
    !isLoading && (<table className={`border-collapse w-full ${isValidating ? "opacity-50" : "opacity-100"}`}>
    <thead>
        <tr>
            <th className='border border-slate-400'>Title</th>
            <th className='border border-slate-400'>Price</th>
            <th className='border border-slate-400'>Update</th>
            <th className='border border-slate-400'>Delele</th>
        </tr>
    </thead>
    <tbody>
        {
            products.map((product) => (
                <ManageSingleProduct handleDelete={handleDelete} openModal={openModal} key={product.id} product={product} />
            ))
        }
    </tbody>
</table>)
}
            
            <Modal handleSubmit={handleSubmit} ref={modalRef} closeModal={closeModal} updateData={updateData} />
        </div>
    );
};

export default AllProducts;