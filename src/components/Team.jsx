import SinglePokemon from "./SinglePokemon"

const Team = ({ team, setTeam }) => {
	return (
	  <div className='team'>
		<div>
		  {team.map((pokemon, index) => (
			<SinglePokemon key={index} addPokemon={false} setTeam={setTeam}
			  {...pokemon}
			/>
		  ))}
		</div>
	  </div>
	)
  }
  
export default Team