function Footer() {

    return (
        <div className="">
            <div className=" w-full h-[2px] bg-white"></div>
            <div className="flex md:flex md:justify-between pt-5 pl-5">
                <div className="text-center leading-8 h-40 w-72 ">
                    <h1 className=" text-2xl font-extrabold">Support</h1>
                    <ul>
                        <li>Contact Us</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="text-center leading-8 h-40 w-72 ">
                    <h1 className=" text-2xl font-extrabold">Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>About Founder</li>
                    </ul>
                </div>
                <div className=" text-center leading-8 h-40 w-72 ">
                    <h1 className=" text-2xl font-extrabold">Legal</h1>
                    <ul>
                        <li>T & C</li>
                        <li>Privacy Notice</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer