import { MdAccountBalance } from "react-icons/md";
const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="bg-[#f9f9ff] p-6 rounded flex justify-center items-center">
            <div>
                <div className="flex justify-center">
                    <img className="mb-4" src={logo} alt="" />
                </div>
                <h3 className="text-xl font-extrabold text-black mb-2 text-center">{category_name}</h3>
                <p className="text-[#A3A3A3] text-base font-medium text-center">{availability}</p>
            </div>
        </div>
    );
};

export default Category;