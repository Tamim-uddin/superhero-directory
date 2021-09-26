import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';

import './Domination.css'

const Domination = () => {
    /* set each person data */
    const [persons, setperosns] = useState([])
    /* set new cart for selected persons */
    const [cart, setcart] = useState([])
    /* load the data */
    useEffect( () => {
        fetch('./richest.JSON')
        .then(res => res.json())
        .then(data => setperosns(data))
    }, [])
    /* set eventhandler */
    const handleaddtocart = person => {
        const newcart = [...cart, person];
        setcart(newcart);
    }
    return (
        <div className="domination-container">
           <div className="person-container">
                
                {
                    persons.map(person => <Person 
                        key={person.rank}
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