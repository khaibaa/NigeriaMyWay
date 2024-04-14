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
  const whatsAppNumber = "+971568153347"

  const whatsAppMsgLink = `https://wa.me/${whatsAppNumber}?text=Hello%20I%20want%20to%20request%20a%20tour%20guide%20for%20${props.title}`

  const googleMapsLink = `https://www.google.com/maps/search/${props?.location?.street1}${props?.location?.street2 && props?.location?.street2}/@${props.longitude},${props.latitude}`

  const truncateDescription = () => {
    let description = props.description

    return description.slice(0, 40) + "...";
  }

    return (
        <>
            <Dialog>
                {/* This is the card that triggers dialog when clicked */}
                <DialogTrigger className=" hover:cursor-pointer" asChild>
                    <div className=" ml-4 mr-4 flex justify-between">
                        <div className=" flex flex-col justify-between h-80 w-72 rounded-xl relative">
                            <div className="h-full object-contain rounded-lg rounded-b-none"><img src={props.image} alt="" className="object-cover w-full h-full rounded-lg" /></div>
                            <div className="card-overlay w-full h-full absolute top-0 left-0 flex flex-col justify-end items-start text-white p-3 pb-3">
                              <h1 className="text-lg">
                              {
                                props.title
                              }
                              </h1>
 
                              <p className="text-xs font-light">
                              {truncateDescription()}
                            </p>
                            </div>

                            {/* <button className=" border-2 rounded-t-none uppercase font-extrabold h-1/3 p-6 rounded-lg">{props.title} </button> */}
                        </div>

                    </div>
                </DialogTrigger>
                {/* this is the content of the dialog that pops up when the card is clicked */}
                <DialogContent className="sm:max-w-[900px] bg-[#FFFFFF] flex rounded-3xl shadow-md overflow-hidden">
            <div className="bg-contain  flex justify-center items-center w-1/3 h-80">
              <img src={props.image} alt={props.title} className="w-72 h-72 rounded-2xl object-cover" />
            </div>
            <div className="p-6 w-2/3">
              <p className="text-gray-700 text-sm leading-relaxed">
                {props.description}
              </p>
              <div className="flex justify-center mt-6">
                <button className="bg-[#BED7DC] hover:opacity-50 text-black font-bold py-2 px-4 rounded-2xl mr-2">
                  <a href={googleMapsLink} target="_blank">
                  Directions
                  </a>
                </button>
                <button className="bg-[#BED7DC] hover:opacity-50 text-black font-bold py-2 px-4 rounded-xl">
                  <a href={whatsAppMsgLink} target="_blank">
                  Request Tour
                  </a>
                </button>
              </div>
            </div>
        </DialogContent>
            </Dialog>

        </>
    )
}

export default CarouselCard