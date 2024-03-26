/* eslint-disable react/prop-types */
// Import necessary modules and assets
import { useState } from "react"
import AddIcon from "../assets/AddIcon.svg" // Import an SVG icon
import CarouselCard from "./DisplayCard"; // Import a custom component
import defaultImg from "../assets/defaultImage.jpeg" // Import a default image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome icon library
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons"; // Import a specific FontAwesome icon

// Define the HeroSection functional component
function HeroSection({ places, setIsRecommended, setIsTopDestinations, setIsDiscoverRestaurant }) {
    // State variables to control menu and display filters
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [diplayAll, setDisplayAll] = useState(false)
    const [displayMalls, setDisplayMalls] = useState(false)
    const [displayTours, setDisplayTours] = useState(false)
    const [displayParks, setDisplayParks] = useState(false)

    // Function to display all places
    function handleAll() {
        setDisplayAll(true) // Set diplayAll to true
        setDisplayMalls(false) // Set all other display filters to false
        setDisplayTours(false)
        setDisplayParks(false)
        setIsRecommended(false) // Update parent component state to not display recommended places
        setIsTopDestinations(false) // Update parent component state to not display top destinations
        setIsDiscoverRestaurant(false) // Update parent component state to not display restaurants
    }

    // Function to display malls
    function handleMalls() {
        setDisplayMalls(true) // Set displayMalls to true
        setDisplayAll(false) // Set all other display filters to false
        setDisplayTours(false)
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
        setDisplayTours(false)
        setIsRecommended(false) // Update parent component state to not display recommended places
        setIsTopDestinations(false) // Update parent component state to not display top destinations
        setIsDiscoverRestaurant(false) // Update parent component state to not display restaurants
    }

    // Function to display tours
    function handleTours() {
        setDisplayTours(true) // Set displayTours to true
        setDisplayAll(false) // Set all other display filters to false
        setDisplayMalls(false)
        setDisplayParks(false)
        setIsRecommended(false) // Update parent component state to not display recommended places
        setIsTopDestinations(false) // Update parent component state to not display top destinations
        setIsDiscoverRestaurant(false) // Update parent component state to not display restaurants
    }

    // Function to remove all filters
    function removeFilters() {
        setDisplayTours(false) // Reset all display filter states to false
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

    // Filter the 'places' array and create a new array called 'placesWithToursCategory'
    // that contains only the places where the 'attraction_category' property is equal to "Tours"
    const placesWithToursCategory = places.filter(
        (place) => place.attraction_category === "Tours");

    // Filter the 'places' array and create a new array called 'placesWithParksCategory'
    // that contains only the places where the 'attraction_category' property is equal to "Nature & Parks"
    const placesWithParksCategory = places.filter(
        (place) => place.attraction_category === "Nature & Parks");


    return (
        <div className="pl-5 pr-5 pb-5">
            <div className="relative">

                {/* Fixed menu for small screens */}
                <div className="fixed z-50 bg-white border-2 sm:hidden bottom-5 right-5 p-5 rounded-md">
                    {/* Filter items for mobile with fuctions that were defined above */}
                    {isMenuOpen && (
                        <div className="text-lg flex flex-col gap-4 mb-10">
                            <button onClick={handleAll}>All</button>
                            <button onClick={handleParks}>Parks</button>
                            <button onClick={handleMalls}>Malls</button>
                            <button onClick={handleTours}>Tours</button>
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

                <div className=" pb-5 w-full">
                    <h1 className=" uppercase text-center leading-normal mb-1 text-2xl mt-8 md:text-5xl">explore nigeria, your way!</h1>
                    <hr className=" mb-5"></hr>
                    <div className=" mb-8 justify-center gap-x-2 flex-wrap gap-y-2 hidden mt-20 sm:flex">
                        {/* Filter items for desktop with fuctions that were defined above */}
                        <div className="flex text-white gap-x-0 rounded-xl border border-outline border-opacity-15">
                            <button onClick={() => { handleAll() }} className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:border-2"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">All</span></button>
                            <button onClick={() => { handleParks() }} className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:border-2"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Parks</span></button>
                            <button onClick={() => { handleMalls() }} className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:border-2"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Malls</span></button>
                            <button onClick={() => { handleTours() }} className="py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative hover:border-2"><span className="text-2xl xl:text-h6 relative mix-blend-exclusion  z-10">Tours</span></button>
                        </div>
                        {/* icon to remove filters when cliked  */}
                        <FontAwesomeIcon onClick={() => { removeFilters() }} className=" h-16 w-16 transition-all hover:cursor-pointer" icon={faRectangleXmark} />
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

                    {/* gets displayed when Tours is clicked */}
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