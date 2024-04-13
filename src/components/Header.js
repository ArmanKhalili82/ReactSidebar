import React from 'react'
import ImageHome from '../assets/images/home.png'
import ImageChevron from '../assets/images/chevron-left.png'

const Header = () => {
  return (
    <div className='flex-1'>
        <header className='border-b-2 border-gray-300 py-4'>
            <ul className='flex mr-6'>
                <img className='ml-2' src={ImageHome} alt='home' />
                <li className="ml-6 mr-2">
                    <a className="text-gray-700" href="#">داشبورد</a>       
                </li>
                <img className='ml-2' src={ImageChevron} alt='arrow' />
                <li className="mr-2">
                    <a className="text-gray-400" href="#">صفحه اصلی</a>        
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header