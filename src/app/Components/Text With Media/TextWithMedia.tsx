import Image from 'next/image'
import React from 'react'
import cx from "clsx";
import s from "./TextWithMedia.module.scss";


const TextWithMedia = () => {
  return (
    <div className={cx(s['text-with-media'], 'm-20 p-4 flex flex-row gap-10')}>

        <div className={cx('flex flex-col gap-4 w-full', s['text-with-media__text'])}>
            <div className={cx(s['text-with-media__title'])}>Immeuble Neuf à Ouakam</div>
            <div className={cx(s['text-with-media__body'])}>
            A usage de commerces, de bureaux et d’habitation avec:
            Sous-sol, Parking, Rez-de-chaussé Mêzzanie, 6 Etages et Terasse
            </div>
        </div>

        <div className={cx(s['text-with-media__media'], 'flex flex-row gap-6 items-center flex-end w-full')}>
            <div className={cx('rounded-2xl w-full h-full')}>
            <Image src= "/Images/BuildingDay.jpg" width={300} height={300} alt='bulding-day'className='w-full h-full rounded-xl'/>
            </div>
            <div className={cx('rounded-2xl w-full h-full')}>
            <Image src= "/Images/BuildingNight.jpg" width={300} height={300} alt='building-night' className='w-full h-full rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default TextWithMedia
