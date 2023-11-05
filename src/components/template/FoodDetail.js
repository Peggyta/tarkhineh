'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ProductRate from '../module/menu/ProductRate';



export default function FoodDetail({details}) {
    const router = useRouter();
    const{title, slug, ingredient, rating}= details;

  function backHandler() {
    router.back()
  }

  return (
    <>
      <div className='flex flex-col items-center px-12 text-raven'>
        <div className='flex justify-between w-full pt-4 pb-6'>
          <p className='invisible'>fhc'aj</p>
          <p className='text-xl font-semibold'>اطلاعات محصول</p>
          <button className='bg-primary px-6 text-white rounded-md pb-1 pt-0.5 hover:bg-emerald-600 transition' 
          onClick={backHandler}>بازگشت</button>
        </div>
      <div>
          <Image src={`/images/${slug}.jpg`} alt='food' width={808} height={441} />
      </div>
      <div className='flex justify-between w-[808px] pt-2'>
        <p>{title}</p>
        <ProductRate rating={rating} />
      </div>
      <div className='flex justify-start w-[808px]'>
        <p className='text-sm'>{ingredient}</p>
      </div>   
      </div>
                  
    </>
  )
}
