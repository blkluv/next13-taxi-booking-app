import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-blue-100">
          Booking
        </div>
        <div className="col-span-2 bg-red-400">
          Map
        </div>
      </div>

    </div>
  )
}
