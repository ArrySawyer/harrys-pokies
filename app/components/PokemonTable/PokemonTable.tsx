"use client"
import PokemonItem from '../PokemonItem/PokemonItem'
import PokemonItemSkeleton from '../PokemonItemSkeleton/PokemonItemSkeleton'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Axios from 'axios'

type response = {
    name: string
    url: string
}


const PokemonTable = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [previousPageRequest, setPreviousPageRequest] = useState("")
  const [nextPageRequest, setNextPageRequest] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const callApi = (request: string) => {
    console.log('Call API');
    setPokemonList([])
    setIsLoading(true)
    Axios.get(request).then((response) => {
      console.log("response =")
      console.log(response)
      const tempPokemonList: Promise<{data: {}}>[] = [];
      response.data.results.forEach((url: response) => (
        console.log("url"),
        console.log(url),
        tempPokemonList.push(Axios.get(url.url)),
        console.log("tempPokemonList"),
        console.log(tempPokemonList)
      ))
      Promise.all(tempPokemonList).then((responses) => {
        console.log("response2 =")
        console.log(response)
        const test = responses.map((response) => response.data)
        console.log("test")
        console.log(test)
        setPokemonList(test)
      })
      setIsLoading(false)
      setNextPageRequest(response.data.next)
      setPreviousPageRequest(response.data.previous)
    })
  }

  useEffect(() => {
    callApi('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
  }, [])

  function PaginationButton({request, text}: {request: string; text: string;}) {
    if (request) {
      return <button onClick={() => {callApi(request)}} className="text-sm md:text-base font-medium text-white w-fit px-6 md:px-4 py-2 md:py-1.5 border-2 border-white rounded-full ease-in-out duration-75 bg-[#212E3D] hover:bg-white hover:text-[#212E3D] hover:shadow-xl shadow-[#212E3D]">{text}</button>
    }
    return null;
  }

  return(
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-48 mt-48">
      {isLoading && <PokemonItemSkeleton cards={9}/>}
        {pokemonList.map((pokemonDetails) => (
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