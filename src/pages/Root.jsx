import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "@/config/supabaseClient.js"
import NotLoggedIn from "@/components/NotLoggedIn";

export default function Root() {
    // State to hold user data
    const [user, setUser] = useState({})

    useEffect(() => {
        async function getUserData() {
            // Retrieve user data from Supabase authentication
            await supabase.auth.getUser().then((value) => {
                if (value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData()
    }, [])

    return (
        <>
            {/* Check whether user is signed in or not */}
            {Object.keys(user) == 0 ? (
                <>
                    {/* Render NotLoggedIn component if user is not signed in */}
                    <NotLoggedIn />
                </>
            ) : (
                <>
                    {/* Render the following components if user is signed in */}
                    <Header />
                    <Outlet />
                    <div className=" mb-36">
                        <Faq />
                    </div>
                    <div className=" w-full bg-black h-1 "></div>
                    <Footer />
                </>
            )}
        </>
    )
}