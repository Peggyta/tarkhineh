'use client';
import Rating from "react-rating";
import HeartIcon from "@/components/icons/HeartIcon";


export default function ProductRate({rating}) {
    return(
        <Rating 
        value={rating}
        emptySymbol={<HeartIcon />}
        fullSymbol={<HeartIcon />} 
        readonly />
    )
}