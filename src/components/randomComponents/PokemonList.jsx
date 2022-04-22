import { useState } from 'react'
import Pokemon from "./Pokemon"

const url = 'https://pokeapi.co/api/v2/pokemon?limit=40'


// todo om >1 ability, cond rendering?
// det funkar dock.
const PokemonList = () => {

	// från  addressbook
	const [contacts, setContacts] = useState([
		{id: 1, name: 'ditto', abilities: ['limber', 'imposter']},
		{id: 2, name: 'bulbasaur', abilities: ['bulbAbility']}
	])

	return (
		<section>
		<ol>
		{contacts.map(p => (
			<Pokemon
				key={p.id}
				id={p.id}
				name={p.name}
				abilities={p.abilities[0]} />

// <li key={c}> {c.name} Egenskap/-er: {c.abilities[0]} </li> // utan Pokemon.jsx
		))}
		</ol>
	</section>
	)
}

export default PokemonList