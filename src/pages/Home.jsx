import HeroSection from "../components/HeroSection.jsx"
import Recommended from "@/components/Recommended.jsx"
import TopDestinations from "@/components/TopDestinations.jsx"
import { useState, useEffect } from "react"
import LoadingSpinner from "@/components/ui/loading.jsx"
import DiscoverRestaurant from "@/components/DiscoverRestaurant.jsx"
import supabase from "@/config/supabaseClient.js"

export default function Home() {
    const [places, setPlaces] = useState([])
    const [isRecommended, setIsRecommended] = useState(true)
    const [isTopDestinations, setIsTopDestinations] = useState(true)
    const [isDiscoverRestaurant, setIsDiscoverRestaurant] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [restaurants, setRestaurants] = useState([])
    

    //fetch attraction data from supabase
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                setIsLoading(true);
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
            setIsLoading(false);
        };
        fetchPlaces();
    }, []);

    //fetch restaurant data from supabase table
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                setIsLoading(true);
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
            setIsLoading(false);
        };
        fetchRestaurants();
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingSpinner /> // Render a loading spinner if isLoading is true
            ) : (
                <>
                    <div className="pb-5 box-border h-full">
                        <HeroSection
                            setIsRecommended={setIsRecommended} // Prop to set isRecommended state
                            setIsTopDestinations={setIsTopDestinations} // Prop to set isTopDestinations state
                            setIsDiscoverRestaurant={setIsDiscoverRestaurant} // Prop to set isDiscoverRestaurant state
                            places={places} // Prop to pass places data
                        />
                        <div className="flex mb-36 flex-col gap-14">
                            <Recommended
                                places={places} // Pass places data to Recommended component
                                isRecommended={isRecommended} // Pass isRecommended state to Recommended component
                            />
                            <TopDestinations
                                places={places} // Pass places data to TopDestinations component
                                isTopDestinations={isTopDestinations} // Pass isTopDestinations state to TopDestinations component
                            />
                            <DiscoverRestaurant
                                restaurants={restaurants} // Pass restaurants data to DiscoverRestaurant component
                                isDiscoverRestaurant={isDiscoverRestaurant} // Pass isDiscoverRestaurant state to DiscoverRestaurant component
                            />
                        </div>
                    </div>
                </>
            )}
        </>

    )
}

