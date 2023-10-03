import React from "react";
import Image from "next/image";
import loadImg from '../../public/images/loading.gif';

function Loading() {
    return(
        <div className="bg-grass h-screen flex justify-center items-center">
            <Image src={loadImg} alt="loading" width={350} height={350} />
        </div>
    )
}

export default Loading;