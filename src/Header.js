import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue, StateProvider } from './StateProvider';


function Header() {
    const [{basket,user}, dispatch]= useStateValue();
    // console.log(basket)

    return (
        <nav className='header'>
                
            {/* logo on the left- a image */}
            <Link to="/"> <img className='logo'
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="" srcset="" />
            </Link>

            {/* search box */}
            <div className="search">
                <input type="text" className="searchInput" placeholder='Search Amazon.in'/>
                <SearchIcon className='searchIcon' />
            </div>

            {/* 3 links */}
            <div className="headerNav">

                <Link to='login' className='headerLink'>
                    <div className="options">
                        <span className='optionOne'>hello</span>
                        <span className='optionTwo'>Sign In</span>
                    </div>
                </Link>

                <Link to='/' className='headerLink'>
                    <div className="options">
                        <span className='optionOne'>Returns</span>
                        <span className='optionTwo'>& orders</span>
                    </div>
                </Link>

                <Link to='/' className='headerLink'>
                    <div className="options">
                        <span className='optionOne'>Your</span>
                        <span className='optionTwo'>Prime</span>
                    </div>
                </Link>

                {/* Shopping Basket */}
                <Link to='/checkout' className='headerLink'>
                    <div className="basket">
                        {/* basket icon */}
                        <ShoppingBasketIcon />
                        {/* No of items in basket  */}
                        <span className='optionTwo basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header

