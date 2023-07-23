import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import BlogPage from '../pages/BlogPage'
import { Link } from 'react-router-dom'

const Blogpost = ({ item }) => {
    return (
        <div className='w-96'>
            <div>
                <img
                    src={item.picture}
                    alt='blogimage'
                    className='rounded-md '
                />
            </div>

            <div className='mt-4 text-sm opacity-60 '>
                <p>{item.userName} {new Date(item.createdDate).toDateString()}</p>
            </div>

            <div className=' flex flex-row justify-between mt-2 text-xl font-bold'>
                <h1>{item.title}</h1>
                <Link to={`/details/${item._id}`}>
                    <BsArrowUpRight className='font-bold cursor-pointer' />

                </Link>
            </div>

            <div className='mt-2 text-sm text-gray-300'>
                <p align='justify'>{item.content.slice(0, 200)}</p>
            </div>
            <div className='mt-4 text-xs flex flex-row gap-3 '>
                {item.keywords.map((keyword, index) => {
                    return (
                        <div key={index} className='border-2 rounded-full w-max'>
                            <p className='px-2 py-1'>{keyword}</p>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Blogpost
