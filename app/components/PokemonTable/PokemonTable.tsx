"use client";
import PokemonItem from "../PokemonItem/PokemonItem";
import PokemonItemSkeleton from "../PokemonItemSkeleton/PokemonItemSkeleton";
import { useState, useEffect } from "react";
import Axios from "axios";

type listResponse = {
  name: string;
  url: string;
};

const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";

const PokemonTable = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [previousPageRequest, setPreviousPageRequest] = useState("");
  const [nextPageRequest, setNextPageRequest] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const callApi = (request: string) => {
    try {
      Axios.get(request).then((response) => {
        const tempPokemonList: Promise<{
          data: {
            id: string;
            name: string;
            sprites: { other: { home: { front_default: string } } };
            types: [];
          };
        }>[] = [];
        response.data.results.forEach((url: listResponse) =>
          tempPokemonList.push(Axios.get(url.url))
        );
        Promise.all(tempPokemonList).then((responses) => {
          const pokemonList = responses.map((response) => response.data);
          const structuredPokemonList = pokemonList.map((pokemon) => {
            return {
              id: pokemon.id.toString().padStart(4, "0"),
              name: pokemon.name,
              image: pokemon.sprites.other.home.front_default,
              types: pokemon.types,
            };
          });
          setPokemonList(structuredPokemonList);
          setNextPageRequest(response.data.next);
          setPreviousPageRequest(response.data.previous);
          setIsLoading(false);
        });
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    callApi(pokemonApiUrl);
  }, []);

  function PaginationButton({
    request,
    text,
  }: {
    request: string;
    text: string;
  }) {
    if (request) {
      return (
        <button
          onClick={() => {
            callApi(request);
          }}
          className="text-sm md:text-base font-medium text-white w-fit px-6 md:px-4 py-2 md:py-1.5 border-2 border-white rounded-full ease-in-out duration-75 bg-[#212E3D] hover:bg-white hover:text-[#212E3D] hover:shadow-xl shadow-[#212E3D]"
        >
          {text}
        </button>
      );
    }
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-48 mt-48">
        {isLoading && <PokemonItemSkeleton cards={9} />}
        {!isLoading &&
          pokemonList.map((pokemonDetails) => (
            <PokemonItem
              pokemonDetails={pokemonDetails}
              key={pokemonDetails.id}
            />
          ))}
      </div>
      <div className="flex gap-16 justify-center relative mt-8 mb-8">
        <PaginationButton request={previousPageRequest} text="Prev page" />
        <PaginationButton request={nextPageRequest} text="Next page" />
      </div>
    </>
  );
};

export default PokemonTable;
