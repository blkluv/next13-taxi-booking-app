import { Booking, MapBoxMap } from '@/components'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="">
          <Booking />
        </div>
        <div className="col-span-2">
          <MapBoxMap />
        </div>
      </div>

    </div>
  )
}
