/* eslint-disable react/prop-types */

// Importing the Dialog component from dialog.jsx in ui folder
import {
    Dialog,
    DialogContent,
    DialogTrigger
    
} from "@/components/ui/dialog"

//the dialog takes is props that allows for dynamic passing of data i.e isnt static
//the dialog displays 
function CarouselCard(props) {

    return (
        <>
            <Dialog>
                {/* This is the card that triggers dialog when clicked */}
                <DialogTrigger className=" hover:cursor-pointer" asChild>
                    <div className=" ml-4 mr-4 flex justify-between">
                        <div className=" border flex flex-col justify-between border-slate-400 p-2 h-80 w-72 rounded-xl">
                            <div className=" h-2/3 rounded-lg rounded-b-none border-2"><img src={props.image} alt="" className=" w-full h-full" /></div>
                            <button className=" border-2 rounded-t-none uppercase font-extrabold h-1/3 p-6 rounded-lg">{props.title} </button>
                        </div>

                    </div>
                </DialogTrigger>
                {/* this is the content of the dialog that pops up when the card is clicked */}
                <DialogContent className="sm:max-w-[650px]">
                <div className="max-w-2xl mx-auto mt-8 flex bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-2/5">
        <img src= {props.image} alt="Zuma Rock" className="w-96 h-1000" />
        
      </div>
      <div className="p-6 w-4/5">
        <p className="text-gray-700 text-sm leading-relaxed">
            {props.description}
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-2xl mr-2">
            Directions
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-xl">
            Request Tour
          </button>
        </div>
      </div>
    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default CarouselCard