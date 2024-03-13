import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Faq from "../components/Faq.jsx"
import CarouselCard from "@/components/CarouselCard.jsx"

export default function Wishlist() {
    return (
        <div className="pb-5 box-border overflow-x-hidden overflow-y-scroll h-screen">
            <Header />
            <div className="  flex flex-col items-center justify-center">
                <h1 className=" text-2xl md:text-5xl my-5 ml-4 font-extrabold">My Wish-List</h1>
                <div className=" flex flex-col  md:grid md:grid-cols-4 gap-4 mt-5 ml-5 mr-5 mb-36">
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                </div>
            </div>
            <div className=" mb-36">
                <Faq />
            </div>
            <Footer />
        </div>

    )
}
