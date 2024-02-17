import { useState, useEffect } from "react";
import Character from "./Character";
import styled from "styled-components";

const StyledH2 = styled.h2`
    margin-top: 100px
`;

function List() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://finalspaceapi.com/api/v0/character/')
            .then(response => response.json())
            .then(characters => {setCharacters(characters);})
            .then(setLoading(false))
    }, []);

    return (
        <div>
            <StyledH2>Characters</StyledH2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                characters.map((character) => (
                    <Character key={character.id} name={character.name} origin={character.origin}
                               img_url={character.img_url} status={character.status}
                               species={character.species} gender={character.gender} hair={character.hair}/>
                ))
            )}
        </div>
    )
}

export default List;