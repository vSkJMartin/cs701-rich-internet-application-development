import { useState, useEffect } from "react";
import Character from "./Character";
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
            <h2>Characters</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                characters.map((character) => (
                    <Character key={character.id} name={character.name} origin={character.origin}
                               img_url={character.img_url}/>
                ))
            )}
        </div>
    )
}

export default List;