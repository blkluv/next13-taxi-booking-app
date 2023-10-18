import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <h2 className=" text-center text-4xl font-bold mt-4">Next 13.5 Taxi Booking app</h2>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
