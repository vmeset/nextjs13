async function fetchChar() {
    const res = await fetch('https://rickandmortyapi.com/api/character/2')
    return res.json()
}

function sleep(ms: number) {
    // throw new Error('damn bro')
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Characters = async () => {
    const character = await fetchChar()
    await sleep(2000)
    console.log(character.name);
    

    return (
        <section>
            Chars: {character.name}
        </section>
    );
};

export default Characters;