"use client"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PokemonItemSkeleton = ({cards}) => {
  return(
    Array(cards).fill(0).map((item, i) => 
      <SkeletonTheme baseColor="#242F3E" highlightColor="#2D3846" key={i}>
        <div className="">
          <Skeleton className="h-[19.3rem] sm:h-[17rem] rounded-2xl" style={{borderRadius: "1rem"}}/>
        </div>
      </SkeletonTheme>
    )
  )
}

export default PokemonItemSkeleton