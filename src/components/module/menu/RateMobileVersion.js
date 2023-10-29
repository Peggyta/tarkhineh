'use client';
import Rating from "react-rating";
import SFullStar from "@/components/icons/SFullStar";
import SEmptyStar from "@/components/icons/SEmptyStar";

export default function RateMobileVersion({rating}) {
    return(
        <Rating 
        emptySymbol={<SEmptyStar />}
        fullSymbol={<SFullStar />}
        initialRating={rating} 
        readonly />
    )
};