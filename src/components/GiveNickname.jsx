import { useState } from 'react'

// When the data is handled by the components, all the data is stored in the component state.

let testList = [{id: 1, name: 'bulbasaur', nickname: ''}, {id: 2, name: 'venosaur', nickname: ''}]

function GiveNickname() {
	const [nickname, setNickname] = useState('')
	const handleSubmit = (event) => {
		event.preventDefault();
		// alert(`you enterned${x}`) 
		console.log('name1',nickname)
		// foreach item i collection, if input === item.name, så lägg till nickname i item.
		testList.forEach(element => {
			element.name === nickname; setNickname(nickname)
		});
		console.log('name2',nickname)
	}

	return (
		<section>
			<p>Skriv in önskat smeknamn på din valda Pokemon:</p>
			<input 
				type="text" 
				placeholder='Smeknamn'
				value={nickname}
				onChange={(e) => setNickname(e.target.value)}/>
			<button onClick={handleSubmit}> OK </button>

			<p>Nytt smeknamn: {nickname} </p>
		</section>
	)
}

export default GiveNickname