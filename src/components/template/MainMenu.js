import React from 'react';
import Link from 'next/link';
import SliderPage from '../module/homepage/SliderPage';
import FoodCard from '../module/menu/FoodCard';
import SearchFilter from '../module/menu/SearchFilter';

const MainMenu = ({foodData}) => {
        return (
        <div>
            <SliderPage />
            <div className='w-full bg-ash'>
                <div className='text-neutral lg:px-12 px-4 flex md:gap-7 gap-4 pb-4 pt-3 sm:text-xl text-base font-bold '>
                    <Link href={`/menu/?category=غذای-اصلی`}>غذای اصلی</Link>
                    <Link href={`/menu/?category=پیش-غذا`}>پیش غذا</Link>
                    <Link href={`/menu/?category=دسر`}>دسر</Link>
                    <Link href={`/menu?category=نوشیدنی`}>نوشیدنی</Link>
                </div>
            </div>
            <SearchFilter />
            <div className='grid lg:grid-cols-2 grid-cols-1 place-items-center gap-6 py-8 xl:px-0 lg:px-10 px-4'>
                {foodData.length ? (
                    foodData.map((food)=> {
                        return(
                                <FoodCard key={food._id} data={JSON.parse(JSON.stringify(food))} />
                        )
                    })
                ): (<h3>loading</h3>)}
            </div>
   
            {/* <div className='text-center font-bold text-4xl pt-6'>
                <p>در حال ساخت...</p>
                <p>!Under Construction</p>
            </div> */}
        </div>
    );
};

export default MainMenu;