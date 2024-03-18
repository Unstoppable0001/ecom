// OrderForm.js
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import {UserPlaceOrder} from '../utils/constants.js'


const PlaceOrderForm  = () => {
    const { _id } = useParams();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        productId: _id
    });

    const[backendMessage,setBackendMessage] =useState()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            productId: _id,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(UserPlaceOrder, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) { throw new Error('Network response was not ok');}
            const responseData = await response.json();
            setBackendMessage(responseData.message); 
        } catch (error) {console.error('There was a problem with form submission:', error);}
    };
    
    return (
      <div className="card">         
             <form onSubmit={handleSubmit}>
             <h2  className="form-name">Place Order</h2>
                <div className= "formGroup" >
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className='button-form'>
                <button className="card-action" type="submit">Confirm Order</button>
                {backendMessage && <p>'{backendMessage}  {"Grab top deals on HomePage"}'</p>}     
                </div>
                </form>
         </div>
    );
};

export default PlaceOrderForm;


