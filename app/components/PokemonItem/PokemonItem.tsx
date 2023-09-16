"use client";
import Image from "next/image";
import Link from "next/link";

type PokemonItemProps = {
  pokemonDetails: {
    id: number;
    name: string;
    image: string;
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  };
};

const typeStyles = {
  grass: {
    wrapper:
      "border-emerald-900/70 shadow-green-800 sm:shadow-green-800 group-hover:shadow-green-800", //tw bug with shadows so have to use shadow-green-800 and sm:shadow-green-800 :(
    main: "bg-green-500",
    button: "hover:text-green-900",
  },
  fire: {
    wrapper:
      "border-orange-900/40 shadow-orange-800 sm:shadow-orange-800 group-hover:shadow-orange-800",
    main: "bg-orange-500",
    button: "hover:text-orange-900",
  },
  water: {
    wrapper:
      "border-blue-900/70 shadow-blue-800 sm:shadow-blue-800 group-hover:shadow-blue-800",
    main: "bg-blue-500",
    button: "hover:text-blue-900",
  },
  bug: {
    wrapper:
      "border-lime-900/70 shadow-lime-800 sm:shadow-lime-800 group-hover:shadow-lime-800",
    main: "bg-lime-400",
    button: "hover:text-lime-900",
  },
  normal: {
    wrapper:
      "border-neutral-700/70 shadow-neutral-500 sm:shadow-neutral-500 group-hover:shadow-neutral-500",
    main: "bg-neutral-400",
    button: "hover:text-neutral-900",
  },
  poison: {
    wrapper:
      "border-purple-900/70 shadow-purple-700 sm:shadow-purple-700 group-hover:shadow-purple-700",
    main: "bg-purple-500",
    button: "hover:text-purple-900",
  },
  electric: {
    wrapper:
      "border-yellow-500/20 shadow-yellow-500 sm:shadow-yellow-500 group-hover:shadow-yellow-500",
    main: "bg-yellow-400",
    button: "hover:text-yellow-900",
  },
  ground: {
    wrapper:
      "border-amber-700/20 shadow-amber-700 sm:shadow-amber-700 group-hover:shadow-amber-700",
    main: "bg-amber-600",
    button: "hover:text-amber-900",
  },
  fairy: {
    wrapper:
      "border-pink-500/20 shadow-pink-500 sm:shadow-pink-500 group-hover:shadow-pink-500",
    main: "bg-pink-400",
    button: "hover:text-pink-900",
  },
  fighting: {
    wrapper:
      "border-red-900/30 shadow-red-800 sm:shadow-red-800 group-hover:shadow-red-800",
    main: "bg-red-500",
    button: "hover:text-red-900",
  },
  psychic: {
    wrapper:
      "border-red-900/30 shadow-red-400 sm:shadow-red-400 group-hover:shadow-red-400",
    main: "bg-red-400",
    button: "hover:text-red-900",
  },
  rock: {
    wrapper:
      "border-amber-300/20 shadow-amber-200 sm:shadow-amber-200 group-hover:shadow-amber-200",
    main: "bg-amber-200",
    button: "hover:text-amber-900",
  },
  ghost: {
    wrapper:
      "border-violet-900/50 shadow-violet-900 sm:shadow-violet-900 group-hover:shadow-violet-900",
    main: "bg-violet-900",
    button: "hover:text-violet-900",
  },
  ice: {
    wrapper:
      "border-teal-600/30 shadow-teal-200 sm:shadow-teal-200 group-hover:shadow-teal-200",
    main: "bg-teal-200",
    button: "hover:text-teal-900",
  },
  dragon: {
    wrapper:
      "border-blue-700/30 shadow-blue-700 sm:shadow-blue-700 group-hover:shadow-blue-700",
    main: "bg-blue-700",
    button: "hover:text-blue-900",
  },
  dark: {
    wrapper:
      "border-stone-900/30 shadow-stone-800 sm:shadow-stone-800 group-hover:shadow-stone-800",
    main: "bg-stone-800",
    button: "hover:text-stone-900",
  },
  steel: {
    wrapper:
      "border-cyan-800/30 shadow-cyan-800 sm:shadow-cyan-800 group-hover:shadow-cyan-800",
    main: "bg-cyan-800",
    button: "hover:text-cyan-900",
  },
  flying: {
    wrapper:
      "border-indigo-600/30 shadow-indigo-300 sm:shadow-indigo-300 group-hover:shadow-indigo-300",
    main: "bg-indigo-300",
    button: "hover:text-indigo-900",
  },
} as any;

