"use client";

export default function PokemonPage({ params }: { params: { name: string } }) {
  return (
    <>
      <div className="h-screen bg-blue-600">
        <p>pokemon {params.name}</p>
      </div>
      <div className="h-screen bg-red-600">
        <p>pokemon {params.name}</p>
      </div>
      <div className="h-screen bg-green-600">
        <p>pokemon {params.name}</p>
      </div>
      <div className="h-screen bg-pink-600">
        <p>pokemon {params.name}</p>
      </div>
      <div className="h-screen bg-yellow-600">
        <p>pokemon {params.name}</p>
      </div>
    </>
  );
}
