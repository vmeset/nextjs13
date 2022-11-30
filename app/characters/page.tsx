import { caller } from "../../server/routes";

interface CharactersPageProps {
    params: {
        page: string
    }
}

const Characters = async ({params}: CharactersPageProps) => {
    const characters = await caller.getChars({page: params.page})
    
    return (
        <section>
            {characters.response.data.results.map((char) => (
                <div key={char.id}>{char.name}</div>
            ))}
        </section>
    );
};

export default Characters;