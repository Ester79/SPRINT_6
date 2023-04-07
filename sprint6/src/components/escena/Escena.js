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


const Escena = ({ frase, changeColor }) => {
    return (

        <div>
            <Frame className={changeColor ? 'changeColor' : 'originaColor'}>
                <p>{frase}</p>
            </Frame>
        </div>
    )
};

export default Escena;