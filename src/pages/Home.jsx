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

    //fetch restaurant data from api
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
        <> {isLoading ? <LoadingSpinner /> : <> <div className="pb-5 box-border h-full">
            <HeroSection
                setIsRecommended={setIsRecommended}
                setIsTopDestinations={setIsTopDestinations}
                setIsDiscoverRestaurant={setIsDiscoverRestaurant}
                places={places}

            />
            <div className=" flex mb-36 flex-col gap-14">
                <Recommended places={places} isRecommended={isRecommended} />
                <TopDestinations places={places} isTopDestinations={isTopDestinations} />
                <DiscoverRestaurant restaurants={restaurants} isDiscoverRestaurant={isDiscoverRestaurant} />
            </div>
        </div> </>}
        </>

    )
}

