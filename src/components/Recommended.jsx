/* eslint-disable react/prop-types */
//this component is used to display a carousel of attractions within 10 miles

import CarouselCard from "./DisplayCard.jsx"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx"
import defaultImg from "../assets/defaultImage.jpeg"
import {useTranslation} from "react-i18next"

//the component receives places and isRecommended as props from HeroSection.jsx
function Recommended({ places, isRecommended }) {

    //filter the places array to get places within 10 miles
    const closePlaces = places.filter(place => place.attraction_distance < 14)
    const {t} = useTranslation("common");

    return (<>{isRecommended ? <><div className=" pl-5  flex flex-col gap-5">
        <h1 className=' text-xl md:text-3xl text-black'>{t("nav.recommended")}</h1>
        <Carousel>
            <CarouselContent className=' w-[300px]'>

                {/* map through the places array and display the attraction card */}
                {closePlaces.map((place, index) => (
                    <CarouselItem key={index}>
                        <CarouselCard
                            title={place.attraction_name}
                            description={place.attraction_description || "No description available"}
                            image={place.attraction_image_url || defaultImg}
                            category={place.attraction_category || ' No category available'}
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

export default Recommended
