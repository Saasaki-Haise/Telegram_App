import React from "react";
import Image from 'next/image';
import "../css/style.css";

export const Apes_img = () => {
    return (
        <div className="container-img">
            <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 img-button">Connect you wallet</button>
            <Image className="image-apes"
                alt="desert"
                src="./apes.jpg"
                height={250}
                width={250}
                unoptimized
            />
            <h1 className="balance">145 000 APES</h1>
        </div>
    )
}