import React, {useEffect} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../features/cartSlice';

export default function App() {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);


    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <span>
                    <Link to="/">
                        All Products
                    </Link>
                </span>

                <MDBBtn color='light'>
                    <Link to="/cart">
                        Cart ({totalQuantity})
                    </Link>
                </MDBBtn>
            </MDBContainer>
        </MDBNavbar>
    );
}
