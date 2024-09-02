import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const blogs = useLoaderData();
    return (

        <div>
            <div className="h-56 page-title flex justify-center border-red-500 mb-20">
                <h2 className="text-4xl font-bold text-center text-black pt-4">Blogs</h2>
            </div>
            <div className="px-12 xl:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;