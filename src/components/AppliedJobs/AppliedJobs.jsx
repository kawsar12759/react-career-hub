import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import AppliedJob from "../AppliedJob/AppliedJob";



const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobFilter = filterValue => {
        if (filterValue === 'all') {
            setDisplayJobs(appliedJobs);

        }
        else if (filterValue === 'remote') {
            const remote = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remote);

        }
        else if (filterValue === 'onsite') {
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsite);

        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, []);


    return (
        <div>
            <div className="h-56 page-title flex justify-center border-red-500 mb-20">
                <h2 className="text-4xl font-bold text-center text-black pt-4">Applied Jobs</h2>
            </div>
            <div className={appliedJobs.length === 0 ? "px-12 xl:px-0 max-w-7xl mx-auto flex justify-center items-center h-52 flex items-center" : "hidden"}>
                <h2 className="text-3xl font-bold text-black">You haven't applied to any jobs yet!</h2>
            </div>
            <div className={appliedJobs.length === 0 ? "hidden" : "px-12 xl:px-0 max-w-7xl mx-auto flex justify-end mb-10"}>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#f4f4f4] border-0 rounded-md text-black hover:bg-[#f4f4f4]">Filter By<RiArrowDropDownLine /></div>
                    <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow bg-white">
                        <li><a onClick={() => handleJobFilter('all')}>All Jobs</a></li>
                        <li><a onClick={() => handleJobFilter('remote')}>Remote Jobs</a></li>
                        <li><a onClick={() => handleJobFilter('onsite')}>Onsite Jobs</a></li>
                    </ul>
                </div>
            </div>
            <div className="px-12 xl:px-0 max-w-7xl mx-auto grid grid-cols-1 gap-5">
                {
                    displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;