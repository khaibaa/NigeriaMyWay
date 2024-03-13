import rightArrow from "../assets/RightArrow.svg"

// eslint-disable-next-line react/prop-types
export default function DiscoverCard({ title, amount }) {

    return (
        <div className=" ml-4 mr-4 flex justify-between">
            <div className=" border flex flex-col justify-between border-slate-400 p-2 h-80 w-72 rounded-xl">
                <div className=" h-2/3 rounded-lg rounded-b-none bg-slate-600"></div>
                <button className=" bg-red-400 rounded-t-none uppercase font-extrabold h-1/3 p-6 rounded-lg">{title}<br /> <span className=" font-bold text-black">{amount}</span> </button>
            </div>
            <button className=" md:hidden flex justify-center items-center">
                <div className=" rounded-full flex bg-white justify-center h-24 border">
                    <img src={rightArrow} width={96} height={96} alt="" />
                </div>
            </button>
        </div>
    )
}
