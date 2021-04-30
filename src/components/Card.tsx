import React, {useState} from 'react';
import styled from 'styled-components';

type CardProps = {
    character: {id: string, name: string, url: string, species: string};
}

const Card: React.FC<CardProps> = ({character}) => {
    const [active, setActive] = useState(false)

    function toggleMoreInfo() {
        setActive(!active);
    }

    return (
        <CardBox key={character.id}> 
            <h2>{character.name}</h2>
            <img src={character.url} alt={character.name}/>
            <button onClick={toggleMoreInfo}>
                {active ? "Show less" : "Show more"}
            </button>
            <div>
                { active ? <p>{character.species}</p> : null }
            </div>

            

        </CardBox>
    )
}

export default Card

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
`
