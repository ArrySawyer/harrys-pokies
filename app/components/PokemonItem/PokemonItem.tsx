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

  return <div className="h-80">wow</div>;
};

export default PokemonItem;
