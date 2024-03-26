/* eslint-disable react/prop-types */
import { useState } from "react"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom"
import supabase from "@/config/supabaseClient"
import { Link } from "react-router-dom"
import LoadingSpinner from "@/components/ui/loading"


const schema = z.object({
    // Define a schema for an object using the zod library
    email: z.string().email(),
    // Define a property called 'email'
    // This property must be a string
    // and it must be a valid email address
    // according to the email validation rules defined in zod

    password: z.string().min(8),
    // Define a property called 'password'
    // This property must be a string
    // and it must have a minimum length of 8 characters
})

export default function Login() {
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

    const onSubmit = async (datas) => {
        setIsLoading(true); // Set the loading state to true before submitting

        try {
            const { data, error: authError } = await supabase.auth.signInWithPassword({
                email: datas.email,
                password: datas.password,
            });

            if (authError) {
                setIsError(true); // Set the error state to true if there's an authentication error
                if (authError.message === 'Invalid login credentials') {
                    setError('Invalid login details'); // Set a specific error message for invalid credentials
                } else {
                    setError('An unexpected error occurred'); // Set a generic error message for other errors
                }
                console.error(authError); // Log the authentication error
            } else if (data) {
                setIsError(false); // Reset the error state if authentication is successful
                console.log(data); // Log the authentication data
                navigate('/', { replace: true }); // Navigate to the root path and replace the current entry in the history
            }
        } catch (err) {
            setIsError(true); // Set the error state to true if there's an unexpected error
            setError('An unexpected error occurred'); // Set a generic error message
            console.error(err); // Log the unexpected error
        }

        setIsLoading(false); // Set the loading state to false after submitting
    };

    return (<>{isLoading ? <LoadingSpinner /> :
        //Creating a login form with email and password fields and a submit button
        <div className=" p-5 flex flex-col gap-14">
            <div className=" flex justify-end">
                <Link to="/signup">
                    <Button className="bg-black text-white hover:bg-slate-900">
                        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Sign Up with Email
                    </Button>
                </Link>
            </div>
            <div className=" flex flex-col gap-5 justify-center items-center h-96">
                <div className=" text-2xl flex flex-col gap-5 text-center">
                    <h1 className=" text-3xl font-bold">Sign in</h1>
                    <p className=" text-gray-400 text-sm">Please sign in to your account</p>
                    <form action="" onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2" >
                        <div>
                            <div className=" w-96 text-left">
                                <Label>Email</Label>
                                <Input
                                    autoComplete='username'
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
                                    autoComplete='current-password'
                                    {...register("password")}
                                    type="password"
                                    placeholder="Password"
                                />
                                {errors.password && <span className=" text-red-500 text-xs">Password must be at least 8 characters</span>}
                            </div>
                        </div>
                        <div>
                            <button type="submit" className=" w-full bg-black text-white hover:bg-opacity-90 h-10 px-4 py-2 rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Sign in</button>
                        </div>
                        {isError && <div className=" text-red-500 text-xs">{error}</div>}
                    </form>
                </div>


            </div>
        </div >}</>

    )
}