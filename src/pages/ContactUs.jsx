import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import supabase from "@/config/supabaseClient"
import LoadingSpinner from "@/components/ui/loading"

const schema = z.object({
    email: z.string().email(),
})

export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [isError, setIsError] = useState(false)
    const [success, setSuccess] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

    const onSubmit = async () => {
        setIsSubmitting(true)
        setIsError(false)
        setIsSuccess(false)
        setError('')
        setSuccess('')

        const { error } = await supabase
            .from('Contact Us')
            .insert([{ name, email, message }])

        if (error) {
            setError('Error submitting contact form')
            setIsError(true)
            setIsSuccess(false)
        }
        else {
            setIsError(false)
            setSuccess('Contact form submitted successfully!')
            setIsSuccess(true)
        }
        setName('')
        setEmail('')
        setMessage('')
        setIsSubmitting(false)
    }

    return (
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
