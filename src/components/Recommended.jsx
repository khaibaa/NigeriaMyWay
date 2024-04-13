/* eslint-disable react/prop-types */

// This component is used to display a carousel of attractions within 10 miles

import { useState, useEffect } from 'react';
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

// The component receives places and isRecommended as props from HeroSection.jsx
function Recommended({ places, isRecommended }) {
  const [userLocation, setUserLocation] = useState(null);
  const [topAttractions, setTopAttractions] = useState([]);
  const { t } = useTranslation("common");

  useEffect(() => {
    // Get the user's location
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

    // Set the top attractions
    setTopAttractions(places.sort((a, b) => b.attraction_distance - a.attraction_distance).slice(0, 5));
  }, [places]);

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
                topAttractions.map((place, index) => (
                  <CarouselItem key={index}>
                    <CarouselCard
                      title={place.attraction_name}
                      description={place.attraction_description || "No description available"}
                      image={place.attraction_image_url || defaultImg}
                      category={place.attraction_category || " No category available"}
                    />
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Recommended;