import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

export default function App() {
    const count = useSelector((state) => state.allCart.cart);
    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <span>All Products</span>
                <MDBBtn color='dark'>
                    Cart({count.length})
                </MDBBtn>
            </MDBContainer>
        </MDBNavbar>
    );
}