"use client"
import allPokemon from '../../../json/all-pokemon.json'
import PokemonItem from '../PokemonItem/PokemonItem'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Axios from 'axios'


const PokemonTable = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [previousPageRequest, setPreviousPageRequest] = useState("")
  const [nextPageRequest, setNextPageRequest] = useState("")

  /*
  useEffect(() => {
    console.log('Call API');
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0').then((response) => {
      console.log("response =")
      console.log(response)
      setResponseList(response.data.results)
    })
  }, [])

  useEffect(() => {
    const tempPokemonList = [];
    responseList.map(({name, url}) => (
      Axios.get(`${url}`).then((response) => {
        console.log("pokemon response =")
        console.log(response)
      })
    ))
    setPokemonList(test)
  }, [responseList])

  useEffect(() => {
      console.log("Add pokemon to list")
  }, [tempPokemonInfo])

  console.log("responseList")
  console.log(responseList)

  console.log("pokemonList")
  console.log(pokemonList)
  */

  const callApi = (request) => {
    console.log('Call API');
    Axios.get(request).then((response) => {
      console.log("response =")
      console.log(response)
      const tempPokemonList: string[] = [];
      response.data.results.forEach(({url}) => (
        tempPokemonList.push(Axios.get(`${url}`)),
        console.log("tempPokemonList"),
        console.log(tempPokemonList),
        Promise.all(tempPokemonList).then((responses) => {
          const test: string[] = responses.map((response) => response.data)
          console.log("test")
          console.log(test)
          setPokemonList(test)
        })
      ))
      setNextPageRequest(response.data.next)
      setPreviousPageRequest(response.data.previous)
    })
  }

  useEffect(() => {
    callApi('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
  }, [])

  function PaginationButton({request, text}) {
    if (request) {
      return <button onClick={() => {callApi(request)}} className="text-sm md:text-base font-medium text-white w-fit px-6 md:px-4 py-2 md:py-1.5 border-2 border-white rounded-full ease-in-out duration-75 bg-[#212E3D] hover:bg-white hover:text-[#212E3D] hover:shadow-xl shadow-[#212E3D]">{text}</button>
    }
    return null;
  }

  return(
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-48 mt-48">
        {pokemonList && pokemonList.map((pokemonDetails) => (
          <PokemonItem pokemonDetails={pokemonDetails} key={pokemonDetails.id}/>
        ))}
      </div>
      <div className="flex gap-16 justify-center relative mt-8 mb-8">
        <PaginationButton request={previousPageRequest} text="Prev page" />
        <PaginationButton request={nextPageRequest} text="Next page" />
      </div>
    </>
  )
}

export default PokemonTable