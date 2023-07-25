import React, { forwardRef, useRef } from 'react';

const Modal = ({ closeModal, updateData, handleSubmit }, ref) => {
    const fromRef = useRef(null)
    return (
        <dialog ref={ref} className='w-[98%] max-w-[500px] rounded-md p-3'>
            <div className='text-right mb-4'>
                <button
                    onClick={() => {
                        closeModal()
                        fromRef.current.reset()
                    }}>Close</button>
            </div>
            <form onSubmit={handleSubmit} ref={fromRef}>
                <input
                    className='w-full mb-2 p-2 focus:outline-none border'
                    placeholder='title'
                    name='title'
                    type="text"
                    defaultValue={updateData?.title}
                />
                <input
                    className='w-full mb-2 p-2 focus:outline-none border'
                    placeholder='number'
                    name='price'
                    type="number"
                    defaultValue={updateData?.price}
                />
                <button className='text-white px-2 py-1 bg-blue-500 focus:outline-none'>Submit</button>
            </form>
        </dialog>

    );
};

export default forwardRef(Modal);