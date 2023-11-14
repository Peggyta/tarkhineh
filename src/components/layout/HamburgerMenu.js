'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//icons
import HamburgerIcon from '../icons/HamburgerIcon';
import Cancel from '../icons/Cancel';
import ArrowDownMenu from '../icons/ArrowDownMenu';
import Thome from '../icons/Thome';
import Tmenu from '../icons/Tmenu';
import Tcall from '../icons/Tcall';
import Tbranch from '../icons/Tbranch';
import Tabout from '../icons/Tabout';
import hamburPic from '../../../public/images/hamburger.jpg';
import vectorLogo from '../../../public/images/Vector.png';


export default function HamburgerMenu() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='md:hidden block'>
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
                <Dialog.Panel className="w-[256px] h-full absolute top-0 -right-0 transform overflow-hidden bg-white text-right align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3">
                  <div className='w-full relative'>
                    <Image src={hamburPic} alt='banner' width={256} height={94} />
                    <button className='absolute z-10 top-2 left-3' type="button" onClick={closeModal}>
                        <Cancel />
                    </button>
                    <div className='absolute top-8 right-4'>
                      <Image src={vectorLogo} alt='logo' width={63} height={30} />
                    </div>
                  </div>
                </Dialog.Title>
                <div className='flex flex-col items-center gap-3 text-raven text-sm px-4'>
                    <Link className='w-full flex items-center gap-2 border-b border-bordercolor pt-3 pb-4' href='/'><Thome />صفحه اصلی</Link>
                    <div className='flex items-center justify-between w-full border-b border-bordercolor pb-4'>
                      <button className='flex items-center gap-2'><Tmenu />منو</button>
                      <ArrowDownMenu />
                    </div>
                    <div className='flex items-center justify-between w-full border-b border-bordercolor pb-4'>
                      <button className='flex items-center gap-2'><Tbranch />شعبه</button>
                      <ArrowDownMenu />
                    </div>
                    <Link className='w-full flex items-center gap-2 border-b border-bordercolor pb-4' href='/about-us'><Tabout />درباره ما</Link>
                    <Link className='flex items-center gap-2 w-full' href='/contact-us'><Tcall />تماس با ما</Link> 
                </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
