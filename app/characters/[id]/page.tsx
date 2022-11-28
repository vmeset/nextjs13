async function fetchChar() {
    const res = await fetch('https://rickandmortyapi.com/api/character/2')
    return res.json()
}

const Characters = async () => {
    const character = await fetchChar()
    console.log(character.name);
    

    return (
        <section>
            Chars: {character.name}
        </section>
    );
};

export default Characters;