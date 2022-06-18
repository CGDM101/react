import { useState, useEffect } from "react"
import SinglePokemon from "./SinglePokemon"

const Search = ({ setTeam }) => {

  const [searchedPokemons, setSearchedpokemons] = useState([])
  const [allPokemons, setAllpokemons] = useState([])
  const [search, setSearch] = useState("")
  const [searching, setSearching] = useState(false)
  const [NextSet, setNextSet] = useState('https://pokeapi.co/api/v2/pokemon?limit=40')

  const FetchFromApi = async () => {
    setSearching(true) //
    const response = await fetch(NextSet) // url
    const data = await response.json()
    setNextSet(data.next) //
    await  PopulatePokemonsWithData(data.results)
    setSearching(false) //
  }

  async function PopulatePokemonsWithData(results) {
    for (let item of results) {
      await fetch(item.url).then(async (response) => {
        const data = await response.json();
        setSearchedpokemons((foo) => [...foo, data])
        setAllpokemons((bar) => [...bar, data])
      })
    }
  }

  useEffect(() => {
    if (!searching) {
      FetchFromApi()
    }
  }, [])

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  useEffect(() => {
    if (search.length) {
      const results = allPokemons.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      setSearchedpokemons(results)
    } else {
      setSearchedpokemons(allPokemons)
    }
  }, [search])

  return (
    <section>
      <div className='body'>
        <input type='text' value={search} onChange={(e) => handleChange(e)} placeholder='Sök efter en pokemon!' />
        <div className='pokemon-grid'>
          {!searching ? (
            searchedPokemons.map((pokemon, index) => (
              <SinglePokemon addPokemon={true} key={index} id={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} nickname='' setTeam={setTeam}
              />
            ))
          ) : (
            <p>Laddar...</p>
          )}
        </div>
        <button onClick={FetchFromApi}> V </button>
      </div>
    </section>
  )
}

export default Search