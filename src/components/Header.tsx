import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
    title: string;
}


const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <HeaderBox>
            <h1>{title}</h1>
        </HeaderBox>
    )
}

export default Header;

const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;


`
