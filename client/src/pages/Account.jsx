import React, { useState, useEffect, useContext } from 'react'
import Blogpost from '../components/Blogpost'
import { API } from '../services/api'
import { DataContext } from '../context/DataProvider'

const Account = () => {

  const [posts, setPosts] = useState([])

  const { account } = useContext(DataContext)


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await API.getPostByUserName({ username: account.userName })
      if (response.isSuccess) {
        setPosts(response.data);
      } else {
        console.log("Error in fetching the post")
      }
    }

    fetchPosts();

  }, [])


  return (
    <div className='mx-4 md:mx-10 p-4 flex flex-col items-center text-white'>
      <div className='flex flex-col  mt-4 w-full md:w-1/2'>
        <div className='flex flex-col '>
          <div className='flex justify-center'>
            <h1 className='text-3xl font-sans font-bold'>Account Details</h1>
          </div>

          <div className='flex justify-start flex-row gap-4 mt-8 text-xl' >
            <p>Name :  </p>
            <p>{account.name}</p>
          </div>

          <div className='flex flex-row  gap-4 mt-8 text-xl'>
            <p>Username : </p>
            <p>{account.userName}</p>
          </div>
        </div>
      </div>


      <div className='flex text-2xl mt-8 justify-start w-full flex-col'>
        <h1>Your Created blogs</h1>
        {posts.length === 0 ? (
          <div className='mt-10'>
            <p className='text-2xl'>No Blogs</p>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 items-center md:grid-cols-3 gap-x-6 gap-y-10  mt-6'>
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
    </div>
  )
}

export default Account