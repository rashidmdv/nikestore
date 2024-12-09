import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../Constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-center gap-10 flex-wrap max-lg:flex-col '>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {
              socialMedia.map((icon) => (
               <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full' key={icon.alt}>
                 <a href={icon.link} target="_blank" rel="noreferrer">
                  <img src={icon.src} width={24} height={24} alt=""/>
                </a>
               </div>
              )
              )
            }
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {
              footerLinks.map((link) => (
                <div className='flex flex-col gap-4' key={link.title}>
                  <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{link.title}</h4>
                  <ul>
                    {
                      link.links.map((item) => (
                        <li className='text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer' key={item.name}><a href="">{item.name}</a></li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }

        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
            <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
              <img src={copyrightSign} width={20} height={20} alt="" className='rounded-full' />
              <p>Copyrihgt. All rights reserved</p>
            </div>
            <p className='font-montserrat cursor-pointer'>Terms & Condition</p>
      </div>
    </footer>
  )
}

export default Footer