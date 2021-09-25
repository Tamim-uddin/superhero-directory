import React from 'react';
import './Person.css'

const Person = (props) => {
    // console.log(props)
    const {name, rank, networth, source, industry, img} = props.person;

    return (
    <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
            <h5>Name: {name}</h5>
            <p>Rank: {rank}</p>
            <p>Networth: $ {networth}B</p>
            <p>Source: {source}</p>
            <p>Industry: {industry}</p>
            <button onClick={() => props.handleaddtocart(props.person)}>Add to Cart</button>
        </div>


    </div>
    );
};

export default Person;





