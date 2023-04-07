import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
width: auto;
display:flex;
justify-content: center;
margin-bottom: 10px;
border-radius:30px;
border:1px solid black;
`;


const Escena = ({ frase }) => {
    return (

        <div>
            <Frame>
                <p>{frase}</p>
            </Frame>
        </div>
    )
};

export default Escena;