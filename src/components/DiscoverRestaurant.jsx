/* eslint-disable react/prop-types */
//this component is used to display a carousel of restaurants

import CarouselCard from "./DisplayCard.jsx"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx"
import defaultImg from "../assets/defaultImage.jpeg"
import {useTranslation} from "react-i18next";


//the component receives restaurants and isDiscoverRestaurant as props from HeroSection.jsx
export default function DiscoverRestaurant({ restaurants, isDiscoverRestaurant }) {
    const {t} = useTranslation("common");

    //used to shuffle the restaurants array and display random restaurants
    function generateRandomItems(arr, count) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    return (
        <> {isDiscoverRestaurant ? <><div className=" pl-5 flex flex-col gap-5 bg-[#dad7cd]">
            <h1 className=' text-xl md:text-3xl text-black'>{t("body.discover")}</h1>
            <Carousel>
                <CarouselContent className=' w-[300px]'>

                    {/* map through the restaurants array and display the restaurant card */}
                    {generateRandomItems(restaurants, 10).map((restaurant, index) => (
                        <CarouselItem key={index}>
                            <CarouselCard
                                title={restaurant.restaurant_name}
                                description={restaurant.restaurant_description || "No description available"}
                                image={restaurant.restaurant_image_url || defaultImg}
                                category={restaurant.restaurant_category || ' No category available'}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div></> : ""} </>

    )
}
