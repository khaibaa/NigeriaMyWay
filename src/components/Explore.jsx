import { useState, useEffect } from "react";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

export default function Explore() {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setImages([img2, img3, img4, img5]);
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, [images.length]);

    return (
        <div className="  relative flex flex-col items-center justify-center">
            <div className=" mt-10 mb-5 p-3 overflow-hidden w-full h-80 rounded-xl md:mb-5 md:w-2/3 md:h-[450px] relative">
                <img
                    src={images[currentIndex]}
                    alt="Slide"
                    className="w-full h-full rounded-xl"
                />
            </div>
            <button className=" absolute bottom-10 right-5 md:right-[250px] rounded-lg w-36 p-2 bg-green-900 z-50">Explore More</button>

        </div>
    );
}