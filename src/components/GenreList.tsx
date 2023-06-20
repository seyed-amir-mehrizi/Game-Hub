import useGenre from "../hooks/useGenre"

function GenreList() {
    const { data } = useGenre();

    
    return (
        <ul>
            {data.map((g)=>{
                return <li key={g.id}>{g.name}</li>
            })}
        </ul>
    )
}

export default GenreList