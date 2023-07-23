import React, { useEffect, useState } from 'react'
import homeImage from '../assets/home-img.png'
import Blogpost from '../components/Blogpost'
import { API } from '../services/api'
import { Link } from 'react-router-dom'

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('');


  useEffect(() => {
    const fetchPost = async () => {
      const response = await API.getPosts({ category: category || '' });
      if (response.isSuccess) {
        setPosts(response.data);
      } else {
        console.log("Error occured while fetching posts")
      }
    }

    fetchPost();
  }, [category])





  return (
    <>
      <div className='grid mx-5 md:mx-10 p-4 text-white'>
        <div className='flex  flex-col-reverse gap-8 items-center md:items-start md:flex-row rounded-sm bg-homeColor'>
          <div className='flex flex-col my-4  md:my-32 md:mx-6  text-white w-full md:w-1/2'>
            <p className='text-5xl   text-center md:text-left font-extrabold font-sans leading-normal'>
              Expand your thoughts to eternity and store them here!
            </p>
            <p className='font-sans font-semibold mt-4 text-center md:text-left'>InsightLnk is a web site in which you can write blogs and publish them.</p>
            <Link to={'/create'} className='flex justify-center md:justify-start'>
              <button className='bg-gray-500 hover hover:bg-gray-700 text-white rounded-md h-10 w-24 text-base mt-4'>Create</button>
            </Link>
          </div>
          <div className='w-full md:w-2/5'>
            <img src={homeImage} alt='Homeimage' />

          </div>
        </div>

        <div className='flex flex-row justify-between md:justify-start mt-8'>
          <h1 className='text-2xl font-bold mt-4'>Categories</h1>
          <select onChange={e => setCategory(e.target.value)} className='mt-2 flex md:hidden rounded-md p-2 bg-gray-300  outline-none text-black'>
            <option value=''>All</option>
            <option value='Technology'>Technology</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Space'>Space</option>
            <option value='Politics'>Politics</option>
            <option value='Sports'>Sports</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <div className='mt-6 hidden flex-row  gap-10 text-lg md:flex '>
          <h2
            className={`${category === '' ? 'font-bold cursor-pointer underline underline-offset-8' : 'cursor-pointer hover:font-bold'}`}
            onClick={() => setCategory('')}>
            All
          </h2>
          <h2
            className={`${category === 'Technology' ? 'font-bold cursor-pointer underline underline-offset-8' : 'cursor-pointer hover:font-bold'}`}
            onClick={() => setCategory('Technology')}>
            Technology
          </h2>
          <h2
            className={`${category === 'Entertainment' ? 'font-bold cursor-pointer  underline underline-offset-8 ' : 'cursor-pointer hover:font-bold'}`}
            onClick={() => setCategory('Entertainment')}>
            Entertainment
          </h2>
          <h2
            className={`${category === 'Space' ? 'font-bold cursor-pointer underline underline-offset-8' : 'cursor-pointer hover:font-bold'}`}
            onClick={() => setCategory('Space')}>
            Space
          </h2>
          <h2
            className={`${category === 'Politics' ? 'font-bold cursor-pointer underline underline-offset-8' : 'cursor-pointer hover:font-bold'}`}
            onClick={() => setCategory('Politics')}>
            Politics
          </h2>
          <h2
            className={`${category === 'Sports' ? 'font-bold cursor-pointer underline underline-offset-8' : 'cursor-pointer hover:font-bold'}`}
            onClick={() => setCategory('Sports')}>
            Sports
          </h2>
          <h2
            className={`${category === 'Other' ? 'font-bold cursor-pointer underline underline-offset-8' : 'cursor-pointer hover:font-bold'}`}
            onClick={() => setCategory('Other')}>
            Other
          </h2>
        </div>


        {posts.length === 0 ? (
          <div className='mt-10'>
            <p className='text-2xl'>No Blogs</p>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 items-center md:grid-cols-3 gap-x-6 gap-y-10  mt-10'>
              {posts.map((item) => {
                return (
                  <div key={item._id} className='flex justify-center'>
                    <Blogpost item={item} />
                  </div>
                )
              })}
            </div>
          </>
        )}

      </div>


    </>
  )
}

export default Home