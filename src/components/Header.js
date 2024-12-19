"use client"
import Link from 'next/link'
import React from 'react'
import {usePathname, useRouter, useParams} from "next/navigation"

// useParams = useParams
// useRouter = useNavigate
// usePathname = useLocation

const LINKS = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  }
]

const Header = () => {
  const pathname = usePathname()

  const activeClass = (path)=>{
    return pathname === path ? "text-red-500 font-bold underline" : ""
  }
  
  return (
    <div className='p-4 bg-slate-600 flex gap-5 justify-center'>
        {
          LINKS?.map(({name, path}, inx) => (
            <Link className={activeClass(path)} key={inx} href={path}>{name}</Link>
          ))
        }
    </div>
  )
}

export default Header