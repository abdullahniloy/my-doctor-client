import React from 'react';

import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';


const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride,
            bgClass:'bg-primary'

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity,
            bgClass:'bg-secondary'

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening,
            bgClass:'bg-primary'

        },
    ]
    return (
        <div>
             <div className='text-center mt-6 '>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services </h3>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
              {
               services.map(serv => <Service
               key={serv.id}
               serv = {serv}
               
               ></Service>)
              }
            </div>

        </div>
       
    );
};

export default Services;