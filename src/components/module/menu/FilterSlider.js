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
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
                }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
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
                {
                  breakpoint: 360,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ],
  
    };
    return (
      <div className='lg:w-600 w-3/4 text-neutral'>
        <Slider {...settings}>
          <div className='pb-2 pt-1'>
            <Link className=' bg-ash rounded-full px-4 pb-2 pt-1 hover:bg-emerald-100' href='/'>غذاهای ایرانی</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full px-2 pb-2 pt-1 hover:bg-emerald-100' href='/'>غذاهای غیرایرانی</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full px-10 pb-2 pt-1 hover:bg-emerald-100' href='/'>پیتزاها</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full px-6 pb-2 pt-1 hover:bg-emerald-100' href='/'>ساندویچ‌ها</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full px-4 pb-2 pt-1 hover:bg-emerald-100' href='/'>پرفروش‌ترین</Link>
          </div>
          <div className='pb-2 pt-1'>
            <Link className='bg-ash rounded-full px-4 pb-2 pt-1 hover:bg-emerald-100' href='/'>اقتصادی‌ترین</Link>
          </div>
        </Slider>
      </div>)
};

export default FilterSlider;