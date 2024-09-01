import { useLoaderData, useParams } from "react-router-dom";

import { CiDollar } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './JobDetails.css'
import { saveJobApplication } from "../../utility/localstorage";
const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams()
    const job = jobs.find(job => job.id === parseInt(id));
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

    const handleApplyJob = () => {

        const flag = saveJobApplication(parseInt(id));
        if (flag === 0) {
            toast('You have applied successfully');
        }
        else {
            toast('You already applied to this job');
        }


    }
    return (
        <div className="">
            <div className="h-56 page-title flex justify-center border-red-500">
                <h2 className="text-4xl font-bold text-center text-black pt-4">Job Details</h2>
            </div>
            <div className="max-w-7xl mx-auto flex py-20">
                <div className="w-2/3">
                    <p className="text-black mb-4"><span className="text-base font-bold text-black">Job Description: </span>{job_description}</p>
                    <p className="text-black mb-4"><span className="text-base font-bold text-black">Job Responsibility: </span>{job_responsibility}</p>
                    <p className="text-black mb-4"><span className="text-base font-bold text-black">Educational Requirements: </span><br></br>{educational_requirements}</p>
                    <p className="text-black mb-4"><span className="text-base font-bold text-black">Experiences: </span><br />{experiences}</p>
                </div>
                <div className="ml-6 w-1/3">
                    <div className="jd-bg p-4 rounded-md">
                        <h5 className="text-black text-xl font-bold mb-2 mt-1">Job Details</h5>
                        <hr className="mb-3" />
                        <div className="flex mb-2">
                            <CiDollar className="text-[#9873FF] text-2xl mr-2" />
                            <h6 className="font-bold text-black mr-2">Salary: </h6>
                            <p className="text-[#757575]">{salary}</p>
                        </div>
                        <div className="flex">
                            <MdOutlineSubtitles className="text-[#9873FF] text-2xl mr-2" />
                            <h6 className="font-bold text-black mr-2">Job Title: </h6>
                            <p className="text-[#757575]">{job_title}</p>
                        </div>
                        <h5 className="text-black text-xl font-bold mb-2 mt-4">Contact Information</h5>
                        <hr className="mb-3" />
                        <div className="flex mb-2">
                            <FiPhone className="text-[#9873FF] text-2xl mr-2" />
                            <h6 className="font-bold text-black mr-2">Phone: </h6>
                            <p className="text-[#757575]">{contact_information.phone}</p>
                        </div>
                        <div className="flex mb-2">
                            <MdOutlineEmail className="text-[#9873FF] text-2xl mr-2" />
                            <h6 className="font-bold text-black mr-2">Email: </h6>
                            <p className="text-[#757575]">{contact_information.email}</p>
                        </div>
                        <div className="flex mb-2">
                            <IoLocationOutline className="text-[#9873FF] text-2xl mr-2" />
                            <h6 className="font-bold text-black mr-2">Address: </h6>
                            <p className="text-[#757575]">{contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full mt-3 text-white font-bold bg-[#9873FF]">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;