import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/DataProvider';
import { API } from '../services/api';
import Comment from './Comment';


const intialComment = {
    name: "",
    comment: "",
    postId: "",
    date: new Date(),
}


const Comments = ({ post }) => {
    const [comment, setComment] = useState(intialComment);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const { account } = useContext(DataContext);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.userName,
            postId: post._id,
            comment: e.target.value,
        })

    }

    const saveComment = async () => {
        const response = await API.newComment(comment);
        if (response.isSuccess) {
            setComment(intialComment)
            setToggle(prevState => !prevState);

        } else {
            console.log("Comment cannot be posted")
        }
    }


    useEffect(() => {
        if (post._id) {
            const fetchComments = async () => {
                const response = await API.getComments(post._id);
                if (response.isSuccess) {
                    setComments(response.data);
                    console.log(response.data);
                }
            }

            fetchComments();
        }
    }, [post, toggle])




    return (
        <div className='mt-8'>
            <div>
                <h1 className='text-2xl'>Comments</h1>
            </div>

            <div className='text-base mt-4'>
                <textarea value={comment.comment} onChange={e => handleChange(e)} className='outline-none bg-transparent text-sm p-4 border rounded-md w-full h-32 md:w-1/2' rows={6} />
            </div>

            <div>
                <button onClick={() => saveComment()} className='w-24 h-10 bg-sky-700 hover:bg-sky-600 rounded-md mt-4 '>Post</button>
            </div>

            <div className='mt-4 flex flex-col gap-4'>
                {comments && comments.map(comment => {
                    return (
                        <div className=''>
                            <Comment setToggle={setToggle} comment={comment} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Comments