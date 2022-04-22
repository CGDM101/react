import { useState } from 'react'

function ShowPoke() {
	const [name, setName] = useState('')
	const [abilities, setAbilities] = useState([])
	const [image, setImage] = useState(null)
	const [nickname, setNickname] = useState('')

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

	return (		
		<div>
			<button onClick={async function fetchDittodata() {
				const response = await fetch(dittoUrl, {method: 'GET'})
				const data = await response.json()

				setName(data.name)
				setAbilities([data.abilities[0].ability.name, data.abilities[1].ability.name])
				setImage(dittoImgUrl)
				
				}}> VISA </button>
		
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