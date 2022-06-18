import React from "react"

const SinglePokemon = ({ addPokemon, id, name, image, nickname, setTeam }) => {

  const SelectPokemon = (id, name, image) => {
    const userinputNickname = window.prompt("Välj smeknamn!")
    setTeam((prevProps) => [
      ...prevProps,
      {
        id: id,
        name: name,
        image: image,
        nickname: userinputNickname,
      }
    ])
  }

  const RemovePokemon = (nickname) => {
    setTeam((prevProps) =>
      prevProps.filter((pokemon) => pokemon.nickname !== nickname)
    )
  }

  return (
    <div className='single-pokemon'>
      <p>{name}</p>
      {nickname ? <p>{nickname}</p> : <span></span>}
      <img src={image} alt={name} />
      {addPokemon ? (
        <button onClick={() => SelectPokemon(id, name, image)}> LÄGG TILL! </button>
      ) : (
        <button onClick={() => RemovePokemon(nickname)}> TA BORT! </button>
      )}
    </div>
  )
}

export default SinglePokemon