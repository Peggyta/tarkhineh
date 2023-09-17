import localFont from 'next/font/local';


export const estedad = localFont({ 
src:[
  {
    path: '../../public/fonts/Estedad-Regular.woff2',
    weight: '400',
    style: 'normal',
  },
  {
    path: '../../public/fonts/Estedad-Bold.woff2',
    weight: '700',
    style: 'normal',
  },
] });
