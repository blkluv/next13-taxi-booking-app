import { useState } from 'react'
import CardsList from './CardsList'
import Image from 'next/image'

const Cards = () => {
    const [selectedCard, setSelectedCard] = useState<any>();
    return (
        <div className="">
            <h2 className="text-[14px] font-medium">Payment Methods</h2>
            <div className="grid grid-cols-5">
                {CardsList.map((card, index) => (
                    <div 
                        className={`flex w-[50px] border-[1px] items-center justify-center rounded-md cursor-pointe hover:border-yellow-600 hover:scale-105 transition-all ${selectedCard?.name === card.name ? 'border-yellow-600 bg-yellow-50' : null}`}
                        onClick={() => setSelectedCard(card)}
                    >
                        <Image 
                            src={card.image}
                            alt={card.name}
                            width={40}
                            height={50}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards