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
                setIsLoading(true); // Set the loading state to true before fetching data

                const { data: fetchedData, error } = await supabase
                    .from('Restaurants') // Fetch data from the 'Restaurants' table in Supabase
                    .select('*'); // Select all columns

                if (error) {
                    console.error(error); // Log any errors that occurred during fetching
                } else {
                    setRestaurants(fetchedData); // Update the 'restaurants' state with the fetched data
                }
            } catch (err) {
                console.log(err.message); // Log any unexpected errors that occurred
            }

            setIsLoading(false); // Set the loading state to false after fetching data
        };

        fetchRestaurants(); // Call the fetchRestaurants function when the component mounts
    }, []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoordinates({
                    lat: position.coords.latitude, // Update the 'coordinates' state with the latitude
                    lng: position.coords.longitude, // Update the 'coordinates' state with the longitude
                });
            }
        );
    }, []); // This effect runs only once when the component mounts

    return (
        <>{isLoading ? <LoadingSpinner /> : <div className="w-full flex mb-36 gap-14 h-[500px] ">
            <GoogleMapReact
                // Provide the Google Maps API key
                bootstrapURLKeys={{ key: "AIzaSyBCE0zZ_hwb0YrUVfKr8PRc9SaqJ5eBPWY" }}
                // Set the current center default center coordinates of the map
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                // Callback function triggered when the map is moved or zoomed
                onChange={(e) => {
                    // Update the coordinates state with the new center coordinates
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                }}
            >
                {/* ToDo: Add markers for each restaurant */}
            </GoogleMapReact>
        </div>}</>
    );
}