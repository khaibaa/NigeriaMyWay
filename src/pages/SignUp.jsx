import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
// Import the Zod library
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import supabase from "@/config/supabaseClient"
import { Link } from "react-router-dom"
import LoadingSpinner from "@/components/ui/loading"

// Define the schema using Zod's object method
const schema = z.object({
    // Define the 'email' field as a string that must be a valid email address
    email: z.string().email(),
    // Define the 'password' field as a string with a minimum length of 8 characters
    password: z.string().min(8),
});

export default function SignUp() {

    // State variables for error handling, loading, and success status
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Navigate function from React Router for navigation

    // useForm hook from react-hook-form for form handling and validation
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

    // Function to handle form submission
    const onSubmit = async (datas) => {
        setIsLoading(true)
        try {
            // Sign up the user using Supabase authentication
            const { data, error } = await supabase.auth.signUp({
                email: datas.email,
                password: datas.password,
            });
            if (error) {
                // Set error state if there's an error
                setIsError(true)
                setError("Try again later");
            } else if (data) {
                // Clear error state and navigate to the home page on successful sign-up
                setIsError(false)
                setSuccess("Verification email sent. Please check your email to verify your account.")
                setIsSuccess(true)
            }
        } catch (err) {
            // Set error state and log the error if an unexpected error occurs
            setIsError(true);
            setError('An unexpected error occurred');
            console.error(err);
        }
        setIsLoading(false)
    };

    // Conditional rendering based on success status
    if (isSuccess) {
        // Show an alert message if the sign-up is successful
        return alert("Verification email sent. Please check your email to verify your account.")
    }

    return <>{isLoading ? (<LoadingSpinner />) :
        //Creating a sign up form with email and password fields and a submit button
        //The form uses the useForm hook from react-hook-form for form handling and validation
        <div className=" p-5 flex flex-col gap-14">
            <div className=" flex justify-end">
                <Link to="/login">
                    <Button className="w-full bg-black text-white hover:bg-slate-900">
                        Login
                    </Button>
                </Link>
            </div>
            <div className=" flex flex-col justify-center items-center h-96">
                <div className=" text-2xl flex flex-col text-center">
                    <div className=" grid gap-3">
                        <h1 className=" text-3xl font-bold">Create an account</h1>
                        <p className=" text-sm text-gray-400">Enter your email below to create an account</p>
                    </div>

                    <form action="" onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2" >
                        <div>
                            <div className=" w-96 text-left">
                                <Label>Email</Label>
                                <Input
                                    {...register("email")}
                                    type="text"
                                    placeholder="abc@example.com"
                                />
                                {errors.email && <span className=" text-red-500 text-xs">Please enter a valid email</span>}
                            </div>
                        </div>
                        <div className=" mb-3">
                            <div className=" text-left">
                                <Label>Password</Label>
                                <Input
                                    {...register("password")}
                                    type="password"
                                    placeholder="Password"
                                />
                                {errors.password && <span className=" text-red-500 text-xs">Password must be at least 8 characters</span>}
                            </div>
                        </div>
                        <div>
                            <button type="submit" className=" w-full bg-black text-white hover:bg-opacity-90 h-10 px-4 py-2 rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Sign Up</button>
                        </div>
                        {success && <div className=" text-green-500 text-xs">{success}</div>}
                        {isError && <div className=" text-red-500 text-xs">{error}</div>}
                    </form>
                </div>


            </div>
        </div >}

    </>
}