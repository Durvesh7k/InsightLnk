import React, { useEffect, useState, useContext, } from 'react'
import { API } from '../services/api';
import { DataContext } from '../context/DataProvider';
import { useNavigate, useParams } from 'react-router-dom';


const intialPost = {
    title: '',
    picture: '',
    userName: '',
    categories: '',
    content: '',
    createdDate: new Date(),
    keywords: ['Tech']
}

const UpdatePost = () => {
    const [post, setPost] = useState(intialPost);
    const [file, setFile] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');


    const navigate = useNavigate();

    const onChangeInput = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });

    }

    const getKeywords = (e) => {
        const str = e.target.value
        return str.split(',');
    }

    const { account } = useContext(DataContext)

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('file', file);
                data.append("name", file.name);

                const response = await API.uploadImage(data);
                console.log(response.data);

                post.picture = response.data;

                setSelectedImage(post.picture);
            }
        }

        getImage();
        post.userName = account.userName;

    }, [file]);


    useEffect(() => {
        post.keywords = keywords;
    }, [keywords])

    const upDateBlog = async () => {
        const response = await API.updatePost(post);
        if (response.isSuccess) {
            navigate(`/details/${id}`);
        }
    }

    const { id } = useParams();

    const getData = async () => {
        const response = await API.getPost({ id: id })
        if (response.isSuccess) {
            setPost(response.data);
            console.log("Successfully fetched data");
        }
        else {
            console.log("Fetching post failed");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='h-max md:h-max flex justify-center'>
            <div className='mt-6 text-white  w-full md:w-1/2 mb-4 mx-4 md:mx-0'>
                <div>
                    <h3 className='text-lg'>Title</h3>
                    <input value={post.title} onChange={e => onChangeInput(e)} name='title' className='bg-transparent w-full h-12 p-2 outline-none  border-2 rounded-md mt-2 ' placeholder='Title' />
                </div>

                <div className='mt-4'>
                    <h3 className='text-lg'>Content</h3>
                    <textarea value={post.content} onChange={e => onChangeInput(e)} name='content' rows={6} className='bg-transparent w-full  p-2 outline-none  border-2 rounded-md mt-2' placeholder='content' />
                </div>

                <div className='mt-4'>
                    <h3 className='text-lg'>Category</h3>
                    <select value={post.categories} name='categories' onChange={e => onChangeInput(e)} className='mt-2 rounded-md p-2 bg-gray-300  outline-none text-black'>
                        <option className='bg-transparent' value="Technology">Technology</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Space">Space</option>
                        <option value="Politics">Politics</option>
                        <option value="Sports">Sports</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className='mt-4'>
                    <h3 className='text-lg'>Image</h3>
                    <input onChange={e => setFile(e.target.files[0])} className='rounded-sm mt-2' type='file' placeholder='Select the image from your device' />
                </div>

                {selectedImage ? (
                    <div className='mt-6 '>
                        <img className='rounded-md ' src={selectedImage} alt='img' />
                    </div>

                ) : (
                    <div className='mt-6 '>
                        <img className='rounded-md ' src={post.picture} alt='img' />
                    </div>
                )}

                <div className='mt-4'>
                    <h3 className='text-lg'>keywords <span className='ml-2 text-sm'>(Enter the keywords separated by ",")</span></h3>
                    <input value={post.keywords.map(keyword => keyword)} onChange={e => setKeywords(getKeywords(e))} className='bg-transparent w-full h-12 p-2 outline-none  border-2 rounded-md mt-2 ' placeholder='keywords' />
                </div>


                <div className='mt-3'>
                    <button onClick={() => upDateBlog()} className='bg-sky-700 hover:bg-cyan-700 rounded-md h-12 w-full mt-6 text-white'>Update</button>
                </div>

            </div>


        </div>
    )
}

export default UpdatePost;