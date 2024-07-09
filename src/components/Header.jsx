import React from 'react'
import { Button, Navbar, TextInput } from "flowbite-react";
import {Link, useLocation} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa';

const Header = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <h1 className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Logo Here</h1>
        </Link>

        <form>
            <TextInput 
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'

            />
        </form>
        <Button className='w-12 h-10 lg:hidden' pill color='gray'>
            <AiOutlineSearch/>
        </Button>

        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
                <FaMoon/>
            </Button>
            <Link to='/sign-in'>
                <Button gradientDuoTone='purpleToBlue' className=''>
                    Sign in
                </Button>
            </Link>
            <Navbar.Toggle/>
        </div>


        <Navbar.Collapse>
                <Link to='/' className={` active:bg-black ${path === '/' ? 'active' : ''}`}>Home</Link>
       
                
           
            
                <Link to='/about' className={`active:bg-black ${path === '/about' ? 'active' : ''}`}>About</Link>
            
            
                <Link to='/projects' className={` active:bg-black ${path === '/projects' ? 'active' : ''}`}>Projects</Link>
       
        </Navbar.Collapse>

    </Navbar>
  )
}

export default Header