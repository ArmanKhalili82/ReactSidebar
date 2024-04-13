import React, { useState} from 'react'
import Gol from '../assets/images/1@4x.png'
import Arrow from '../assets/images/Property 1=Arrow-right.png'
import { Link } from 'react-router-dom'
import Home from '../assets/images/Property 1=home-outline.png'
import Log from '../assets/images/Property 1=logs-outline.png'
import Receipt from '../assets/images/Property 1=receipt-outline.png'
import Inventory from '../assets/images/Property 1=inventory-outline.png'
import Summarize from '../assets/images/Property 1=summarize-outline.png'
import Category from '../assets/images/Property 1=category-outline.png'
import Local from '../assets/images/Property 1=local-outline.png'
import Access from '../assets/images/Property 1=access-outline.png'
import Level from '../assets/images/Property 1=levels-outline.png'

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const NavLinks = [
    { title: "صفحه اصلی", src: "/", icon: Home},
    { title: "سفارشات", src: "/Orders", icon: Log },
    { title: "موجودی لحظه ای", src: "/CurrentInventory", icon: Inventory},
    { title: "مدیریت انبار", src: "/StoreManagement", icon: Receipt},
    { title: "گزارش ریز سفارشات", src: "/ReportsOfOrders", icon: Summarize},
    { title: "تعریف دسته بندی", src: "/Category", icon: Category},
    { title: "تعریف محصول", src: "/Product", icon: Local},
    { title: "کارتابل انبار داری", src: "/Store", icon: Category},
    { title: "کارتابل مالی", src: "/Financial", icon: Local},
    { title: "کارتابل ارسال", src: "/Delivery", icon: Local},
    { title: "کاربران", src: "/Users", icon: Category},
    { title: "بخش های کاربری", src: "/PartsOfUsers", icon: Access},
    { title: "مدیریت دسترسی ها", src: "/AccessesManagement", icon: Level},
    { title: "لاگ های سیستمی", src: "/Logs", icon: Log}
  ]

  return (
    <div className={`${open ? "w-72" : "w-20"} duration-300 h-full bg-gray-100 relative`}>
      <img 
        src={Arrow} 
        className={`absolute cursor-pointer rounded-full left-3 top-9 w-7 border-2 border-black ${!open && "rotate-180"}`} 
        onClick={() => setOpen(!open)}/>

        <div>
          <img src={Gol} className='cursor-pointer duration-300' />
        </div>

        {NavLinks.map((navlink, index) => {
          return (
            <ul className='pt-6'>
            <Link key={index} to={navlink.src} className='text-primary-900 flex gap-x-4 cursor-pointer p-2'>
              <img src={navlink.icon} />
              <span>{navlink.title}</span>
            </Link>
          </ul>
          ) 
        })}

        {/* <ul className='pt-6'>
          {NavLinks.map((navlink, index) => {
            <Link to={navlink.src} key={index} className='text-primary-900 text-sm flex items-center gap-x-4 cursor-pointer p-2'>
              <img src={navlink.icon} />
              <span>{navlink.title}</span>
            </Link>
          })}
        </ul> */}
    </div>
  )
}

export default Sidebar