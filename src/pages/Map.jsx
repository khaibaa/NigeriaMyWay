
import GoogleMapReact from 'google-map-react';
import { Paper, useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import supabase from '@/config/supabaseClient';
import { LocationOn } from '@mui/icons-material';

export default function GoogleMap() {

    const [coords, setCoords] = useState({});
    const [places, setPlaces] = useState([]);
    const [bounds, setBounds] = useState(null);

    const matches = useMediaQuery('(min-width:600px)');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        const fetchRestaurants = async () => {

            const { data: fetchedData, error } = await supabase
                .from('Restaurants') // Fetch data from the 'Restaurants' table in Supabase
                .select('*'); // Select all columns

            if (error) {
                console.error(error); // Log any errors that occurred during fetching
            } else {
                setPlaces(fetchedData); // Update the 'restaurants' state with the fetched data
            }
            // Set the loading state to false after fetching data
        };

        fetchRestaurants(); // Call the fetchRestaurants function when the component mounts
    }, []);

    useEffect(() => {
        if (bounds) {

            getPlacesData(bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
                });
        }
    }, [bounds]);


    return (
        <div className="w-full h-[85vh]">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBCE0zZ_hwb0YrUVfKr8PRc9SaqJ5eBPWY" }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
            >
                {places.length && places.map((place, i) => (
                    <div
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-20 hover:z-30"
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {!matches
                            ? <LocationOn color="primary" fontSize="large" />
                            : (
                                <Paper elevation={3} className="p-10 flex flex-col justify-center w-full">
                                    <img
                                        className="cursor-pointer"
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                    />
                                </Paper>
                            )}
                    </div>
                ))}

            </GoogleMapReact>
        </div>
    )
}

async function getPlacesData(sw, ne) {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'x-rapidapi-key': "5669b8537fmsh4e9efbbc1c1db15p19a08bjsn0757875ca42d",
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}
