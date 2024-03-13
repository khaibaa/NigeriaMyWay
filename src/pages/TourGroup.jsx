import DiscoverCard from "@/components/DiscoverCard.jsx"
import Header from "../components/Header.jsx"
import Faq from "@/components/Faq.jsx"
import Footer from "../components/Footer.jsx"

export default function TourGroup() {

    return (
        <div className="pb-5 box-border overflow-x-hidden overflow-y-scroll h-screen">
            <Header />
            <div className=" mb-36">
                <h1 className=" text-2xl md:text-5xl my-5 ml-4 font-extrabold">Available Tour Groups</h1>
                <div className=" md:grid md:grid-cols-4 md:gap-5 flex flex-col gap-5">
                    <DiscoverCard title='Around Abuja' amount='20/50 filled' />
                    <DiscoverCard title='the cultural amazement' amount='43/60 filled' />
                    <DiscoverCard title='city tour (3 days)' amount='16/20 filled' />
                    <DiscoverCard title='Abuja cuisine tour' amount='20/20 filled' />
                    <DiscoverCard title='into the wild' amount='45/100 filled' />
                    <DiscoverCard title='the best of abuja' amount='2/20 filled' />
                </div>
            </div>
            
            <div className=" mb-36">
                <Faq />
            </div>
            <Footer />
        </div>
    )
}