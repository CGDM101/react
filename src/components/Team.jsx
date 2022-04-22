import { useState } from 'react'

function Team() {
	let pokeList = [
		{id: 1, name: 'Bulbasaur'},
		{id: 2, name: 'Ivysaur'},
		{id: 3, name: 'Venusaur'},
		{id: 4, name: 'Charmander'},
		{id: 5, name: 'Charmeleon'},
		{id: 6, name: 'Charizard'},
		{id: 7, name: 'Squirtle'},
		{id: 8, name: 'Wartortle'},
		{id: 9, name: 'Blastoise'},
		{id: 10, name: 'Caterpie'},
		
		{name: 'Metapod'},
		{name: 'Butterfree'},
		{name: 'Weedle'},
		{name: 'Kakuna'},
		{name: 'Beedrill'},
		{name: 'Pidgey'},
		{name: 'Pidgeotto'},
		{name: 'Pidgeot'},
		{name: 'Rattata'},
		{name: 'Raticate'},
		
		{name: 'Spearow'},
		{name: 'Fearow'},
		{name: 'Ekans'},
		{name: 'Arbok'},
		{name: 'Pikachu'},
		{name: 'Raichu'},
		{name: 'Sandshrew'},
		{name: 'Sandslash'},
		{name: 'Nidoran-f'},
		{name: 'Nidorina'},
		
		{name: 'Nidoqueen'},
		{name: 'Nidoran-m'},
		{name: 'Nidorino'},
		{name: 'Nidoking'},
		{name: 'Clefairy'},
		{name: 'Clefable'},
		{name: 'Vulpix'},
		{name: 'Ninetales'},
		{name: 'Jigglypuff'},
		{name: 'Wigglytuff'}
	]
	
	const [team, setTeam] = useState([])

	const handleChange = (event) => {
		if (team.length < 9) {
			let pokeObject = pokeList.find(p => p.name === event.target.value)
			setTeam([...team, pokeObject]) // obs team består av objekt! inte strängar!
		} else {
			alert('Du har valt maxantal!')
			setTeam([...team])
		}
		// todo: om en pokemon redan är vald, alert!
	}

	const handleRemove = (id) => {
		let newArray = team.filter(x => x.id !== id)
		setTeam(newArray)
	}

	return (
		<section className="team-section">
			<p>Välj en Pokemon att lägga till ditt lag!</p>

			{/* <form>
				<select value={poke1} onChange= {handleChange}>
					{pokeList.map(p => (
					<option key={p}> {p.name} </option>
					))}
				</select>
			</form> */}

			<select className='select-area' name='pokeChosen' onChange={handleChange}>
				<option>{pokeList[0].name}</option>
				<option>{pokeList[1].name}</option>
				<option>{pokeList[2].name}</option>
				<option>{pokeList[3].name}</option>
				<option>{pokeList[4].name}</option>
				<option>{pokeList[5].name}</option>
				<option>{pokeList[6].name}</option>
				<option>{pokeList[7].name}</option>
				<option>{pokeList[8].name}</option>
				<option>{pokeList[9].name}</option>
			</select>

			<ol>
				{team.map(p => (
					<li key={p.id}>
						{p.name}
						<button onClick={() => handleRemove(p.id)}> TA BORT </button>
					</li>
				))}
				{/* <li> {poke1} <button onClick={handleRemove}> TA BORT </button></li>
				<li> {poke2} <button onClick={handleRemove}> TA BORT </button></li>
				<li> {poke3} <button onClick={handleRemove}> TA BORT </button></li> */}
			</ol>

		</section>
	)
}

export default Team