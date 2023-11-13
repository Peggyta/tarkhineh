'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//icons
import HamburgerIcon from '../icons/HamburgerIcon';
import Cancel from '../icons/Cancel';
import hamburPic from '../../../public/images/hamburger.jpg';

export default function HamburgerMenu() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
        >
         <HamburgerIcon />
        </button>
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
                <Dialog.Panel className="w-[256px] h-full absolute top-0 -right-0 transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                <div className="mt-4">
                <Image src={hamburPic} alt='banner' width={256} height={94} />
                    <button type="button" onClick={closeModal}>
                        <Cancel />
                    </button>
                </div>
                </Dialog.Title>
                <div className='flex flex-col items-center gap-3 mt-6 text-raven'>
                    <Link href='/'>صفحه اصلی</Link>
                    <Link href='/menu'>منو</Link>
                    <Link href='/branches'>شعبه</Link>
                    <Link href='/about-us'>درباره ما</Link>
                    <Link href='/contact-us'>تماس با ما</Link> 
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
