/* eslint-disable react/prop-types */
//this component is used to display a carousel of top desinations

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



//the component receives places and isTopDestinations as props from HeroSection.jsx
export default function TopDestinations({ places, isTopDestinations }) {
    const {t} = useTranslation("common");

    return (
        <>{isTopDestinations ? <><div className=" pl-5 flex flex-col gap-5">
            <h1 className=' text-xl md:text-3xl text-black'>{t("body.top")}</h1>
            <Carousel>
                <CarouselContent className=' w-[300px]'>

                    {/* map through the places array and display the attraction card and gets top places */}
                    {places
                        .slice(0, 10) // Get the first 10 items from the filtered array
                        .map((place, index) => (
                            <CarouselItem key={index}>
                                <CarouselCard
                                    title={place.attraction_name}
                                    description={place.attraction_description || "No description available"}
                                    image={place.attraction_image_url || defaultImg}
                                    category={place.category || ' No category available'}
                                />
                            </CarouselItem>
                        ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div></> : ""}</>

    )
}
