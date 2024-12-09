import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="Customer" className='object-cover rounded-full w-[120px] h-[120px]' />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-3 flex items-center justify-center gap-2.5'>
            <img src={star} width={24} height={24} className='object-contain m-0' alt="" />
            <p className='text-xl font-montserrat text-slat-gray'>( {rating} )</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard