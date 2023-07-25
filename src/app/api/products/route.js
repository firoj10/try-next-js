 import db from "@/db.json"
import { useSearchParams } from "next/navigation"
 import { NextResponse } from "next/server"

export const GET =(request)=>{
    // console.log(request.cookies, request.headers)
    const {searchParams}= new URL (request.url)
    const categoryId = searchParams.get("categoryId")
 let products = db.products;
 if(categoryId){
    products = products.filter ((product)=> product.categoryId === +categoryId)
 }
    return NextResponse.json(products)
}
 

export const POST = async(request)=>{
const body = await request.json();
 db.products.push(body)
 return NextResponse.json({
    message: "product added"
 })
}