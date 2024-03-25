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



function Recommended({ places, isRecommended }) {

    const closePlaces = places.filter(place => place.attraction_distance < 14)

    return (<>{isRecommended ? <><div className=" pl-5  flex flex-col gap-5">
        <h1 className=' text-3xl text-black'>Recommended ( within 10 miles )</h1>
        <Carousel>
            <CarouselContent className=' w-[300px]'>

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