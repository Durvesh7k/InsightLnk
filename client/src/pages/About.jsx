import React from 'react'
import about1 from '../assets/about_1.png'
import about2 from '../assets/about_2.png'
import about3 from '../assets/about_3.png'

const About = () => {
  return (
    <div className='mx-4 p-4 md:mx-10 text-white'>
      <div className='flex flex-col md:flex-row justify-normal md:justify-between mt-16'>
        <img className=' w-full md:w-1/3' src={about1} alt='about-img' />
        <div className=' w-full md:w-1/2 flex items-center gap-4'>
          <div className='flex flex-col gap-4 text-center md:text-start'>
            <h1 className='text-3xl font-sans font-bold'>User-Friendly Interface</h1>
            <p className='opacity-70'>We believe in simplicity and ease of use. Our clean and intuitive interface allows you to focus on what matters most - crafting engaging content and connecting with your audience.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse md:flex-row justify-normal md:justify-between mt-16'>
        <div className='w-full md:w-1/2 flex items-center gap-4'>
          <div className='flex flex-col gap-4 text-center md:text-start'>
            <h1 className='text-3xl font-sans font-bold'>Creative Freedom</h1>
            <p  className='opacity-70'>InsightLnk celebrates creativity! Whether you're a seasoned writer or just starting, you have complete creative freedom to express yourself through text, images, videos, and more.</p>
          </div>
        </div>
        <img className='w-full md:w-1/3' src={about2} alt='about-img' />
      </div>

      <div className='flex flex-col md:flex-row justify-normal md:justify-between mt-16'>
        <img className='w-full md:w-1/3' src={about3} alt='about-img' />
        <div className='w-full md:w-1/2 flex items-center gap-4'>
          <div className='flex flex-col gap-4 text-center md:text-start'>
            <h1 className='text-3xl font-sans font-bold'>Responsive Design</h1>
            <p className='opacity-70'> Whether your readers are accessing your blog on a desktop, tablet, or mobile device, the responsive design ensures a seamless and visually appealing experience on all platforms.
            </p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About