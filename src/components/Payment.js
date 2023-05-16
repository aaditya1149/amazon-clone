import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout (<Link to='/checkout'style={{ textDecoration: 'none' }}>{basket?.length}items</Link>)
            </h1>
            {/* Payment section - delivery address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Bhaktapur, Nepal</p>
                </div>
            </div>

            {/* Payment section - Review Items */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {/* Products */}
                    {basket.map (item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            </div>


            {/* Payment section - Payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* Stripe magic is seen from here */}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Payment