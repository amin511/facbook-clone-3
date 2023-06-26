import React, { PureComponent, useState, useContext } from 'react'
import { BsMessenger } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import { GoSearch } from "react-icons/go"
import { IoIosNotifications } from "react-icons/io"
import { BiArrowBack } from "react-icons/bi"
import { userCurrent } from "../../../App"
import logo from "../../../../public/images/fblogo.svg"
import Search from './Search'
import SignIn, { SignOut } from '../signInSignOut/SignInSignOut'

const Navbar = () => {
    const User = useContext(userCurrent);
    const [listRecent, setListRecent] = useState([1, 2, 3]);
    const [onSearch, setOnSearch] = useState(false);

    function addListRecent() {
        setListRecent((prev) => {
            return prev.map(() => <Search />)
        })
    }
    return (
        <div className=' z-40 fixed top-0 w-[100vw] flex justify-between p-2  shadow-slate-300 shadow-sm items-center bg-white'>
            <div className='relative flex items-center  space-x-2 '>

                {onSearch ?
                    <div className=' bg-slate-300 rounded-2xl flex flex-col space-y-2 px-3 pb-4 pt-2  fixed top-0 w-[65%]'>
                        <div className='flex items-center '>
                            <i className='icon bg-inherit' onClick={() => setOnSearch(!onSearch)}><BiArrowBack /></i>
                            <input
                                className='input'
                                type='search'
                                id="search"
                                placeholder='Search'
                            />
                        </div>
                        {listRecent}
                    </div> :
                    <>
                        <img src={logo} className='w-10' />
                        <i className='icon' onClick={() => {
                            setOnSearch(!onSearch)
                            addListRecent()
                        }
                        }>
                            <GoSearch />
                        </i>
                    </>}
            </div>
            <div className='flex space-x-2 items-center'>
                <i className='icon bg-white text-2xl'><AiOutlineMenu /></i>
                <i className='icon '><BsMessenger /></i>
                <i className='icon'> <IoIosNotifications /></i>
                <img src={User.userImage} className='userImg' />
                <SignOut />
            </div>
            <div className='flex hidden  items-center'>
                <i className='icon'><BsMessenger /></i>
                <i className='icon'><BsMessenger /></i>
                <i className='icon'><BsMessenger /></i>
                <i className='icon'><BsMessenger /></i>
            </div>

        </div>
    )
}
export default Navbar