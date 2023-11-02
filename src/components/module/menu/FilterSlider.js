'use client';
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FilterSlider = () => {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      dots: false,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
                {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
                }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                
              ],
  
    };
    return (
      <div className='lg:w-600 w-11/12 text-neutral cursor-pointer'>
        <Slider {...settings}>
          <div className='pb-2 pt-1'>
            <Link className=' bg-ash rounded-full sm:px-4 px-2 pb-2 pt-1 hover:bg-emerald-100 sm:text-base text-xs' href={`/menu/recipe/?recipe=غذاهای-ایرانی`}>غذاهای ایرانی</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full sm:px-2 px-2 pb-2 pt-1 hover:bg-emerald-100 sm:text-base text-xs' href={`/menu/recipe/?recipe=غذاهای-غیرایرانی`}>غذاهای غیرایرانی</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full sm:px-10 px-6  pb-2 pt-1 hover:bg-emerald-100 sm:text-base text-xs' href={`/menu/recipe/?recipe=پیتزاها`}>پیتزاها</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full sm:px-6 px-2 pb-2 pt-1 hover:bg-emerald-100 sm:text-base text-xs' href={`/menu/recipe/?recipe=ساندویچ‌ها`}>ساندویچ‌ها</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full sm:px-4 px-2 pb-2 pt-1 hover:bg-emerald-100 sm:text-base text-xs' href='/'>پرفروش‌ترین</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full sm:px-4 px-2 pb-2 pt-1 hover:bg-emerald-100 sm:text-base text-xs' href='/'>اقتصادی‌ترین</Link>
          </div>
        </Slider>
      </div>)
};

export default FilterSlider;