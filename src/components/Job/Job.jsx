import { GrLocation } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 border rounded  bg-white">
            <div className="flex justify-start mt-5 pl-4">
            <figure>
                <img
                    src={logo}
                    alt="" />
            </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title text-black">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-2 mb-2 flex font-semibold">
                    <h2 className="flex items-center mr-5"><GrLocation className="text-2xl mr-2" />{location}</h2>
                    <h2 className="flex items-center"><CiDollar className="text-2xl mr-2"  />{salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}><button className="btn btn-primary text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;