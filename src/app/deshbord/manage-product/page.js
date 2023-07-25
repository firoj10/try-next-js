import getAllProducts from "@/utils/getAllProducts";
import ManageProduct from "./ManageProduct";

export const metadata = {
    title: 'ManageProduc| Deshbord |Next Hero',
    description: 'Next Hero',
  }

const ManageProductpage = async() => {
    const products = await getAllProducts();
    return (
        <div className="w-full mt-10">
       <h1 className="mb-5 text-2xl font-semibold">Manage Product Page</h1>
       <ManageProduct products={products} />
        </div>
    );
};

export default ManageProductpage;