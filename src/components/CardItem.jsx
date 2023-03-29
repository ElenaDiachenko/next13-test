import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function CardItem({ card }) {
  return (
    <div
      className="rounded-xl p-3 mb-5 text-white w-full "
      style={{ backgroundColor: card.color }}
    >
      <Link href={`/card/${card._id}`}>
        <Image src="/mastercard.png" width={60} height={50} alt="" />
        <div className="opacity-50 mt-6 mb-1 font-[11px]"> Current Balance</div>
        <div>
          {card.balance.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR',
          })}
        </div>
        <div className="mt-3 text-xs">{card.number}</div>
      </Link>
    </div>
  );
}

export default CardItem;
