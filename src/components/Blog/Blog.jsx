
const Blog = ({ blog }) => {
    const { blog_img, blog_title, author, category, blog_content, publication_date } = blog;
    return (
        <div className="p-6 border rounded flex flex-col">
            <img className="h-52 w-full mb-5 rounded" src={blog_img} alt="" />
            <h2 className="text-xl font-bold text-black mb-3">{blog_title}</h2>
            <div className="flex justify-between mb-3">
                <p className="text-base">By <span className="text-[#9873FF] font-medium">{author}</span></p>
                <p className="text-base text-[#9873FF] font-medium">{category}</p>
            </div>
            <div className="flex-grow">
                <p className="text-lg text-black mb-5">{blog_content}</p>
            </div>
            <div className="flex justify-end">
                <p className="text-[#757575]">Published on: {publication_date}</p>
            </div>
        </div>
    );
};

export default Blog;