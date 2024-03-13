import CarouselCard from "../components/CarouselCard.jsx"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx"

export default function MyWishList() {
    return (
        <div className=" pl-5 flex flex-col gap-5">
            <h1 className=' text-3xl uppercase text-red-300'>My Wishlist</h1>
            <Carousel>
                <CarouselContent className=' w-[300px]'>
                    <CarouselItem><CarouselCard /></CarouselItem>
                    <CarouselItem><CarouselCard /></CarouselItem>
                    <CarouselItem><CarouselCard /></CarouselItem>
                    <CarouselItem><CarouselCard /></CarouselItem>
                    <CarouselItem><CarouselCard /></CarouselItem>
                    <CarouselItem><CarouselCard /></CarouselItem>
                    <CarouselItem><CarouselCard /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}
