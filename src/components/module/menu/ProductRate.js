'use client';
import Rating from "react-rating";
import GoldStar from "@/components/icons/GoldStar";
import EmptyStar from "@/components/icons/EmptyStar";

export default function ProductRate({rating}) {
    return(
        <Rating 
        emptySymbol={<EmptyStar />}
        fullSymbol={<GoldStar />}
        initialRating={rating} 
        readonly />
    )
};