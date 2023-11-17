import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import CancelDark from '@/components/icons/CancelDark';
import SearchIcon from '@/components/icons/SearchIcon';

export default function SearchModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div>
          <span 
              className='bg-secondary lg:p-2 p-1 hidden md:block cursor-pointer rounded-md hover:bg-emerald-200 transition' 
              onClick={openModal}>
              <SearchIcon /> 
            </span>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className='flex justify-between w-full bg-ash px-4 py-4'>
                    <p className='invisible'>.....</p>
                    <p className='text-raven text-xl font-semibold'>جستجو</p>
                    <button
                      type="button"
                      className='outline-none'
                      onClick={closeModal}
                    >
                      <CancelDark />
                    </button>
                  </div>
                  <div className="py-10 flex flex-col items-center">
                    <p className="text-center text-raven">
                     لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
                    </p>
                    <div className='flex items-center relative w-full justify-center'>
                        <input
                            placeholder='جستجو'
                            type='text'
                            className='w-11/12 outline-none pt-1 pb-2 px-2 mt-3 border border-bordercolor rounded-md' />
                        <span className='absolute left-7 top-[19px]'><SearchIcon /></span>  
                    </div>    
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