const PokemonItem = ({ pokemonDetails }: PokemonItemProps) => {
  const { types } = pokemonDetails;
  const mainTypeName = types[0].type.name;
  const mainTypeStyle = typeStyles[mainTypeName] || {}; // add type to remove typescript error
  const secoundaryTypeName = types[1]?.type.name;
  const secoundaryTypeStyle = typeStyles[secoundaryTypeName] || {}; // add type to remove typescript error

  return (
    <div className="h-80">
      <div className="group relative flex justify-center transition-all ease-out duration-300">
        <div
          className={`${mainTypeStyle.wrapper} bg-[#233349] text-white relative w-full h-[19.3rem] sm:h-[17rem] sm:group-hover:h-[19.3rem] flex flex-col items-center border-t rounded-2xl overflow-hidden shadow-2xl sm:shadow-lg group-hover:shadow-2xl sm:group-hover:scale-105 transition-all ease-out duration-300`}
        >
          <div
            className={`w-32 h-32 ${mainTypeStyle.main} blur-[128px] group-hover:scale-125 transition-all ease-out duration-300`}
          ></div>
          <div className="z-10 flex flex-col items-center">
            <p className="text-xl font-bold">#{pokemonDetails.id}</p>
            <p className="text-3xl font-bold mb-3 capitalize">
              {pokemonDetails.name}
            </p>
            <div className="flex gap-2 z-10">
              <p
                className={`px-2.5 py-0.5 rounded-full ${mainTypeStyle.main} flex gap-1.5 font-semibold capitalize`}
              >
                {pokemonDetails.types[0].type.name}
              </p>
              {pokemonDetails.types[1] ? (
                <p
                  className={`px-2.5 py-0.5 rounded-full ${secoundaryTypeStyle.main} flex gap-1.5 font-semibold capitalize`}
                >
                  {pokemonDetails.types[1].type.name}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="absolute bottom-0 w-full px-8">
            <div
              className={`${mainTypeStyle.button} w-fit mx-auto flex items-center gap-1 pl-3 pr-2 py-1 border-2 border-white rounded-full sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-75 relative z-20 hover:bg-white`}
            >
              <Link
                href={`/pokemon/${pokemonDetails.name}`}
                className="uppercase relative font-medium flex items-center"
              >
                see stats
                <svg
                  className="ml-1 rotate-45"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0004 18C14.4186 18 18.0004 14.4183 18.0004 10C18.0004 5.58172 14.4186 2 10.0004 2C5.58209 2 2.00037 5.58172 2.00037 10C2.00037 14.4183 5.58209 18 10.0004 18ZM13.7075 9.29289L10.7075 6.29289C10.3169 5.90237 9.68378 5.90237 9.29326 6.29289L6.29326 9.29289C5.90274 9.68342 5.90274 10.3166 6.29326 10.7071C6.68378 11.0976 7.31695 11.0976 7.70747 10.7071L9.00037 9.41421L9.00037 13C9.00037 13.5523 9.44808 14 10.0004 14C10.5527 14 11.0004 13.5523 11.0004 13V9.41421L12.2933 10.7071C12.6838 11.0976 13.3169 11.0976 13.7075 10.7071C14.098 10.3166 14.098 9.68342 13.7075 9.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
            <div
              className={`h-5 w-full ${mainTypeStyle.main} blur-[8px] scale-[6] translate-y-6`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
