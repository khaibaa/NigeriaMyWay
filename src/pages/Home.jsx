import DayTours from "@/components/DayTours.jsx"
import Header from "../components/Header.jsx"
import HeroSection from "../components/HeroSection.jsx"
import Recommended from "@/components/Recommended.jsx"
import TopDestinations from "@/components/TopDestinations.jsx"
import MultiDayTours from "@/components/MultiDayTours.jsx"
import MyWishList from "@/components/MyWishList.jsx"
import Faq from "@/components/Faq.jsx"
import Footer from "@/components/Footer.jsx"
import getData from "@/api/data.js"
import { useState, useEffect } from "react"

export default function Home() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        getData().then((data) => {
            setPlaces(data)
        })
    }, [])

    return (
        <div className="pb-5 box-border overflow-x-hidden overflow-y-scroll h-screen">
            <Header />
            <HeroSection />
            <div className=" flex mb-36 flex-col gap-14">
                <Recommended />
                <TopDestinations />
                <DayTours />
                <MultiDayTours />
                <MyWishList />
            </div>
            <div className=" mb-36">
                <Faq />
            </div>
            <Footer />
        </div>
    )
}

