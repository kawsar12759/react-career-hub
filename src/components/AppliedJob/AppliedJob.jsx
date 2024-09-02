import { GrLocation } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";

const AppliedJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="md:grid md:grid-cols-5 border rounded p-4 gap-7">
            <div className="col-span-1 bg-[#f4f4f4] h-52 px-7 flex items-center mb-5 md:mb-0">
                <img className="w-full" src={logo} alt="" />
            </div>
            <div className="col-span-3 flex items-center">
                <div>
                    <h3 className="text-2xl font-extrabold text-black mb-2">{job_title}</h3>
                    <p className="text-2xl font-semibold text-[#757575] mb-2">{company_name}</p>
                    <div className="mb-5">
                        <button className="px-5 py-2 text-base font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 text-base font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="mt-2 flex mb-5 md:mb-0 font-semibold text-[#757575]">
                        <h2 className="flex items-center mr-5"><GrLocation className="text-2xl mr-2" />{location}</h2>
                        <h2 className="flex items-center"><CiDollar className="text-2xl mr-2" />{salary}</h2>
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded text-white font-bold">View Details</button>
            </div>
        </div>
    );
};

export default AppliedJob;