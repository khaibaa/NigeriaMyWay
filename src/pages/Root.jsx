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
    const [state, setState] = useState("")

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

    const changeState = (event) => {
        setState(event.target.value);
    };

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
                    <div className=" w-full  h-10 flex-col items-end text-right">
                        <label className=" text-lg font-bold" htmlFor="states">Select State: &nbsp;</label>
                        <select className=" border-2 mr-5" value={state} onChange={(event) => { changeState(event) }} name="states" id="states">
                            <option value="">Select State</option>
                            <option className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" value="abuja">Abuja</option>
                            <option className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" value="kaduna">Kaduna</option>
                        </select>
                    </div>
                    {state === 'abuja' ? <Outlet /> : <div className=" text-neutral-500 mb-32 text-center text-3xl"> State coming soon... </div>}

                    {/* <div className=" mb-36">
                        <Faq />
                    </div> */}
                    <div className=" w-full bg-black h-1 "></div>
                    <Footer />
                </>
            )}
        </>
    )
}