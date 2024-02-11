import localFont from 'next/font/local';

export const articulat = localFont({
  src: [
    {
      path: './fonts/Fontspring-DEMO-articulatcf-regular-BF64a38d8b1d671.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Fontspring-DEMO-articulatcf-bold-BF64a38d89ce81e.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Fontspring-DEMO-articulatcf-extrabold-BF64a38d8b06d4e.otf',
      weight: '800',
      style: 'normal'
    }
  ]
})