"use client"

import { useEffect } from "react";

const ProductError = ({error, reset}) => {
    useEffect (()=>{
console.error(error)
    },[error])
    return (
        <div className="text-center">
          <h2> { error.message || "Somthing we Wrong Happened"}</h2>
          <button onClick={()=> reset()}>Reset</button>
        </div>
    );
};

export default ProductError;