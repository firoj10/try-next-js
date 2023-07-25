"use client"

import Link from "next/link";
import NavLink from "./NavLink";

const navlinks = [
    {
        path:'/',
        title: 'Home'
    },
    {
        path:'/about',
        title: 'About'  
    },
    {
        path:'/prtfolio',
        title: 'Prtfolio'
    },
    {
        path:'/products',
        title: 'Products'
    },
    {
        path:'/blogs',
        title: 'Blogs'
    },
    {
        path:'/deshbord',
        title: 'Deshbord'
    },
   
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
           <h1 className="text-3xl font-semibold">Next Hero</h1>
           <ul className="flex items-center justify-center">
            {
                navlinks.map(({path, title})=>
                 (<li className="mx-2" key={path}>
                    <NavLink exact={path==='/'} 
                    activeClassName="text-blue-500" 
                    href={path}>{title}</NavLink>
                </li>))
            }
           </ul>
        </nav> 
    );
};

export default Navbar;