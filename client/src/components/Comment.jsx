import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { API } from '../services/api'
import { DataContext } from '../context/DataProvider'
import { useContext } from 'react'

const Comment = ({ setToggle, comment }) => {

    const { account } = useContext(DataContext);

    const deleteCom = async () => {
        try {
            const response = await API.deleteComment(comment._id);
            if (response.isSuccess) {
                console.log("Comment deleted successfully")
                setToggle(prevState => !prevState)
            }
        } catch (error) {
            console.log("Error in deleting the comment")
        }
    }
    return (
        <div className='bg-[#4b5563] flex  w-full md:w-2/3 rounded-md px-4'>
            <div className='mt-2 '>
                <div className='text-sm text-gray-300 flex  gap-2 '>
                    <div className='flex flex-row gap-2'>
                        <p >{comment.name}</p>
                        <p>{new Date(comment.date).toDateString()}</p>
                    </div>

                    {account.userName === comment.name && <RiDeleteBin6Line onClick={() => deleteCom()} className='hover:text-sky-300 text-white cursor-pointer' size={20} />}
                </div>

                <div className='my-4'>
                    <p>{comment.comment}</p>
                </div>
            </div>

            <div className='m-8'>
            </div>
        </div>
    )
}

export default Comment