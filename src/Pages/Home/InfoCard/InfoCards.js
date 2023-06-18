import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id:1,
            name:'Opening Hours',
            description: ' Open 10.00 am to 6.00 pm',
            icon: clock,
            bgClass: 'bg-primary'

        },
        {
            id:2,
            name:'Visit Our Location',
            description: ' Open 10.00 am to 6.00 pm',
            icon: marker,
            bgClass: 'bg-secondary'

        },
        {
            id:1,
            name:'Contact Us',
            description: '01624582526',
            icon: phone,
            bgClass: 'bg-primary'

        }
    ]
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 '>
            {
                cardData.map(card =><InfoCard
                key ={card.id}
                card ={card}

                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;