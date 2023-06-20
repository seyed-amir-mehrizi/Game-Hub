import useGenre from "../hooks/useGenre"

function GenreList() {
    const { genres } = useGenre();
    return (
        <ul>
            {genres.map((g)=>{
                return <li key={g.id}>{g.name}</li>
            })}
        </ul>
    )
}

export default GenreList