import React, {useState} from 'react';
import styled from 'styled-components';

type CardProps = {
    character: {
        id: string, 
        name: string, 
        image: string, 
        species: string,
        gender: string,
        status: string
    };
}

const Card: React.FC<CardProps> = ({character}) => {
    const [active, setActive] = useState(false)

    function toggleMoreInfo() {
        setActive(!active);
    }

    return (
        <CardBox key={character.id}> 
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name}/>
                { active ? 
                <div>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Status: {character.status}</p>
                </div>
                : null }
            <button onClick={toggleMoreInfo}>
                {active ? "Show less" : "Show more"}
            </button>


            

        </CardBox>
    )
}

export default Card

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    background: black;
    color: white;
    max-width: 26rem;
    min-width: 16rem;
    overflow: hidden;
    position: relative;
    margin: 2rem;
`
