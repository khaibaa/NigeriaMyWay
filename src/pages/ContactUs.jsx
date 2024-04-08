import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import supabase from "@/config/supabaseClient"
import LoadingSpinner from "@/components/ui/loading"

// Define a schema for the form data
const schema = z.object({
    // Define a schema for an object
    email: z.string().email(), // Define a property called 'email'
    // The 'email' property must be a string and must be a valid email address
    // defined in the zod library
})

export default function ContactUs() {
    const [name, setName] = useState('') // State for name input
    const [email, setEmail] = useState('') // State for email input
    const [message, setMessage] = useState('') // State for message input
    const [isSubmitting, setIsSubmitting] = useState(false) // State for form submission status
    const [error, setError] = useState("") // State for error message
    const [isError, setIsError] = useState(false) // State for error flag
    const [success, setSuccess] = useState("") // State for success message
    const [isSuccess, setIsSuccess] = useState(false) // State for success flag

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })
    // Using react-hook-form library for form handling and validation

    const onSubmit = async () => {
        setIsSubmitting(true) // Set submitting state to true
        setIsError(false) // Reset error state
        setIsSuccess(false) // Reset success state

        const { error } = await supabase.from('Contact Us').insert([{ name, email, message }]) // Insert form data to Supabase

        if (error) {
            setError('Error submitting contact form') // Set error state if error occurs
            setIsError(true)
        } else {
            setSuccess('Contact form submitted successfully!') // Set success state if successful
            setIsSuccess(true)
        }

        setName('') // Reset form fields
        setEmail('')
        setMessage('')
        setIsSubmitting(false) // Set submitting state to false
    }

    return (

        //A form for collecting contact info and storign in database
        <div className=" mb-28 flex flex-col gap-5 justify-center items-center h-96">
            <p className=" text-xl">Contact Us Form</p>
            {isSubmitting ? <LoadingSpinner /> :
                <form action="" onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2" >
                    <div>
                        <div className=" w-96 text-left">
                            <Label>Name</Label>
                            <Input
                                required
                                {...register("name")}
                                type="text"
                                placeholder="john doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className=" w-96 text-left">
                            <Label>Email</Label>
                            <Input
                                required
                                {...register("email")}
                                type="text"
                                placeholder="abc@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className=" text-red-500 text-xs">Please enter a valid email</span>}
                        </div>
                    </div>
                    <div>
                        <div className=" w-96 text-left">
                            <Label>Message</Label>
                            <textarea
                                required
                                className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="...your message here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {errors.email && <span className=" text-red-500 text-xs">Please enter a valid email</span>}
                        </div>
                    </div>
                    {isError && <div className=" text-red-600">{error}</div>}
                    {isSuccess && <div className=" text-green-600">{success}</div>}
                    <div>
                        <button type="submit" className=" w-full bg-black text-white hover:bg-opacity-90 h-10 px-4 py-2 rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Submit Form</button>
                    </div>
                    {/* {isError && <div className=" text-red-500 text-xs">{error}</div>} */}
                </form>}
        </div>

    )

}
