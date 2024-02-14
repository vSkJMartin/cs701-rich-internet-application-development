function Character(character) {
    return (
        <div>
            <h3>{character.name}</h3>
            <img src={character.img_url} alt={character.name} width='300' />
            <p>Origin: {character.origin}</p>
        </div>
    )
}

export default Character;