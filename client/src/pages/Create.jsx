import React, { useEffect, useState, useContext, } from 'react'
import { API } from '../services/api';
import { DataContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';


const intialPost = {
  title: '',
  picture: '',
  userName: '',
  categories: 'Technology',
  content: '',
  createdDate: new Date(),
  keywords: ['Tech']
}

const Create = () => {
  const [post, setPost] = useState(intialPost);
  const [file, setFile] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);



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



  const savePost = async () => {
    try {
      const response = await API.createPost(post);
      if (response.isSuccess) {
        console.log("post created successfully");
        navigate('/')
      } else {
        console.log(response.message);
      }
    } catch (e) {
      console.log("Error while saving the post!")
      setIsCorrect(false);
    }
  }



  return (
    <div className='h-max w-full flex justify-center'>
      <div className='mt-6 text-white w-full md:w-1/2 mb-4 mx-4 md:mx-0'>
        <div>
          <h3 className='text-lg'>Title</h3>
          <input onChange={e => onChangeInput(e)} name='title' className='bg-transparent w-full h-12 p-2 outline-none  border-2 rounded-md mt-2 ' placeholder='Title' />
        </div>

        <div className='mt-4'>
          <h3 className='text-lg'>Content</h3>
          <textarea onChange={e => onChangeInput(e)} name='content' rows={6} className='bg-transparent w-full  p-2 outline-none  border-2 rounded-md mt-2' placeholder='content' />
        </div>

        <div className='mt-4'>
          <h3 className='text-lg'>Category</h3>
          <select name='categories' onChange={e => onChangeInput(e)} className='mt-2 rounded-md p-2 bg-gray-300  outline-none text-black'>
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
          <span></span>
        )}

        <div className='mt-4'>
          <h3 className='text-lg'>keywords <span className='ml-2 text-sm'>(Enter the keywords separated by ",")</span></h3>
          <input onChange={e => setKeywords(getKeywords(e))} className='bg-transparent w-full h-12 p-2 outline-none  border-2 rounded-md mt-2 ' placeholder='keywords' />
        </div>


        <div className='mt-3'>
          <button onClick={() => savePost()} className='bg-sky-700 hover:bg-cyan-700 rounded-md h-12 w-full mt-6 text-white'>Publish</button>
        </div>

        {!isCorrect && <p className='mt-2 text-sm text-red-600'>Fill out all the fields select the categories properly!</p>}

      </div>


    </div>
  )
}

export default Create