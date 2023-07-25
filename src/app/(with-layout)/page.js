
import Categories from "@/components/HomePage/Categories"
import PopularProducts from "@/components/HomePage/PopularProducts";
import { Suspense } from "react";
export const revalidate = 5;
const HomePage=() =>{
  return (
    <main >
     <h2>Home</h2>
     <Categories />
    <Suspense fallback={  <h1 className='text-2xl'>Loding...</h1>}> <PopularProducts></PopularProducts></Suspense>
    </main>
  )
}
export default HomePage





