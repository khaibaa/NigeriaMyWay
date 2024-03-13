import { useState } from "react"
import AddIcon from "../assets/AddIcon.svg"
// import Explore from "./Explore.jsx";

function HeroSection() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="pl-5 pr-5 pb-5">
            <div className=" relative">
                <div className=" fixed z-50 bg-gray-400 sm:hidden bottom-5 right-5 p-5 rounded-md ">
                    {isMenuOpen && (
                        <div className=" text-lg text-slate-900 flex flex-col gap-4 mb-10">
                            <button className=" border-b-4 border-b-rose-900">All</button>
                            <button className=" border-b-4 border-b-rose-900">Arts</button>
                            <button className=" border-b-4 border-b-rose-900">Malls</button>
                            <button className=" border-b-4 border-b-rose-900">Cultural</button>
                            <button className=" border-b-4 border-b-rose-900">Historical</button>
                            <button className=" border-b-4 border-b-rose-900">Private Tours</button>
                            <button className=" border-b-4 border-b-rose-900">Day Trips</button>
                        </div>
                    )}
                </div>
                <div className="sm:hidden z-50 fixed bottom-5 right-5">

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="py-2 z-50 px-4 bg-accent bg-slate-700 text-bg rounded-md"
                    >
                        <img className=" z-50" src={AddIcon} alt="" />
                    </button>

                </div>
                <div className=" pb-5 w-full">
                    <h1 className=" uppercase leading-normal text-5xl md:text-9xl">explore nigeria <br />your way!</h1>
                    <div className=" mb-8 justify-start gap-x-2 flex-wrap gap-y-2 hidden mt-20 sm:flex">
                        <button aria-label="All categories" className="py-2 px-4 flex gap-x-1 font-medium items-center border border-dim-gray bg-slate-700  rounded-xl hover:bg-slate-600 transition-all text-2xl xl:text-h6 bg-accent text-bg">All</button>
                        <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
                            <button className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:bg-slate-600"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Arts</span></button>
                            <button className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:bg-slate-600"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Malls</span></button>
                            <button className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:bg-slate-600"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Cultural</span></button>
                            <button className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:bg-slate-600"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Historical</span></button>
                            <button className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:bg-slate-600"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Private Tours</span></button>
                            <button className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:bg-slate-600"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Day Trips</span></button>
                        </div>
                    </div>
                    {/* <Explore /> */}

                </div>
            </div>
        </div>

    )
}

export default HeroSection