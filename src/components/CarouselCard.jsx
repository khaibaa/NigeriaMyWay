import FavouriteIcon from "../assets/FavouriteIcon.svg"

function CarouselCard() {

    return (
        <div className=" text-slate-950 relative w-64 p-1 h-80 rounded-xl bg-slate-400">
            <div className=" w-full h-3/5 rounded-xl bg-gray-600">

            </div>

            <div className=" flex pt-2 flex-col h-2/5 justify-between">
                <div>
                    <h1 className=" mb-1">Card Title</h1>
                    <p>Card Description</p>
                </div>

                <button className=" bg-black rounded-lg p-1 text-white">Request Tour</button>
            </div>

            <button className=" absolute border border-black p-1 rounded-full top-2 right-2"><img src={FavouriteIcon} alt="" /></button>
        </div >
    )
}

export default CarouselCard