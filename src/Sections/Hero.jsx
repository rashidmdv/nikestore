import React, { useState } from 'react'
import Button from '../Componets/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../Constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Componets/ShoeCard'

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-7 xl:pl-32'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 max-lg:mt-5 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[70px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative lg:z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 max-lg:mb-7 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className='flex justify-starts items-center flex-wrap w-full mt-10 gap-16 max-lg:gap-12'>
          {statistics.map((stat) => (
            <div key={stat.label} className='flex flex-col items-center gap-2'>
              <p className='text-3xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="Shoes" width={610} height={500} className='object-contain relative' />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] md:left-[50%] md:transform md:translate-x-[-50%]  max-sm:px-6'>
          {shoes.map((shoe,index) =>(
            <div key={index}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}  />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero