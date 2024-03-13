import DiscoverCard from "@/components/DiscoverCard.jsx"
import Header from "../components/Header.jsx"
import Explore from "@/components/Explore.jsx"
import Faq from "@/components/Faq.jsx"
import Footer from "../components/Footer.jsx"

export default function Discover() {

    return (
        <div className="pb-5 box-border overflow-x-hidden overflow-y-scroll h-screen">
            <Header />
            <div className=" mb-36">
                <Explore />
                <h1 className=" text-2xl md:text-5xl mb-5 ml-4 font-extrabold">Discover Things To Do & Places To Be </h1>
                <div className=" md:grid md:grid-cols-4 md:gap-5 flex flex-col gap-5">
                    <DiscoverCard title='featured attractions' />
                    <DiscoverCard title='cultural experiences' />
                    <DiscoverCard title='events & festivals' />
                    <DiscoverCard title='gallery' />
                    <DiscoverCard title='tour groups' />
                    <DiscoverCard title='reviews & ratings' />
                </div>
            </div>
            <div className=" mb-36">
                <Faq />
            </div>
            <Footer />
        </div>
    )
}