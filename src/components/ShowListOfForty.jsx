import { useState } from 'react'

const all = 'https://pokeapi.co/api/v2/pokemon?limit=40'

function ShowListOfForty() {

	let first = ''
	let second = ''
	let third = ''
	let fourth = ''
	let fifth = ''
	let sixth = ''
	let seventh = ''
	let eight = ''
	let ninth = ''
	let tenth = ''
	let eleventh = ''
	let twelwth = ''
	let thirteenth = ''
	let fourteenth = ''
	let fifteenth = ''
	let sixteenth = ''
	let seventeenth = ''
	let eighteenth = ''
	let nineteenth = ''
	let twentieth = ''

	let twentyfirst = ''
	let twentysecond = ''
	let twentythird = ''
	let twentyfourth = ''
	let twentyfifth = ''
	let twentysixth = ''
	let twentyseventh = ''
	let twentyeighth = ''
	let twentyninth = ''
	let thirtieth = ''
	let thirtyfirst = ''
	let thirtysecond = ''
	let thirtythird = ''
	let thirtyfourth = ''
	let thirtyfifth = ''
	let thirtysixth = ''
	let thirtyseventh = ''
	let thirtyeighth = ''
	let thirtyninth = ''
	let fourtieth = ''


	const [firstItem, setFirstItem] = useState(first)
	const [secondItem, setSecond] = useState(second)
	const [thirdItem, setThird] = useState(third)
	const [fourthItem, setFourth] = useState(fourth)
	const [fifthItem, setFifth] = useState(fifth)
	const [sixthItem, setSixth] = useState(sixth)
	const [seventhItem, setSeventh] = useState(seventh)
	const [eigthItem, setEight] = useState(eight)
	const [ninthItem, setNinth] = useState(ninth)
	const [tenthItem, setTenth] = useState(tenth)

	const [eleventhItem, setEleventh] = useState(eleventh)
	const [twelwthItem, setTwelwth] = useState(twelwth)
	const [thirteenthItem, setThirteenth] = useState(thirteenth)
	const [fourthteenthsItem, setFourthteenth] = useState(fourteenth)
	const [fiftheenthItem, setFifteenth] = useState(fifteenth)
	const [sixtheenthItem, setSixtheenth] = useState(sixteenth)
	const [seventeenthItem, setSeventeenth] = useState(seventeenth)
	const [eighteenthItem, setEighteenth] = useState(eighteenth)
	const [nineteenthItem, setNineteenth] = useState(nineteenth)
	const [twentiestItem, setTwentieth] = useState(twentieth)

	const [twentyfirstItem, setTwentyfirst] = useState(twentyfirst)
	const [twentysecondItem, setTwentysecond] = useState(twentysecond)
	const [twentythirdItem, setTwentythird] = useState(twentythird)
	const [twentyfourthItem, setTwentyFourth] = useState(twentyfourth)
	const [twentyfifthItem, setTwentyfifth] = useState(twentyfifth)
	const [twentySixtItem, setTwentysixth] = useState(twentysixth)
	const [twentyseventhItem, setTwentyseventh] = useState(twentyseventh)
	const [twentyeightItem, setTwentyEight] = useState(twentyeighth)
	const [twentyninthItem, setTwentyninth] = useState(twentyninth)
	const [thirtiethItem, setThirtieth] = useState(thirtieth)

	const [thirtyfirstItem, setThirtyfirst] = useState(thirtyfirst)
	const [thirtysecondItem, setThirtysecond] = useState(thirtysecond)
	const [thirtythirdItem, setThirtythird] = useState(thirtythird)
	const [thirtyfourthItem, setThirtyfourth] = useState(thirtyfourth)
	const [thirtyfifthItem, setThirtyfifth] = useState(thirtyfifth)
	const [thirtysixthItem, setThirtysixth] = useState(thirtysixth)
	const [thirtyseventhItem, setThirtyseventh] = useState(thirtyseventh)
	const [thirtyeigthItem, setThirtyeight] = useState(thirtyeighth)
	const [thirtyninthItem, setThirtyninth] = useState(thirtyninth)
	const [fourtiethItem, setFourtieth] = useState(fourtieth)

	const [img, setImg] = useState(null)
	const [img2, setImg2] = useState(null)
	const [img3, setImg3] = useState(null)
	const [img4, setImg4] = useState(null)
	const [img5, setImg5] = useState(null)
	const [img6, setImg6] = useState(null)
	const [img7, setImg7] = useState(null)
	const [img8, setImg8] = useState(null)
	const [img9, setImg9] = useState(null)
	const [img10, setImg10] = useState(null)

	const [img11, setImg11] = useState(null)
	const [img12, setImg12] = useState(null)
	const [img13, setImg13] = useState(null)
	const [img14, setImg14] = useState(null)
	const [img15, setImg15] = useState(null)
	const [img16, setImg16] = useState(null)
	const [img17, setImg17] = useState(null)
	const [img18, setImg18] = useState(null)
	const [img19, setImg19] = useState(null)
	const [img20, setImg20] = useState(null)

	const [img21, setImg21] = useState(null)
	const [img22, setImg22] = useState(null)
	const [img23, setImg23] = useState(null)
	const [img24, setImg24] = useState(null)
	const [img25, setImg25] = useState(null)
	const [img26, setImg26] = useState(null)
	const [img27, setImg27] = useState(null)
	const [img28, setImg28] = useState(null)
	const [img29, setImg29] = useState(null)
	const [img30, setImg30] = useState(null)

	const [img31, setImg31] = useState(null)
	const [img32, setImg32] = useState(null)
	const [img33, setImg33] = useState(null)
	const [img34, setImg34] = useState(null)
	const [img35, setImg35] = useState(null)
	const [img36, setImg36] = useState(null)
	const [img37, setImg37] = useState(null)
	const [img38, setImg38] = useState(null)
	const [img39, setImg39] = useState(null)
	const [img40, setImg40] = useState(null)

	// =============== BILDER
	const id1img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' //bulbasaur
	const id2img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' // ivysaur
	const id3img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' // venusaur
	const id4img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' // charmander
	const id5img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' // charmeleon
	const id6img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' // charizard
	const id7img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' // squirtle
	const id8img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' // wartortle
	const id9img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' // blastoise
	const id10img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' // caterpie

	const id11img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' // metapod
	const id12img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' // butterfree
	const id13img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' // weedle
	const id14img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' // kakuna
	const id15img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' // beedrill
	const id16img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' //pidgey
	const id17img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' // pidgeotto
	const id18img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' // pidgeot
	const id19img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' // rattata
	const id20img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' // raticate

	const id21img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png' // spearow
	const id22img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png' // fearow
	const id23img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png' // ekans
	const id24img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png' // arbok
	const id25img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' // pikachu
	const id26img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png' // raichu
	const id27img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png' // sandshrew
	const id28img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png' // sandslash
	const id29img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png' // nidoran-f
	const id30img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png' // nidorina

	const id31img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png' // nidoqueen
	const id32img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png' // nidoran-m
	const id33img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png' // nidorino
	const id34img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png' // nidoking
	const id35img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png' // clefairy
	const id36img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png' // clefable
	const id37img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png' // vulpix
	const id38img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png' // ninetales
	const id39img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png' // jigglypuff
	const id40img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png' // wigglypuff

	// ===============

	return (
		<section>
			<button className='button-to-show-40'  onClick={async function func() {
				const response = await fetch(all, {method: 'GET'})
				const data = await response.json()
				
				// SET IMG
				first = setImg(id1img)
				second = setImg2(id2img)
				third = setImg3(id3img)
				fourth = setImg4(id4img)
				fifth = setImg5(id5img)
				sixth = setImg6(id6img)
				seventh = setImg7(id7img)
				eight = setImg8(id8img)
				ninth = setImg9(id9img)
				tenth = setImg10(id10img)

				eleventh = setImg11(id11img)
				twelwth = setImg12(id12img)
				thirteenth = setImg13(id13img)
				fourteenth = setImg14(id14img)
				fifteenth = setImg15(id15img)
				sixteenth = setImg16(id16img)
				seventeenth = setImg17(id17img)
				eighteenth = setImg18(id18img)
				nineteenth = setImg19(id19img)
				twentieth = setImg20(id20img)

				twentyfirst = setImg21(id21img)
				twentysecond = setImg22(id22img)
				twentythird = setImg23(id23img)
				twentyfourth = setImg24(id24img)
				twentyfifth = setImg25(id25img)
				twentysixth = setImg26(id26img)
				twentyseventh = setImg27(id27img)
				twentyeighth = setImg28(id28img)
				twentyninth = setImg29(id29img)
				thirtieth = setImg30(id30img)

				thirtyfirst = setImg31(id31img)
				thirtysecond = setImg32(id32img)
				thirtythird = setImg33(id33img)
				thirtyfourth = setImg34(id34img)
				thirtyfifth = setImg35(id35img)
				thirtysixth = setImg36(id36img)
				thirtyseventh = setImg37(id37img)
				thirtyeighth = setImg38(id38img)
				thirtyninth = setImg39(id39img)
				fourtieth = setImg40(id40img)

				// SET NAME
				first = setFirstItem(data.results[0].name)
				second = setSecond(data.results[1].name)
				third = setThird(data.results[2].name)
				fourth = setFourth(data.results[3].name)
				fifth = setFifth(data.results[4].name)
				sixth = setSixth(data.results[5].name)
				seventh = setSeventh(data.results[6].name)
				eight = setEight(data.results[7].name)
				ninth = setNinth(data.results[8].name)
				tenth = setTenth(data.results[9].name)
							
				eleventh = setEleventh(data.results[10].name)
				twelwth = setTwelwth(data.results[11].name)
				thirteenth = setThirteenth(data.results[12].name)
				fourteenth = setFourthteenth(data.results[13].name)
				fifteenth = setFifteenth(data.results[14].name)
				sixteenth = setSixtheenth(data.results[15].name)
				seventeenth = setSeventeenth(data.results[16].name)
				eighteenth = setEighteenth(data.results[17].name)
				nineteenth = setNineteenth(data.results[18].name)
				twentieth = setTwentieth(data.results[19].name)
			
				twentyfirst = setTwentyfirst(data.results[20].name)
				twentysecond = setTwentysecond(data.results[21].name)
				twentythird = setTwentythird(data.results[22].name)
				twentyfourth = setTwentyFourth(data.results[23].name)
				twentyfifth = setTwentyfifth(data.results[24].name)
				twentysixth = setTwentysixth(data.results[25].name)
				twentyseventh = setTwentyseventh(data.results[26].name)
				twentyeighth = setTwentyEight(data.results[27].name)
				twentyninth = setTwentyninth(data.results[28].name)
							
				thirtieth= setThirtieth(data.results[29].name)
				thirtyfirst = setThirtyfirst(data.results[30].name)
				thirtysecond = setThirtysecond(data.results[31].name)
				thirtythird = setThirtythird(data.results[32].name)
				thirtyfourth = setThirtyfourth(data.results[33].name)
				thirtyfifth = setThirtyfifth(data.results[34].name)
				thirtysixth = setThirtysixth(data.results[35].name)
				thirtyseventh = setThirtyseventh(data.results[36].name)
				thirtyeighth = setThirtyeight(data.results[37].name)
				thirtyninth = setThirtyninth(data.results[38].name)
				fourtieth = setFourtieth(data.results[39].name)
	
			}}> SE ALLA POKEMON </button> {/*async slutar här*/}

			<section className='pokemon-section'>
				<p>{firstItem} <img src={img} /></p>
				<p>{secondItem} <img src={img2} /></p>
				<p>{thirdItem} <img src={img3} /></p>
				<p>{fourthItem} <img src={img4} /></p>
				<p>{fifthItem} <img src={img5} /></p>
				<p>{sixthItem}<img src={img6} />  </p>
				<p>{seventhItem}<img src={img7} /></p>
				<p>{eigthItem}<img src={img8} /></p>
				<p>{ninthItem}<img src={img9} /></p>
				<p>{tenthItem}<img src={img10} /></p>

				<p>{eleventhItem}<img src={img11} /></p>
				<p>{twelwthItem}<img src={img12} /></p>
				<p>{thirteenthItem}<img src={img13} /></p>
				<p>{fourthteenthsItem}<img src={img14} /></p>
				<p>{fiftheenthItem}<img src={img15} /></p>
				<p>{sixtheenthItem}<img src={img16} /></p>
				<p>{seventeenthItem}<img src={img17} /></p>
				<p>{eighteenthItem}<img src={img18} /></p>
				<p>{nineteenthItem}<img src={img19} /></p>
				<p>{twentiestItem}<img src={img20} /></p>

				<p>{twentyfirstItem}<img src={img21} /></p>
				<p>{twentysecondItem}<img src={img22} /></p>
				<p>{twentythirdItem}<img src={img23} /></p>
				<p>{twentyfourthItem}<img src={img24} /></p>
				<p>{twentyfifthItem}<img src={img25} /></p>
				<p>{twentySixtItem}<img src={img26} /></p>
				<p>{twentyseventhItem}<img src={img27} /></p>
				<p>{twentyeightItem}<img src={img28} /></p>
				<p>{twentyninthItem}<img src={img29} /></p>
				<p>{thirtiethItem}<img src={img30} /></p>

				<p>{thirtyfirstItem}<img src={img31} /></p>
				<p>{thirtysecondItem}<img src={img32} /></p>
				<p>{thirtythirdItem}<img src={img33} /></p>
				<p>{thirtyfourthItem}<img src={img34} /></p>
				<p>{thirtyfifthItem}<img src={img35} /></p>
				<p>{thirtysixthItem}<img src={img36} /></p>
				<p>{thirtyseventhItem}<img src={img37} /></p>
				<p>{thirtyeigthItem}<img src={img38} /></p>
				<p>{thirtyninthItem}<img src={img39} /></p>
				<p>{fourtiethItem}<img src={img40} /></p>

			</section>
		</section>	
	)
}

export default ShowListOfForty