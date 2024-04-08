import { useState, useEffect } from "react"
import defaultImg from "@/assets/defaultImage.jpeg"
import CarouselCard from "@/components/DisplayCard.jsx"
import supabase from "@/config/supabaseClient.js"
import LoadingSpinner from "@/components/ui/loading"

export default function Restaurant() {
    // State variables to store restaurants data and loading state
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Function to fetch restaurants data from Supabase
        const fetchRestaurants = async () => {
            try {
                setIsLoading(true);
                const { data: fetchedData, error } = await supabase
                    .from('Restaurants')
                    .select('*');
                if (error) {
                    console.log(error);
                } else {
                    setRestaurants(fetchedData);
                }
            } catch (err) {
                console.log(err.message);
            }
            setIsLoading(false);
        };

        // Call the fetchRestaurants function when the component mounts
        fetchRestaurants();
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className="pb-5 box-border h-full">
                    <div className=" mb-36">
                        <h1 className=" text-2xl mt-5 md:text-5xl mb-5 ml-4 font-extrabold">Search Restaurants </h1>
                        <div className=" grid sm:grid-cols-2 md:grid-cols-4 md:gap-5 gap-5">
                            {/* Map through the restaurants data and render CarouselCard components */}
                            {restaurants.map((restaurant) => (
                                <CarouselCard
                                    key={restaurant.id}
                                    title={restaurant.restaurant_name}
                                    description={restaurant.restaurant_description || "No description available"}
                                    image={restaurant.restaurant_image_url || defaultImg}
                                    category={restaurant.restaurant_category || ' No category available'}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}