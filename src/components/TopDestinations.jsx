/* eslint-disable react/prop-types */
import CarouselCard from "../components/CarouselCard.jsx"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx"
import defaultImg from "../assets/defaultImage.jpeg"


export default function TopDestinations({ places, isTopDestinations }) {
    return (
        <>{isTopDestinations ? <><div className=" pl-5 flex flex-col gap-5">
            <h1 className=' text-3xl text-black'>Top 10 Destinations</h1>
            <Carousel>
                <CarouselContent className=' w-[300px]'>

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
