export default function Map() {
    const nomes = ['juju', 'mavi', 'Paulinha', ' Vanessa', ' Arthur'];
    return (
        <div>
            <h1>Map</h1>  
            <ul>
                {nomes.map((nome, id) => (
                <li key={id}>{nome}</li>
                ))}
            </ul>
        </div>
    )
}