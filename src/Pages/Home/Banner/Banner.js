import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
          
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="w-1/2  rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Welcome To My Chamber!!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn border-none text-white btn-primary bg-primary bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;