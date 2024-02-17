import styled from "styled-components";

const StyledCol3 = styled.div`
    float: left;
    width: 25%;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
`;

const Card = styled.div`
    border: 1px solid #552583; /* Example border color */
    border-radius: 0.25rem; /* Example border radius */
    padding: 1rem; /* Example padding */
    box-shadow: 0 4px 6px #fdb927; /* Example box-shadow */
    background-color: #fff;
`;

function Character(character) {
    return (
        <StyledCol3>
            <Card>
                <h3>{character.name}</h3>
                <img src={character.img_url} alt={character.name} width='300'/>
                <p>Origin: {character.origin}</p>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Hair: {character.hair}</p>
            </Card>
        </StyledCol3>
    )
}

export default Character;