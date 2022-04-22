import { useState } from 'react'
import GiveNickname from './GiveNickname'
import ShowPoke from "./ShowPoke"

const Search = () => {
	const [inputValue, setInputvalue] = useState('')
	const list = [{id: 1, name: 'bulbasaur'}, {id: 2, name: 'ditto'}, {id: 3, name: 'charmander'}, {id: 4, name: 'charmeleon'}] // testlista

	const filteredList = list.filter(x => x.name.includes(inputValue)) // så ska den/de pokemon visas
	
	return (
		<div className='whole-searchjsx-div'>
			<section className='search-section'>
				<p> Skriv in namnet på den Pokemon du söker efter! </p>
					<input 
					placeholder="Namn"
					value={inputValue}
					onChange={(e) => setInputvalue(e.target.value)} />
					{/* <button onClick={handleSubmit} /> */}
					<p> Alla som börjar på: {inputValue} </p>
				<ul> {filteredList.map(x => (
					<li key={x.id}> {x.name} </li>
				))}
				</ul>
			</section>
		
			<section className='show-specific-pokemon-section'>
				<ShowPoke chosenPokemon={inputValue} />
			</section>

			<section className='nickname-section'>
				<GiveNickname />
			</section>

		</div>
	)
}	

export default Search