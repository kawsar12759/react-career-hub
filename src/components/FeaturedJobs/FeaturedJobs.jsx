import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));

    }, [])



    return (
        <div className="max-w-7xl mx-auto px-12 xl:px-0">
            <div>
                <h2 className="text-5xl font-extrabold text-black text-center mt-24 mb-4">Featured Jobs</h2>
                <p className="text-center text-base font-medium text-[#757575] mb-7">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className={dataLength === jobs.length ? 'hidden' : 'flex justify-center'}>
                    <button
                        onClick={() => setDataLength(jobs.length)} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-5 rounded-lg text-white font-medium text-xl my-6 text-white">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;