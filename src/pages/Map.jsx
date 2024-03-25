import GoogleMapReact from "google-map-react";
import { useState, useEffect } from "react";
import supabase from "@/config/supabaseClient.js";
import LoadingSpinner from "@/components/ui/loading";

export default function GoogleMap() {
    const [coordinates, setCoordinates] = useState({});
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

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

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
        });
    }, []);

    return (
        <>{isLoading ? <LoadingSpinner /> : <div className="w-full flex mb-36 gap-14 h-[500px] ">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBCE0zZ_hwb0YrUVfKr8PRc9SaqJ5eBPWY" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                }}
                onChildClick={""}
            >
                {/* {restaurants?.map((restaurant, index) => (
                    <div>
                        key={index}
                        lat={Number(restaurant.latitude)}
                        lng={Number(restaurant.longitude)}
                        restaurant={restaurant}
                    </div>
                ))} */}
            </GoogleMapReact>
        </div>}</>
    );
}