import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div className="max-w-7xl mx-auto px-12 xl:px-0">
            <h2 className="text-5xl font-extrabold text-black text-center mt-24 mb-4">Job Category List</h2>
            <p className="text-center text-base font-medium text-[#757575] mb-7">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default CategoryList;