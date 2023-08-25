"use client"
import Image from 'next/image'

type PokemonItemProps = {
  pokemonDetails: {
    id: number
    image: string,
    name: string
    types: {
      slot: number
      type: {
        name: string
        url: string
      }
    }[]
  }
};

const typeStyles = {
  grass: {
    wrapper: "border-emerald-900/70 shadow-green-800 group-hover:shadow-green-800",
    main: "bg-green-500",
    button: "hover:text-green-900"
  },
  fire: {
    wrapper: "border-orange-900/40 shadow-orange-800 group-hover:shadow-orange-800",
    main: "bg-orange-500",
    button: "hover:text-orange-900"
  },
  water: {
    wrapper: "border-blue-900/70 shadow-blue-800 group-hover:shadow-blue-800",
    main: "bg-blue-500",
    button: "hover:text-blue-900"
  }
  // add the rest of your types here 
} as any;

export const PokemonItem = ({pokemonDetails}: PokemonItemProps) => {
  const {types} = pokemonDetails
  const typeName = types[0].type.name;
  const typeStyle = typeStyles[typeName] || {}; // add type to remove typescript error
  console.log(pokemonDetails)
  return(
    <div className="h-80">
    <div className="group relative flex justify-center transition-all ease-out duration-300">
      <Image width="256" height="256" className="absolute -top-40 w-64 left-auto z-10 origin-bottom group-hover:scale-110 transition-all ease-out duration-300" 
      src={`${pokemonDetails.image}`} 
      alt={`${pokemonDetails.name}`}/>
      <div className={`${typeStyle.wrapper} bg-[#233349] text-white relative w-full h-[17rem] group-hover:h-[19.3rem] flex flex-col items-center border-t rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all ease-out duration-300`}>
        <div className={`w-32 h-32 ${typeStyle.main} blur-[128px] group-hover:scale-125 transition-all ease-out duration-300`}></div>
          <div className="z-10 flex flex-col items-center">
            <p className="text-xl font-bold">#{pokemonDetails.id}</p>
            <p className="text-3xl font-bold mb-3 capitalize">{pokemonDetails.name}</p>
            <div className="flex gap-2 z-10">
              <p className={`px-2 py-0.5 rounded-full ${typeStyle.main} flex gap-1.5`}>
                <Image src="https://pokedex-react-carlosdancr.vercel.app/assets/grass.81f4df08.svg" width="16" height="16" alt="grass" />
                {types[0].type.name}
              </p>
              <p className="px-2 py-0.5 rounded-full bg-purple-500 flex gap-1.5">
                <Image src="https://pokedex-react-carlosdancr.vercel.app/assets/poison.ba0642b1.svg" width="16" height="16" alt="grass" />
                {types[1]?.type.name}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full px-8">
            <div className={`${typeStyle.button} w-fit mx-auto flex items-center gap-1 pl-3 pr-2 py-1 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-75 relative z-20 hover:bg-white`}>
              <button className="uppercase relative font-medium flex items-center">
                see stats
                <svg className="ml-1 rotate-45" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.0004 18C14.4186 18 18.0004 14.4183 18.0004 10C18.0004 5.58172 14.4186 2 10.0004 2C5.58209 2 2.00037 5.58172 2.00037 10C2.00037 14.4183 5.58209 18 10.0004 18ZM13.7075 9.29289L10.7075 6.29289C10.3169 5.90237 9.68378 5.90237 9.29326 6.29289L6.29326 9.29289C5.90274 9.68342 5.90274 10.3166 6.29326 10.7071C6.68378 11.0976 7.31695 11.0976 7.70747 10.7071L9.00037 9.41421L9.00037 13C9.00037 13.5523 9.44808 14 10.0004 14C10.5527 14 11.0004 13.5523 11.0004 13V9.41421L12.2933 10.7071C12.6838 11.0976 13.3169 11.0976 13.7075 10.7071C14.098 10.3166 14.098 9.68342 13.7075 9.29289Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          <div className={`h-5 w-full ${typeStyle.main} blur-[8px] scale-[6] translate-y-6`}></div>
        </div>
      </div>
    </div>
    </div>
  )
}