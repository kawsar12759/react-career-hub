import user from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='max-w-7xl mx-auto flex'>
                <div className='w-1/2 pr-8  flex items-center'>
                    <div>
                        <h1 className="text-7xl font-extrabold text-black mb-5">One Step Closer To Your <span className='text-[#9873FF]'> Dream Job</span></h1>
                        <p className='text-lg text-[#757575] mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-4 rounded-lg text-white font-extrabold text-xl'>Get Started</button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;