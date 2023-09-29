'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import slideOne from '../../../../public/images/slideOne.jpg';
import slideTwo from '../../../../public/images/slideTwo.jpg';
import slideThree from '../../../../public/images/slideThree.jpg';
import rectangle from '../../../../public/images/rectangle.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '@/styles/SliderPage.module.css';


const SliderPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        appendDots: dots => (
            <div style={{
                padding: "15px",
                width: "100%",
              }}>
                <div style={{backgroundColor: "#fff",
                 width:"150px",
                  margin:"auto",
                  borderRadius: "10px",}}>
                    <ul style={{ margin: "0px",}}> {dots} </ul>
                </div>    
            </div>
          ),
        };
    return (
        <div>
            <Slider {...settings}>
                <div className={styles.firstSlide}>
                    <h2 className='h-full text-white sm:px-10 px-4 text-center font-bold flex items-center text-2xl 
                    sm:text-4.5xl justify-center'>
                    تجربه غذای سالم و گیاهی به سبک ترخینه
                    </h2>
                </div>
                <div className={styles.secondSlide}>
                    <h2 className='h-full text-white sm:px-10 px-4 text-center font-bold flex items-center text-2xl 
                    sm:text-4.5xl justify-center'>
                    !طعم بی‌نظیر طبیعت
                    </h2>
                </div>
                <div className={styles.thirdSlide}>
                    <h2 className='h-full text-white sm:px-10 px-4 text-center font-bold flex items-center text-2xl 
                    sm:text-4.5xl justify-center'>
                    لذت غذای سالم و گیاهی را با ترخینه تجربه کنید
                    </h2>
                </div>
        </Slider>    
        </div>
    );
};

export default SliderPage;