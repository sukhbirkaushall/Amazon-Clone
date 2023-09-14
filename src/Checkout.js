import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import Checkoutproduct from './Checkoutproduct';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className='checkout'>
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkoutAd" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping cart is empty</h2>
                    <p>You have no items in your cart. To buy one, or more items, click "Add to cart" next to the item. </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout_title'>Your cart</h2>
                    {basket?.map((item) => 
                        { console.log(item)
                       return <Checkoutproduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
}
                    )}
                </div>
            )}
        </div>
    )
}

export default Checkout
