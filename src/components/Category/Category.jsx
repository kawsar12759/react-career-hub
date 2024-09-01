import { MdAccountBalance } from "react-icons/md";
const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className="bg-[#f9f9ff] p-6 rounded">
            <img className="mb-4" src={logo} alt="" />
            <h3 className="text-xl font-extrabold text-black mb-2">{category_name}</h3>
            <p className="text-[#A3A3A3] text-base font-medium">{availability}</p>
        </div>
    );
};

export default Category;