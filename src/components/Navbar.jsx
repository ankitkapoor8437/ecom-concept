import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function App() {
    const count = useSelector((state) => state.allCart.cart);

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
                        Cart ({count.length})
                    </Link>
                </MDBBtn>
            </MDBContainer>
        </MDBNavbar>
    );
}
