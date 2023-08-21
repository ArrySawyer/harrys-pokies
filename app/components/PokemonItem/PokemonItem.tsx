"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'

type PokemonItemProps = {
  pokemonDetails: {
    abilities: Array<Object>
    base_experience: number
    forms: Array<Object>
    game_indices: Array<Object>
    height: number
    held_items: Array<Object>
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Array<Object>
    name: string
    order: number
    past_types: Array<Object>
    species: Object
    sprites: {
      other: {
        home: {
          front_default: string
        }
      }
    }
    stats: Array<Object>
    types: {
      slot: number
      type: {
        name: string
        url: string
      }
    }[]
    weight: number
  }
};

const PokemonItem = ({pokemonDetails}: PokemonItemProps) => {
  //const [wrapperColours, setWrapperColours =] = useState "")
  //const [mainColour, setMainColour =] = useState "")
  //const [secoundTypeColour, setSecoundTypeColour] = useState "")
  //const [buttonTextColour, setButtonTextColour =] = useState "")

  console.log ("pokemonDetails")
  console.log(pokemonDetails && pokemonDetails)
  console.log(pokemonDetails.types[0].type.name)
  
  let setWrapperColours = ""
  let setMainColour = ""
  let setButtonTextColour = ""

  if (pokemonDetails.types[0].type.name === "grass" ) {
    setWrapperColours = "border-emerald-900/70 shadow-green-800 group-hover:shadow-green-800"
    setMainColour =  "bg-green-500"
    setButtonTextColour =  "hover:text-green-900"
  } else if (pokemonDetails.types[0].type.name === "fire" ) {
    setWrapperColours = "border-orange-900/40 shadow-orange-800 group-hover:shadow-orange-800"
    setMainColour = "bg-orange-500"
    setButtonTextColour = "hover:text-orange-900"
  } else if (pokemonDetails.types[0].type.name === "water" ) {
    setWrapperColours = "border-blue-900/70 shadow-blue-800 group-hover:shadow-blue-800"
    setMainColour = "bg-blue-500"
    setButtonTextColour = "hover:text-blue-900"
  } else if (pokemonDetails.types[0].type.name === "bug" ) {
    setWrapperColours = "border-lime-900/70 shadow-lime-800 group-hover:shadow-lime-800"
    setMainColour = "bg-lime-400"
    setButtonTextColour = "hover:text-lime-900"
  } else if (pokemonDetails.types[0].type.name === "normal" ) {
    setWrapperColours = "border-neutral-700/70 shadow-neutral-500 group-hover:shadow-neutral-500"
    setMainColour = "bg-neutral-400"
    setButtonTextColour = "hover:text-neutral-900"
  } else if (pokemonDetails.types[0].type.name === "poison" ) {
    setWrapperColours = "border-purple-900/70 shadow-purple-700 group-hover:shadow-purple-700"
    setMainColour = "bg-purple-500"
    setButtonTextColour = "hover:text-purple-900"
  } else if (pokemonDetails.types[0].type.name === "electric" ) {
    setWrapperColours = "border-yellow-500/20 shadow-yellow-500 group-hover:shadow-yellow-500"
    setMainColour = "bg-yellow-400"
    setButtonTextColour = "hover:text-yellow-900"
  } else if (pokemonDetails.types[0].type.name === "ground" ) {
    setWrapperColours = "border-amber-700/20 shadow-amber-700 group-hover:shadow-amber-700"
    setMainColour = "bg-amber-600"
    setButtonTextColour = "hover:text-amber-900"
  } else if (pokemonDetails.types[0].type.name === "fairy" ) {
    setWrapperColours = "border-pink-500/20 shadow-pink-500 group-hover:shadow-pink-500"
    setMainColour = "bg-pink-400"
    setButtonTextColour = "hover:text-pink-900"
  } else if (pokemonDetails.types[0].type.name === "fighting" ) {
    setWrapperColours = "border-red-900/30 shadow-red-800 group-hover:shadow-red-800"
    setMainColour = "bg-red-500"
    setButtonTextColour = "hover:text-red-900"
  } else if (pokemonDetails.types[0].type.name === "psychic" ) {
    setWrapperColours = "border-red-900/30 shadow-red-400 group-hover:shadow-red-400"
    setMainColour = "bg-red-400"
    setButtonTextColour = "hover:text-red-900"
  } else if (pokemonDetails.types[0].type.name === "rock" ) {
    setWrapperColours = "border-amber-300/20 shadow-amber-200 group-hover:shadow-amber-200"
    setMainColour = "bg-amber-200"
    setButtonTextColour = "hover:text-amber-900"
  } else if (pokemonDetails.types[0].type.name === "ghost" ) {
    setWrapperColours = "border-violet-900/50 shadow-violet-900 group-hover:shadow-violet-900"
    setMainColour = "bg-violet-900"
    setButtonTextColour = "hover:text-violet-900"
  } else if (pokemonDetails.types[0].type.name === "ice" ) {
    setWrapperColours = "border-teal-600/30 shadow-teal-200 group-hover:shadow-teal-200"
    setMainColour = "bg-teal-200"
    setButtonTextColour = "hover:text-teal-900"
  } else if (pokemonDetails.types[0].type.name === "dragon" ) {
    setWrapperColours = "border-blue-700/30 shadow-blue-700 group-hover:shadow-blue-700"
    setMainColour = "bg-blue-700"
    setButtonTextColour = "hover:text-blue-900"
  } else if (pokemonDetails.types[0].type.name === "dark" ) {
    setWrapperColours = "border-stone-900/30 shadow-stone-800 group-hover:shadow-stone-800"
    setMainColour = "bg-stone-800"
    setButtonTextColour = "hover:text-stone-900"
  } else if (pokemonDetails.types[0].type.name === "steel" ) {
    setWrapperColours = "border-cyan-800/30 shadow-cyan-800 group-hover:shadow-cyan-800"
    setMainColour = "bg-cyan-800"
    setButtonTextColour = "hover:text-cyan-900"
  } else if (pokemonDetails.types[0].type.name === "flying" ) {
    setWrapperColours = "border-indigo-600/30 shadow-indigo-300 group-hover:shadow-indigo-300"
    setMainColour = "bg-indigo-300"
    setButtonTextColour = "hover:text-indigo-900"
  }


  return(
    <div className="h-80">
    <div className="group relative flex justify-center transition-all ease-out duration-300">
      <Image width="256" height="256" className="absolute -top-40 w-64 left-auto z-10 origin-bottom group-hover:scale-110 transition-all ease-out duration-300" src={`${pokemonDetails.sprites.other.home.front_default}`} alt="Bulbasaur"/>
      <div className={`${setWrapperColours} bg-[#233349] text-white relative w-full h-[17rem] group-hover:h-[19.3rem] flex flex-col items-center border-t rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all ease-out duration-300`}>
        <div className={`w-32 h-32 ${setMainColour} blur-[128px] group-hover:scale-125 transition-all ease-out duration-300`}></div>
          <div className="z-10 flex flex-col items-center">
            <p className="text-xl font-bold">#{pokemonDetails.id.toString().padStart(4, '0')}</p>
            <p className="text-3xl font-bold mb-3 capitalize">{pokemonDetails.name}</p>
            <div className="flex gap-2 z-10">
              <p className={`px-2 py-0.5 rounded-full ${setMainColour} flex gap-1.5`}>
                <Image src="https://pokedex-react-carlosdancr.vercel.app/assets/grass.81f4df08.svg" width="16" height="16" alt="grass" />
                {pokemonDetails.types[0].type.name}
              </p>
              <p className="px-2 py-0.5 rounded-full bg-purple-500 flex gap-1.5">
                <Image src="https://pokedex-react-carlosdancr.vercel.app/assets/poison.ba0642b1.svg" width="16" height="16" alt="grass" />
                {pokemonDetails.types[1]?.type.name}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full px-8">
            <div className={`${setButtonTextColour} w-fit mx-auto flex items-center gap-1 pl-3 pr-2 py-1 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-75 relative z-20 hover:bg-white`}>
              <button className="uppercase relative font-medium flex items-center">
                see stats
                <svg className="ml-1 rotate-45" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.0004 18C14.4186 18 18.0004 14.4183 18.0004 10C18.0004 5.58172 14.4186 2 10.0004 2C5.58209 2 2.00037 5.58172 2.00037 10C2.00037 14.4183 5.58209 18 10.0004 18ZM13.7075 9.29289L10.7075 6.29289C10.3169 5.90237 9.68378 5.90237 9.29326 6.29289L6.29326 9.29289C5.90274 9.68342 5.90274 10.3166 6.29326 10.7071C6.68378 11.0976 7.31695 11.0976 7.70747 10.7071L9.00037 9.41421L9.00037 13C9.00037 13.5523 9.44808 14 10.0004 14C10.5527 14 11.0004 13.5523 11.0004 13V9.41421L12.2933 10.7071C12.6838 11.0976 13.3169 11.0976 13.7075 10.7071C14.098 10.3166 14.098 9.68342 13.7075 9.29289Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          <div className={`h-5 w-full ${setMainColour} blur-[8px] scale-[6] translate-y-6`}></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PokemonItem