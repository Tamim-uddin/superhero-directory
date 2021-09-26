import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';

import './Domination.css'

const Domination = () => {
    const [persons, setperosns] = useState([])
    const [cart, setcart] = useState([])
    useEffect( () => {
        fetch('./richest.JSON')
        .then(res => res.json())
        .then(data => setperosns(data))
    }, [])
    const handleaddtocart = person => {
        const newcart = [...cart, person];
        setcart(newcart);
    }
    return (
        <div className="domination-container">
           <div className="person-container">
                
                {
                    persons.map(person => <Person 
                        person={person}
                        handleaddtocart={handleaddtocart}>
                        </Person> )
                }
           </div>
           <div className="cart-container">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Domination;