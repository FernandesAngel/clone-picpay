import React from 'react';
import {Container, Details, Img, Title, Description} from './styles';

import img13 from '../../images/13.png'

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Cobre um Amigo</Title>
                <Description>
                    Mantenha suas parcerias em dia, use o PicPay para fazer um suas cobranças.
                </Description>
            </Details>
            <Img source={img13} />
        </Container>
    );
}