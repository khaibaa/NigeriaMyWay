/* eslint-disable react/prop-types */
import { useState } from "react"
import AddIcon from "../assets/AddIcon.svg"
import CarouselCard from "./CarouselCard";
import defaultImg from "../assets/defaultImage.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

function HeroSection({ places, setIsRecommended, setIsTopDestinations, setIsDiscoverRestaurant }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [diplayAll, setDisplayAll] = useState(false)
    const [displayMalls, setDisplayMalls] = useState(false)
    const [displayTours, setDisplayTours] = useState(false)
    const [displayParks, setDisplayParks] = useState(false)

    function handleAll() {
        setDisplayAll(true)
        setDisplayMalls(false)
        setDisplayTours(false)
        setDisplayParks(false)
        setIsRecommended(false)
        setIsTopDestinations(false)
        setIsDiscoverRestaurant(false)
    }

    function handleMalls() {
        setDisplayMalls(true)
        setDisplayAll(false)
        setDisplayTours(false)
        setDisplayParks(false)
        setIsRecommended(false)
        setIsTopDestinations(false)
        setIsDiscoverRestaurant(false)
    }

    function handleParks() {
        setDisplayParks(true)
        setDisplayAll(false)
        setDisplayMalls(false)
        setDisplayTours(false)
        setIsRecommended(false)
        setIsTopDestinations(false)
        setIsDiscoverRestaurant(false)
    }

    function handleTours() {
        setDisplayTours(true)
        setDisplayAll(false)
        setDisplayMalls(false)
        setDisplayParks(false)
        setIsRecommended(false)
        setIsTopDestinations(false)
        setIsDiscoverRestaurant(false)
    }

    function removeFilters() {
        setDisplayTours(false)
        setDisplayAll(false)
        setDisplayMalls(false)
        setDisplayParks(false)
        setIsRecommended(true)
        setIsTopDestinations(true)
        setIsDiscoverRestaurant(true)
    }

    const placesWithMallCategory = places.filter(
        (place) => place.attraction_category === "Shopping"
    );

    const placesWithToursCategory = places.filter(
        (place) => place.attraction_category === "Tours"
    );

    const placesWithParksCategory = places.filter(
        (place) => place.attraction_category === "Nature & Parks"
    );


    return (
        <div className="pl-5 pr-5 pb-5">
            <div className=" relative">
                <div className=" fixed z-50 bg-white border-2  sm:hidden bottom-5 right-5 p-5 rounded-md ">
                    {isMenuOpen && (
                        <div className=" text-lg flex flex-col gap-4 mb-10">
                            <button onClick={() => { handleAll() }} className=" border-b-4 border-black">All</button>
                            <button onClick={() => { handleParks() }} className=" border-b-4 border-black">Parks</button>
                            <button onClick={() => { handleMalls() }} className=" border-b-4 border-black">Malls</button>
                            <button onClick={() => { handleTours() }} className=" border-b-4 border-black">Tours</button>
                            <button onClick={() => { removeFilters() }}>remove filters</button>
                        </div>
                    )}
                </div>
                <div className="sm:hidden z-50 fixed bottom-5 right-5">

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="py-2 z-50 px-4 bg-white border-2 text-bg rounded-md"
                    >
                        <img className=" z-50" src={AddIcon} alt="" />
                    </button>

                </div>
                <div className=" pb-5 w-full">
                    <h1 className=" uppercase text-center leading-normal mb-1 text-2xl mt-8 md:text-5xl">explore nigeria, your way!</h1>
                    <hr className=" mb-5"></hr>
                    <div className=" mb-8 justify-center gap-x-2 flex-wrap gap-y-2 hidden mt-20 sm:flex">
                        <div className="flex text-white gap-x-0 rounded-xl border border-outline border-opacity-15">
                            <button onClick={() => { handleAll() }} className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:border-2"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">All</span></button>
                            <button onClick={() => { handleParks() }} className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:border-2"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Parks</span></button>
                            <button onClick={() => { handleMalls() }} className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:border-2"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Malls</span></button>
                            <button onClick={() => { handleTours() }} className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:border-2"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Tours</span></button>
                        </div>
                        <FontAwesomeIcon onClick={() => { removeFilters() }} className=" h-16 w-16 transition-all hover:cursor-pointer" icon={faRectangleXmark} />
                    </div>
                    <div className=" justify-center items-center grid grid-cols-1 md:grid-cols-4 gap-5">
                        {diplayAll && places.map((place) => (
                            <CarouselCard
                                key={place.id}
                                title={place.attraction_name}
                                description={place.attraction_description || "No description available"}
                                image={place.attraction_image_url || defaultImg}
                                category={place.attraction_category || ' No category available'}
                            />
                        ))}
                    </div>
                    <div className=" justify-center items-center grid grid-cols-1 md:grid-cols-4 gap-5">
                        {displayMalls && placesWithMallCategory.map((place) => (
                            <CarouselCard
                                key={place.id}
                                title={place.attraction_name}
                                description={place.attraction_description || "No description available"}
                                image={place.attraction_image_url || defaultImg}
                                category={place.attraction_category || ' No category available'}
                            />
                        ))}
                    </div>
                    <div className=" justify-center items-center grid grid-cols-1 md:grid-cols-4 gap-5">
                        {displayTours && placesWithToursCategory.map((place) => (
                            <CarouselCard
                                key={place.id}
                                title={place.attraction_name}
                                description={place.attraction_description || "No description available"}
                                image={place.attraction_image_url || defaultImg}
                                category={place.attraction_category || ' No category available'}
                            />
                        ))}
                    </div>
                    <div className=" justify-center items-center grid grid-cols-1 md:grid-cols-4 gap-5">
                        {displayParks && placesWithParksCategory.map((place) => (
                            <CarouselCard
                                key={place.id}
                                title={place.attraction_name}
                                description={place.attraction_description || "No description available"}
                                image={place.attraction_image_url || defaultImg}
                                category={place.attraction_category || ' No category available'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroSection