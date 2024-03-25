/* eslint-disable react/prop-types */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function CarouselCard(props) {

    return (
        <>
            <Dialog>
                <DialogTrigger className=" hover:cursor-pointer" asChild>
                    <div className=" ml-4 mr-4 flex justify-between">
                        <div className=" border flex flex-col justify-between border-slate-400 p-2 h-80 w-72 rounded-xl">
                            <div className=" h-2/3 rounded-lg rounded-b-none border-2"><img src={props.image} alt="" className=" w-full h-full" /></div>
                            <button className=" border-2 rounded-t-none uppercase font-extrabold h-1/3 p-6 rounded-lg">{props.title} </button>
                        </div>

                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle> {props.title} </DialogTitle>
                        <DialogDescription>
                            {props.description}
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <p>Category: {props.category}</p>
                    </div>

                    <DialogFooter>

                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default CarouselCard