import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit'; // Make sure the import path is correct
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function App() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (
        <div className='m-2'>
            <MDBContainer>
                <MDBRow className='mb-3'>
                    {
                        items?.map((item, index) => (
                            <MDBCol size="md" key={index}>
                                <MDBCard>
                                    <MDBCardImage src={item.img} position='top' alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>
                                            Rs.{item.price}
                                        </MDBCardText>
                                        <MDBBtn href='#' onClick={()=>dispatch(addToCart(item))}>Add To Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
