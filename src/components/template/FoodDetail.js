'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ProductRate from '../module/menu/ProductRate';
import Back from '../icons/Back';


export default function FoodDetail({details}) {
    const router = useRouter();
    const{title, slug, ingredient, rating}= details;

  function backHandler() {
    router.back()
  }

  return (
    <div className='flex md:px-12 px-10 md:flex-row flex-col'>
      <div className='flex flex-col items-center text-raven pb-10 md:w-[600px] w-full mx-auto'> 
          <p className='sm:text-xl text-base font-semibold text-center pb-3'>اطلاعات محصول</p>
        <div>
          <Image src={`/images/${slug}.jpg`} alt='food' width={600} height={450} priority={true} />
        </div>
        <div className='flex justify-between w-full pt-2'>
          <p>{title}</p>
          <ProductRate rating={rating} />
        </div>
        <div className='flex justify-start w-full'>
          <p className='text-sm'>{ingredient}</p>
        </div>   
      </div>
      <div className='flex justify-end md:block'>
        <button className='bg-primary sm:pr-6 sm:pl-1 pr-4 text-white rounded-md sm:pb-1 sm:pt-0.5 
        hover:bg-emerald-600 transition flex items-center sm:text-base text-sm pt-1 pb-2 gap-2' 
          onClick={backHandler}>بازگشت
          <Back />
        </button>
      </div>
    </div>          
  )
}
