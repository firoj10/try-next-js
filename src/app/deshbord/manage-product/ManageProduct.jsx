"use client"
import React, { useRef, useState, useTransition } from 'react';
import ManageSingleProduct from './ManageSingleProduct';
import Modal from '@/components/HomePage/Modal';
import { useRouter } from 'next/navigation';

const ManageProduct = ({ products }) => {
    const modalRef = useRef(null);
    const [updateData, setUpateData] = useState(null)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const isloading = isPending || loading
    const openModal = (product) => {
        setUpateData(product)
        modalRef.current.showModal();
    }
    const closeModal = (product) => {
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
            setLoading(true)
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
                form.reset();
                closeModal()
                startTransition(() => {
                    router.refresh();
                    setLoading(false)
                })
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
    }

    const handleDelete = async (id) => {
        setLoading(true)
            try {
                const res = await fetch(
                    `http://localhost:5000/products/${id}`, {
                    method: "DELETE",
                
                }
                );
                const result = await res.json();
                console.log(result)
                startTransition(() => {
                    router.refresh();
                    setLoading(false)
                })
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
       
    }

    return (
        <div>

            <table className={`border-collapse w-full ${isloading ? "opacity-50" : "opacity-100"}`}>
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
            </table>
            <Modal handleSubmit={handleSubmit} ref={modalRef} closeModal={closeModal} updateData={updateData} />
        </div>
    );
};

export default ManageProduct;