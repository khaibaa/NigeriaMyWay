//this component is displayed when a user is not logged in
//it festures 10 attractions and 10 restaurants

import supabase from "@/config/supabaseClient";
import { useState, useEffect } from "react";
import CarouselCard from "./DisplayCard";
import NotHeader from "./NotHeader";

export default function NotLoggedIn() {
    const [places, setPlaces] = useState([])
    const [restaurants, setRestaurants] = useState([])

    //fetch attraction data from supabase
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const { data: fetchedData, error } = await supabase
                    .from('Attractions')
                    .select('*');

                if (error) {
                    console.error(error);
                } else {
                    setPlaces(fetchedData);
                }
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchPlaces();
    }, []);

    //fetch restaurant data from supabase table
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const { data: fetchedData, error } = await supabase
                    .from('Restaurants')
                    .select('*');

                if (error) {
                    console.error(error);
                } else {
                    setRestaurants(fetchedData);
                }
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchRestaurants();
    }, []);

    const filteredPlaces = places.slice(0, 10);
    const filteredRestaurants = restaurants.slice(0, 10);


    return (
        <>
            <NotHeader />
            <h1 className=" text-center pt-10 text-gray-400">Log in or Sign up to access full site features</h1>

            {/* displaying featured attractions */}
            <h1 className=" text-2xl md:text-5xl p-5">Featured Attractions</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                {filteredPlaces.map(place => (
                    <>
                        <CarouselCard
                            key={place.id}
                            title={place.attraction_name}
                            description={place.attraction_description || "No description available"}
                            image={place.attraction_image_url}
                            category={place.attraction_category || ' No category available'}
                        />
                    </>
                ))}

            </div>

            {/* displaying featured restaurants */}
            <h1 className=" text-2xl md:text-5xl p-5">Featured Restaurants</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                {filteredRestaurants.map(restaurant => (
                    <>
                        <CarouselCard
                            key={restaurant.id}
                            title={restaurant.restaurant_name}
                            description={restaurant.restaurant_description || "No description available"}
                            image={restaurant.restaurant_image_url}
                            category={restaurant.restaurant_category || ' No category available'}
                        />
                    </>
                ))}

            </div>
        </>
    )
}
