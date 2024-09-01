import social from '../../assets/images/social.png'

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content p-10 mt-28">
            <div className="footer max-w-7xl mx-auto">
                <aside>
                    <h2 className="text-2xl font-extrabold text-white">CareerHub</h2>
                    <p className='mb-2'>
                        There are many variations of <br />passages of Lorem Ipsum , but <br />the majority have suffered <br />alteration in some form.
                    </p>
                    <img src={social} alt="" />
                </aside>
                <nav>
                    <h6 className="text-lg text-white font-semibold">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <h6 className="text-lg text-white font-semibold">Product</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integration</a>
                </nav>
                <nav>
                    <h6 className="text-lg text-white font-semibold">Support</h6>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav>
                    <h6 className="text-lg text-white font-semibold">Contact</h6>
                    <p>554 Broadway, NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </nav>
            </div>

        </footer>
    );
};

export default Footer;