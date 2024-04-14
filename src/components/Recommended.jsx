/* eslint-disable react/prop-types */

// This component is used to display a carousel of attractions within 10 miles

import React,  { useState, useEffect } from 'react';
import CarouselCard from "./DisplayCard.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import defaultImg from "../assets/defaultImage.jpeg";
import { useTranslation } from "react-i18next";
import axios from 'axios';


// The component receives places and isRecommended as props from HeroSection.jsx
function Recommended({ places, isRecommended }) {
  const [userLocation, setUserLocation] = useState({});
  const [topAttractions, setTopAttractions] = useState([]);
  const [tripPlaces, setTripPlaces] = useState([]);
  const { t } = useTranslation("common");
  const [lat,setLat] = useState(0)
  const [lng,setLng] = useState(0)


   const fetchAttractions = async (lat,lng) => {
     console.log("Fetching attractions...");
 
     const options = {
       method: 'GET',
       url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
       params: {
         longitude: lng,
         latitude: lat,
         lunit: 'km',
         limit: "10",
         currency: 'USD',
         distance: "10",
         lang: 'en_US'
       },
       headers: {
         'X-RapidAPI-Key': '5669b8537fmsh4e9efbbc1c1db15p19a08bjsn0757875ca42d',
         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
       }
     };
     try {
       const response = await axios.request(options);
       console.log(response.data.data);
      //  console.log("Before: ", tripPlaces);
       setTripPlaces(response.data.data)
      //  console.log("After: ", tripPlaces);
     } catch (error) {
       console.error(error);
     }
   }

   useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
    console.log (userLocation)
    fetchAttractions(userLocation.latitude,userLocation.longitude)

   }, [])
  // Function to calculate the distance between two points
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // Filter the places based on distance from the user's location
  const closePlaces = places.filter((place) => {
    if (userLocation) {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        place.latitude,
        place.longitude
      );
      return distance <= 10; // Filter places within a 10-mile radius
    }
    return false;
  });

  return (
    <>
      {isRecommended ? (
        <div className=" pl-5 flex flex-col gap-5">
          <h1 className=" text-xl md:text-3xl text-black">{t("nav.recommended")}</h1>
          <Carousel>
            <CarouselContent className=" w-[300px]">
              {closePlaces.length > 0 ? (
                // Map through the places array and display the attraction card
                closePlaces.map((place, index) => (
                  <CarouselItem key={index}>
                    <CarouselCard
                      title={place.attraction_name}
                      description={place.attraction_description || "No description available"}
                      image={place.attraction_image_url || defaultImg}
                      category={place.attraction_category || " No category available"}
                    />
                  </CarouselItem>
                ))
              ) : (
                // Display the top attractions if there are no attractions within 10 miles
                tripPlaces?.map((place, index) => {
                  return (
                  <CarouselItem key={index}>
                    <CarouselCard
                      title={place?.name}
                      description={place?.description || "No description available"}
                      image={place.photo?.images?.original.url || defaultImg}
                      category={place?.category?.name || " No category available"}
                      location={place?.address_obj}
                      latitude={place?.latitude}
                      longitude={place?.longitude}
                    />
                  </CarouselItem>
                )})
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default Recommended;