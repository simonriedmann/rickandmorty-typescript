import React from 'react';
import styled from 'styled-components';
import logo from '../ressources/logo.bmp'

type HeaderProps = {
    title: string;
}


const Header: React.FC = () => {
    return (
        <HeaderBox>
            <img src={logo} alt="Logo" />
        </HeaderBox>
    )
}

export default Header;

const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;


`
