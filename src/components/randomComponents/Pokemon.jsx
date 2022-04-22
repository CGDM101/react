
const Pokemon = ({id, name, abilities }) => (
	<ol>
		<li>nr {id} har namnet {name} och egenskapen/-erna {abilities}</li>
	</ol>
	
	// <li>
	// 	<div>{id}</div>
	// 	<div>har namnet {name}</div>
	// 	<div>och egenskapern/-erna {abilities}</div>
	// </li>
)
// se hanse ex addressbok vIEWcontact.jsx
// det ovan funkar!



//test viewcontact o addressbook: ==========================

// se ContactForm.jsx:
function CreatePokemon() {
	
	const [id, setId] = useState('')
	const [name, setName] = useState('')
	const [abiliies, setAbilities] = useState('')

	const handleClick = () => {
		let newPokemon = {
			// apidatan = id, name, abilities
		}
	}
}
 // se addressbook.jsx
function AddCreatedPokemon(newPokemon) {

	// seetContacts?

	return (
		null
	)
}
// ========================================================





export default Pokemon
// TODO om >1 egenskap!! se PokemonList.jsx också!