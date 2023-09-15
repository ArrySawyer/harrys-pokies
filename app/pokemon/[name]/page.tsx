"use client";

export default function PokemonPage({ params }: { params: { name: string } }) {
  return <p>pokemon {params.name}</p>;
}
