/* eslint-disable react/prop-types */
// Import necessary modules and assets
import { useState } from "react"
import AddIcon from "../assets/AddIcon.svg" // Import an SVG icon
import CarouselCard from "./DisplayCard"; // Import a custom component
import defaultImg from "../assets/defaultImage.jpeg" // Import a default image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome icon library
import { faClose, faRectangleXmark, faX } from "@fortawesome/free-solid-svg-icons"; // Import a specific FontAwesome icon
import myWay from "@/assets/ngn_my_way.png"
import {useTranslation} from "react-i18next";


// Define the HeroSection functional component
function HeroSection({ places, setIsRecommended, setIsTopDestinations, setIsDiscoverRestaurant }) {
    // State variables to control menu and display filters
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [diplayAll, setDisplayAll] = useState(false)
    const [displayMalls, setDisplayMalls] = useState(false)
    const [displayCulture, setDisplayCulture] = useState(false)
    const [displayParks, setDisplayParks] = useState(false)
    const [showClose, setShowClose] = useState(false)
    const {t} = useTranslation("common");


    // Function to display all places
    function handleAll() {
        setDisplayAll(true) // Set diplayAll to true
        setDisplayMalls(false) // Set all other display filters to false
        setDisplayCulture(false)
        setDisplayParks(false)
        setIsRecommended(false) // Update parent component state to not display recommended places
        setIsTopDestinations(false) // Update parent component state to not display top destinations
        setIsDiscoverRestaurant(false) // Update parent component state to not display restaurants
    }

    // Function to display malls
    function handleMalls() {
        setDisplayMalls(true) // Set displayMalls to true
        setDisplayAll(false) // Set all other display filters to false
        setDisplayCulture(false)
        setDisplayParks(false)
        setIsRecommended(false) // Update parent component state to not display recommended places
        setIsTopDestinations(false) // Update parent component state to not display top destinations
        setIsDiscoverRestaurant(false) // Update parent component state to not display restaurants
    }

    // Function to display parks
    function handleParks() {
        setDisplayParks(true) // Set displayParks to true
        setDisplayAll(false) // Set all other display filters to false
        setDisplayMalls(false)
        setDisplayCulture(false)
        setIsRecommended(false) // Update parent component state to not display recommended places
        setIsTopDestinations(false) // Update parent component state to not display top destinations
        setIsDiscoverRestaurant(false) // Update parent component state to not display restaurants
    }

    // Function to display Culture
    function handleCulture() {
        setDisplayCulture(true) // Set displayCulture to true
        setDisplayAll(false) // Set all other display filters to false
        setDisplayMalls(false)
        setDisplayParks(false)
        setIsRecommended(false) // Update parent component state to not display recommended places
        setIsTopDestinations(false) // Update parent component state to not display top destinations
        setIsDiscoverRestaurant(false) // Update parent component state to not display restaurants
    }

    // Function to remove all filters
    function removeFilters() {
        setShowClose(false)
        setDisplayCulture(false) // Reset all display filter states to false
        setDisplayAll(false)
        setDisplayMalls(false)
        setDisplayParks(false)
        setIsRecommended(true) // Update parent component state to display recommended places
        setIsTopDestinations(true) // Update parent component state to display top destinations
        setIsDiscoverRestaurant(true) // Update parent component state to display restaurants
    }
    // Filter the 'places' array and create a new array called 'placesWithMallCategory'
    // that contains only the places where the 'attraction_category' property is equal to "Shopping"
    const placesWithMallCategory = places.filter(
        (place) => place.attraction_category === "Shopping");

    // Filter the 'places' array and create a new array called 'placesWithCultureCategory'
    // that contains only the places where the 'attraction_category' property is equal to "Culture"
    const placesWithCultureCategory = places.filter(
        (place) => place.attraction_category === "Culture");

    // Filter the 'places' array and create a new array called 'placesWithParksCategory'
    // that contains only the places where the 'attraction_category' property is equal to "Nature & Parks"
    const placesWithParksCategory = places.filter(
        (place) => place.attraction_category === "Nature & Parks");


    return (
        <div className="pl-5 pr-5 pb-5 bg-[#dad7cd]">
            <div className="relative">

                {/* Fixed menu for small screens */}
                <div className="fixed z-50 bg-white border-2 sm:hidden bottom-5 right-5 p-5 rounded-md">
                    {/* Filter items for mobile with fuctions that were defined above */}
                    {isMenuOpen && (
                        <div className="text-lg flex flex-col gap-4 mb-10">
                            <button onClick={handleAll}>{t("nav.all")}</button>
                            <button onClick={handleParks}>{t("nav.parks")}</button>
                            <button onClick={handleMalls}>{t("nav.malls")}</button>
                            <button onClick={handleCulture}>{t("nav.culture")}</button>
                            <button onClick={removeFilters}>remove filters</button>
                        </div>
                    )}
                </div>

                {/* Toggle menu button for small screens */}
                <div className="sm:hidden z-50 fixed bottom-5 right-5">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="py-2 z-50 px-4 bg-white border-2 text-bg rounded-md">
                        <img className="z-50" src={AddIcon} alt="" />
                    </button>
                </div>

                <div className="pt-10 pb-5 w-full">
                    <section className="flex  justify-center items-center">
                        <div className="lhs flex justify-center items-center">
                            <h1 className=" uppercase text-left w-8/12 leading-normal mb-1 text-2xl mt-8 md:text-5xl">{t("nav.hero_title")}</h1>
                        </div>
                        <div className="rhs flex justify-center items-center">
                            <img src={myWay} alt="Nigeria my way" />
                        </div>
                    </section>
                    {/* <h1 className=" uppercase text-center leading-normal mb-1 text-2xl mt-8 md:text-5xl">explore nigeria, your way!</h1> */}
                    <hr className=" mb-5 opacity-20"></hr>
                    <div className=" mb-8 justify-center items-center gap-x-2 flex-wrap gap-y-2 hidden mt-20 sm:flex">
                        {/* Filter items for desktop with fuctions that were defined above */}
                        <div className="flex text-white gap-x-0 ">
                            <button onClick={() => { 
                                setShowClose(true)
                                handleAll()
                                }} className="py-2 px-5 flex gap-x-1 font-medium   transition-all relative hover:border-b border-black justify-center items-center"><span className="text-2xl ml-0 xl:text-h6 relative mix-blend-exclusion  z-10">{t("nav.all")}</span></button>
                            <button onClick={() => { 
                                setShowClose(true)
                                handleParks() }} className="py-2 px-5 flex gap-x-1 font-medium   transition-all relative hover:border-b border-black justify-center items-center"><span className="text-2xl ml-0 xl:text-h6 relative mix-blend-exclusion  z-10">{t("nav.parks")}</span></button>
                            <button onClick={() => { 
                                setShowClose(true)
                                handleMalls() }} className="py-2 px-5 flex gap-x-1 font-medium   transition-all relative hover:border-b border-black justify-center items-center"><span className="text-2xl ml-0 xl:text-h6 relative mix-blend-exclusion  z-10">{t("nav.malls")}</span></button>
                            <button onClick={() => { 
                                setShowClose(true)
                                handleCulture() }} className="py-2 px-5 flex gap-x-1 font-medium   transition-all relative hover:border-b border-black justify-center items-center"><span className="text-2xl ml-0 xl:text-h6 relative mix-blend-exclusion  z-10">{t("nav.culture")}</span></button> 

                        </div>
                        {/* icon to remove filters when cliked  */}
                        {
                            showClose &&
                            <FontAwesomeIcon onClick={() => { removeFilters() }} className=" h-10 w-10 hover:bg-black hover:opacity-60 hover:text-white rounded-sm transition-all hover:cursor-pointer" icon={faClose} />}
                    </div>

                    {/* gets displayed when all is clicked */}
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

                    {/* gets displayed when malls is clicked */}
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

                    {/* gets displayed when Culture is clicked */}
                    <div className=" justify-center items-center grid grid-cols-1 md:grid-cols-4 gap-5">
                        {displayCulture && placesWithCultureCategory.map((place) => (
                            <CarouselCard
                                key={place.id}
                                title={place.attraction_name}
                                description={place.attraction_description || "No description available"}
                                image={place.attraction_image_url || defaultImg}
                                category={place.attraction_category || ' No category available'}
                            />
                        ))}
                    </div>

                    {/* gets displayed when Parks is clicked */}
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