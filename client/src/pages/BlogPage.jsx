import React, { useState, useEffect } from 'react'
import { API } from '../services/api'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import Comments from '../components/Comments';
import { DataContext } from '../context/DataProvider';
import { useContext } from 'react';


const BlogPage = () => {
    const [post, setPost] = useState({});
    const [date, setDate] = useState('');

    const { id } = useParams()

    const navigate = useNavigate();

    const {account}  = useContext(DataContext)
    const getData = async () => {
        const response = await API.getPost({ id: id })
        if (response.isSuccess) {
            setPost(response.data);
            console.log("Succefully fetched data");
        }
        else {
            console.log("Fetching post failed");
        }
    }

    const deleteBlog = async () => {
        await API.deletePost(post._id);
        navigate('/');
    }



    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='p-4 mx-4 md:mx-10 text-white'>
            <div className='flex flex-col gap-4 md:flex-row justify-between'>
                <div>
                    <h1 className='text-4xl font-sans font-bold' >{post.title}</h1>
                </div>
                <div className='flex flex-row gap-3 text-sm justify-end'>
                    <div>
                        <h3>{post.userName}</h3>
                        <h4>{post.createdDate}</h4>
                    </div>
                    <span className='mt-2 flex flex-row gap-4'>
                        <Link to={`/update/${post._id}`}>
                            <AiOutlineEdit className='cursor-pointer hover:text-sky-300' size={25} />
                        </Link>

                        {account.userName === post.userName && <MdOutlineDelete onClick={() => deleteBlog()} className='cursor-pointer hover:text-sky-300' size={25} /> }
                        
                    </span>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
                <div className='leading-8'>
                    <p align='justify'>&nbsp; &nbsp; &nbsp; {post.content && post.content.slice(0,1000)}</p>
                </div>
                <div >
                    <img className='rounded-md' src={post.picture} alt='blog-img' />
                </div>
            </div>


            <div className='leading-8 mt-4'>
                <p align='justify'>&nbsp; &nbsp; {post.content && post.content.slice(1001,post.content.length)}</p>
            </div>


            <Comments post={post} />
        </div>
    )
}

export default BlogPage;

