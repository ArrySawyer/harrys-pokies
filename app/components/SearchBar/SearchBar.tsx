"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import allPokemon from "../../../json/all-pokemon.json";
import Link from "next/link";

type SearchBarProps = {
  handleScrollToSearch: () => void;
};

const SearchBar = ({ handleScrollToSearch }: SearchBarProps) => {
  const [seachValue, setSeachValue] = useState("");
  const [seachFocused, setSearchFocused] = useState(false);
  const [searchFilteredPokemon, setSearchFilteredPokemon] = useState([
    { name: "", url: "" },
  ]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const getData = setTimeout(() => {
      if (seachValue) {
        setSearchFilteredPokemon(
          allPokemon
            .filter((pokemon) => {
              return pokemon.name.indexOf(seachValue) > -1;
            })
            .slice(0, 3)
        );
        setShowSearchResults(true);
      } else {
        setShowSearchResults(false);
      }
    }, 300);
    return () => clearTimeout(getData);
  }, [seachValue]);

  const searchBoxWrapperRef = useRef<HTMLInputElement>(null);
  const searchBoxRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (searchBoxWrapperRef.current != null && searchBoxRef.current != null) {
        if (!searchBoxWrapperRef.current.contains(e.target as Node)) {
          setSearchFocused(false);
          setSeachValue("");
        } else {
          handleScrollToSearch();
          setSearchFocused(true);
          searchBoxRef.current.focus();
        }
      }
    },
    [handleScrollToSearch]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, [handleClickOutside]);

  return (
    <div className="flex flex-col items-center relative text-white">
      <div
        className={`fixed h-screen w-screen bg-black/60 backdrop-blur top-0 z-40 ${
          seachFocused ? "" : "hidden opacity-0"
        }`}
      ></div>
      <h2 className="font-medium text-4xl text-center mb-4 relative z-50">
        Have a favourite Pokemon?
      </h2>
      <div
        ref={searchBoxWrapperRef}
        className={`group relative w-full md:w-2/4 flex flex-col z-50 bg-[#233349] rounded-3xl border-2  ${
          seachFocused ? "border-white" : "border-slate-400"
        } `}
      >
        <div className="flex items-center justify-center">
          <input
            ref={searchBoxRef}
            value={seachValue}
            onChange={(event) => {
              setSeachValue(event.target.value);
            }}
            className="peer w-full pl-11 pr-4 py-2 text-lg font-medium placeholder-slate-500 bg-transparent outline-none focus-visible:placeholder-slate-500/50 placeholder:normal-case capitalize"
            placeholder="Search by name"
          />
          <svg
            className={`absolute left-3 ${
              seachFocused ? "text-white" : "text-slate-400"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.00012 9C9.00012 7.89543 9.89555 7 11.0001 7C12.1047 7 13.0001 7.89543 13.0001 9C13.0001 10.1046 12.1047 11 11.0001 11C10.4476 11 9.94893 10.7772 9.58591 10.4142C9.22289 10.0512 9.00012 9.55256 9.00012 9Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0001 18C14.4184 18 18.0001 14.4183 18.0001 10C18.0001 5.58172 14.4184 2 10.0001 2C5.58184 2 2.00012 5.58172 2.00012 10C2.00012 14.4183 5.58184 18 10.0001 18ZM11.0001 5C8.79098 5 7.00012 6.79086 7.00012 9C7.00012 9.74138 7.20242 10.4364 7.55409 11.0318L5.29302 13.2929C4.90249 13.6834 4.90249 14.3166 5.29302 14.7071C5.68354 15.0976 6.3167 15.0976 6.70723 14.7071L8.9683 12.446C9.56374 12.7977 10.2587 13 11.0001 13C13.2093 13 15.0001 11.2091 15.0001 9C15.0001 6.79086 13.2093 5 11.0001 5Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <ul
          className={`py-4 flex flex-col border-t border-slate-500 ${
            showSearchResults ? "" : "hidden"
          }`}
        >
          {searchFilteredPokemon.length ? (
            ""
          ) : (
            <p className="mx-11 text-lg font-medium">
              No Pokemon has that name stoopid!
            </p>
          )}
          {searchFilteredPokemon.map((pokemon) => (
            <li className="flex" key={pokemon.name}>
              <Link
                href={`/pokemon/${pokemon.name}`}
                className="mx-2 px-9 py-2 w-full hover:bg-[#2d4461] rounded-xl"
              >
                <span className="text-lg font-medium capitalize">
                  {pokemon.name}
                </span>
                <div className="flex items-end gap-2 text-sm text-slate-400">
                  <span>
                    <span className="font-semibold mr-1">HP</span>
                    <span className="font-normal">4</span>
                  </span>
                  <span>
                    <span className="font-semibold mr-1">Attack</span>
                    <span className="font-normal">20</span>
                  </span>
                  <span>
                    <span className="font-semibold mr-1">Defence</span>
                    <span className="font-normal">69</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
