import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="flex justify-between p-3 px-10 border-b-[1px] shadow-sm">
            <div className="flex gap-10 items-center">
                <Image 
                    src={'/logo.png'}
                    className=''
                    alt="logo"
                    width={120}
                    height={60}
                />
            </div>
            <div className="gap-6 hidden md:flex">
                <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Home</div>
                <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">History</div>
                <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Help</div>
            </div>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}

export default Navbar