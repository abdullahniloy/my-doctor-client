import React from 'react';

const Service = ({serv}) => {
    const {name,description,img,bgClass} = serv;
    return (
        <div className="card bg-base-100 p-6 m-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="img" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    );
};

export default Service;