import { useState } from 'react'

async function fetchUrls(setX) {
	const listOfUrls = []
	const all1126 = 'https://pokeapi.co/api/v2/pokemon?limit=1200&offset=0'
	const response = await fetch(all1126, {method: 'GET'})
	const data = await response.json()
	setX(data.results)
} 

function handleIncomingValue(props) {
	if (props == 'ditto') {}
}


function ShowPoke(props) {
	const [x, setX] = useState([])
	const [name, setName] = useState('')
	const [abilities, setAbilities] = useState([])
	const [image, setImage] = useState(null)
	const [nickname, setNickname] = useState('') // ?

	fetchUrls(setX)
	
	const matchingPokemon = x.find(q => q.name == props.chosenPokemon)

	// let idParamList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
	// let idParam = 0
	// idParamList.forEach(element => {
	// 	idParam = idParamList[element - 1] // funkar
	// });
	
	let start = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
	const end = '.png'
	// let imgUrl = start + idParam + end

	let tryWithParam = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{idParam}.png' // funkar inte, {idParam} skrivs ut.

	let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
	let baseImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


	const dittoUrl = baseUrl + '132'
	let dittoImgUrl = baseImg + '132' + '.png'

	const bulbasaurImgUrl = baseImg + '1' + '.png'
	const bulbasaurUrl = baseUrl + '1'
	const ivysaurImgurl = baseImg + '2' + '.png'
	const ivysaurUrl = baseUrl + '2'
	const venusaurImgurl = baseImg + '3' + '.png'
	const venusaurUrl = baseUrl + '3'
 	const charmanderImgUrl = baseImg + '4' + '.png'
	const charmanderUrl = baseUrl + '4'
	const charmeleonImgurl = baseImg + '5' + '.png'
	const charmeleonUrl = baseUrl + '5'
	const charizardImgurl = baseImg + '6' + '.png'
	const charizardUrl = baseUrl + '6'
	const squirtleImgurl = baseImg + '7' + '.png'
	const squirtleUrl = baseUrl + '7'
	const wartortleImgurl = baseImg + '8' + '.png'
	const wartortleUrl = baseUrl + '8'
	const balstoiseImgurl = baseImg + '9' + '.png'
	const blastoiseUrl = baseUrl + '9'
	const caterpieImgurl = baseImg + '10' + '.png'
	const caterpieUrl = baseUrl + '10'

const fetchPokemoonData = async (url) => {

	const response = await fetch(url, {method: 'GET'})
	const pokemonDetails = await response.json()
	setName(pokemonDetails.name)
	setAbilities([pokemonDetails.abilities[0].ability.name, pokemonDetails.abilities[1].ability.name])
	setImage(imgUrl)


}
	
	return (		
		<div>
			<button onClick={  () => fetchPokemoonData(matchingPokemon.url)

			}> VISA </button>
		
			<section>
				<p> {name}</p>
				<img src={image} alt='' />
				<div>
					<p> {abilities[0]} </p>
					<p> {abilities[1]} </p>
					{/* <p> {abilities[3]} </p> */}
				</div>
			</section>
		
		</div>
	)
}

export default ShowPoke