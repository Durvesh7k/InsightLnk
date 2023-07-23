import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TbArrowsCross } from 'react-icons/tb'
import { Transition } from '@headlessui/react';



const Header = () => {
    const [page, setPages] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className=' mx-5 md:mx-10 p-4 flex flex-row text-white justify-between'>
                <div className='flex flex-row gap-6 mt-1'>
                    <div className='text-xl font-bold'>
                        <h1>InsightLnk</h1>
                    </div>
                    <div className='mt-1 hidden md:flex flex-row gap-8 '>
                        <Link
                            to={"/"}
                            className={`${page === 'Home' ? 'font-bold underline underline-offset-4' : 'cursor-pointer'}`}
                            onClick={() => setPages('Home')}
                        >
                            Home
                        </Link>
                        <Link
                            to={"/create"}
                            className={`${page === 'create' ? 'font-bold underline underline-offset-4' : 'cursor-pointer'}`}
                            onClick={() => setPages('create')}
                        >Create
                        </Link>
                        <Link
                            className={`${page === 'about' ? 'font-bold underline underline-offset-4 ' : 'cursor-pointer'}`}
                            onClick={() => setPages('about')}
                            to={"/about"}
                        >About
                        </Link>
                        <Link
                            className={`${page === 'account' ? 'font-bold underline underline-offset-4 ' : 'cursor-pointer'}`}
                            onClick={() => setPages('account')}
                            to={"/account"}
                        >
                            Account
                        </Link>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <Link to={'./login'} className='bg-gray-500 hover hover:bg-gray-700 text-white rounded-md h-10 w-24 text-base'>
                        <p className='ml-6 mt-2 '>Logout</p>
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className='flex md:hidden'>
                    {isOpen ? (
                        <TbArrowsCross onClick={() => setIsOpen(!isOpen)} className='hover:text-cyan-400 cursor-pointer' size={30} />
                    ) : (
                        <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='hover:text-cyan-400 cursor-pointer' size={30} />
                    )}
                </div>
            </div>
            <div className='text-white mx-5 flex md:hidden px-5   pb-2'>
                <Transition
                    show={isOpen}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    {(ref) => (
                        <div className='mt-4 flex flex-col gap-4 '>
                            <Link
                                to={"/"}
                                className={`${page === 'Home' ? 'font-bold underline underline-offset-4' : 'cursor-pointer'}`}
                                onClick={() => setPages('Home')}
                            >
                                Home
                            </Link>
                            <Link
                                to={"/create"}
                                className={`${page === 'create' ? 'font-bold underline underline-offset-4' : 'cursor-pointer'}`}
                                onClick={() => setPages('create')}
                            >Create
                            </Link>
                            <Link
                                className={`${page === 'about' ? 'font-bold underline underline-offset-4 ' : 'cursor-pointer'}`}
                                onClick={() => setPages('about')}
                                to={"/about"}
                            >About
                            </Link>
                            <Link
                                className={`${page === 'account' ? 'font-bold underline underline-offset-4 ' : 'cursor-pointer'}`}
                                onClick={() => setPages('account')}
                                to={"/account"}
                            >
                                Account
                            </Link>

                            <Link to={'./login'} className='bg-gray-500 hover hover:bg-gray-700 text-white rounded-md h-10 w-24 text-base'>
                                <p className='ml-6 mt-2 '>Logout</p>
                            </Link>

                        </div>
                    )}
                </Transition>
            </div>



        </>
    )
}

export default Header