import getAllCategories from "@/utils/getAllCategories";
import SingleCategory from "./SingleCategory";


const Categories = async () => {
    const categories = await getAllCategories();
    return (
        <div>
            <h3>Categories</h3>
          <div className="container mx-auto">
          {
              categories.map((category)=> <SingleCategory category={category} key={category.id}  />)  
            }
          </div>
        </div>
    );
};

export default Categories;