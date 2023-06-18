import React from 'react';

const InfoCard = ({card}) => {
    const {name,description,icon,bgClass} = card;
    return (
        <div className={`card card-side p-6 m-2 shadow-xl bgClass ${bgClass}`}>
            <figure>
                <img src={icon} alt="name" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;